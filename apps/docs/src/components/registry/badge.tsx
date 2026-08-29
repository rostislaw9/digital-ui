import type { ComponentMeta } from "./types";

import { BadgeIconDemo } from "../../demos/badge-icon-demo";
import BadgeIconDemoSource from "../../demos/badge-icon-demo.tsx?highlighted";
import BadgeIconDemoRaw from "../../demos/badge-icon-demo.tsx?raw";
import { BadgeVariantsDemo } from "../../demos/badge-variants-demo";
import BadgeVariantsDemoSource from "../../demos/badge-variants-demo.tsx?highlighted";
import BadgeVariantsDemoRaw from "../../demos/badge-variants-demo.tsx?raw";

export const badgeMeta: ComponentMeta = {
  name: "badge",
  label: "Badge",
  description: "Small status indicator with semantic variants.",
  category: "Form",
  examples: [
    {
      title: "Variants",
      description:
        "Default, accent, success, warning, error, and outline badges.",
      code: BadgeVariantsDemoSource,
      rawCode: BadgeVariantsDemoRaw,
      render: () => <BadgeVariantsDemo />,
    },
    {
      title: "With Icon",
      description: "Badges paired with lucide icons.",
      code: BadgeIconDemoSource,
      rawCode: BadgeIconDemoRaw,
      render: () => <BadgeIconDemo />,
    },
  ],
  usageImport: `import { Badge } from "@/components/ui/badge";`,
  usageCode: `<Badge variant="success">Active</Badge>`,
  props: [
    {
      name: "variant",
      type: '"default" | "accent" | "success" | "warning" | "error" | "outline"',
      default: '"default"',
      description: "Visual variant of the badge.",
    },
  ],
  accessibility: [
    "Badge renders as a span with no implicit role.",
    "Use semantic variants to convey meaning, not color alone.",
    "Include an icon or text label that describes the status.",
  ],
  radixBased: false,
  isNew: false,
};
