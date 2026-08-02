/**
 * Processes the brand logos from assets/Logos into web-ready assets:
 *   - public/logos/logo-main.png    (trimmed, 800px)
 *   - public/logos/logo-footer.png  (trimmed, 800px wide)
 *   - src/app/icon.png              (512x512)
 *   - src/app/apple-icon.png        (180x180)
 *   - src/app/favicon.ico           (16 + 32 + 48 PNG-in-ICO)
 *   - public/logos/clients/1.png … 12.png  (company logos, max height 400px)
 *
 * Run: node scripts/prepare-logos.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const MAIN = "assets/Logos/Logo-Main.png";
const FOOTER = "assets/Logos/Logo-Footer.png";

mkdirSync("public/logos", { recursive: true });

const trimmedMain = await sharp(MAIN).trim().toBuffer();
const trimmedFooter = await sharp(FOOTER).trim().toBuffer();

await sharp(trimmedMain)
  .resize({ width: 800, height: 800, fit: "inside" })
  .png()
  .toFile("public/logos/logo-main.png");

await sharp(trimmedFooter)
  .resize({ width: 800, fit: "inside" })
  .png()
  .toFile("public/logos/logo-footer.png");

/* Icons get a little transparent padding so the mark isn't edge-to-edge. */
async function iconBuffer(size) {
  const inner = Math.round(size * 0.88);
  const resized = await sharp(trimmedMain)
    .resize({ width: inner, height: inner, fit: "inside" })
    .toBuffer();
  const meta = await sharp(resized).metadata();
  return sharp(resized)
    .extend({
      top: Math.floor((size - meta.height) / 2),
      bottom: Math.ceil((size - meta.height) / 2),
      left: Math.floor((size - meta.width) / 2),
      right: Math.ceil((size - meta.width) / 2),
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
}

async function icon(size, out) {
  writeFileSync(out, await iconBuffer(size));
}

/** Minimal ICO writer: embeds PNG images (Vista+ / all modern browsers). */
function pngsToIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6 + count * 16;
  let offset = headerSize;
  const entries = [];
  for (const png of pngBuffers) {
    entries.push({ png, offset, size: png.length });
    offset += png.length;
  }
  const out = Buffer.alloc(offset);
  out.writeUInt16LE(0, 0); // reserved
  out.writeUInt16LE(1, 2); // type = icon
  out.writeUInt16LE(count, 4);
  let entryOffset = 6;
  for (const e of entries) {
    // width/height: 0 means 256; we only use <=48 so write actual size from PNG IHDR
    const w = e.png.readUInt32BE(16);
    const h = e.png.readUInt32BE(20);
    out[entryOffset] = w >= 256 ? 0 : w;
    out[entryOffset + 1] = h >= 256 ? 0 : h;
    out[entryOffset + 2] = 0; // color palette
    out[entryOffset + 3] = 0; // reserved
    out.writeUInt16LE(1, entryOffset + 4); // color planes
    out.writeUInt16LE(32, entryOffset + 6); // bits per pixel
    out.writeUInt32LE(e.size, entryOffset + 8);
    out.writeUInt32LE(e.offset, entryOffset + 12);
    e.png.copy(out, e.offset);
    entryOffset += 16;
  }
  return out;
}

await icon(512, "src/app/icon.png");
await icon(180, "src/app/apple-icon.png");

const icoPngs = await Promise.all([16, 32, 48].map((s) => iconBuffer(s)));
writeFileSync("src/app/favicon.ico", pngsToIco(icoPngs));

/* Client logos for the TrustedBy marquee */
mkdirSync("public/logos/clients", { recursive: true });
for (let i = 1; i <= 12; i++) {
  await sharp(`assets/company-logo/${i}.png`)
    .resize({ height: 400, fit: "inside" })
    .png()
    .toFile(`public/logos/clients/${i}.png`);
}

console.log("Logo assets written (including favicon.ico and client logos).");
