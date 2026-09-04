import highlightedInline from "virtual:highlighted-inline";

import { CodeBlockWithCopy } from "./CodeBlockWithCopy";
import { SectionHeading } from "./SectionHeading";

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
      <SectionHeading id="usage">Usage</SectionHeading>
      <CodeBlockWithCopy
        rawCode={usageImport}
        html={highlighted.importHtml!}
        lineNumbers={false}
      />
      <CodeBlockWithCopy
        rawCode={usageCode}
        html={highlighted.codeHtml!}
        lineNumbers={false}
      />
    </section>
  );
}
