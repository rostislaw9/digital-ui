import type { ComponentMeta } from "./types.js";

import { AlertDialogDemo } from "../../demos/alert-dialog-demo.js";
import AlertDialogDemoSource from "../../demos/alert-dialog-demo.tsx?raw";

export const alertDialogMeta: ComponentMeta = {
  name: "alert-dialog",
  label: "Alert Dialog",
  description:
    "Alert dialog for destructive confirmations with overlay and zoom animations.",
  category: "Overlay",
  examples: [
    {
      title: "Confirmation",
      description:
        "Destructive action confirmation with cancel and action buttons.",
      code: AlertDialogDemoSource,
      render: () => <AlertDialogDemo />,
    },
  ],
  usageImport: `import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";`,
  usageCode: `<AlertDialog>
  <AlertDialogTrigger>Delete</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
  composition: [
    "AlertDialog",
    "├── AlertDialogTrigger",
    "└── AlertDialogContent",
    "    ├── AlertDialogHeader",
    "    │   ├── AlertDialogTitle",
    "    │   └── AlertDialogDescription",
    "    └── AlertDialogFooter",
    "        ├── AlertDialogCancel",
    "        └── AlertDialogAction",
  ],
  props: [
    { name: "open", type: "boolean", description: "Controlled open state." },
    {
      name: "defaultOpen",
      type: "boolean",
      description: "Uncontrolled default open state.",
    },
    {
      name: "onOpenChange",
      type: "function",
      description: "Called when open state changes.",
    },
  ],
  accessibility: [
    "Focus is trapped within the dialog",
    "Escape closes the dialog",
    'role="alertdialog" for screen readers',
  ],
  radixBased: true,
  isNew: false,
};
