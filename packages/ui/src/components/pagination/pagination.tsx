import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { forwardRef, type ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type PaginationProps = ComponentProps<"nav">;

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  function Pagination({ className, ...props }, ref) {
    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="pagination"
        data-slot="pagination"
        className={cn("mx-auto flex w-full justify-center", className)}
        {...props}
      />
    );
  },
);

export type PaginationContentProps = ComponentProps<"ul">;

export const PaginationContent = forwardRef<
  HTMLUListElement,
  PaginationContentProps
>(function PaginationContent({ className, ...props }, ref) {
  return (
    <ul
      ref={ref}
      data-slot="pagination-content"
      className={cn("flex items-center gap-0.5", className)}
      {...props}
    />
  );
});

export type PaginationItemProps = ComponentProps<"li">;

export const PaginationItem = forwardRef<HTMLLIElement, PaginationItemProps>(
  function PaginationItem({ ...props }, ref) {
    return <li ref={ref} data-slot="pagination-item" {...props} />;
  },
);

export type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ComponentProps<typeof Button>, "size"> &
  ComponentProps<"a">;

export const PaginationLink = forwardRef<
  HTMLAnchorElement,
  PaginationLinkProps
>(function PaginationLink(
  { className, isActive, size = "icon", children, ...props },
  ref,
) {
  return (
    <Button
      asChild
      variant={isActive ? "secondary" : "ghost"}
      size={size}
      className={cn(className)}
    >
      <a
        ref={ref}
        aria-current={isActive ? "page" : undefined}
        data-slot="pagination-link"
        data-active={isActive}
        {...props}
      >
        {children}
      </a>
    </Button>
  );
});

export type PaginationPreviousProps = ComponentProps<typeof PaginationLink> & {
  text?: string;
};

export const PaginationPrevious = forwardRef<
  HTMLAnchorElement,
  PaginationPreviousProps
>(function PaginationPrevious({ className, text = "Previous", ...props }, ref) {
  return (
    <PaginationLink
      ref={ref}
      aria-label="Go to previous page"
      size="md"
      className={cn("pl-1.5", className)}
      {...props}
    >
      <ChevronLeft data-icon="inline-start" className="size-4" />
      <span className="hidden sm:block">{text}</span>
    </PaginationLink>
  );
});

export type PaginationNextProps = ComponentProps<typeof PaginationLink> & {
  text?: string;
};

export const PaginationNext = forwardRef<
  HTMLAnchorElement,
  PaginationNextProps
>(function PaginationNext({ className, text = "Next", ...props }, ref) {
  return (
    <PaginationLink
      ref={ref}
      aria-label="Go to next page"
      size="md"
      className={cn("pr-1.5", className)}
      {...props}
    >
      <span className="hidden sm:block">{text}</span>
      <ChevronRight data-icon="inline-end" className="size-4" />
    </PaginationLink>
  );
});

export type PaginationEllipsisProps = ComponentProps<"span">;

export const PaginationEllipsis = forwardRef<
  HTMLSpanElement,
  PaginationEllipsisProps
>(function PaginationEllipsis({ className, ...props }, ref) {
  return (
    <span
      ref={ref}
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-8 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
});
