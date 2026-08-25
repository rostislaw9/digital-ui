import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../lib/cn.js";

// prettier-ignore
export const alertVariants = cva(
  "relative flex w-full flex-col gap-2 rounded-lg border p-4 text-sm text-foreground transition-[border-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  {
    variants: {
      variant: {
        default: "border-border bg-surface text-foreground",
        accent: "border-border-accent bg-accent-muted/50 text-foreground [&_svg]:text-accent",
        success: "border-success/30 bg-success/10 text-foreground [&_svg]:text-success",
        warning: "border-warning/30 bg-warning/10 text-foreground [&_svg]:text-warning",
        error: "border-error/30 bg-error/10 text-foreground [&_svg]:text-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {}

/**
 * Alert — a callout for surfacing status messages.
 *
 * Layout: `AlertTitle` renders as a flex row pairing an icon (if present)
 * with the title text. `AlertDescription` is an optional second row for
 * additional context.
 *
 * Accessibility: use `role="alert"` for critical messages (the `error` and
 * `warning` variants set this automatically). Use `role="status"` for
 * informational messages. Provide a clear title via `AlertTitle`.
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { className, variant, role, ...props },
  ref,
) {
  const implicitRole =
    role ?? (variant === "error" || variant === "warning" ? "alert" : "status");
  return (
    <div
      ref={ref}
      role={implicitRole}
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
});

export type AlertTitleProps = HTMLAttributes<HTMLDivElement>;

/**
 * AlertTitle — the first row of an Alert. Renders as a flex row so an icon
 * (placed as the first child) sits inline with the title text.
 */
export const AlertTitle = forwardRef<HTMLDivElement, AlertTitleProps>(
  function AlertTitle({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-2 font-medium leading-none tracking-tight text-foreground",
          "[&_svg]:size-4 [&_svg]:shrink-0",
          className,
        )}
        {...props}
      />
    );
  },
);

export type AlertDescriptionProps = HTMLAttributes<HTMLDivElement>;

/**
 * AlertDescription — an optional second row for additional context text.
 * Renders with reduced opacity to establish visual hierarchy below the title.
 */
export const AlertDescription = forwardRef<
  HTMLDivElement,
  AlertDescriptionProps
>(function AlertDescription({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "text-sm text-foreground-muted leading-relaxed",
        "pl-6",
        className,
      )}
      {...props}
    />
  );
});
