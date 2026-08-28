import { useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function getPageRange(
  current: number,
  total: number,
  siblingCount = 1,
): (number | "ellipsis")[] {
  if (total <= 5 + siblingCount * 2) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const left = Math.max(current - siblingCount, 1);
  const right = Math.min(current + siblingCount, total);
  const showLeftEllipsis = left > 3;
  const showRightEllipsis = right < total - 2;
  if (!showLeftEllipsis && showRightEllipsis) {
    return [
      ...Array.from({ length: 3 + 2 * siblingCount }, (_, i) => i + 1),
      "ellipsis",
      total,
    ];
  }
  if (showLeftEllipsis && !showRightEllipsis) {
    const rightCount = 3 + 2 * siblingCount;
    return [
      1,
      "ellipsis",
      ...Array.from(
        { length: rightCount },
        (_, i) => total - rightCount + 1 + i,
      ),
    ];
  }
  return [
    1,
    "ellipsis",
    ...Array.from({ length: right - left + 1 }, (_, i) => left + i),
    "ellipsis",
    total,
  ];
}

export function PaginationDemo() {
  const [page, setPage] = useState(5);
  const totalPages = 20;
  const pages = getPageRange(page, totalPages);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (page > 1) setPage(page - 1);
            }}
          />
        </PaginationItem>
        {pages.map((p, i) =>
          p === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${i}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={p === page}
                onClick={(e) => {
                  e.preventDefault();
                  setPage(p);
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ),
        )}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (page < totalPages) setPage(page + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
