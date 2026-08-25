import { ToastDemo } from "../../demos/toast-demo.js";
import ToastDemoSource from "../../demos/toast-demo.tsx?raw";
import { ToastPositionsDemo } from "../../demos/toast-positions-demo.js";
import ToastPositionsDemoSource from "../../demos/toast-positions-demo.tsx?raw";
import type { ComponentMeta } from "./types.js";

export const toastMeta: ComponentMeta = {
  name: "toast",
  label: "Toast",
  description:
    "Toast notifications with smooth stacking, swipe to dismiss, and five variants.",
  category: "Feedback",
  examples: [
    {
      title: "Variants",
      description: "Default, info, success, warning, and error toasts.",
      code: ToastDemoSource,
      render: () => <ToastDemo />,
    },
    {
      title: "Positions",
      description:
        "Position each toast individually — top-left, top-center, top-right, bottom-left, bottom-center, bottom-right.",
      code: ToastPositionsDemoSource,
      render: () => <ToastPositionsDemo />,
    },
  ],
  usageImport: `import { toast } from "@digital-ui/ui";`,
  usageCode: `toast("Settings saved", { variant: "success" });`,
  props: [
    {
      name: "position",
      type: '"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',
      description: "Toast position.",
    },
    {
      name: "richColors",
      type: "boolean",
      default: "false",
      description: "Use rich color variants.",
    },
  ],
  accessibility: [
    'aria-live="polite" for announcements',
    "Screen readers read toast content",
  ],
  radixBased: false,
  isNew: false,
};
