interface HighlightedCodeProps {
  /** Pre-highlighted HTML from Shiki (generated at build time). */
  html: string;
  className?: string;
}

/**
 * Renders pre-highlighted HTML from Shiki.
 * All highlighting is done at build time via the `?highlighted` Vite plugin
 * — no Shiki runtime in the browser bundle.
 */
export function HighlightedCode({ html, className }: HighlightedCodeProps) {
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
