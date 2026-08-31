import { ChevronDown, FileCodeCorner, Terminal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import highlightedInline from "virtual:highlighted-inline";
import sourceLoaders from "virtual:highlighted-sources-map";

import {
  Button,
  ScrollArea,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@ionbit-ui/ui";

import { CopyButton } from "./CopyButton";
import { HighlightedCode } from "./HighlightedCode";

interface SourceFile {
  filename: string;
  html: string;
  rawCode: string;
}

interface SourceEntry {
  sourceFiles: SourceFile[];
  depInstall: Record<string, string>;
}

interface InstallBlockProps {
  /** Component name, e.g. "button" — used to build the `add` command. */
  name: string;
  /** Whether the component is built on Radix UI (shows dep install step). */
  radixBased?: boolean;
}

const PACKAGE_MANAGERS = [
  { id: "pnpm", prefix: "pnpm dlx" },
  { id: "npm", prefix: "npx" },
  { id: "yarn", prefix: "yarn dlx" },
  { id: "bun", prefix: "bunx --bun" },
] as const;

const PM_ADD_CMD: Record<string, string> = {
  pnpm: "pnpm add radix-ui",
  npm: "npm install radix-ui",
  yarn: "yarn add radix-ui",
  bun: "bun add radix-ui",
};

const INSTALL_TAB_KEY = "ionbit:install-tab";
const INSTALL_PM_KEY = "ionbit:install-pm";
const MAX_CODE_HEIGHT = 400;

const LINK_TAB_CLASS =
  "rounded-none border-0 border-b-2 border-transparent px-0 pb-1 text-sm text-foreground-muted hover:text-foreground data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:text-accent data-[state=active]:shadow-none";

/**
 * Collapsible source code block for the Manual install tab.
 * - Copy button is always visible in the header.
 * - Expand/collapse button in the header toggles the code area.
 * - Collapsed: shows a gradient overlay with an "Expand" button at the bottom.
 * - Expanded: shows full code in a scrollable ScrollArea (max 400px).
 */
function SourceCodeBlock({ file }: { file: SourceFile }) {
  const [expanded, setExpanded] = useState(false);
  const [needsScroll, setNeedsScroll] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!expanded || !contentRef.current) return;
    setNeedsScroll(contentRef.current.scrollHeight > MAX_CODE_HEIGHT);
  }, [expanded, file.html]);

  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-surface">
      {/* Filename header + expand/collapse + separator + copy buttons */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <div className="flex items-center gap-2">
          <FileCodeCorner className="size-3.5 text-foreground-subtle" />
          <span className="font-mono text-xs text-foreground-muted">
            {file.filename}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            aria-label={expanded ? "Collapse" : "Expand"}
            onClick={() => setExpanded((e) => !e)}
          >
            <ChevronDown className={expanded ? "rotate-180" : ""} />
          </Button>
          <Separator orientation="vertical" className="h-8 mx-1" />
          <CopyButton text={file.rawCode} />
        </div>
      </div>

      {expanded ? (
        <ScrollArea className={needsScroll ? "h-[400px]" : ""}>
          <div ref={contentRef}>
            <HighlightedCode html={file.html} className="shiki-wrapper" />
          </div>
        </ScrollArea>
      ) : (
        <div className="relative max-h-32 overflow-hidden">
          <HighlightedCode html={file.html} className="shiki-wrapper" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, var(--surface), color-mix(in oklab, var(--surface) 60%, transparent), transparent)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 flex justify-center pb-2">
            <Button variant="ghost" size="sm" onClick={() => setExpanded(true)}>
              <ChevronDown />
              Expand
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

/** Shared package-manager command block (terminal icon + PM tabs + copy + code). */
function PmCommandBlock({
  activePm,
  onPmChange,
  copyText,
  codeHtml,
}: {
  activePm: string;
  onPmChange: (value: string) => void;
  copyText: string;
  codeHtml: Record<string, string>;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-background">
      <Tabs
        value={activePm}
        onValueChange={onPmChange}
        className="flex flex-col gap-0"
      >
        <div className="flex items-center justify-between border-b border-border px-3 py-1.5">
          <div className="flex items-center gap-2">
            <div className="flex size-4 items-center justify-center rounded-[1px] bg-foreground opacity-70">
              <Terminal className="size-3 text-background" />
            </div>
            <TabsList className="bg-transparent border-0">
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

export function InstallBlock({ name, radixBased }: InstallBlockProps) {
  const [activePm, setActivePm] = useState<string>(
    () => localStorage.getItem(INSTALL_PM_KEY) ?? "npm",
  );
  const [activeTab, setActiveTab] = useState<string>(
    () => localStorage.getItem(INSTALL_TAB_KEY) ?? "command",
  );
  const [sourceData, setSourceData] = useState<SourceEntry | null>(null);

  const activeCommand = `${PACKAGE_MANAGERS.find((pm) => pm.id === activePm)!.prefix} ionbit-ui@latest add ${name}`;
  const install = highlightedInline[name]!.install!;

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    localStorage.setItem(INSTALL_TAB_KEY, value);
  };

  const handlePmChange = (value: string) => {
    setActivePm(value);
    localStorage.setItem(INSTALL_PM_KEY, value);
  };

  // Load source files on mount so the Manual tab is ready immediately.
  useEffect(() => {
    const loader = sourceLoaders[name];
    if (!loader) return;
    let cancelled = false;
    loader()
      .then((mod) => {
        if (!cancelled) setSourceData(mod.default);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [name]);

  const sourceFiles = sourceData?.sourceFiles;
  const depInstall = sourceData?.depInstall;

  return (
    <Tabs
      value={activeTab}
      onValueChange={handleTabChange}
      className="flex flex-col gap-4"
    >
      <TabsList className="bg-transparent border-0 gap-6 px-0 rounded-none [&>span]:hidden">
        <TabsTrigger value="command" className={LINK_TAB_CLASS}>
          Command
        </TabsTrigger>
        <TabsTrigger value="manual" className={LINK_TAB_CLASS}>
          Manual
        </TabsTrigger>
      </TabsList>

      {/* ─── Command tab ─── */}
      <TabsContent value="command" className="mt-0">
        <PmCommandBlock
          activePm={activePm}
          onPmChange={handlePmChange}
          copyText={activeCommand}
          codeHtml={install}
        />
        {radixBased && (
          <p className="mt-2 text-xs text-foreground-subtle">
            Built on Radix UI — npm dependencies will be installed
            automatically.
          </p>
        )}
      </TabsContent>

      {/* ─── Manual tab ─── */}
      <TabsContent value="manual" className="mt-0">
        <div className="steps [counter-reset:step] md:ml-4 md:border-l md:pl-8 mb-0 pt-2 flex flex-col gap-6">
          {/* Step 1 (radix only): Install dependencies */}
          {radixBased && depInstall && (
            <>
              <h3 className="step text-sm font-semibold text-foreground">
                Install the following dependencies:
              </h3>
              <PmCommandBlock
                activePm={activePm}
                onPmChange={handlePmChange}
                copyText={PM_ADD_CMD[activePm]!}
                codeHtml={depInstall}
              />
            </>
          )}

          {/* Step: Copy and paste the following code */}
          {sourceFiles && sourceFiles.length > 0 && (
            <>
              <h3 className="step text-sm font-semibold text-foreground">
                Copy and paste the following code into your project.
              </h3>
              <div className="flex flex-col gap-3">
                {sourceFiles.map((file) => (
                  <SourceCodeBlock key={file.filename} file={file} />
                ))}
                {sourceFiles.length > 1 && (
                  <div className="flex justify-end">
                    <CopyButton
                      text={sourceFiles.map((f) => f.rawCode).join("\n\n")}
                    />
                  </div>
                )}
              </div>
            </>
          )}

          {/* Final step: Update import paths */}
          {sourceData && (
            <h3 className="step text-sm font-semibold text-foreground">
              Update the import paths to match your project setup.
            </h3>
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
}
