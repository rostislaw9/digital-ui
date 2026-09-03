import type { ManifestEntry } from "../registry/manifest";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@ionbit-ui/ui";

function docPath(entry: ManifestEntry): string {
  const section = entry.kind === "util" ? "utils" : "components";
  return `/docs/${section}/${entry.name}`;
}

export function PrevNextNav({
  prev,
  next,
}: {
  prev: ManifestEntry | null;
  next: ManifestEntry | null;
}) {
  return (
    <div className="flex items-center justify-between border-t border-border pt-6">
      {prev ? (
        <Button asChild variant="outline" size="sm">
          <Link to={docPath(prev)}>
            <ArrowLeft data-icon="inline-start" /> {prev.label}
          </Link>
        </Button>
      ) : (
        <span />
      )}
      {next ? (
        <Button asChild variant="outline" size="sm">
          <Link to={docPath(next)}>
            {next.label} <ArrowRight data-icon="inline-end" />
          </Link>
        </Button>
      ) : (
        <span />
      )}
    </div>
  );
}
