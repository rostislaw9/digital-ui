import type { ReactNode } from "react";

export function InlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="rounded bg-accent-muted px-1.5 py-0.5 font-mono text-xs text-accent">
      {children}
    </code>
  );
}
