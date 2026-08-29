import type { ComponentMeta } from "../components/registry";

export function getPrevNext(
  current: ComponentMeta,
  registry: ComponentMeta[],
): { prev: ComponentMeta | null; next: ComponentMeta | null } {
  const idx = registry.findIndex((c) => c.name === current.name);
  const prev = idx > 0 ? (registry[idx - 1] ?? null) : null;
  const next = idx < registry.length - 1 ? (registry[idx + 1] ?? null) : null;
  return { prev, next };
}
