import type { Config, RegistryItem } from "../config.js";

import chalk from "chalk";
import { existsSync } from "node:fs";

import { loadConfig, resolveTargetPath, writeFile } from "../utils/fs.js";
import { installNpmDeps } from "../utils/npm.js";
import { fetchRegistry, fetchRegistryItems } from "../utils/registry.js";

export async function add(
  components: string[],
  options: { overwrite?: boolean },
): Promise<void> {
  const cwd = process.cwd();
  const config = loadConfig(cwd);

  if (!config) {
    console.log(
      chalk.red(
        "No digital-ui.config.json found. Run `digital-ui init` first.",
      ),
    );
    process.exit(1);
  }

  // Fetch the full registry to resolve names and dependencies
  const registry = await fetchRegistry();
  const allNames = new Set(registry.items.map((i) => i.name));

  // Validate requested components
  for (const name of components) {
    if (!allNames.has(name)) {
      console.log(
        chalk.red(
          `Component "${name}" not found in registry. Run \`digital-ui list\` to see available components.`,
        ),
      );
      process.exit(1);
    }
  }

  // Resolve transitive registry dependencies
  const toInstall = resolveDependencies(components, registry.items);

  console.log(chalk.dim(`Installing ${toInstall.length} item(s)...`));
  console.log("");

  // Fetch all items with embedded content
  const items = await fetchRegistryItems(toInstall);

  for (const item of items) {
    await installItem(item, config, cwd, options.overwrite ?? false);
  }

  // Collect and install npm dependencies
  const npmDeps = new Set<string>();
  for (const item of items) {
    for (const dep of item.dependencies ?? []) {
      npmDeps.add(dep);
    }
  }

  if (npmDeps.size > 0) {
    console.log("");
    installNpmDeps([...npmDeps], cwd);
  }

  console.log("");
  console.log(chalk.green(`✓ Added ${items.length} component(s).`));
}

function resolveDependencies(
  names: string[],
  allItems: { name: string; registryDependencies?: string[] }[],
): string[] {
  const resolved = new Set<string>();
  const queue = [...names];

  while (queue.length > 0) {
    const name = queue.shift()!;
    if (resolved.has(name)) continue;
    resolved.add(name);

    const item = allItems.find((i) => i.name === name);
    if (item?.registryDependencies) {
      for (const dep of item.registryDependencies) {
        if (!resolved.has(dep)) queue.push(dep);
      }
    }
  }

  return [...resolved];
}

async function installItem(
  item: RegistryItem,
  config: Config,
  cwd: string,
  overwrite: boolean,
): Promise<void> {
  for (const file of item.files) {
    const targetPath = resolveTargetPath(file.path, config, cwd);

    if (existsSync(targetPath) && !overwrite) {
      console.log(
        chalk.yellow(
          `  ⚠ ${file.path} already exists — skipping (use --overwrite)`,
        ),
      );
      continue;
    }

    writeFile(targetPath, file.content);
    console.log(chalk.green(`  ✓ ${file.path}`));
  }
}
