import type { Config, RegistryItem } from "../config.js";

import chalk from "chalk";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { relative, resolve } from "node:path";

import { CONFIG_FILE, DEFAULT_CONFIG } from "../config.js";
import { resolveTargetPath, saveConfig, writeFile } from "../utils/fs.js";
import { installNpmDeps } from "../utils/npm.js";
import { fetchRegistryItems } from "../utils/registry.js";

const CURSOR_CSS = `@layer base {
  button:not(:disabled),
  [role="button"]:not(:disabled) {
    cursor: pointer;
  }
}`;

/** Items that every project needs — installed automatically during init. */
const BASE_ITEMS = ["cn", "tokens"];

export async function init(options: {
  yes?: boolean;
  pointer?: boolean;
}): Promise<void> {
  const cwd = process.cwd();
  const configPath = resolve(cwd, CONFIG_FILE);

  if (existsSync(configPath) && !options.yes) {
    console.log(
      chalk.yellow(
        `${CONFIG_FILE} already exists. Use --overwrite to reinitialize.`,
      ),
    );
    return;
  }

  const config: Config = { ...DEFAULT_CONFIG };

  saveConfig(config, cwd);
  console.log(chalk.green(`✓ Created ${CONFIG_FILE}`));

  // Create directory structure
  const dirs = [
    config.aliases.components,
    config.aliases.motion,
    config.aliases.lib,
    config.aliases.styles,
  ];

  for (const dir of dirs) {
    const dirPath = resolve(cwd, dir);
    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, { recursive: true });
      console.log(chalk.dim(`  Created ${dir}/`));
    }
  }

  // Install base items (cn utility + design tokens)
  console.log(chalk.dim("Installing base items (cn, tokens)..."));
  const items = await fetchRegistryItems(BASE_ITEMS);
  for (const item of items) {
    installBaseItem(item, config, cwd);
  }

  // Add token CSS imports to the user's stylesheet
  setupCssImports(config, cwd);

  // Collect and install npm dependencies for base items
  const npmDeps = new Set<string>();
  for (const item of items) {
    for (const dep of item.dependencies ?? []) {
      npmDeps.add(dep);
    }
  }
  installNpmDeps([...npmDeps], cwd);

  // Optionally add cursor: pointer CSS
  if (options.pointer) {
    const cssPath = resolve(cwd, config.tailwind.css);
    if (existsSync(cssPath)) {
      const existing = readFileSync(cssPath, "utf-8");
      if (!existing.includes("cursor: pointer")) {
        writeFileSync(cssPath, existing + "\n" + CURSOR_CSS);
        console.log(
          chalk.green(`✓ Added cursor: pointer to ${config.tailwind.css}`),
        );
      } else {
        console.log(
          chalk.dim(
            `  ${config.tailwind.css} already has cursor: pointer — skipping`,
          ),
        );
      }
    } else {
      writeFileSync(cssPath, CURSOR_CSS);
      console.log(
        chalk.green(`✓ Created ${config.tailwind.css} with cursor: pointer`),
      );
    }
  }

  console.log("");
  console.log(chalk.bold("Digital UI initialized!"));
  console.log("");
  console.log(chalk.dim("Next steps:"));
  console.log(`  ${chalk.cyan("digital-ui add button")}    — add a component`);
  console.log(
    `  ${chalk.cyan("digital-ui list")}          — browse available components`,
  );
  console.log("");
}

function installBaseItem(
  item: RegistryItem,
  config: Config,
  cwd: string,
): void {
  for (const file of item.files) {
    const targetPath = resolveTargetPath(file.path, config, cwd);
    if (existsSync(targetPath)) {
      console.log(chalk.dim(`  ⚠ ${file.path} already exists — skipping`));
      continue;
    }
    writeFile(targetPath, file.content);
    console.log(chalk.green(`  ✓ ${file.path}`));
  }
}

function setupCssImports(config: Config, cwd: string): void {
  const cssPath = resolve(cwd, config.tailwind.css);
  const stylesDir = config.aliases.styles;

  // Build the import lines relative to the CSS file's directory
  const tokensImport = `@import "./${relativePath(cssPath, resolve(cwd, stylesDir, "tokens.css"))}";`;
  const baseImport = `@import "./${relativePath(cssPath, resolve(cwd, stylesDir, "base.css"))}";`;

  if (!existsSync(cssPath)) {
    // Create the CSS file with token imports
    const content = `@import "tailwindcss";\n\n${tokensImport}\n${baseImport}\n`;
    writeFileSync(cssPath, content);
    console.log(
      chalk.green(`✓ Created ${config.tailwind.css} with token imports`),
    );
    return;
  }

  const existing = readFileSync(cssPath, "utf-8");
  const lines: string[] = [];

  if (!existing.includes("tokens.css")) {
    lines.push(tokensImport);
  }
  if (!existing.includes("base.css")) {
    lines.push(baseImport);
  }

  if (lines.length > 0) {
    // Add imports after @import "tailwindcss" if present, otherwise at the top
    let updated: string;
    if (existing.includes('@import "tailwindcss"')) {
      updated = existing.replace(
        /(@import\s+"tailwindcss"[^\n]*)/,
        `$1\n${lines.join("\n")}`,
      );
    } else {
      updated = lines.join("\n") + "\n" + existing;
    }
    writeFileSync(cssPath, updated);
    console.log(chalk.green(`✓ Added token imports to ${config.tailwind.css}`));
  } else {
    console.log(
      chalk.dim(
        `  ${config.tailwind.css} already has token imports — skipping`,
      ),
    );
  }
}

function relativePath(from: string, to: string): string {
  let rel = relative(from, to).replace(/\\/g, "/");
  // Remove the leading "../" if the CSS file is in the same or parent directory
  if (rel.startsWith("../")) rel = rel.slice(3);
  return rel;
}
