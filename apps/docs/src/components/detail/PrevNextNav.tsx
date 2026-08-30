import type { ComponentManifestEntry } from "../registry/manifest";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@ionbit-ui/ui";

import { getPrevNext } from "../../lib/getPrevNext";

export function PrevNextNav({
  current,
  registry,
}: {
  current: { name: string };
  registry: ComponentManifestEntry[];
}) {
  const { prev, next } = getPrevNext(current, registry);

  return (
    <div className="flex items-center justify-between border-t border-border pt-6">
      {prev ? (
        <Button asChild variant="outline" size="sm">
          <Link to={`/components/${prev.name}`}>
            <ArrowLeft data-icon="inline-start" /> {prev.label}
          </Link>
        </Button>
      ) : (
        <span />
      )}
      {next ? (
        <Button asChild variant="outline" size="sm">
          <Link to={`/components/${next.name}`}>
            {next.label} <ArrowRight data-icon="inline-end" />
          </Link>
        </Button>
      ) : (
        <span />
      )}
    </div>
  );
}
