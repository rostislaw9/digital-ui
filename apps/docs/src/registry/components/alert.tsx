import type { ComponentMeta } from "./types";

import { AlertDescriptionDemo } from "../../demos/alert-description-demo";
import AlertDescriptionDemoSource from "../../demos/alert-description-demo.tsx?highlighted";
import AlertDescriptionDemoRaw from "../../demos/alert-description-demo.tsx?raw";
import { AlertSoftDemo } from "../../demos/alert-soft-demo";
import AlertSoftDemoSource from "../../demos/alert-soft-demo.tsx?highlighted";
import AlertSoftDemoRaw from "../../demos/alert-soft-demo.tsx?raw";
import { AlertVariantsDemo } from "../../demos/alert-variants-demo";
import AlertVariantsDemoSource from "../../demos/alert-variants-demo.tsx?highlighted";
import AlertVariantsDemoRaw from "../../demos/alert-variants-demo.tsx?raw";

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
      rawCode: AlertVariantsDemoRaw,
      render: () => <AlertVariantsDemo />,
    },
    {
      title: "Soft",
      description:
        "Solid background with contrasting text — accent, success, warning, and error.",
      code: AlertSoftDemoSource,
      rawCode: AlertSoftDemoRaw,
      render: () => <AlertSoftDemo />,
    },
    {
      title: "With Description",
      description: "Alert with a title and description body.",
      code: AlertDescriptionDemoSource,
      rawCode: AlertDescriptionDemoRaw,
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
      type: '"default" | "accent" | "success" | "warning" | "error" | "accent-soft" | "success-soft" | "warning-soft" | "error-soft"',
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
