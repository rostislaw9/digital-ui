import { CopyButton } from "../CopyButton.js";
import { ShikiCodeBlock } from "../ShikiCodeBlock.js";

export function UsageSection({
  usageImport,
  usageCode,
}: {
  usageImport: string;
  usageCode: string;
}) {
  return (
    <section id="usage" className="flex flex-col gap-3 scroll-mt-24">
      <h2 className="text-sm font-semibold text-foreground">Usage</h2>
      <CodeBlockWithCopy code={usageImport} />
      <CodeBlockWithCopy code={usageCode} />
    </section>
  );
}

function CodeBlockWithCopy({ code }: { code: string }) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-surface">
      <div className="absolute right-3 top-3 z-10">
        <CopyButton text={code} />
      </div>
      <ShikiCodeBlock code={code} lang="tsx" className="shiki-wrapper" />
    </div>
  );
}
