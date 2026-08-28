import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { forwardRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
}

function getRange(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function buildPageRange(
  current: number,
  total: number,
  siblingCount: number,
): (number | "ellipsis")[] {
  if (total <= 5 + siblingCount * 2) {
    return getRange(1, total);
  }

  const leftSibling = Math.max(current - siblingCount, 1);
  const rightSibling = Math.min(current + siblingCount, total);

  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < total - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftCount = 3 + 2 * siblingCount;
    return [...getRange(1, leftCount), "ellipsis", total];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightCount = 3 + 2 * siblingCount;
    return [1, "ellipsis", ...getRange(total - rightCount + 1, total)];
  }

  return [
    1,
    "ellipsis",
    ...getRange(leftSibling, rightSibling),
    "ellipsis",
    total,
  ];
}

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  function Pagination(
    { currentPage, totalPages, onPageChange, siblingCount = 1, className },
    ref,
  ) {
    const pages = buildPageRange(currentPage, totalPages, siblingCount);

    return (
      <nav
        ref={ref}
        className={cn("flex items-center gap-1", className)}
        aria-label="Pagination"
      >
        <PaginationButton
          aria-label="Previous page"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ChevronLeft className="h-4 w-4" />
        </PaginationButton>

        {pages.map((page, i) =>
          page === "ellipsis" ? (
            <span
              key={`ellipsis-${i}`}
              className="flex h-8 w-8 items-center justify-center text-foreground-subtle"
            >
              <MoreHorizontal className="h-4 w-4" />
            </span>
          ) : (
            <PaginationButton
              key={page}
              active={page === currentPage}
              onClick={() => onPageChange(page)}
              aria-label={`Page ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </PaginationButton>
          ),
        )}

        <PaginationButton
          aria-label="Next page"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <ChevronRight className="h-4 w-4" />
        </PaginationButton>
      </nav>
    );
  },
);

interface PaginationButtonProps {
  children: ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
  "aria-current"?:
    boolean | "true" | "false" | "time" | "page" | "step" | "location" | "date";
}

function PaginationButton({
  children,
  active,
  disabled,
  onClick,
  ...aria
}: PaginationButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "inline-flex h-8 min-w-8 items-center justify-center rounded-md px-2 text-sm",
        "font-medium select-none",
        "transition-[background-color,border-color,color,box-shadow,transform]",
        "duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-40",
        "hover:scale-[1.02] active:scale-[0.97] will-change-transform",
        active
          ? "bg-accent text-accent-foreground hover:bg-accent-hover hover:shadow-[var(--shadow-glow)]"
          : "text-foreground-muted hover:bg-surface-hover hover:text-foreground",
      )}
      {...aria}
    >
      {children}
    </button>
  );
}
