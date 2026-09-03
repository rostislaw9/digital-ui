import type { ToasterProps } from "sonner";

import { forwardRef } from "react";
import { Toaster as SonnerToaster, toast as sonnerToast } from "sonner";

/**
 * Token bridge — maps Ionbit UI semantic tokens to Sonner's CSS variables.
 * Applied as inline `style` on the Toaster so Sonner's internal styles
 * resolve to our colors.
 */
const tokenBridge: React.CSSProperties = {
  // Normal (default) toast
  ["--normal-bg" as string]: "var(--surface-elevated)",
  ["--normal-border" as string]: "var(--border-strong)",
  ["--normal-text" as string]: "var(--foreground)",
  ["--normal-bg-hover" as string]: "var(--surface-hover)",
  ["--normal-border-hover" as string]: "var(--border-strong)",
  // Success
  ["--success-bg" as string]: "var(--surface-elevated)",
  ["--success-border" as string]:
    "color-mix(in oklab, var(--success) 30%, var(--border-strong))",
  ["--success-text" as string]: "var(--success)",
  // Error
  ["--error-bg" as string]: "var(--surface-elevated)",
  ["--error-border" as string]:
    "color-mix(in oklab, var(--error) 30%, var(--border-strong))",
  ["--error-text" as string]: "var(--error)",
  // Info
  ["--info-bg" as string]: "var(--surface-elevated)",
  ["--info-border" as string]:
    "color-mix(in oklab, var(--info) 30%, var(--border-strong))",
  ["--info-text" as string]: "var(--info)",
  // Warning
  ["--warning-bg" as string]: "var(--surface-elevated)",
  ["--warning-border" as string]:
    "color-mix(in oklab, var(--warning) 30%, var(--border-strong))",
  ["--warning-text" as string]: "var(--warning)",
  // Shape
  ["--border-radius" as string]: "var(--radius-lg)",
} as React.CSSProperties;

export interface IonBitToasterProps extends ToasterProps {
  /** Show close button on toasts. @default false */
  closeButton?: boolean;
}

/**
 * Toaster — the toast container, Sonner re-exported with Ionbit UI token mapping.
 *
 * Built on [Sonner](https://sonner.emilkowal.ski) by
 * [Emil Kowalski](https://twitter.com/emilkowalski), following the
 * shadcn/ui approach: we don't wrap Sonner, we map our design tokens to
 * Sonner's CSS variables so the toaster uses our color scheme. Consumers
 * import `toast` and `Toaster` directly.
 *
 * Sonner handles stacking, smooth repositioning, swipe-to-dismiss,
 * auto-dismiss, and reduced motion.
 *
 * Usage:
 * ```tsx
 * import { Toaster, toast } from "@/components/ui/toast";
 *
 * <App>
 *   <Toaster />
 * </App>
 *
 * toast("Settings saved");
 * toast.success("Deploy complete");
 * toast.error("Deploy failed", { description: "Check the logs." });
 * ```
 */
export const Toaster = forwardRef<HTMLElement, IonBitToasterProps>(
  function Toaster(
    { style, closeButton = false, richColors = true, theme = "dark", ...props },
    ref,
  ) {
    return (
      <SonnerToaster
        ref={ref}
        closeButton={closeButton}
        richColors={richColors}
        theme={theme}
        style={{ ...tokenBridge, ...style }}
        {...props}
      />
    );
  },
);

/**
 * toast — the imperative toast API, re-exported from Sonner.
 *
 * Call `toast(message)`, `toast.success(...)`, `toast.error(...)`, etc.
 * to display notifications in the nearest `<Toaster>`.
 */
export { sonnerToast as toast };
