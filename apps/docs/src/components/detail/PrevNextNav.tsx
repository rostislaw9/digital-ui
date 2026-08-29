import type { ComponentMeta } from "../registry.js";

import { Link } from "react-router-dom";

import { Button } from "@ionbit-ui/ui";

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
        <div className="flex flex-col items-start gap-1">
          <span className="text-xs text-foreground-subtle">Previous</span>
          <Button asChild variant="link" size="sm" className="h-auto p-0">
            <Link to={`/components/${prev.name}`}>← {prev.label}</Link>
          </Button>
        </div>
      ) : (
        <span />
      )}
      {next ? (
        <div className="flex flex-col items-end gap-1">
          <span className="text-xs text-foreground-subtle">Next</span>
          <Button asChild variant="link" size="sm" className="h-auto p-0">
            <Link to={`/components/${next.name}`}>{next.label} →</Link>
          </Button>
        </div>
      ) : (
        <span />
      )}
    </div>
  );
}
