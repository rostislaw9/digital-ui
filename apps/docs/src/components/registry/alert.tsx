import { AlertDescriptionDemo } from "../../demos/alert-description-demo.js";
import AlertDescriptionDemoSource from "../../demos/alert-description-demo.tsx?raw";
import { AlertVariantsDemo } from "../../demos/alert-variants-demo.js";
import AlertVariantsDemoSource from "../../demos/alert-variants-demo.tsx?raw";
import type { ComponentMeta } from "./types.js";

export const alertMeta: ComponentMeta = {
  name: "alert",
  label: "Alert",
  description: "Callout for surfacing status messages with semantic variants.",
  category: "Feedback",
  examples: [
    {
      title: "Variants",
      description:
        "Default, accent, success, warning, and error alerts with icons and titles.",
      code: AlertVariantsDemoSource,
      render: () => <AlertVariantsDemo />,
    },
    {
      title: "With Description",
      description: "Alert with a title and description body.",
      code: AlertDescriptionDemoSource,
      render: () => <AlertDescriptionDemo />,
    },
  ],
  usageImport: `import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@/components/ui/alert";`,
  usageCode: `<Alert variant="success">
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Your changes have been saved.</AlertDescription>
</Alert>`,
  composition: ["Alert", "├── AlertTitle", "└── AlertDescription"],
  props: [
    {
      name: "variant",
      type: '"default" | "accent" | "success" | "warning" | "error"',
      default: '"default"',
      description: "Visual variant of the alert.",
    },
  ],
  accessibility: [
    'Error and warning variants set role="alert" automatically.',
    'Default, accent, and success variants set role="status".',
    "Role can be overridden via the role prop.",
  ],
  radixBased: false,
  isNew: false,
};
