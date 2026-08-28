import type { ComponentMeta } from "./types.js";

import { SelectBasicDemo } from "../../demos/select-basic-demo.js";
import SelectBasicDemoSource from "../../demos/select-basic-demo.tsx?highlighted";
import SelectBasicDemoRaw from "../../demos/select-basic-demo.tsx?raw";

export const selectMeta: ComponentMeta = {
  name: "select",
  label: "Select",
  description:
    "Select dropdown with keyboard navigation and animated open/close.",
  category: "Form",
  examples: [
    {
      title: "Basic",
      description: "Single-value select with placeholder.",
      code: SelectBasicDemoSource,
      rawCode: SelectBasicDemoRaw,
      render: () => <SelectBasicDemo />,
    },
  ],
  usageImport: `import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";`,
  usageCode: `<Select defaultValue="a">
  <SelectTrigger>Select an option</SelectTrigger>
  <SelectContent>
    <SelectItem value="a">Option A</SelectItem>
    <SelectItem value="b">Option B</SelectItem>
  </SelectContent>
</Select>`,
  composition: [
    "Select",
    "├── SelectTrigger",
    "└── SelectContent",
    "    └── SelectItem",
  ],
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
      description: "Called when the selected value changes.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Prevents interaction.",
    },
  ],
  accessibility: [
    'role="combobox" on trigger',
    "Arrow keys navigate items",
    "Type-ahead support",
    "Escape closes",
  ],
  radixBased: true,
  isNew: false,
};
