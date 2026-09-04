import { InlineCode } from "./InlineCode";
import { SectionHeading } from "./SectionHeading";

export function CompositionSection({
  tree,
  label,
}: {
  tree: string[];
  label: string;
}) {
  const article = /^[aeiou]/i.test(label) ? "an" : "a";
  return (
    <section id="composition" className="flex scroll-mt-24 flex-col gap-3">
      <SectionHeading id="composition">Composition</SectionHeading>
      <p className="text-base text-foreground-muted md:text-sm">
        Use the following composition to build {article}{" "}
        <InlineCode>{label}</InlineCode>:
      </p>
      <pre className="overflow-x-auto rounded-lg border border-border bg-surface p-4 text-sm leading-relaxed">
        <code className="font-mono text-foreground-muted">
          {tree.join("\n")}
        </code>
      </pre>
    </section>
  );
}
