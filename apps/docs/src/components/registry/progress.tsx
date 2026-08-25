import { ProgressDemo } from "../../demos/progress-demo.js";
import ProgressDemoSource from "../../demos/progress-demo.tsx?raw";
import type { ComponentMeta } from "./types.js";

export const progressMeta: ComponentMeta = {
  name: "progress",
  label: "Progress",
  description: "Progress bar with transform-based indicator.",
  category: "Feedback",
  examples: [
    {
      title: "Basic",
      description: "Adjustable progress value.",
      code: ProgressDemoSource,
      render: () => <ProgressDemo />,
    },
  ],
  usageImport: `import { Progress } from "@digital-ui/ui";`,
  usageCode: `<Progress value={60} />`,
  props: [
    {
      name: "value",
      type: "number",
      description: "Current progress value (0-100).",
    },
    {
      name: "max",
      type: "number",
      default: "100",
      description: "Maximum value.",
    },
  ],
  accessibility: [
    'role="progressbar" with aria-valuenow/min/max',
    "Screen readers announce progress",
  ],
  radixBased: true,
  isNew: false,
};
