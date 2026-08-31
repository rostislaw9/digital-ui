import type { ComponentMeta } from "./types";

import { CommandDemo } from "../../demos/command-demo";
import CommandDemoSource from "../../demos/command-demo.tsx?highlighted";
import CommandDemoRaw from "../../demos/command-demo.tsx?raw";

export const commandMeta: ComponentMeta = {
  name: "command",
  label: "Command Palette",
  description: "Cmd+k command palette with search input, groups, and items.",
  about: (
    <>
      Built on{" "}
      <a
        href="https://github.com/pacocoursey/cmdk"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:underline"
      >
        cmdk
      </a>{" "}
      by{" "}
      <a
        href="https://paco.sh"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:underline"
      >
        Paco Coursey
      </a>
      .
    </>
  ),
  category: "Overlay",
  examples: [
    {
      title: "Basic",
      description: "Command palette with search, grouped items, and actions.",
      code: CommandDemoSource,
      rawCode: CommandDemoRaw,
      render: () => <CommandDemo />,
    },
  ],
  usageImport: `import {
  Command,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandEmpty,
} from "@/components/ui/command";`,
  usageCode: `<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results.</CommandEmpty>
    <CommandGroup heading="Actions">
      <CommandItem>Action 1</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
  composition: [
    "Command",
    "├── CommandInput",
    "└── CommandList",
    "    ├── CommandGroup",
    "    │   └── CommandItem",
    "    └── CommandEmpty",
  ],
  props: [
    { name: "open", type: "boolean", description: "Controlled open state." },
    {
      name: "onOpenChange",
      type: "function",
      description: "Called when open state changes.",
    },
  ],
  accessibility: [
    "Screen reader title and description",
    "Keyboard navigable items",
    "Escape closes the palette",
  ],
  radixBased: true,
  isNew: false,
};
