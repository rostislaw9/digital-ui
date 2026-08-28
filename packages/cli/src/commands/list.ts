import chalk from "chalk";

import { fetchRegistry } from "../utils/registry.js";

export async function list(): Promise<void> {
  const registry = await fetchRegistry();

  const groups: Record<string, typeof registry.items> = {};

  for (const item of registry.items) {
    const category = item.type.replace("registry:", "");
    if (!groups[category]) groups[category] = [];
    groups[category].push(item);
  }

  const categoryOrder = ["lib", "base", "ui"];
  const sortedCategories = Object.keys(groups).sort((a, b) => {
    const ai = categoryOrder.indexOf(a);
    const bi = categoryOrder.indexOf(b);
    if (ai !== -1 && bi !== -1) return ai - bi;
    if (ai !== -1) return -1;
    if (bi !== -1) return 1;
    return a.localeCompare(b);
  });

  for (const category of sortedCategories) {
    const items = groups[category];
    if (!items) continue;
    const label =
      category === "lib"
        ? "Libraries"
        : category === "base"
          ? "Foundation"
          : "Components";

    console.log(chalk.bold(`\n${label}`));

    for (const item of items) {
      const deps = item.dependencies?.length
        ? chalk.dim(` (${item.dependencies.length} deps)`)
        : "";
      console.log(`  ${chalk.cyan(item.name.padEnd(18))} ${item.title}${deps}`);
    }
  }

  console.log("");
  console.log(chalk.dim(`Total: ${registry.items.length} items`));
  console.log(chalk.dim(`Install with: digital-ui add <name>`));
  console.log("");
}
