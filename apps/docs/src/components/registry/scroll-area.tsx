import { ScrollAreaDemo } from "../../demos/scroll-area-demo.js";
import ScrollAreaDemoSource from "../../demos/scroll-area-demo.tsx?raw";
import type { ComponentMeta } from "./types.js";

export const scrollAreaMeta: ComponentMeta = {
  name: "scroll-area",
  label: "Scroll Area",
  description: "Scroll area with custom styled scrollbars.",
  category: "Layout",
  examples: [
    {
      title: "Basic",
      description: "Custom scrollbar styling for a scrollable list.",
      code: ScrollAreaDemoSource,
      render: () => <ScrollAreaDemo />,
    },
  ],
  usageImport: `import { ScrollArea } from "@digital-ui/ui";`,
  usageCode: `<ScrollArea className="h-72 w-48">
  <div>Long content...</div>
</ScrollArea>`,
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional classes for the root.",
    },
  ],
  accessibility: [
    "Radix preserves native scroll behavior",
    "Keyboard scrollable",
  ],
  radixBased: true,
  isNew: false,
};
