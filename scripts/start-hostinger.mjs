/**
 * Hostinger-friendly standalone starter.
 * Binds to 0.0.0.0 so Hostinger’s reverse proxy can reach the app,
 * and respects the PORT env Hostinger injects.
 */
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const server = path.join(root, "..", ".next", "standalone", "server.js");

process.env.HOSTNAME = process.env.HOSTNAME || "0.0.0.0";
process.env.PORT = process.env.PORT || "3000";

const child = spawn(process.execPath, [server], {
  stdio: "inherit",
  env: process.env,
});

child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 1);
});
