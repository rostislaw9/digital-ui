import { forwardRef, type InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Invalid/error state. */
  invalid?: boolean;
}

/**
 * Input — a text input field with the Ionbit UI visual language.
 *
 * Uses semantic tokens only. The focus state uses an accent-tinted ring
 * plus a subtle border shift. Invalid state switches the border to error.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, invalid = false, type = "text", ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      type={type}
      aria-invalid={invalid || undefined}
      // prettier-ignore
      className={cn("flex w-full rounded-md border bg-surface px-3 py-1.5 text-base sm:text-sm text-foreground placeholder:text-foreground-subtle transition-[border-color,box-shadow,background-color] duration-[var(--duration-fast)] ease-[var(--ease-standard)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40 border-border hover:border-border-strong focus-visible:shadow-focus", invalid && ["border-error hover:border-error", "focus-visible:shadow-focus-error"], className)}
      {...props}
    />
  );
});
