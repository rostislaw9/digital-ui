import type { ComponentMeta } from "./types.js";

import { SpotlightBasicDemo } from "../../demos/spotlight-basic-demo.js";
import SpotlightBasicDemoSource from "../../demos/spotlight-basic-demo.tsx?raw";
import { SpotlightProximityDemo } from "../../demos/spotlight-proximity-demo.js";
import SpotlightProximityDemoSource from "../../demos/spotlight-proximity-demo.tsx?raw";

export const spotlightMeta: ComponentMeta = {
  name: "spotlight",
  label: "Spotlight",
  description:
    "Pointer-following radial highlight for surfaces. Activates before the cursor reaches the element via a proximity threshold.",
  category: "Motion",
  examples: [
    {
      title: "Basic",
      description:
        "Wrap any surface to add a radial highlight that follows the cursor. The effect starts 20px before the pointer enters.",
      code: SpotlightBasicDemoSource,
      render: () => <SpotlightBasicDemo />,
    },
    {
      title: "Proximity",
      description:
        "Control how far before the cursor reaches the element the effect activates.",
      code: SpotlightProximityDemoSource,
      render: () => <SpotlightProximityDemo />,
    },
  ],
  usageImport: `import { Spotlight } from "@/components/motion/spotlight";`,
  usageCode: `<Spotlight intensity={0.5} radius={220}>
  <div className="surface">Hover me</div>
</Spotlight>`,
  props: [
    {
      name: "intensity",
      type: "number",
      default: "0.5",
      description: "Highlight intensity (0-1).",
    },
    {
      name: "radius",
      type: "number",
      default: "220",
      description: "Radius of the radial highlight.",
    },
    {
      name: "proximity",
      type: "number",
      default: "0",
      description: "Distance before cursor reaches element to activate.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables the effect.",
    },
  ],
  accessibility: [
    "Purely decorative — disabled when reduced motion is active",
    "Does not interfere with keyboard navigation",
  ],
  radixBased: false,
  isNew: false,
};
