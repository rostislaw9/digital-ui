import { TooltipPositionsDemo } from "../../demos/tooltip-positions-demo.js";
import TooltipPositionsDemoSource from "../../demos/tooltip-positions-demo.tsx?raw";
import type { ComponentMeta } from "./types.js";

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
      render: () => <TooltipPositionsDemo />,
    },
  ],
  usageImport: `import { Tooltip, TooltipTrigger, TooltipContent } from "@digital-ui/ui";`,
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
      type: '"default" | "inverted"',
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
