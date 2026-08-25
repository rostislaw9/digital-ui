import { BreadcrumbsCustomSeparatorDemo } from "../../demos/breadcrumbs-custom-separator-demo.js";
import BreadcrumbsCustomSeparatorDemoSource from "../../demos/breadcrumbs-custom-separator-demo.tsx?raw";
import { BreadcrumbsDefaultDemo } from "../../demos/breadcrumbs-default-demo.js";
import BreadcrumbsDefaultDemoSource from "../../demos/breadcrumbs-default-demo.tsx?raw";
import type { ComponentMeta } from "./types.js";

export const breadcrumbsMeta: ComponentMeta = {
  name: "breadcrumbs",
  label: "Breadcrumbs",
  description: "Navigation trail showing the user's location in a hierarchy.",
  category: "Layout",
  examples: [
    {
      title: "Default",
      description: "Home > Components > Button (current page).",
      code: BreadcrumbsDefaultDemoSource,
      render: () => <BreadcrumbsDefaultDemo />,
    },
    {
      title: "With Custom Separator",
      description: "Breadcrumbs with a custom separator character.",
      code: BreadcrumbsCustomSeparatorDemoSource,
      render: () => <BreadcrumbsCustomSeparatorDemo />,
    },
  ],
  usageImport: `import {
  Breadcrumbs,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@digital-ui/ui";`,
  usageCode: `<Breadcrumbs>
  <BreadcrumbItem>
    <BreadcrumbLink href="/">Home</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumbs>`,
  composition: [
    "Breadcrumbs",
    "└── BreadcrumbItem",
    "    ├── BreadcrumbLink",
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
  radixBased: false,
  isNew: false,
};
