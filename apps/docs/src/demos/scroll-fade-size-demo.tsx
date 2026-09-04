const items = [
  "Inbox triage",
  "Design review",
  "API contract",
  "QA pass",
  "Launch notes",
  "Metrics follow-up",
  "Postmortem",
  "Roadmap sync",
];

export function ScrollFadeSizeDemo() {
  return (
    <div className="mx-auto flex w-full max-w-xs flex-col gap-6">
      <div className="flex flex-col gap-3">
        <div className="overflow-hidden rounded-lg border border-border">
          <div className="no-scrollbar h-48 scroll-fade overflow-y-auto scroll-fade-4">
            <ScrollFadeSizeItems />
          </div>
        </div>
        <p className="text-muted-foreground text-center font-mono text-xs">
          scroll-fade-4
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="overflow-hidden rounded-lg border border-border">
          <div className="no-scrollbar h-48 scroll-fade overflow-y-auto scroll-fade-24">
            <ScrollFadeSizeItems />
          </div>
        </div>
        <p className="text-muted-foreground text-center font-mono text-xs">
          scroll-fade-24
        </p>
      </div>
    </div>
  );
}

function ScrollFadeSizeItems() {
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
