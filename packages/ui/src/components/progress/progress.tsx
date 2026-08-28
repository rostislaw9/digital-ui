import * as ProgressPrimitive from "@radix-ui/react-progress";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface ProgressProps extends React.ComponentProps<
  typeof ProgressPrimitive.Root
> {
  /** 0..100 — the progress value. */
  value?: number;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  function Progress({ className, value = 0, ...props }, ref) {
    const pct = Math.min(100, Math.max(0, value));
    return (
      <ProgressPrimitive.Root
        ref={ref}
        value={pct}
        className={cn(
          "relative h-2 w-full overflow-hidden rounded-full border border-border bg-surface",
          className,
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className="h-full rounded-full bg-accent transition-transform duration-[var(--duration-normal)] ease-[var(--ease-standard)]"
          style={{ transform: `translateX(-${100 - pct}%)` }}
        />
      </ProgressPrimitive.Root>
    );
  },
);
