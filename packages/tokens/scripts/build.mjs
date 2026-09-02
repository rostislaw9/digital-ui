// Simple CSS build: minify src CSS files to dist using lightningcss.
import { transform } from "lightningcss";
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const src = resolve(root, "src");
const dist = resolve(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

const files = await readdir(src);
for (const file of files) {
  if (!file.endsWith(".css")) continue;
  const input = await readFile(join(src, file), "utf-8");
  const { code } = transform({
    filename: file,
    code: Buffer.from(input),
    minify: true,
  });
  await writeFile(join(dist, file), code);
}

console.log("@ionbit-ui/tokens built -> dist/ (minified)");
