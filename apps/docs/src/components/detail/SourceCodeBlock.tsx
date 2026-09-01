import { ChevronDown, FileCodeCorner } from "lucide-react";
import { useState } from "react";

import { Button, Separator } from "@ionbit-ui/ui";

import { CopyButton } from "./CopyButton";
import { HighlightedCode } from "./HighlightedCode";

export interface SourceFile {
  filename: string;
  html: string;
  rawCode: string;
}

interface SourceCodeBlockProps {
  file: SourceFile;
}

/**
 * Collapsible source code block for the Manual install tab.
 *
 * - Copy button is always visible in the header.
 * - Expand/collapse button in the header toggles the code area.
 * - Collapsed: shows a gradient overlay with an "Expand" button at the bottom.
 * - Expanded: shows full code in a scrollable container (max 400px).
 */
export function SourceCodeBlock({ file }: SourceCodeBlockProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-surface">
      {/* Filename header + expand/collapse + separator + copy buttons */}
      <div className="flex items-center justify-between border-b border-border px-2.5 py-2">
        <div className="flex items-center gap-2 ml-1.5">
          <FileCodeCorner className="size-3.5 text-foreground-subtle" />
          <span className="font-mono text-xs text-foreground-muted">
            {file.filename}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            aria-label={expanded ? "Collapse" : "Expand"}
            onClick={() => setExpanded((e) => !e)}
          >
            <ChevronDown className={expanded ? "rotate-180" : ""} />
          </Button>
          <Separator orientation="vertical" className="h-8 mx-1" />
          <CopyButton text={file.rawCode} />
        </div>
      </div>

      {expanded ? (
        <div className="max-h-[400px] overflow-auto">
          <HighlightedCode html={file.html} className="shiki-wrapper" />
        </div>
      ) : (
        <div className="relative max-h-32 overflow-hidden">
          <HighlightedCode html={file.html} className="shiki-wrapper" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, var(--surface), color-mix(in oklab, var(--surface) 60%, transparent), transparent)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 flex justify-center pb-2">
            <Button variant="ghost" size="sm" onClick={() => setExpanded(true)}>
              <ChevronDown />
              Expand
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
