import highlightedInline from "virtual:highlighted-inline";

import { CopyButton } from "./CopyButton";
import { HighlightedCode } from "./HighlightedCode";

export function UsageSection({
  componentName,
  usageImport,
  usageCode,
}: {
  componentName: string;
  usageImport: string;
  usageCode: string;
}) {
  const highlighted = highlightedInline[componentName]!;
  return (
    <section id="usage" className="flex flex-col gap-3 scroll-mt-24">
      <h2 className="text-lg font-semibold text-foreground">Usage</h2>
      <CodeBlockWithCopy rawCode={usageImport} html={highlighted.importHtml!} />
      <CodeBlockWithCopy rawCode={usageCode} html={highlighted.codeHtml!} />
    </section>
  );
}

function CodeBlockWithCopy({
  rawCode,
  html,
}: {
  rawCode: string;
  html: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-surface">
      <div className="absolute right-3 top-3 z-10">
        <CopyButton text={rawCode} />
      </div>
      <HighlightedCode html={html} className="shiki-wrapper" />
    </div>
  );
}
