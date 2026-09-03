import { FileBracesCorner } from "lucide-react";
import highlightedInline from "virtual:highlighted-inline";

import { CopyButton } from "./CopyButton";
import { HighlightedCode } from "./HighlightedCode";
import { InlineCode } from "./InlineCode";

export function CursorSection() {
  return (
    <section id="cursor" className="flex flex-col gap-3 scroll-mt-24">
      <h2 className="text-xl md:text-lg font-semibold text-foreground">
        Cursor
      </h2>
      <p className="text-base md:text-sm text-foreground-muted">
        Tailwind v4{" "}
        <a
          href="https://tailwindcss.com/docs/upgrade-guide#buttons-use-the-default-cursor"
          className="text-accent hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          switched
        </a>{" "}
        from <InlineCode>cursor: pointer</InlineCode> to{" "}
        <InlineCode>cursor: default</InlineCode> for the button component.
      </p>
      <p className="text-base md:text-sm text-foreground-muted">
        If you want to keep the <InlineCode>cursor: pointer</InlineCode>{" "}
        behavior, add the following code to your CSS file:
      </p>
      <p className="text-base md:text-sm text-foreground-muted">
        You can also enable this during project setup with{" "}
        <InlineCode>npx ionbit-ui init --pointer</InlineCode>.
      </p>
      <div className="relative overflow-hidden rounded-lg border border-border bg-surface">
        <div className="flex items-center justify-between gap-2 border-b border-border pr-2.5 py-2 pl-4">
          <div className="flex min-w-0 items-center gap-2">
            <FileBracesCorner className="h-4 w-4 shrink-0 text-foreground-subtle" />
            <span className="font-mono text-xs text-foreground-muted">
              src/index.css
            </span>
          </div>
          <CopyButton text={highlightedInline["__cursor__"]!.rawCode!} />
        </div>
        <HighlightedCode
          html={highlightedInline["__cursor__"]!.codeHtml!}
          className="shiki-nolines"
        />
      </div>
    </section>
  );
}
