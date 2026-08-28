import type { ComponentMeta } from "./types.js";

import { GlowAlwaysDemo } from "../../demos/glow-always-demo.js";
import GlowAlwaysDemoSource from "../../demos/glow-always-demo.tsx?raw";
import { GlowDemo } from "../../demos/glow-demo.js";
import GlowDemoSource from "../../demos/glow-demo.tsx?raw";
import { GlowLinkDemo } from "../../demos/glow-link-demo.js";
import GlowLinkDemoSource from "../../demos/glow-link-demo.tsx?raw";
import { GlowTextDemo } from "../../demos/glow-text-demo.js";
import GlowTextDemoSource from "../../demos/glow-text-demo.tsx?raw";
import { MagneticDemo } from "../../demos/magnetic-demo.js";
import MagneticDemoSource from "../../demos/magnetic-demo.tsx?raw";
import { PulseDemo } from "../../demos/pulse-demo.js";
import PulseDemoSource from "../../demos/pulse-demo.tsx?raw";
import { PulseTextDemo } from "../../demos/pulse-text-demo.js";
import PulseTextDemoSource from "../../demos/pulse-text-demo.tsx?raw";
import { RevealDemo } from "../../demos/reveal-demo.js";
import RevealDemoSource from "../../demos/reveal-demo.tsx?raw";

export const motionMeta: ComponentMeta = {
  name: "motion",
  label: "Motion Primitives",
  description: "Magnetic, Glow, Pulse, and Reveal. Composable motion wrappers.",
  category: "Motion",
  examples: [
    {
      title: "Magnetic",
      description: "Spring-based cursor attraction.",
      code: MagneticDemoSource,
      render: () => <MagneticDemo />,
    },
    {
      title: "Glow",
      description: "State-driven accent halo on hover/focus.",
      code: GlowDemoSource,
      render: () => <GlowDemo />,
    },
    {
      title: "Glow Always",
      description: "Constant glow without hover — use for active/live states.",
      code: GlowAlwaysDemoSource,
      render: () => <GlowAlwaysDemo />,
    },
    {
      title: "Glow Link",
      description: "Link text with glow on hover.",
      code: GlowLinkDemoSource,
      render: () => <GlowLinkDemo />,
    },
    {
      title: "Glow Text",
      description: "Text-shadow glow that follows letter shapes on hover.",
      code: GlowTextDemoSource,
      render: () => <GlowTextDemo />,
    },
    {
      title: "Pulse",
      description: "Periodic accent halo for active status.",
      code: PulseDemoSource,
      render: () => <PulseDemo />,
    },
    {
      title: "Pulse Text",
      description: "Text-shadow pulse that follows individual letter shapes.",
      code: PulseTextDemoSource,
      render: () => <PulseTextDemo />,
    },
    {
      title: "Reveal",
      description: "In-view entrance animation.",
      code: RevealDemoSource,
      render: () => <RevealDemo />,
    },
  ],
  usageImport: `import { Magnetic, Glow, Pulse, Reveal } from "@/components/motion";`,
  usageCode: `<Magnetic>
  <Glow>
    <Pulse>
      <Reveal>
        <button>Content</button>
      </Reveal>
    </Pulse>
  </Glow>
</Magnetic>`,
  composition: ["Magnetic", "Glow", "Pulse", "Reveal"],
  primitives: [
    {
      name: "Spotlight",
      description:
        "Pointer-following radial highlight with proximity activation.",
      props: [
        {
          name: "intensity",
          type: "number (0-1)",
          default: "0.5",
          description: "Spotlight strength.",
        },
        {
          name: "radius",
          type: "number",
          default: "220",
          description: "Spotlight radius in pixels.",
        },
        {
          name: "proximity",
          type: "number",
          default: "0",
          description: "Distance in px before spotlight activates.",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Disable the spotlight effect.",
        },
      ],
      accessibility: [
        "Purely decorative — disabled when reduced motion is active",
        "Does not interfere with keyboard navigation",
        "Overlay is pointer-events: none",
      ],
    },
    {
      name: "Magnetic",
      description: "Spring-based cursor attraction for interactive elements.",
      props: [
        {
          name: "intensity",
          type: "number (0-1)",
          default: "0.35",
          description: "Pull strength toward cursor.",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Disable the magnetic effect.",
        },
      ],
      accessibility: [
        "Purely decorative — disabled when reduced motion is active",
        "Does not interfere with keyboard navigation",
        "Wrapped element remains fully focusable",
      ],
    },
    {
      name: "Glow",
      description:
        "State-driven accent halo on hover/focus. Supports halo and text variants.",
      props: [
        {
          name: "intensity",
          type: "number (0-1)",
          default: "motionTokens.intensity.glow",
          description: "Glow strength.",
        },
        {
          name: "variant",
          type: '"halo" | "text"',
          default: '"halo"',
          description:
            "Halo uses box-shadow, text uses text-shadow following letter shapes.",
        },
        {
          name: "color",
          type: "string",
          default: "var(--accent)",
          description: "Color override.",
        },
        {
          name: "always",
          type: "boolean",
          default: "false",
          description: "Show glow constantly, not just on hover/focus.",
        },
        {
          name: "onHover",
          type: "boolean",
          default: "true",
          description: "Trigger glow on hover.",
        },
        {
          name: "onFocus",
          type: "boolean",
          default: "true",
          description: "Trigger glow on focus-visible.",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Disable the glow entirely.",
        },
      ],
      accessibility: [
        "State signal, not motion — still visible with reduced motion",
        "Triggered on hover and focus-visible for keyboard users",
        "Does not add ARIA attributes — decorative enhancement only",
      ],
    },
    {
      name: "Pulse",
      description:
        "Periodic accent halo for active status. Supports halo and text variants.",
      props: [
        {
          name: "intensity",
          type: "number (0-1)",
          default: "motionTokens.intensity.glow",
          description: "Pulse strength.",
        },
        {
          name: "variant",
          type: '"halo" | "text"',
          default: '"halo"',
          description:
            "Halo uses box-shadow, text uses text-shadow following letter shapes.",
        },
        {
          name: "color",
          type: "string",
          default: "var(--accent)",
          description: "Color override.",
        },
        {
          name: "duration",
          type: "number",
          default: "1600",
          description: "Pulse cycle duration in ms.",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Disable the pulse.",
        },
      ],
      accessibility: [
        "Collapses to static state under reduced motion",
        "Status is communicated by color/shape, not motion",
        "Use sparingly — only for genuinely active states",
      ],
    },
    {
      name: "Reveal",
      description: "In-view entrance animation with directional offset.",
      props: [
        {
          name: "direction",
          type: '"up" | "down" | "left" | "right" | "none"',
          default: '"up"',
          description: "Direction of the reveal offset.",
        },
        {
          name: "delay",
          type: "number",
          default: "0",
          description: "Delay before animation in ms.",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Disable the reveal animation.",
        },
      ],
      accessibility: [
        "Content is always in DOM — animation is visual only",
        "Disabled when reduced motion is active",
        "Does not affect screen reader content order",
      ],
    },
  ],
  isNew: false,
};
