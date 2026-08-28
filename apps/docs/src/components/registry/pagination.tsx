import { PaginationDemo } from "../../demos/pagination-demo.js";
import PaginationDemoSource from "../../demos/pagination-demo.tsx?raw";
import type { ComponentMeta } from "./types.js";

export const paginationMeta: ComponentMeta = {
  name: "pagination",
  label: "Pagination",
  description:
    "Pagination control with ellipsis, sibling count, and prev/next buttons.",
  category: "Navigation",
  examples: [
    {
      title: "Basic",
      description: "Pagination with 20 pages and ellipsis truncation.",
      code: PaginationDemoSource,
      render: () => <PaginationDemo />,
    },
  ],
  usageImport: `import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrev,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination";`,
  usageCode: `<Pagination currentPage={1} totalPages={10} onPageChange={(p) => console.log(p)}>
  <PaginationContent>
    <PaginationItem><PaginationPrev /></PaginationItem>
    <PaginationItem><PaginationLink page={1} /></PaginationItem>
    <PaginationItem><PaginationNext /></PaginationItem>
  </PaginationContent>
</Pagination>`,
  composition: [
    "Pagination",
    "└── PaginationContent",
    "    └── PaginationItem",
    "        ├── PaginationPrev",
    "        ├── PaginationNext",
    "        └── PaginationLink",
  ],
  props: [
    {
      name: "currentPage",
      type: "number",
      description: "Currently active page (1-based).",
    },
    {
      name: "totalPages",
      type: "number",
      description: "Total number of pages.",
    },
    {
      name: "onPageChange",
      type: "function",
      description: "Called when a page is selected.",
    },
    {
      name: "siblingCount",
      type: "number",
      default: "1",
      description: "Number of siblings to show on each side of current page.",
    },
  ],
  accessibility: [
    'aria-label="Pagination" on nav element',
    'aria-current="page" on active page',
    "aria-label on prev/next buttons",
  ],
  isNew: false,
};
