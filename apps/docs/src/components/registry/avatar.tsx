import type { ComponentMeta } from "./types";

import { AvatarFallbackDemo } from "../../demos/avatar-fallback-demo";
import AvatarFallbackDemoSource from "../../demos/avatar-fallback-demo.tsx?highlighted";
import AvatarFallbackDemoRaw from "../../demos/avatar-fallback-demo.tsx?raw";
import { AvatarSizesDemo } from "../../demos/avatar-sizes-demo";
import AvatarSizesDemoSource from "../../demos/avatar-sizes-demo.tsx?highlighted";
import AvatarSizesDemoRaw from "../../demos/avatar-sizes-demo.tsx?raw";
import { AvatarStatusDemo } from "../../demos/avatar-status-demo";
import AvatarStatusDemoSource from "../../demos/avatar-status-demo.tsx?highlighted";
import AvatarStatusDemoRaw from "../../demos/avatar-status-demo.tsx?raw";

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
      rawCode: AvatarFallbackDemoRaw,
      render: () => <AvatarFallbackDemo />,
    },
    {
      title: "Sizes",
      description: "Avatars in different sizes via className.",
      code: AvatarSizesDemoSource,
      rawCode: AvatarSizesDemoRaw,
      render: () => <AvatarSizesDemo />,
    },
    {
      title: "Status Indicators",
      description:
        "Presence indicators with online, offline, busy, and away variants.",
      code: AvatarStatusDemoSource,
      rawCode: AvatarStatusDemoRaw,
      render: () => <AvatarStatusDemo />,
    },
  ],
  usageImport: `import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarStatus,
} from "@/components/ui/avatar";`,
  usageCode: `<Avatar>
  <AvatarImage src="/avatar.jpg" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
  <AvatarStatus variant="online" position="bottom-right" />
</Avatar>`,
  composition: [
    "Avatar",
    "├── AvatarImage",
    "├── AvatarFallback",
    "└── AvatarStatus",
  ],
  props: [
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "Avatar size.",
    },
    {
      name: "AvatarStatus.variant",
      type: '"online" | "offline" | "busy" | "away"',
      default: '"online"',
      description: "Status indicator color.",
    },
    {
      name: "AvatarStatus.position",
      type: '"top-left" | "top-right" | "bottom-left" | "bottom-right"',
      default: '"bottom-right"',
      description: "Position of the status indicator.",
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
