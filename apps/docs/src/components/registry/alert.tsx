import type { ComponentMeta } from "./types";

import { AlertDescriptionDemo } from "../../demos/alert-description-demo";
import AlertDescriptionDemoSource from "../../demos/alert-description-demo.tsx?highlighted";
import AlertDescriptionDemoRaw from "../../demos/alert-description-demo.tsx?raw";
import { AlertInvertedDemo } from "../../demos/alert-inverted-demo";
import AlertInvertedDemoSource from "../../demos/alert-inverted-demo.tsx?highlighted";
import AlertInvertedDemoRaw from "../../demos/alert-inverted-demo.tsx?raw";
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
      title: "Inverted",
      description:
        "Solid background with contrasting text — accent, success, warning, and error.",
      code: AlertInvertedDemoSource,
      rawCode: AlertInvertedDemoRaw,
      render: () => <AlertInvertedDemo />,
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
      type: '"default" | "accent" | "success" | "warning" | "error" | "accent-inverted" | "success-inverted" | "warning-inverted" | "error-inverted"',
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
