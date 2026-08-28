import type { ReactNode } from "react";

export interface ComponentExample {
  title: string;
  description: string;
  /** Pre-highlighted HTML from Shiki (build-time via ?highlighted import). */
  code: string;
  /** Raw source code for the copy button. */
  rawCode: string;
  render: () => ReactNode;
}

export interface PropMeta {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export interface PrimitiveMeta {
  name: string;
  description: string;
  props: PropMeta[];
  accessibility: string[];
}

export interface ComponentMeta {
  name: string;
  label: string;
  description: string;
  category:
    "Form" | "Layout" | "Overlay" | "Feedback" | "Navigation" | "Motion";
  examples: ComponentExample[];
  /** Props table for the API reference section. */
  props?: PropMeta[];
  /** Accessibility notes. */
  accessibility?: string[];
  /** Whether this component is built on Radix UI. */
  radixBased?: boolean;
  /** Attribution / "About" note shown above installation (e.g. upstream author). */
  about?: ReactNode;
  /** For grouped entries (e.g. motion): per-primitive API + accessibility. */
  primitives?: PrimitiveMeta[];
  /** Whether this component is newly added (shows a "New" badge). */
  isNew?: boolean;
  /** Import statement for the Usage section. */
  usageImport?: string;
  /** JSX usage example for the Usage section. */
  usageCode?: string;
  /** Component tree diagram for the Composition section. */
  composition?: string[];
  /** Whether to show the Cursor section (Tailwind v4 cursor: pointer guidance). */
  cursor?: boolean;
}
