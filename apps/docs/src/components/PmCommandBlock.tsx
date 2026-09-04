import { Terminal } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ionbit-ui/ui";

import { PACKAGE_MANAGERS } from "../lib/package-managers";
import { CopyButton } from "./CopyButton";
import { HighlightedCode } from "./HighlightedCode";

interface PmCommandBlockProps {
  activePm: string;
  onPmChange: (value: string) => void;
  copyText: string;
  codeHtml: Record<string, string>;
}

/**
 * Shared package-manager command block.
 *
 * Renders a terminal icon, package-manager tabs (pnpm/npm/yarn/bun),
 * a copy button, and pre-highlighted command code. Used by both the
 * Command install tab and the Radix dependency step in the Manual tab.
 */
export function PmCommandBlock({
  activePm,
  onPmChange,
  copyText,
  codeHtml,
}: PmCommandBlockProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-background">
      <Tabs
        value={activePm}
        onValueChange={onPmChange}
        className="flex flex-col gap-0"
      >
        <div className="flex items-center justify-between border-b border-border px-2.5 py-1.5">
          <div className="flex items-center gap-2">
            <div className="ml-1.5 flex size-4 items-center justify-center rounded-[1px] bg-foreground opacity-70">
              <Terminal className="size-3 text-background" />
            </div>
            <TabsList className="border-0 bg-transparent">
              {PACKAGE_MANAGERS.map((pm) => (
                <TabsTrigger key={pm.id} value={pm.id}>
                  {pm.id}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <CopyButton text={copyText} />
        </div>
        {PACKAGE_MANAGERS.map((pm) => (
          <TabsContent key={pm.id} value={pm.id} className="p-4">
            <HighlightedCode
              html={codeHtml[pm.id]!}
              className="shiki-compact"
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
