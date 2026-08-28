import type { ComponentMeta } from "./types.js";

import { DialogDemo } from "../../demos/dialog-demo.js";
import DialogDemoSource from "../../demos/dialog-demo.tsx?highlighted";
import DialogDemoRaw from "../../demos/dialog-demo.tsx?raw";

export const dialogMeta: ComponentMeta = {
  name: "dialog",
  label: "Dialog",
  description:
    "Modal dialog with focus trap, Escape to close, and backdrop blur.",
  category: "Overlay",
  examples: [
    {
      title: "Basic",
      description: "Open a dialog with title, description, and actions.",
      code: DialogDemoSource,
      rawCode: DialogDemoRaw,
      render: () => <DialogDemo />,
    },
  ],
  usageImport: `import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogAction,
} from "@/components/ui/dialog";`,
  usageCode: `<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose>Cancel</DialogClose>
      <DialogAction>Confirm</DialogAction>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
  composition: [
    "Dialog",
    "├── DialogTrigger",
    "└── DialogContent",
    "    ├── DialogHeader",
    "    │   ├── DialogTitle",
    "    │   └── DialogDescription",
    "    └── DialogFooter",
    "        ├── DialogClose",
    "        └── DialogAction",
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
      description: "Called when the open state changes.",
    },
  ],
  accessibility: [
    "Radix handles focus trapping",
    "Escape key closes dialog",
    "aria-labelledby and aria-describedby on content",
    "Scroll lock when open",
  ],
  radixBased: true,
  isNew: false,
};
