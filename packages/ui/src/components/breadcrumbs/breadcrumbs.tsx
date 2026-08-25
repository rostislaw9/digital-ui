import { Slot } from "@radix-ui/react-slot";
import { ChevronRight } from "lucide-react";
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type HTMLAttributes,
} from "react";
import { cn } from "../../lib/cn.js";

export type BreadcrumbsProps = HTMLAttributes<HTMLElement>;

/**
 * Breadcrumbs — a navigation trail showing the user's location in a hierarchy.
 *
 * Accessibility: renders a `<nav>` with `aria-label="breadcrumb"`. The
 * `BreadcrumbList` uses an ordered list (`<ol>`) as recommended by WAI-ARIA.
 */
export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  function Breadcrumbs({ className, ...props }, ref) {
    return (
      <nav
        ref={ref}
        aria-label="breadcrumb"
        className={cn("text-sm", className)}
        {...props}
      />
    );
  },
);

export type BreadcrumbListProps = HTMLAttributes<HTMLOListElement>;

export const BreadcrumbList = forwardRef<HTMLOListElement, BreadcrumbListProps>(
  function BreadcrumbList({ className, ...props }, ref) {
    return (
      <ol
        ref={ref}
        className={cn(
          "flex flex-wrap items-center gap-1.5 text-foreground-muted",
          className,
        )}
        {...props}
      />
    );
  },
);

export type BreadcrumbItemProps = HTMLAttributes<HTMLLIElement>;

export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  function BreadcrumbItem({ className, ...props }, ref) {
    return (
      <li
        ref={ref}
        className={cn("inline-flex items-center gap-1.5", className)}
        {...props}
      />
    );
  },
);

export interface BreadcrumbLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Render as the child element instead of an `<a>`. Useful with routers. */
  asChild?: boolean;
}

export const BreadcrumbLink = forwardRef<
  HTMLAnchorElement,
  BreadcrumbLinkProps
>(function BreadcrumbLink({ className, asChild, ...props }, ref) {
  const Comp = asChild ? Slot : "a";
  return (
    <Comp
      ref={ref}
      className={cn(
        "rounded transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
        "hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      {...props}
    />
  );
});

export type BreadcrumbPageProps = HTMLAttributes<HTMLSpanElement>;

export const BreadcrumbPage = forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
  function BreadcrumbPage({ className, ...props }, ref) {
    return (
      <span
        ref={ref}
        aria-current="page"
        className={cn("font-medium text-foreground", className)}
        {...props}
      />
    );
  },
);

export type BreadcrumbSeparatorProps = HTMLAttributes<HTMLLIElement>;

export const BreadcrumbSeparator = forwardRef<
  HTMLLIElement,
  BreadcrumbSeparatorProps
>(function BreadcrumbSeparator({ className, children, ...props }, ref) {
  return (
    <li
      ref={ref}
      role="presentation"
      className={cn("text-foreground-subtle", className)}
      {...props}
    >
      {children ?? <ChevronRight className="size-3.5" />}
    </li>
  );
});

export interface BreadcrumbEllipsisProps extends HTMLAttributes<HTMLSpanElement> {
  /** Optional label for the ellipsis, defaults to "More". */
  label?: string;
}

export const BreadcrumbEllipsis = forwardRef<
  HTMLSpanElement,
  BreadcrumbEllipsisProps
>(function BreadcrumbEllipsis({ className, label = "More", ...props }, ref) {
  return (
    <span
      ref={ref}
      role="presentation"
      aria-label={label}
      className={cn("flex size-4 items-center justify-center", className)}
      {...props}
    >
      &hellip;
    </span>
  );
});

export type BreadcrumbProps = BreadcrumbsProps;
