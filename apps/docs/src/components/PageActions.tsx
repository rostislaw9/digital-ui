import type { ManifestEntry } from "../registry/manifest";

import { Check, ChevronLeft, ChevronRight, Copy } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@ionbit-ui/ui";

function docPath(entry: ManifestEntry): string {
  const section = entry.kind === "util" ? "utils" : "components";
  return `/docs/${section}/${entry.name}`;
}

export interface PageActionsProps {
  prev: ManifestEntry | null;
  next: ManifestEntry | null;
  pageCopied?: boolean;
  onCopyPage?: () => void;
}

export function PageActions({
  prev,
  next,
  pageCopied,
  onCopyPage,
}: PageActionsProps) {
  return (
    <>
      {onCopyPage && (
        <Button
          variant="outline"
          size="sm"
          onClick={onCopyPage}
          aria-label={pageCopied ? "Copied" : "Copy page as markdown"}
        >
          {pageCopied ? (
            <Check data-icon="inline-start" />
          ) : (
            <Copy data-icon="inline-start" />
          )}
          {pageCopied ? "Copied" : "Copy Page"}
        </Button>
      )}
      <Button
        asChild={!!prev}
        variant="outline"
        size="icon-sm"
        disabled={!prev}
        aria-label={prev ? `Previous: ${prev.label}` : "No previous page"}
      >
        {prev ? (
          <Link to={docPath(prev)}>
            <ChevronLeft />
          </Link>
        ) : (
          <ChevronLeft />
        )}
      </Button>
      <Button
        asChild={!!next}
        variant="outline"
        size="icon-sm"
        disabled={!next}
        aria-label={next ? `Next: ${next.label}` : "No next page"}
      >
        {next ? (
          <Link to={docPath(next)}>
            <ChevronRight />
          </Link>
        ) : (
          <ChevronRight />
        )}
      </Button>
    </>
  );
}
