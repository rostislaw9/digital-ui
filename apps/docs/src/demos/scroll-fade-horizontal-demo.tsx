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

export function ScrollFadeHorizontalDemo() {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-lg border border-border">
      <div className="scroll-fade-x overflow-x-auto no-scrollbar">
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
      </div>
    </div>
  );
}
