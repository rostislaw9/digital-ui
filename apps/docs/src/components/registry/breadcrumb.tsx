import { BreadcrumbCustomSeparatorDemo } from "../../demos/breadcrumb-custom-separator-demo.js";
import BreadcrumbCustomSeparatorDemoSource from "../../demos/breadcrumb-custom-separator-demo.tsx?raw";
import { BreadcrumbDefaultDemo } from "../../demos/breadcrumb-default-demo.js";
import BreadcrumbDefaultDemoSource from "../../demos/breadcrumb-default-demo.tsx?raw";
import type { ComponentMeta } from "./types.js";

export const breadcrumbMeta: ComponentMeta = {
  name: "breadcrumb",
  label: "Breadcrumb",
  description: "Navigation trail showing the user's location in a hierarchy.",
  category: "Layout",
  examples: [
    {
      title: "Default",
      description: "Home > Components > Button (current page).",
      code: BreadcrumbDefaultDemoSource,
      render: () => <BreadcrumbDefaultDemo />,
    },
    {
      title: "With Custom Separator",
      description: "Breadcrumb with a custom separator character.",
      code: BreadcrumbCustomSeparatorDemoSource,
      render: () => <BreadcrumbCustomSeparatorDemo />,
    },
  ],
  usageImport: `import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";`,
  usageCode: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
  composition: [
    "Breadcrumb",
    "└── BreadcrumbList",
    "    ├── BreadcrumbItem",
    "    │   ├── BreadcrumbLink",
    "    │   └── BreadcrumbPage",
    "    └── BreadcrumbSeparator",
  ],
  props: [
    {
      name: "aria-label",
      type: "string",
      default: '"breadcrumb"',
      description: "Accessible label for the breadcrumb navigation.",
    },
    {
      name: "BreadcrumbLink.asChild",
      type: "boolean",
      default: "false",
      description: "Render as child element (e.g. a router Link).",
    },
    {
      name: "BreadcrumbLink.href",
      type: "string",
      description: "URL for the link.",
    },
    {
      name: "BreadcrumbPage.aria-current",
      type: "string",
      default: '"page"',
      description: "Marks the current page.",
    },
    {
      name: "BreadcrumbSeparator.children",
      type: "ReactNode",
      description: "Custom separator content.",
    },
  ],
  accessibility: [
    'Nav element has aria-label="breadcrumb".',
    "BreadcrumbList uses an ordered list (ol) as recommended by WAI-ARIA.",
    'BreadcrumbPage sets aria-current="page" on the current page.',
    'BreadcrumbSeparator has role="presentation".',
  ],
  radixBased: true,
  isNew: false,
};
