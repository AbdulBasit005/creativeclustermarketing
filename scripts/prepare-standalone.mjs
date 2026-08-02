/**
 * After `next build` with output: 'standalone', copy public/ and
 * .next/static into .next/standalone so Hostinger/VPS can run
 * `node .next/standalone/server.js` with assets included.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const standalone = path.join(root, ".next", "standalone");

function copyDir(from, to) {
  if (!fs.existsSync(from)) {
    console.warn(`[prepare-standalone] skip missing: ${from}`);
    return;
  }
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.cpSync(from, to, { recursive: true });
  console.log(`[prepare-standalone] copied → ${path.relative(root, to)}`);
}

if (!fs.existsSync(standalone)) {
  console.warn(
    "[prepare-standalone] .next/standalone not found — run next build first."
  );
  process.exit(0);
}

copyDir(path.join(root, "public"), path.join(standalone, "public"));
copyDir(
  path.join(root, ".next", "static"),
  path.join(standalone, ".next", "static")
);
