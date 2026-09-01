import { useEffect, useState } from "react";
import highlightedInline from "virtual:highlighted-inline";
import sourceLoaders from "virtual:highlighted-sources-map";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ionbit-ui/ui";

import { PACKAGE_MANAGERS, PmCommandBlock } from "./PmCommandBlock";
import { SourceCodeBlock, type SourceFile } from "./SourceCodeBlock";

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

const PM_ADD_CMD: Record<string, string> = {
  pnpm: "pnpm add radix-ui",
  npm: "npm install radix-ui",
  yarn: "yarn add radix-ui",
  bun: "bun add radix-ui",
};

const INSTALL_TAB_KEY = "ionbit:install-tab";
const INSTALL_PM_KEY = "ionbit:install-pm";

const LINK_TAB_CLASS =
  "rounded-none border-0 border-b-2 border-transparent px-0 pb-1 text-sm text-foreground-muted hover:text-foreground data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:text-accent data-[state=active]:shadow-none";

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
      <TabsContent value="command">
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
      <TabsContent value="manual">
        <div className="steps [counter-reset:step] md:ml-4 md:border-l md:pl-8 flex flex-col gap-6">
          {/* Step 1 (radix only): Install dependencies */}
          {radixBased && depInstall && (
            <>
              <h3 className="step text-lg md:text-sm font-semibold text-foreground">
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
              <h3 className="step text-lg md:text-sm font-semibold text-foreground">
                Copy and paste the following code into your project.
              </h3>
              <div className="flex flex-col gap-3">
                {sourceFiles.map((file) => (
                  <SourceCodeBlock
                    key={`${name}/${file.filename}`}
                    file={file}
                  />
                ))}
              </div>
            </>
          )}

          {/* Final step: Update import paths */}
          {sourceData && (
            <h3 className="step text-lg md:text-sm font-semibold text-foreground">
              Update the import paths to match your project setup.
            </h3>
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
}
