// Copies the tokens CSS files into the CLI package dist so the
// `ionbit-ui` npm package can ship CSS that consumers import:
//   @import "ionbit-ui/tailwind.css";
//
// This mirrors shadcn's pattern where the CLI package also exports CSS.
import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const cliDist = resolve(__dirname, "..", "dist");
const tokensSrc = resolve(__dirname, "..", "..", "tokens", "src");

await mkdir(cliDist, { recursive: true });

const files = ["tailwind.css", "tokens.css", "base.css", "utilities.css"];
for (const file of files) {
  await copyFile(join(tokensSrc, file), join(cliDist, file));
  console.log(`  copied ${file} -> dist/${file}`);
}

console.log("ionbit-ui CSS copied -> dist/");
