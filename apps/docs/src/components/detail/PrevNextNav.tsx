import { Link } from "react-router-dom";
import type { ComponentMeta } from "../registry.js";

export function PrevNextNav({
  current,
  registry,
}: {
  current: ComponentMeta;
  registry: ComponentMeta[];
}) {
  const idx = registry.findIndex((c) => c.name === current.name);
  const prev = idx > 0 ? registry[idx - 1] : null;
  const next = idx < registry.length - 1 ? registry[idx + 1] : null;

  return (
    <div className="flex items-center justify-between border-t border-border pt-6">
      {prev ? (
        <Link to={`/components/${prev.name}`} className="flex flex-col">
          <span className="text-xs text-foreground-subtle">Previous</span>
          <span className="text-sm text-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
            ← {prev.label}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          to={`/components/${next.name}`}
          className="flex flex-col items-end"
        >
          <span className="text-xs text-foreground-subtle">Next</span>
          <span className="text-sm text-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
            {next.label} →
          </span>
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
