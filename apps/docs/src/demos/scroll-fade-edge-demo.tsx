const items = [
  "Inbox triage",
  "Design review",
  "API contract",
  "QA pass",
  "Launch notes",
  "Metrics follow-up",
];

const tags = [
  "Design",
  "Engineering",
  "Marketing",
  "Product",
  "Research",
  "Sales",
  "Support",
  "Operations",
];

export function ScrollFadeEdgeDemo() {
  return (
    <div className="mx-auto flex w-full max-w-xs min-w-0 flex-col gap-6">
      <div className="flex flex-col gap-3">
        <div className="overflow-hidden rounded-lg border border-border">
          <div className="scroll-fade-t h-36 overflow-y-auto no-scrollbar">
            <ScrollFadeEdgeItems />
          </div>
        </div>
        <p className="text-center font-mono text-xs text-muted-foreground">
          scroll-fade-t
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="overflow-hidden rounded-lg border border-border">
          <div className="scroll-fade-b h-36 overflow-y-auto no-scrollbar">
            <ScrollFadeEdgeItems />
          </div>
        </div>
        <p className="text-center font-mono text-xs text-muted-foreground">
          scroll-fade-b
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="overflow-hidden rounded-lg border border-border">
          <div className="scroll-fade-s overflow-x-auto no-scrollbar">
            <ScrollFadeEdgeTags />
          </div>
        </div>
        <p className="text-center font-mono text-xs text-muted-foreground">
          scroll-fade-s
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="overflow-hidden rounded-lg border border-border">
          <div className="scroll-fade-e overflow-x-auto no-scrollbar">
            <ScrollFadeEdgeTags />
          </div>
        </div>
        <p className="text-center font-mono text-xs text-muted-foreground">
          scroll-fade-e
        </p>
      </div>
    </div>
  );
}

function ScrollFadeEdgeItems() {
  return (
    <div className="flex flex-col gap-2 p-2">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-md bg-surface-elevated px-4 py-3 text-sm"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

function ScrollFadeEdgeTags() {
  return (
    <div className="flex w-max gap-2 p-2">
      {tags.map((tag) => (
        <div
          key={tag}
          className="shrink-0 rounded-md bg-surface-elevated px-4 py-3 text-sm"
        >
          {tag}
        </div>
      ))}
    </div>
  );
}
