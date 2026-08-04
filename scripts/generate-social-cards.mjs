import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const cards = [
  {
    slug: "nostalgia-ultra",
    title: "NOSTALGIA, ULTRA",
    year: "2011",
    background: "#c32620",
    foreground: "#f8f5e9",
    accent: "#090908",
  },
  {
    slug: "channel-orange",
    title: "CHANNEL ORANGE",
    year: "2012",
    background: "#ff6b18",
    foreground: "#090908",
    accent: "#f8f5e9",
  },
  {
    slug: "endless",
    title: "ENDLESS",
    year: "2016",
    background: "#f8f5e9",
    foreground: "#090908",
    accent: "#8bcfe6",
  },
  {
    slug: "blonde",
    title: "BLONDE",
    year: "2016",
    background: "#f0eddf",
    foreground: "#090908",
    accent: "#b7f34a",
  },
  {
    slug: "singles",
    title: "SIGNALS AFTER BLONDE",
    year: "2017—2020",
    background: "#090908",
    foreground: "#f8f5e9",
    accent: "#8bcfe6",
  },
];

const outputDirectory = path.resolve("public/social");
await fs.mkdir(outputDirectory, { recursive: true });

for (const card of cards) {
  const titleSize = card.title.length > 18 ? 78 : 104;
  const svg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="${card.background}"/>
      <rect x="54" y="50" width="14" height="530" fill="${card.accent}"/>
      <text x="104" y="112" fill="${card.foreground}" font-family="Arial, Helvetica, sans-serif" font-size="25" font-weight="700" letter-spacing="5">BLONDED VISUAL ARCHIVE / EDITION 02</text>
      <text x="104" y="352" fill="${card.foreground}" font-family="Arial, Helvetica, sans-serif" font-size="${titleSize}" font-weight="900" letter-spacing="-4">${card.title}</text>
      <text x="104" y="438" fill="${card.foreground}" font-family="Georgia, serif" font-size="46" font-style="italic">An era record / Un registro de era</text>
      <text x="104" y="548" fill="${card.foreground}" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" letter-spacing="4">${card.year}  ·  FRANK OCEAN</text>
      <circle cx="1090" cy="522" r="42" fill="none" stroke="${card.foreground}" stroke-width="3"/>
      <path d="M1073 522h34M1090 505v34" stroke="${card.foreground}" stroke-width="3"/>
    </svg>`;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90, chromaSubsampling: "4:4:4" })
    .toFile(path.join(outputDirectory, `${card.slug}-og.jpg`));
}

console.log(`Generated ${cards.length} social cards in ${outputDirectory}`);
