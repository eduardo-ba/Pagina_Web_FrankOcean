#!/usr/bin/env node
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const roots = [
  path.join(ROOT, "public", "imagenes"),
  path.join(ROOT, "src", "assets"),
];
const allowed = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
  ".gif",
  ".svg",
]);
const rows = [];

async function walk(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch (error) {
    if (error?.code === "ENOENT") return;
    throw error;
  }

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();
    if (!allowed.has(extension)) continue;
    const info = await stat(full);
    rows.push({
      file: path.relative(ROOT, full),
      extension,
      bytes: info.size,
    });
  }
}

for (const root of roots) await walk(root);

if (rows.length === 0) {
  console.log("No se encontraron imágenes en public/imagenes ni src/assets.");
  process.exit(0);
}

rows.sort((a, b) => b.bytes - a.bytes);
console.log("\nInventario de imágenes — Blonded Visual Archive\n");
for (const row of rows) {
  const kb = (row.bytes / 1024).toFixed(1).padStart(8);
  const warning = row.bytes > 1_200_000 ? "  ⚠ >1.2 MB" : "";
  console.log(`${kb} KB  ${row.file}${warning}`);
}

const total = rows.reduce((sum, row) => sum + row.bytes, 0);
console.log(
  `\n${rows.length} imágenes · ${(total / 1024 / 1024).toFixed(2)} MB totales`,
);

const invalidNames = rows.filter(({ file }) =>
  /[A-Z\s]/.test(path.basename(file)),
);
if (invalidNames.length) {
  console.log("\nNombres a normalizar (usar minúsculas y guiones):");
  for (const row of invalidNames) console.log(`- ${row.file}`);
}
