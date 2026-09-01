import type { ComponentManifestEntry } from "../registry/manifest";

import { Check, ChevronLeft, ChevronRight, Copy } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@ionbit-ui/ui";

export interface PageActionsProps {
  prev: ComponentManifestEntry | null;
  next: ComponentManifestEntry | null;
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
        aria-label={prev ? `Previous: ${prev.label}` : "No previous component"}
      >
        {prev ? (
          <Link to={`/components/${prev.name}`}>
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
        aria-label={next ? `Next: ${next.label}` : "No next component"}
      >
        {next ? (
          <Link to={`/components/${next.name}`}>
            <ChevronRight />
          </Link>
        ) : (
          <ChevronRight />
        )}
      </Button>
    </>
  );
}
