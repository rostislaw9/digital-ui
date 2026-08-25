import { ButtonIconVariantsDemo } from "../../demos/button-icon-variants-demo.js";
import ButtonIconVariantsDemoSource from "../../demos/button-icon-variants-demo.tsx?raw";
import { ButtonSizesDemo } from "../../demos/button-sizes-demo.js";
import ButtonSizesDemoSource from "../../demos/button-sizes-demo.tsx?raw";
import { ButtonStatesDemo } from "../../demos/button-states-demo.js";
import ButtonStatesDemoSource from "../../demos/button-states-demo.tsx?raw";
import { ButtonVariantsDemo } from "../../demos/button-variants-demo.js";
import ButtonVariantsDemoSource from "../../demos/button-variants-demo.tsx?raw";
import { ButtonWithIconDemo } from "../../demos/button-with-icon-demo.js";
import ButtonWithIconDemoSource from "../../demos/button-with-icon-demo.tsx?raw";
import type { ComponentMeta } from "./types.js";

export const buttonMeta: ComponentMeta = {
  name: "button",
  label: "Button",
  description:
    "Triggers an action. Eight variants, five text sizes with matching icon sizes, hover scale, accent glow on primary, focus ring. Icons with data-icon adjust padding automatically.",
  category: "Form",
  examples: [
    {
      title: "Variants",
      description:
        "All eight variants including inverted styles. Icons with data-icon adjust padding automatically.",
      code: ButtonVariantsDemoSource,
      render: () => <ButtonVariantsDemo />,
    },
    {
      title: "With Icon",
      description:
        'Remember to add data-icon="inline-start" or data-icon="inline-end" to the icon for correct spacing.',
      code: ButtonWithIconDemoSource,
      render: () => <ButtonWithIconDemo />,
    },
    {
      title: "Icon Variants",
      description: 'Icon-only buttons using size="icon". Requires aria-label.',
      code: ButtonIconVariantsDemoSource,
      render: () => <ButtonIconVariantsDemo />,
    },
    {
      title: "Sizes",
      description: "Five sizes paired with their icon equivalents.",
      code: ButtonSizesDemoSource,
      render: () => <ButtonSizesDemo />,
    },
    {
      title: "States",
      description: "Disabled state with a custom loading spinner.",
      code: ButtonStatesDemoSource,
      render: () => <ButtonStatesDemo />,
    },
  ],
  usageImport: `import { Button } from "@digital-ui/ui";`,
  usageCode: `<Button variant="primary" size="md">Click me</Button>`,
  props: [
    {
      name: "variant",
      type: '"primary" | "primary-inverted" | "secondary" | "outline" | "ghost" | "destructive" | "destructive-inverted" | "link"',
      default: '"primary"',
      description: "Visual style of the button.",
    },
    {
      name: "size",
      type: '"xs" | "sm" | "md" | "lg" | "xl" | "icon-xs" | "icon-sm" | "icon" | "icon-lg" | "icon-xl"',
      default: '"md"',
      description: "Button size. Use icon variants for icon-only buttons.",
    },
    {
      name: "noScale",
      type: "boolean",
      default: "false",
      description:
        "Disable hover/active scaling. Useful for full-width buttons.",
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Render as child element via Radix Slot.",
    },
  ],
  accessibility: [
    "Supports keyboard navigation via native button element",
    "Focus visible ring via shadow-focus token",
    "Disabled state prevents interaction and reduces opacity",
    "Icon-only buttons require an aria-label",
  ],
  radixBased: false,
  isNew: false,
};
