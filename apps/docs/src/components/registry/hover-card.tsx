import { HoverCardDemo } from "../../demos/hover-card-demo.js";
import HoverCardDemoSource from "../../demos/hover-card-demo.tsx?raw";
import type { ComponentMeta } from "./types.js";

export const hoverCardMeta: ComponentMeta = {
  name: "hover-card",
  label: "Hover Card",
  description: "Hover card with delayed open/close and zoom animation.",
  category: "Overlay",
  examples: [
    {
      title: "Basic",
      description: "Preview content on hover with a delay.",
      code: HoverCardDemoSource,
      render: () => <HoverCardDemo />,
    },
  ],
  usageImport: `import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";`,
  usageCode: `<HoverCard>
  <HoverCardTrigger>Hover me</HoverCardTrigger>
  <HoverCardContent>Preview content</HoverCardContent>
</HoverCard>`,
  composition: ["HoverCard", "├── HoverCardTrigger", "└── HoverCardContent"],
  props: [
    { name: "open", type: "boolean", description: "Controlled open state." },
    {
      name: "onOpenChange",
      type: "function",
      description: "Called when open state changes.",
    },
    {
      name: "openDelay",
      type: "number",
      default: "200",
      description: "Delay before opening (ms).",
    },
    {
      name: "closeDelay",
      type: "number",
      default: "300",
      description: "Delay before closing (ms).",
    },
  ],
  accessibility: [
    "Radix manages ARIA attributes",
    "Keyboard accessible via focus",
  ],
  radixBased: true,
  isNew: false,
};
