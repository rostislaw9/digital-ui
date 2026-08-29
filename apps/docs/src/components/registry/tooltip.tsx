import type { ComponentMeta } from "./types";

import { TooltipPositionsDemo } from "../../demos/tooltip-positions-demo";
import TooltipPositionsDemoSource from "../../demos/tooltip-positions-demo.tsx?highlighted";
import TooltipPositionsDemoRaw from "../../demos/tooltip-positions-demo.tsx?raw";

export const tooltipMeta: ComponentMeta = {
  name: "tooltip",
  label: "Tooltip",
  description:
    "Tooltip with directional slide-in on appearance, fade-out on dismiss, and keyboard accessibility.",
  category: "Overlay",
  examples: [
    {
      title: "Positions",
      description: "Top, bottom, left and right positions.",
      code: TooltipPositionsDemoSource,
      rawCode: TooltipPositionsDemoRaw,
      render: () => <TooltipPositionsDemo />,
    },
  ],
  usageImport: `import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";`,
  usageCode: `<Tooltip>
  <TooltipTrigger>Hover me</TooltipTrigger>
  <TooltipContent>Tooltip text</TooltipContent>
</Tooltip>`,
  composition: ["Tooltip", "├── TooltipTrigger", "└── TooltipContent"],
  props: [
    {
      name: "side",
      type: '"top" | "right" | "bottom" | "left"',
      default: '"top"',
      description: "Side the tooltip appears on.",
    },
    {
      name: "delay",
      type: "number",
      default: "300",
      description: "Delay before showing in ms.",
    },
    {
      name: "variant",
      type: '"default"',
      default: '"default"',
      description: "Visual variant.",
    },
  ],
  accessibility: [
    "Radix handles ARIA attributes (aria-describedby)",
    "Keyboard focus triggers tooltip",
    "Screen readers announce content",
  ],
  radixBased: true,
  isNew: false,
};
