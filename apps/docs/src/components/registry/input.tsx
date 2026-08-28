import { InputBasicDemo } from "../../demos/input-basic-demo.js";
import InputBasicDemoSource from "../../demos/input-basic-demo.tsx?raw";
import { InputInvalidDemo } from "../../demos/input-invalid-demo.js";
import InputInvalidDemoSource from "../../demos/input-invalid-demo.tsx?raw";
import type { ComponentMeta } from "./types.js";

export const inputMeta: ComponentMeta = {
  name: "input",
  label: "Input",
  description:
    "Text input with semantic tokens. Focus uses accent ring + glow. Invalid state switches to error.",
  category: "Form",
  examples: [
    {
      title: "Basic",
      description: "Default, with placeholder, and disabled.",
      code: InputBasicDemoSource,
      render: () => <InputBasicDemo />,
    },
    {
      title: "Invalid",
      description: "Error state with red border and error glow on focus.",
      code: InputInvalidDemoSource,
      render: () => <InputInvalidDemo />,
    },
  ],
  usageImport: `import { Input } from "@/components/ui/input";`,
  usageCode: `<Input placeholder="Enter text..." />`,
  props: [
    {
      name: "invalid",
      type: "boolean",
      default: "false",
      description: "Shows error styling and sets aria-invalid.",
    },
    {
      name: "type",
      type: "string",
      default: '"text"',
      description: "Input type attribute.",
    },
    {
      name: "...props",
      type: "InputHTMLAttributes",
      description: "All standard InputHTMLAttributes.",
    },
  ],
  accessibility: [
    "aria-invalid set when invalid prop is true",
    "Focus visible ring via shadow-focus",
    "Placeholder uses foreground-subtle for sufficient contrast",
  ],
  radixBased: false,
  isNew: false,
};
