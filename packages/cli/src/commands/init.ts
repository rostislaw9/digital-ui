import chalk from "chalk";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import type { Config } from "../config.js";
import { CONFIG_FILE, DEFAULT_CONFIG } from "../config.js";
import { saveConfig } from "../utils/fs.js";

export async function init(options: { yes?: boolean }): Promise<void> {
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
      console.log(chalk.dim(`  Created ${dir}/`));
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
  console.log(
    `  ${chalk.cyan("digital-ui add tokens cn")} — install tokens & utilities`,
  );
  console.log("");
}
