#!/usr/bin/env node
/*
 * Builds individual registry item JSON files from registry.json.
 *
 * Each output file (registry/items/{name}.json) contains the full registry
 * item with file contents embedded, ready to be served via a URL endpoint
 * or fetched directly from the GitHub repo.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const registry = JSON.parse(
  readFileSync(resolve(root, "registry.json"), "utf-8"),
);

const outDir = resolve(root, "registry", "items");
mkdirSync(outDir, { recursive: true });

for (const item of registry.items) {
  const itemWithContent = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: item.name,
    type: item.type,
    title: item.title,
    description: item.description,
    dependencies: item.dependencies ?? [],
    devDependencies: item.devDependencies ?? [],
    registryDependencies: item.registryDependencies ?? [],
    files: [],
  };

  for (const file of item.files) {
    const content = readFileSync(resolve(root, file.path), "utf-8");
    itemWithContent.files.push({
      path: file.target ?? file.path,
      type: file.type,
      content,
    });
  }

  const outPath = resolve(outDir, `${item.name}.json`);
  writeFileSync(outPath, JSON.stringify(itemWithContent, null, 2) + "\n");
  console.log(`  → registry/items/${item.name}.json`);
}

console.log(`\nBuilt ${registry.items.length} registry items.`);
