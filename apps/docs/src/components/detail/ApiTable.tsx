import type { PropMeta } from "../registry";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ionbit-ui/ui";

const headClass =
  "h-auto px-4 py-2 font-mono text-xs uppercase tracking-wider text-foreground-subtle";
const cellBase = "px-4 py-2 font-mono text-xs";

export function ApiTable({ props }: { props: PropMeta[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <Table className="text-sm">
        <TableHeader>
          <TableRow className="border-border bg-surface hover:bg-surface">
            <TableHead className={headClass}>Prop</TableHead>
            <TableHead className={headClass}>Type</TableHead>
            <TableHead className={headClass}>Default</TableHead>
            <TableHead className={headClass}>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.map((prop) => (
            <TableRow
              key={prop.name}
              className="border-border hover:bg-surface"
            >
              <TableCell className={`${cellBase} text-accent`}>
                {prop.name}
              </TableCell>
              <TableCell className={`${cellBase} text-foreground-muted`}>
                {prop.type}
              </TableCell>
              <TableCell className={`${cellBase} text-foreground-subtle`}>
                {prop.default ?? "—"}
              </TableCell>
              <TableCell className="px-4 py-2 text-xs text-foreground-muted">
                {prop.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
