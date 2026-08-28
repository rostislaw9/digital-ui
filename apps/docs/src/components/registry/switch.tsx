import { SwitchDemo } from "../../demos/switch-demo.js";
import SwitchDemoSource from "../../demos/switch-demo.tsx?raw";
import type { ComponentMeta } from "./types.js";

export const switchMeta: ComponentMeta = {
  name: "switch",
  label: "Switch",
  description: "Toggle switch with accent color when checked.",
  category: "Form",
  examples: [
    {
      title: "Basic",
      description: "Controlled switch with state display.",
      code: SwitchDemoSource,
      render: () => <SwitchDemo />,
    },
  ],
  usageImport: `import { Switch } from "@/components/ui/switch";`,
  usageCode: `<Switch checked />`,
  props: [
    {
      name: "checked",
      type: "boolean",
      description: "Controlled checked state.",
    },
    {
      name: "defaultChecked",
      type: "boolean",
      description: "Uncontrolled default checked state.",
    },
    {
      name: "onCheckedChange",
      type: "function",
      description: "Called when the checked state changes.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Prevents interaction.",
    },
  ],
  accessibility: [
    'role="switch" with aria-checked',
    "Keyboard toggle via Space",
    "Focus visible ring",
  ],
  radixBased: true,
  isNew: false,
};
