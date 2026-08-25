import { Pagination } from "@digital-ui/ui";
import { useState } from "react";

export function PaginationDemo() {
  const [page, setPage] = useState(5);
  return (
    <Pagination currentPage={page} totalPages={20} onPageChange={setPage} />
  );
}
