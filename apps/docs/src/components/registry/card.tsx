import { CardBasicDemo } from "../../demos/card-basic-demo.js";
import CardBasicDemoSource from "../../demos/card-basic-demo.tsx?raw";
import { CardSpotlightDemo } from "../../demos/card-spotlight-demo.js";
import CardSpotlightDemoSource from "../../demos/card-spotlight-demo.tsx?raw";
import type { ComponentMeta } from "./types.js";

export const cardMeta: ComponentMeta = {
  name: "card",
  label: "Card",
  description:
    "Surface container with header, content, and footer. Elevated and interactive variants.",
  category: "Layout",
  examples: [
    {
      title: "Basic",
      description: "Standard card with header, content, and footer.",
      code: CardBasicDemoSource,
      render: () => <CardBasicDemo />,
    },
    {
      title: "With Spotlight",
      description:
        "Wrap with the Spotlight motion primitive for a pointer-following highlight.",
      code: CardSpotlightDemoSource,
      render: () => <CardSpotlightDemo />,
    },
  ],
  usageImport: `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";`,
  usageCode: `<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>`,
  composition: [
    "Card",
    "├── CardHeader",
    "│   ├── CardTitle",
    "│   └── CardDescription",
    "├── CardContent",
    "└── CardFooter",
  ],
  props: [
    {
      name: "elevated",
      type: "boolean",
      default: "false",
      description: "Uses surface-elevated + shadow for depth.",
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Render as child element on each sub-component.",
    },
  ],
  accessibility: [
    "Semantic structure via CardHeader, CardTitle, CardDescription, CardContent, CardFooter",
  ],
  radixBased: false,
  isNew: false,
};
