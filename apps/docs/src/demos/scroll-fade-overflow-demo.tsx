export function ScrollFadeOverflowDemo() {
  return (
    <div className="w-full max-w-xs rounded-lg border border-border">
      <div className="no-scrollbar scroll-fade overflow-y-auto p-2">
        <ul className="flex flex-col gap-2">
          <li className="rounded-md bg-surface-elevated px-4 py-3 text-sm">
            Item 1
          </li>
          <li className="rounded-md bg-surface-elevated px-4 py-3 text-sm">
            Item 2
          </li>
          <li className="rounded-md bg-surface-elevated px-4 py-3 text-sm">
            Item 3
          </li>
        </ul>
      </div>
    </div>
  );
}
