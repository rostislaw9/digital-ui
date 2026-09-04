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
          <div className="no-scrollbar h-36 scroll-fade-t overflow-y-auto">
            <ScrollFadeEdgeItems />
          </div>
        </div>
        <p className="text-muted-foreground text-center font-mono text-xs">
          scroll-fade-t
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="overflow-hidden rounded-lg border border-border">
          <div className="no-scrollbar h-36 scroll-fade-b overflow-y-auto">
            <ScrollFadeEdgeItems />
          </div>
        </div>
        <p className="text-muted-foreground text-center font-mono text-xs">
          scroll-fade-b
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="overflow-hidden rounded-lg border border-border">
          <div className="no-scrollbar scroll-fade-s overflow-x-auto">
            <ScrollFadeEdgeTags />
          </div>
        </div>
        <p className="text-muted-foreground text-center font-mono text-xs">
          scroll-fade-s
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="overflow-hidden rounded-lg border border-border">
          <div className="no-scrollbar scroll-fade-e overflow-x-auto">
            <ScrollFadeEdgeTags />
          </div>
        </div>
        <p className="text-muted-foreground text-center font-mono text-xs">
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
