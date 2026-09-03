/**
 * Shared manifest types and combined docs manifest.
 * Individual manifests live in components/manifest.ts and utils/manifest.ts.
 */
import type { ComponentCategory } from "./components/types";

import { componentManifest } from "./components/manifest";
import { utilManifest } from "./utils/manifest";

export type DocKind = "component" | "util";

export interface ManifestEntry {
  name: string;
  label: string;
  category: ComponentCategory;
  description: string;
  exampleCount: number;
  isNew?: boolean;
  kind?: DocKind;
}

/**
 * Combined manifest of all docs pages (components + utils), used by
 * PrevNextNav to cycle through every page.
 */
export const docsManifest: ManifestEntry[] = [
  ...componentManifest,
  ...utilManifest,
];
