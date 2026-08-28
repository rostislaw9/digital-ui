import type { ComponentMeta } from "./types.js";

import { StatusIndicatorSizesDemo } from "../../demos/status-indicator-sizes-demo.js";
import StatusIndicatorSizesDemoSource from "../../demos/status-indicator-sizes-demo.tsx?highlighted";
import StatusIndicatorSizesDemoRaw from "../../demos/status-indicator-sizes-demo.tsx?raw";
import { StatusIndicatorVariantsDemo } from "../../demos/status-indicator-variants-demo.js";
import StatusIndicatorVariantsDemoSource from "../../demos/status-indicator-variants-demo.tsx?highlighted";
import StatusIndicatorVariantsDemoRaw from "../../demos/status-indicator-variants-demo.tsx?raw";

export const statusIndicatorMeta: ComponentMeta = {
  name: "status-indicator",
  label: "Status Indicator",
  description:
    "Pulsing status beacon and label component for system states, presence, and live services.",
  category: "Feedback",
  examples: [
    {
      title: "Status Variants",
      description:
        "Online, busy, away, error, warning, info, and offline statuses with glowing beacons.",
      code: StatusIndicatorVariantsDemoSource,
      rawCode: StatusIndicatorVariantsDemoRaw,
      render: () => <StatusIndicatorVariantsDemo />,
    },
    {
      title: "Sizes & Standalone Beacons",
      description: "Small, medium, and large indicators alongside standalone status beacons.",
      code: StatusIndicatorSizesDemoSource,
      rawCode: StatusIndicatorSizesDemoRaw,
      render: () => <StatusIndicatorSizesDemo />,
    },
  ],
  usageImport: `import { StatusIndicator, StatusBeacon, StatusLabel } from "@/components/ui/status-indicator";`,
  usageCode: `<StatusIndicator variant="online" label="Online" />`,
  props: [
    {
      name: "variant",
      type: '"online" | "busy" | "away" | "error" | "warning" | "info" | "offline"',
      default: '"online"',
      description: "Visual status state.",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "Indicator and beacon scale.",
    },
    {
      name: "pulsing",
      type: "boolean",
      default: "true",
      description: "Enables radar pulse ping animation around active status beacons.",
    },
    {
      name: "glow",
      type: "boolean",
      default: "true",
      description: "Enables glowing aura around beacon dot.",
    },
    {
      name: "label",
      type: "string",
      default: "undefined",
      description: "Text label for accessibility and display.",
    },
  ],
  accessibility: [
    'Renders container div with role="status" and aria-label.',
    "Disables pulse animations automatically when prefers-reduced-motion is active.",
    "Uses distinct colors and text labels so status is not conveyed by color alone.",
  ],
  radixBased: false,
  isNew: true,
};
