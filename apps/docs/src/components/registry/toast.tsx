import type { ComponentMeta } from "./types.js";

import { ToastDemo } from "../../demos/toast-demo.js";
import ToastDemoSource from "../../demos/toast-demo.tsx?highlighted";
import ToastDemoRaw from "../../demos/toast-demo.tsx?raw";
import { ToastPositionsDemo } from "../../demos/toast-positions-demo.js";
import ToastPositionsDemoSource from "../../demos/toast-positions-demo.tsx?highlighted";
import ToastPositionsDemoRaw from "../../demos/toast-positions-demo.tsx?raw";

export const toastMeta: ComponentMeta = {
  name: "toast",
  label: "Toast",
  description:
    "Toast notifications with smooth stacking, swipe to dismiss, and five variants.",
  about: (
    <>
      Built on{" "}
      <a
        href="https://sonner.emilkowal.ski"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:underline"
      >
        Sonner
      </a>{" "}
      by{" "}
      <a
        href="https://twitter.com/emilkowalski"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:underline"
      >
        Emil Kowalski
      </a>
      .
    </>
  ),
  category: "Feedback",
  examples: [
    {
      title: "Variants",
      description: "Default, info, success, warning, and error toasts.",
      code: ToastDemoSource,
      rawCode: ToastDemoRaw,
      render: () => <ToastDemo />,
    },
    {
      title: "Positions",
      description:
        "Position each toast individually — top-left, top-center, top-right, bottom-left, bottom-center, bottom-right.",
      code: ToastPositionsDemoSource,
      rawCode: ToastPositionsDemoRaw,
      render: () => <ToastPositionsDemo />,
    },
  ],
  usageImport: `import { toast } from "@/components/ui/toast";`,
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
