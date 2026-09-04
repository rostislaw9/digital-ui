export function ScrollFadeNoneDemo() {
  return (
    <div className="w-full max-w-xs rounded-lg border border-border">
      <div className="no-scrollbar h-48 scroll-fade overflow-y-auto p-2 scroll-fade-none">
        <ul className="flex flex-col gap-2">
          {Array.from({ length: 12 }, (_, i) => (
            <li
              key={i}
              className="rounded-md bg-surface-elevated px-4 py-3 text-sm"
            >
              Item {i + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
