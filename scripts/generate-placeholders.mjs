/**
 * Generates solid-color PNG placeholder images (palette colors from
 * colour-theme.md) for every image path referenced in the site, so
 * next/image has real files to serve until final assets are supplied.
 * Zero dependencies — writes PNGs directly using node:zlib.
 *
 * Run: node scripts/generate-placeholders.mjs
 */
import { deflateSync } from "node:zlib";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const CRC_TABLE = new Int32Array(256).map((_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c;
});

function crc32(buf) {
  let c = 0xffffffff;
  for (const b of buf) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

function solidPng(width, height, [r, g, b]) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type: truecolor
  const row = Buffer.concat([Buffer.from([0]), Buffer.alloc(width * 3)]);
  for (let x = 0; x < width; x++) {
    row[1 + x * 3] = r;
    row[2 + x * 3] = g;
    row[3 + x * 3] = b;
  }
  const raw = Buffer.concat(Array.from({ length: height }, () => row));
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

// Palette from colour-theme.md
const espresso = [0x1a, 0x12, 0x10];
const crimson = [0x8c, 0x1f, 0x1f];
const sand = [0xc9, 0xb8, 0x96];
const taupe = [0x8a, 0x7b, 0x6b];

const images = [
  ["public/images/hero-bg.png", 1920, 1080, espresso],
  ["public/images/about-studio.png", 1200, 900, sand],
  ["public/images/pricing-band.png", 1200, 900, crimson],
  ["public/images/values-sustainability.png", 1000, 750, sand],
  ["public/images/values-innovation.png", 1000, 750, taupe],
  ["public/images/values-human-centricity.png", 1000, 750, crimson],
  ["public/images/og-default.png", 1200, 630, crimson],
  ["public/images/portfolio/the-art-of-digital-storytelling.png", 1600, 1000, crimson],
  ["public/images/portfolio/telling-stories-that-matter.png", 1600, 1000, espresso],
  ["public/images/portfolio/redefining-creativity.png", 1600, 1000, taupe],
  ["public/images/portfolio/marketing-with-emotion.png", 1600, 1000, sand],
  ["public/images/portfolio/creativity-without-borders.png", 1600, 1000, crimson],
  ["public/images/blog/design-without-limits.png", 1200, 800, sand],
  ["public/images/blog/visual-storytelling.png", 1200, 800, crimson],
  ["public/images/blog/investing-in-design.png", 1200, 800, taupe],
  ["public/images/blog/questions-for-designer.png", 1200, 800, espresso],
  ["public/images/team-placeholder.png", 800, 900, taupe],
];

for (const [path, w, h, color] of images) {
  const full = join(process.cwd(), path);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, solidPng(w, h, color));
  console.log(`wrote ${path} (${w}x${h})`);
}
