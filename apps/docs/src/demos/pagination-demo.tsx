import { useState } from "react";

import { Pagination } from "@/components/ui/pagination";

export function PaginationDemo() {
  const [page, setPage] = useState(5);
  return (
    <Pagination currentPage={page} totalPages={20} onPageChange={setPage} />
  );
}
