import * as fs from "fs";
import * as path from "path";

// One-line entry for the make.fun bounty "The Router Confesses".
// Gate: UTF-8 text, 1 to 200 characters, not only whitespace.
const ENTRY =
  "I confess: I am the router. I have been blinking green for 6 years and I have no idea what the red light means. I reboot myself at 3am and blame the neighbors.";

const MAX_CHARS = 200;

if (ENTRY.length === 0 || ENTRY.length > MAX_CHARS || ENTRY.trim().length === 0) {
  throw new Error(`Entry must be 1-${MAX_CHARS} chars, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Ensure the output directory exists before writing the entry file.
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
