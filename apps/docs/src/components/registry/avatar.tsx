import type { ComponentMeta } from "./types.js";

import { AvatarFallbackDemo } from "../../demos/avatar-fallback-demo.js";
import AvatarFallbackDemoSource from "../../demos/avatar-fallback-demo.tsx?raw";
import { AvatarSizesDemo } from "../../demos/avatar-sizes-demo.js";
import AvatarSizesDemoSource from "../../demos/avatar-sizes-demo.tsx?raw";
import { AvatarStatusDemo } from "../../demos/avatar-status-demo.js";
import AvatarStatusDemoSource from "../../demos/avatar-status-demo.tsx?raw";

export const avatarMeta: ComponentMeta = {
  name: "avatar",
  label: "Avatar",
  description: "Avatar with image and fallback support.",
  category: "Feedback",
  examples: [
    {
      title: "With Fallback",
      description: "Shows a fallback (initials) when the image fails to load.",
      code: AvatarFallbackDemoSource,
      render: () => <AvatarFallbackDemo />,
    },
    {
      title: "Sizes",
      description: "Avatars in different sizes via className.",
      code: AvatarSizesDemoSource,
      render: () => <AvatarSizesDemo />,
    },
    {
      title: "Status Indicators",
      description:
        "Presence indicators with online, offline, busy, and away variants.",
      code: AvatarStatusDemoSource,
      render: () => <AvatarStatusDemo />,
    },
  ],
  usageImport: `import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";`,
  usageCode: `<Avatar>
  <AvatarImage src="/avatar.jpg" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`,
  composition: ["Avatar", "├── AvatarImage", "└── AvatarFallback"],
  props: [
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Render as child element.",
    },
    {
      name: "variant",
      type: '"online" | "offline" | "busy" | "away"',
      default: '"online"',
      description: "Status indicator color (AvatarStatus).",
    },
    {
      name: "position",
      type: '"top-left" | "top-right" | "bottom-left" | "bottom-right"',
      default: '"bottom-right"',
      description: "Position of the status indicator (AvatarStatus).",
    },
  ],
  accessibility: [
    "Avatar root renders as a span.",
    "Fallback is shown when the image fails to load or while loading.",
    "Provide meaningful alt text on AvatarImage for screen readers.",
    'AvatarStatus has role="img" — provide an aria-label for screen readers.',
  ],
  radixBased: true,
  isNew: false,
};
