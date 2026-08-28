import { useEffect, useState } from "react";
import { createHighlighterCore, type HighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

let highlighterPromise: Promise<HighlighterCore> | null = null;

function getHighlighterPromise() {
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

// Start loading immediately — don't wait for first component mount
getHighlighterPromise();

interface ShikiCodeBlockProps {
  code: string;
  lang?: "tsx" | "bash" | "css";
  className?: string;
}

export function ShikiCodeBlock({
  code,
  lang = "tsx",
  className,
}: ShikiCodeBlockProps) {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    getHighlighterPromise().then((hl) => {
      if (cancelled) return;
      const themed = hl.codeToHtml(code, {
        lang,
        themes: { dark: "github-dark-default", light: "github-light-default" },
        defaultColor: "dark",
        transformers: [
          {
            pre(node) {
              node.properties = node.properties ?? {};
              node.properties["data-line-numbers"] = "";
            },
          },
        ],
      });
      setHtml(themed);
    });
    return () => {
      cancelled = true;
    };
  }, [code, lang]);

  if (!html) {
    // Placeholder with same background to avoid flash
    return (
      <pre className="shiki-placeholder overflow-x-auto p-4 text-sm leading-relaxed">
        <code className="font-mono text-foreground-muted">{code}</code>
      </pre>
    );
  }

  return (
    <div
      className={className}

      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
