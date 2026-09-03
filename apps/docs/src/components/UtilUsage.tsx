import type { UtilClassEntry } from "../registry/utils/types";

import highlightedInline from "virtual:highlighted-inline";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ionbit-ui/ui";

import { CodeBlockWithCopy } from "./CodeBlockWithCopy";

export function UtilUsage({
  utilName,
  classTable,
  usageCode,
  usageProse,
  usageProseAfter,
}: {
  utilName: string;
  classTable?: UtilClassEntry[];
  usageCode?: string;
  usageProse?: React.ReactNode;
  usageProseAfter?: React.ReactNode;
}) {
  if (!classTable && !usageCode) return null;

  const usageKey = `__util_usage_${utilName}__`;
  const usageHtml = highlightedInline[usageKey]?.codeHtml;

  return (
    <section id="usage" className="flex flex-col gap-3 scroll-mt-24">
      <h2 className="text-xl md:text-lg font-semibold text-foreground">
        Usage
      </h2>
      {classTable && (
        <div className="rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow className="bg-surface hover:bg-surface">
                <TableHead className="px-4 py-2 text-left font-semibold text-foreground">
                  Class
                </TableHead>
                <TableHead className="px-4 py-2 text-left font-semibold text-foreground">
                  Styles
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {classTable.map((entry) => (
                <TableRow key={entry.className}>
                  <TableCell className="px-4 py-2 font-mono text-xs text-accent whitespace-nowrap">
                    {entry.className}
                  </TableCell>
                  <TableCell className="px-4 py-2 min-w-150 text-xs text-foreground leading-loose whitespace-normal">
                    {entry.styles}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
      {usageProse && (
        <div className="text-base md:text-sm text-foreground-muted leading-relaxed">
          {usageProse}
        </div>
      )}
      {usageCode && (
        <CodeBlockWithCopy
          rawCode={usageCode}
          html={usageHtml ?? usageCode}
          lang={usageHtml ? undefined : "tsx"}
          lineNumbers={false}
        />
      )}
      {usageProseAfter && (
        <div className="text-base md:text-sm text-foreground-muted leading-relaxed">
          {usageProseAfter}
        </div>
      )}
    </section>
  );
}
