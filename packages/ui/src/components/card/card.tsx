import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Elevate the surface (stronger border + shadow). @default false */
  elevated?: boolean;
  /** Make the card interactive (hover surface + cursor). @default false */
  interactive?: boolean;
}

/**
 * Card — a surface container.
 *
 * Uses semantic tokens only. Pair with `<Spotlight>` from
 * `@digital-ui/motion` for a pointer-follow highlight, or `<Reveal>` for an
 * in-view entrance. The card itself stays presentational.
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, elevated = false, interactive = false, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-border bg-surface text-foreground",
        "transition-[background-color,border-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
        elevated && "border-border-strong bg-surface-elevated shadow-md",
        interactive && "hover:bg-surface-hover hover:border-border-strong",
        className,
      )}
      {...props}
    />
  );
});

export type CardHeaderProps = HTMLAttributes<HTMLDivElement>;
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  function CardHeader({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-1.5 p-5", className)}
        {...props}
      />
    );
  },
);

export type CardTitleProps = HTMLAttributes<HTMLHeadingElement>;
export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  function CardTitle({ className, children, ...props }, ref) {
    return (
      <h3
        ref={ref}
        className={cn(
          "text-base font-semibold leading-tight tracking-tight text-foreground",
          className,
        )}
        {...props}
      >
        {children}
      </h3>
    );
  },
);

export type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement>;
export const CardDescription = forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(function CardDescription({ className, ...props }, ref) {
  return (
    <p
      ref={ref}
      className={cn("text-sm text-foreground-muted leading-relaxed", className)}
      {...props}
    />
  );
});

export type CardContentProps = HTMLAttributes<HTMLDivElement>;
export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  function CardContent({ className, ...props }, ref) {
    return <div ref={ref} className={cn("p-5 pt-0", className)} {...props} />;
  },
);

export type CardFooterProps = HTMLAttributes<HTMLDivElement>;
export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  function CardFooter({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-2 p-5 pt-0", className)}
        {...props}
      />
    );
  },
);
