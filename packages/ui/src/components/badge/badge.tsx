import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

// prettier-ignore
export const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-medium transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3",
  {
    variants: {
      variant: {
        default: "border-border bg-surface text-foreground-muted",
        accent: "border-border-accent bg-accent-muted text-accent",
        success: "border-border-success bg-success-muted text-success",
        warning: "border-border-warning bg-warning-muted text-warning",
        error: "border-border-error bg-error-muted text-error",
        outline: "border-border-strong bg-transparent text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

/**
 * Badge — a small status indicator.
 *
 * Accessibility: use semantic variant colors to convey meaning, not color
 * alone. Include an icon or text label that describes the status.
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { className, variant, ...props },
  ref,
) {
  return (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
});
