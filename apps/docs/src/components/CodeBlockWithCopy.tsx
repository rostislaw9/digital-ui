import { CopyButton } from "./CopyButton";
import { HighlightedCode } from "./HighlightedCode";

export function CodeBlockWithCopy({
  rawCode,
  html,
  lang,
  lineNumbers = true,
}: {
  rawCode: string;
  html: string;
  lang?: string;
  lineNumbers?: boolean;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-surface">
      <div className="absolute right-2.5 top-2.5 z-10 bg-inherit">
        <CopyButton text={rawCode} />
      </div>
      <HighlightedCode
        html={html}
        className={lineNumbers ? "shiki-lines" : "shiki-nolines"}
        lang={lang}
      />
    </div>
  );
}
