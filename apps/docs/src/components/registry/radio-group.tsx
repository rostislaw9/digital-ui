import { RadioGroupBasicDemo } from "../../demos/radio-group-basic-demo.js";
import RadioGroupBasicDemoSource from "../../demos/radio-group-basic-demo.tsx?raw";
import type { ComponentMeta } from "./types.js";

export const radioGroupMeta: ComponentMeta = {
  name: "radio-group",
  label: "Radio Group",
  description: "Radio group with circular indicators and accent fill.",
  category: "Form",
  examples: [
    {
      title: "Basic",
      description: "Vertical radio group with labels.",
      code: RadioGroupBasicDemoSource,
      render: () => <RadioGroupBasicDemo />,
    },
  ],
  usageImport: `import {
  RadioGroup,
  RadioGroupItem,
  Label,
} from "@/components/ui/radio-group";`,
  usageCode: `<RadioGroup defaultValue="a">
  <RadioGroupItem value="a" id="r1" />
  <Label htmlFor="r1">Option A</Label>
</RadioGroup>`,
  composition: ["RadioGroup", "├── RadioGroupItem", "└── Label"],
  props: [
    {
      name: "value",
      type: "string",
      description: "Controlled selected value.",
    },
    {
      name: "defaultValue",
      type: "string",
      description: "Uncontrolled default value.",
    },
    {
      name: "onValueChange",
      type: "function",
      description: "Called when selection changes.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables all items.",
    },
    {
      name: "orientation",
      type: '"horizontal" | "vertical"',
      default: '"vertical"',
      description: "Layout direction.",
    },
  ],
  accessibility: [
    "Radix manages ARIA radio roles and keyboard navigation",
    "Arrow keys move between options",
  ],
  radixBased: true,
  isNew: false,
};
