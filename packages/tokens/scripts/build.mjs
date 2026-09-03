// Simple CSS build: minify src CSS files to dist using lightningcss.
// Files with Tailwind v4 at-rules (@utility, @theme, @variant, etc.)
// are copied as-is since lightningcss cannot process them.
import { transform } from "lightningcss";
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const src = resolve(root, "src");
const dist = resolve(root, "dist");

// Tailwind v4 at-rules that lightningcss doesn't understand.
const TAILWIND_AT_RULES = /@utility|@theme|@variant|@custom-variant|@slot/;

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

const files = await readdir(src);
for (const file of files) {
  if (!file.endsWith(".css")) continue;
  const input = await readFile(join(src, file), "utf-8");

  if (TAILWIND_AT_RULES.test(input)) {
    // Copy as-is — must be processed by the Tailwind engine.
    await writeFile(join(dist, file), input);
    continue;
  }

  const { code } = transform({
    filename: file,
    code: Buffer.from(input),
    minify: true,
  });
  await writeFile(join(dist, file), code);
}

console.log("@ionbit-ui/tokens built -> dist/");
