import type { ComponentMeta } from "./types.js";

import { ScrollAreaDemo } from "../../demos/scroll-area-demo.js";
import ScrollAreaDemoSource from "../../demos/scroll-area-demo.tsx?highlighted";
import ScrollAreaDemoRaw from "../../demos/scroll-area-demo.tsx?raw";

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
      rawCode: ScrollAreaDemoRaw,
      render: () => <ScrollAreaDemo />,
    },
  ],
  usageImport: `import { ScrollArea } from "@/components/ui/scroll-area";`,
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
