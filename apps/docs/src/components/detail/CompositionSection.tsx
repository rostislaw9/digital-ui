export function CompositionSection({
  tree,
  label,
}: {
  tree: string[];
  label: string;
}) {
  const article = /^[aeiou]/i.test(label) ? "an" : "a";
  return (
    <section id="composition" className="flex flex-col gap-3 scroll-mt-24">
      <h2 className="text-sm font-semibold text-foreground">Composition</h2>
      <p className="text-sm text-foreground-muted">
        Use the following composition to build {article}{" "}
        <code className="rounded bg-accent-muted px-1.5 py-0.5 font-mono text-xs text-accent">
          {label}
        </code>
        :
      </p>
      <pre className="overflow-x-auto rounded-lg border border-border bg-surface p-4 text-sm leading-relaxed">
        <code className="font-mono text-foreground-muted">
          {tree.join("\n")}
        </code>
      </pre>
    </section>
  );
}
