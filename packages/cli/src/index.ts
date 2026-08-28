import { Command } from "commander";

import { add } from "./commands/add.js";
import { init } from "./commands/init.js";
import { list } from "./commands/list.js";

const program = new Command();

program
  .name("ionbit-ui")
  .description(
    "IonBit UI CLI — install source-owned components from the IonBit UI registry.",
  )
  .version("0.0.1");

program
  .command("init")
  .description(
    "Initialize IonBit UI in your project. Creates a ionbit-ui.config.json and installs design tokens.",
  )
  .option("-y, --yes", "Skip prompts and use defaults")
  .option(
    "--pointer",
    "Add cursor: pointer CSS for buttons (Tailwind v4 defaults to cursor: default)",
  )
  .action(init);

program
  .command("add <components...>")
  .description(
    "Add components to your project. e.g. ionbit-ui add button card accordion",
  )
  .option("-o, --overwrite", "Overwrite existing files")
  .action(add);

program
  .command("list")
  .description("List all available components in the registry.")
  .action(list);

program.parse();
