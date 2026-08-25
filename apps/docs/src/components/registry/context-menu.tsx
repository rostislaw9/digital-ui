import { ContextMenuDemo } from "../../demos/context-menu-demo.js";
import ContextMenuDemoSource from "../../demos/context-menu-demo.tsx?raw";
import type { ComponentMeta } from "./types.js";

export const contextMenuMeta: ComponentMeta = {
  name: "context-menu",
  label: "Context Menu",
  description: "Right-click context menu with items, labels, and separators.",
  category: "Overlay",
  examples: [
    {
      title: "Basic",
      description: "Right-click to open a context menu with actions.",
      code: ContextMenuDemoSource,
      render: () => <ContextMenuDemo />,
    },
  ],
  usageImport: `import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
} from "@digital-ui/ui";`,
  usageCode: `<ContextMenu>
  <ContextMenuTrigger>Right-click me</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Copy</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
  composition: [
    "ContextMenu",
    "├── ContextMenuTrigger",
    "└── ContextMenuContent",
    "    ├── ContextMenuItem",
    "    ├── ContextMenuSeparator",
    "    └── ContextMenuSub",
    "        ├── ContextMenuSubTrigger",
    "        └── ContextMenuSubContent",
  ],
  props: [
    {
      name: "onOpenChange",
      type: "function",
      description: "Called when menu opens/closes.",
    },
    {
      name: "modal",
      type: "boolean",
      default: "true",
      description: "Whether menu is modal.",
    },
  ],
  accessibility: [
    "Radix manages ARIA menu roles",
    "Arrow keys navigate items",
    "Escape closes the menu",
  ],
  radixBased: true,
  isNew: false,
};
