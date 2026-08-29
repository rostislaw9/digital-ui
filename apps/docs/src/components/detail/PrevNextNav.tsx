import type { ComponentMeta } from "../registry.js";

import { Link } from "react-router-dom";

import { Button } from "@ionbit-ui/ui";

import { getPrevNext } from "../../lib/getPrevNext.js";

export function PrevNextNav({
  current,
  registry,
}: {
  current: ComponentMeta;
  registry: ComponentMeta[];
}) {
  const { prev, next } = getPrevNext(current, registry);

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
