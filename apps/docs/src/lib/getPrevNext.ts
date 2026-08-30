import type { ComponentManifestEntry } from "../components/registry/manifest";

export function getPrevNext(
  current: { name: string },
  registry: ComponentManifestEntry[],
): {
  prev: ComponentManifestEntry | null;
  next: ComponentManifestEntry | null;
} {
  const idx = registry.findIndex((c) => c.name === current.name);
  const prev = idx > 0 ? (registry[idx - 1] ?? null) : null;
  const next = idx < registry.length - 1 ? (registry[idx + 1] ?? null) : null;
  return { prev, next };
}
