import type { ComponentMeta } from "./types.js";

import { SkeletonBasicDemo } from "../../demos/skeleton-basic-demo.js";
import SkeletonBasicDemoSource from "../../demos/skeleton-basic-demo.tsx?raw";

export const skeletonMeta: ComponentMeta = {
  name: "skeleton",
  label: "Skeleton",
  description: "Loading placeholder with pulse animation.",
  category: "Feedback",
  examples: [
    {
      title: "Profile card",
      description:
        "A loading profile card with avatar, title, subtitle, and text lines.",
      code: SkeletonBasicDemoSource,
      render: () => <SkeletonBasicDemo />,
    },
  ],
  usageImport: `import { Skeleton } from "@/components/ui/skeleton";`,
  usageCode: `<Skeleton className="h-4 w-full" />`,
  props: [
    {
      name: "className",
      type: "string",
      description: 'Controls sizing, e.g. "h-4 w-full".',
    },
  ],
  accessibility: [
    "Decorative — add aria-label or aria-busy on parent for screen readers",
  ],
  radixBased: false,
  isNew: false,
};
