import { SheetBasicDemo } from "../../demos/sheet-basic-demo.js";
import SheetBasicDemoSource from "../../demos/sheet-basic-demo.tsx?raw";
import { SheetNoCloseDemo } from "../../demos/sheet-no-close-demo.js";
import SheetNoCloseDemoSource from "../../demos/sheet-no-close-demo.tsx?raw";
import { SheetSideDemo } from "../../demos/sheet-side-demo.js";
import SheetSideDemoSource from "../../demos/sheet-side-demo.tsx?raw";
import type { ComponentMeta } from "./types.js";

export const sheetMeta: ComponentMeta = {
  name: "sheet",
  label: "Sheet",
  description: "Slide-in panel with top/right/bottom/left sides.",
  category: "Overlay",
  examples: [
    {
      title: "Basic",
      description: "A right-side panel with form fields and footer actions.",
      code: SheetBasicDemoSource,
      render: () => <SheetBasicDemo />,
    },
    {
      title: "Sides",
      description: "Panels sliding from all four edges.",
      code: SheetSideDemoSource,
      render: () => <SheetSideDemo />,
    },
    {
      title: "No close button",
      description:
        "Panel without a close button — dismiss via overlay or Escape.",
      code: SheetNoCloseDemoSource,
      render: () => <SheetNoCloseDemo />,
    },
  ],
  usageImport: `import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@digital-ui/ui";`,
  usageCode: `<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
      <SheetDescription>Description</SheetDescription>
    </SheetHeader>
    <SheetFooter>
      <SheetClose>Close</SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
  composition: [
    "Sheet",
    "├── SheetTrigger",
    "└── SheetContent",
    "    ├── SheetHeader",
    "    │   ├── SheetTitle",
    "    │   └── SheetDescription",
    "    └── SheetFooter",
    "        └── SheetClose",
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
    {
      name: "side",
      type: '"top" | "right" | "bottom" | "left"',
      default: '"right"',
      description: "Which edge the sheet slides from.",
    },
    {
      name: "showCloseButton",
      type: "boolean",
      default: "true",
      description: "Whether to show the close button in the top-right corner.",
    },
  ],
  accessibility: [
    "Focus is trapped within the sheet",
    "Escape closes the sheet",
    "Screen reader announcements via Dialog primitives",
  ],
  radixBased: true,
  isNew: false,
};
