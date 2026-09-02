import type { ComponentManifestEntry } from "../registry/manifest";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@ionbit-ui/ui";

export function PrevNextNav({
  prev,
  next,
}: {
  prev: ComponentManifestEntry | null;
  next: ComponentManifestEntry | null;
}) {
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
