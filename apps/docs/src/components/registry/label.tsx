import { LabelDefaultDemo } from "../../demos/label-default-demo.js";
import LabelDefaultDemoSource from "../../demos/label-default-demo.tsx?raw";
import { LabelDisabledDemo } from "../../demos/label-disabled-demo.js";
import LabelDisabledDemoSource from "../../demos/label-disabled-demo.tsx?raw";
import type { ComponentMeta } from "./types.js";

export const labelMeta: ComponentMeta = {
  name: "label",
  label: "Label",
  description: "Form label with htmlFor association.",
  category: "Form",
  examples: [
    {
      title: "Default",
      description: "A Label associated with an Input via htmlFor.",
      code: LabelDefaultDemoSource,
      render: () => <LabelDefaultDemo />,
    },
    {
      title: "With Disabled",
      description: "Label dims when the peer control is disabled.",
      code: LabelDisabledDemoSource,
      render: () => <LabelDisabledDemo />,
    },
  ],
  usageImport: `import { Label } from "@digital-ui/ui";`,
  usageCode: `<Label htmlFor="email">Email</Label>`,
  props: [
    {
      name: "htmlFor",
      type: "string",
      description: "Associates the label with a form control.",
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Render as child element.",
    },
  ],
  accessibility: [
    "Clicking the label focuses the associated control via htmlFor.",
    "Applies disabled styling when the peer control is disabled.",
  ],
  radixBased: true,
  isNew: false,
};
