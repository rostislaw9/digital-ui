import highlightedInline from "virtual:highlighted-inline";

import { HighlightedCode } from "../HighlightedCode.js";
import { InlineCode } from "./InlineCode.js";

export function CursorSection() {
  return (
    <section id="cursor" className="flex flex-col gap-3 scroll-mt-24">
      <h2 className="text-sm font-semibold text-foreground">Cursor</h2>
      <p className="text-sm text-foreground-muted">
        Tailwind v4{" "}
        <a
          href="https://tailwindcss.com/docs/upgrade-guide#buttons-use-the-default-cursor"
          className="text-accent hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          switched
        </a>{" "}
        from <InlineCode>cursor: pointer</InlineCode> to{" "}
        <InlineCode>cursor: default</InlineCode> for the button component.
      </p>
      <p className="text-sm text-foreground-muted">
        If you want to keep the <InlineCode>cursor: pointer</InlineCode>{" "}
        behavior, add the following code to your CSS file:
      </p>
      <p className="text-sm text-foreground-muted">
        You can also enable this during project setup with{" "}
        <InlineCode>npx digital-ui init --pointer</InlineCode>.
      </p>
      <HighlightedCode
        html={highlightedInline["__cursor__"]!.codeHtml!}
        className="shiki-wrapper"
      />
    </section>
  );
}
