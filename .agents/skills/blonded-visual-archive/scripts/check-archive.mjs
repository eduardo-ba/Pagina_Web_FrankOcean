#!/usr/bin/env node
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const SOURCE_ROOT = path.join(ROOT, "src");
const errors = [];
const warnings = [];
const sourceFiles = [];

async function walk(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch (error) {
    if (error?.code === "ENOENT") {
      errors.push(`No existe ${path.relative(ROOT, dir)}`);
      return;
    }
    throw error;
  }

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else if (/\.(astro|css|ts|js|md)$/.test(entry.name)) sourceFiles.push(full);
  }
}

await walk(SOURCE_ROOT);

let allSource = "";
for (const file of sourceFiles) {
  const content = await readFile(file, "utf8");
  allSource += `\n${content}`;

  if (file.endsWith(".astro")) {
    const imgTags = content.match(/<img\b[\s\S]*?>/g) ?? [];
    for (const tag of imgTags) {
      if (!/\balt\s*=/.test(tag)) {
        errors.push(`${path.relative(ROOT, file)} contiene <img> sin alt.`);
      }
    }

    const remoteImages = imgTags.filter((tag) =>
      /src\s*=\s*["']https?:\/\//.test(tag),
    );
    if (remoteImages.length) {
      errors.push(
        `${path.relative(ROOT, file)} contiene imágenes remotas/hotlinks.`,
      );
    }
  }
}

if (/franksmind/i.test(allSource)) {
  errors.push(
    "Todavía existe branding ‘Franksmind’ dentro de src/. Sustituir por Blonded Visual Archive.",
  );
}

if (!/Blonded Visual Archive/i.test(allSource)) {
  errors.push(
    "No se encontró la marca ‘Blonded Visual Archive’ dentro de src/.",
  );
}

if (!/prefers-reduced-motion/.test(allSource)) {
  errors.push("No se encontró soporte para prefers-reduced-motion.");
}

if (!/skip-link/.test(allSource)) {
  warnings.push(
    "No se encontró la clase skip-link; comprobar que siga existiendo un salto al contenido.",
  );
}

if (/border-radius:\s*(1[2-9]|[2-9]\d)px/.test(allSource)) {
  warnings.push(
    "Se detectaron radios grandes; revisar que no regresen tarjetas de apariencia SaaS.",
  );
}

if (/https?:\/\/[^"')\s]+\.(?:jpg|jpeg|png|webp|avif)/i.test(allSource)) {
  errors.push("Se detectó una URL directa a imagen remota.");
}

console.log("\nBlonded Visual Archive — revisión estática\n");
for (const warning of warnings) console.log(`WARN  ${warning}`);
for (const error of errors) console.log(`ERROR ${error}`);

if (errors.length) {
  console.log(
    `\nResultado: ${errors.length} error(es), ${warnings.length} advertencia(s).`,
  );
  process.exit(1);
}

console.log(
  `Resultado: OK${warnings.length ? ` con ${warnings.length} advertencia(s)` : ""}.`,
);
