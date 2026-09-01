import type { ComponentMeta } from "./types";

import { MagneticDemo } from "../../demos/magnetic-demo";
import MagneticDemoSource from "../../demos/magnetic-demo.tsx?highlighted";
import MagneticDemoRaw from "../../demos/magnetic-demo.tsx?raw";

export const magneticMeta: ComponentMeta = {
  name: "magnetic",
  label: "Magnetic",
  description: "Spring-based cursor attraction for interactive elements.",
  category: "Motion",
  examples: [
    {
      title: "Basic",
      description: "Spring-based cursor attraction.",
      code: MagneticDemoSource,
      rawCode: MagneticDemoRaw,
      render: () => <MagneticDemo />,
    },
  ],
  usageImport: `import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";`,
  usageCode: `<Magnetic>
  <Button>Hover me</Button>
</Magnetic>`,
  props: [
    {
      name: "intensity",
      type: "number (0-1)",
      default: "0.35",
      description: "Pull strength toward cursor.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Disable the magnetic effect.",
    },
  ],
  accessibility: [
    "Purely decorative — disabled when reduced motion is active",
    "Does not interfere with keyboard navigation",
    "Wrapped element remains fully focusable",
  ],
  radixBased: false,
  isNew: false,
};
