import { Tabs, TabsContent, TabsList, TabsTrigger } from "@digital-ui/ui";
import { Terminal } from "lucide-react";
import { useState } from "react";
import { CopyButton } from "./CopyButton.js";
import { ShikiCodeBlock } from "./ShikiCodeBlock.js";

interface InstallBlockProps {
  /** Component name, e.g. "button" — used to build the `add` command. */
  name: string;
}

const PACKAGE_MANAGERS = [
  { id: "pnpm", prefix: "pnpm dlx" },
  { id: "npm", prefix: "npx" },
  { id: "yarn", prefix: "yarn dlx" },
  { id: "bun", prefix: "bunx --bun" },
] as const;

export function InstallBlock({ name }: InstallBlockProps) {
  const [activePm, setActivePm] = useState<string>("npm");

  const activeCommand = `${PACKAGE_MANAGERS.find((pm) => pm.id === activePm)!.prefix} digital-ui@latest add ${name}`;

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-background">
      <Tabs
        value={activePm}
        onValueChange={setActivePm}
        className="flex flex-col gap-0"
      >
        {/* Header row: terminal icon + package manager tabs + copy button */}
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
          <CopyButton text={activeCommand} />
        </div>

        {/* Command display — syntax-highlighted via Shiki */}
        {PACKAGE_MANAGERS.map((pm) => (
          <TabsContent key={pm.id} value={pm.id} className="p-4">
            <ShikiCodeBlock
              code={`${pm.prefix} digital-ui@latest add ${name}`}
              lang="bash"
              className="shiki-compact"
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
