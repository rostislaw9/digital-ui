import type { Plugin } from "vite";

import { readFileSync, readdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createHighlighterCore, type HighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

let highlighterPromise: Promise<HighlighterCore> | null = null;

function getHighlighter(): Promise<HighlighterCore> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighterCore({
      themes: [
        import("shiki/themes/github-dark-default.mjs"),
        import("shiki/themes/github-light-default.mjs"),
      ],
      langs: [
        import("shiki/langs/tsx.mjs"),
        import("shiki/langs/bash.mjs"),
        import("shiki/langs/css.mjs"),
      ],
      engine: createJavaScriptRegexEngine(),
    });
  }
  return highlighterPromise;
}

const transformers = [
  {
    pre(node: { properties?: Record<string, unknown> }) {
      node.properties = node.properties ?? {};
      node.properties["data-line-numbers"] = "";
    },
  },
];

async function highlight(code: string, lang: string): Promise<string> {
  const hl = await getHighlighter();
  return hl.codeToHtml(code, {
    lang,
    themes: { dark: "github-dark-default", light: "github-light-default" },
    defaultColor: "dark",
    transformers,
  });
}

const LANG_MAP: Record<string, string> = {
  ".tsx": "tsx",
  ".ts": "tsx",
  ".jsx": "tsx",
  ".js": "tsx",
  ".bash": "bash",
  ".sh": "bash",
  ".css": "css",
};

/** Cursor CSS — shared static code block. */
const CURSOR_CSS = `@layer base {
  button:not(:disabled),
  [role="button"]:not(:disabled) {
    cursor: pointer;
  }
}`;

/** Package manager prefixes for install commands. */
const PACKAGE_MANAGERS = [
  { id: "pnpm", prefix: "pnpm dlx" },
  { id: "npm", prefix: "npx" },
  { id: "yarn", prefix: "yarn dlx" },
  { id: "bun", prefix: "bunx --bun" },
] as const;

/**
 * Extract usageImport and usageCode from a registry .tsx file by parsing
 * the template literals. This avoids needing to execute the TSX.
 */
function extractUsageFields(filePath: string): {
  name: string;
  usageImport?: string;
  usageCode?: string;
} {
  const content = readFileSync(filePath, "utf-8");

  // Extract component name: name: "button",
  const nameMatch = content.match(/name:\s*"([^"]+)"/);
  const name = nameMatch ? nameMatch[1] : "";

  // Extract usageImport: `...` (template literal, may span multiple lines)
  const importMatch = content.match(/usageImport:\s*`([\s\S]*?)`\s*,/);
  const usageImport = importMatch ? importMatch[1] : undefined;

  // Extract usageCode: `...` (template literal, may span multiple lines)
  const codeMatch = content.match(/usageCode:\s*`([\s\S]*?)`\s*,/);
  const usageCode = codeMatch ? codeMatch[1] : undefined;

  return { name, usageImport, usageCode };
}

/**
 * Vite plugin that pre-highlights all code at build time using Shiki.
 *
 * Two mechanisms:
 * 1. File-based: `import html from "./demo.tsx?highlighted"` — reads the
 *    file at build time and returns highlighted HTML.
 * 2. Virtual module: `virtual:highlighted-inline` — a JSON map of
 *    component name → { importHtml, codeHtml, install } for usage examples
 *    and install commands, plus `__cursor__` for the cursor CSS block.
 *
 * This eliminates the entire Shiki runtime from the browser bundle.
 */
export function shikiHighlightPlugin(): Plugin {
  return {
    name: "shiki-highlight",
    enforce: "pre",

    async resolveId(id, importer) {
      // File-based: ?highlighted suffix
      if (id.includes("?highlighted")) {
        // Strip the ?highlighted query to get the plain file path
        const plainPath = id.replace("?highlighted", "");
        const resolved = await this.resolve(plainPath, importer, {
          skipSelf: true,
        });
        if (!resolved) return null;
        // Use the resolved file path (without query) as the virtual id
        const filePath = resolved.id.split("?")[0];
        return `\0shiki-highlight:${filePath}`;
      }
      // Virtual module for inline code
      if (id === "virtual:highlighted-inline") {
        return "\0virtual:highlighted-inline";
      }
      return null;
    },

    async load(id) {
      // File-based highlighting
      if (id.startsWith("\0shiki-highlight:")) {
        const filePath = id.slice("\0shiki-highlight:".length);
        const code = readFileSync(filePath, "utf-8");
        const ext = filePath.slice(filePath.lastIndexOf("."));
        const lang = LANG_MAP[ext] ?? "tsx";
        const html = await highlight(code, lang);
        return {
          code: `export default ${JSON.stringify(html)};`,
          map: null,
        };
      }

      // Virtual module: pre-highlighted inline code (usage, cursor)
      if (id === "\0virtual:highlighted-inline") {
        const registryDir = resolve(
          dirname(fileURLToPath(import.meta.url)),
          "src/components/registry",
        );
        const files = readdirSync(registryDir).filter(
          (f) => f.endsWith(".tsx") && f !== "types.tsx" && f !== "index.tsx",
        );

        const result: Record<
          string,
          {
            importHtml?: string;
            codeHtml?: string;
            install: Record<string, string>;
          }
        > = {};

        for (const file of files) {
          const filePath = resolve(registryDir, file);
          const { name, usageImport, usageCode } = extractUsageFields(filePath);
          if (!name) continue;

          const entry: {
            importHtml?: string;
            codeHtml?: string;
            install: Record<string, string>;
          } = { install: {} };
          if (usageImport) {
            entry.importHtml = await highlight(usageImport, "tsx");
          }
          if (usageCode) {
            entry.codeHtml = await highlight(usageCode, "tsx");
          }
          for (const pm of PACKAGE_MANAGERS) {
            const cmd = `${pm.prefix} ionbit-ui@latest add ${name}`;
            entry.install[pm.id] = await highlight(cmd, "bash");
          }
          result[name] = entry;
        }

        // Cursor CSS
        result["__cursor__"] = {
          codeHtml: await highlight(CURSOR_CSS, "css"),
          install: {},
        };

        return {
          code: `export default ${JSON.stringify(result)};`,
          map: null,
        };
      }

      return null;
    },
  };
}
