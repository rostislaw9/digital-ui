import { useCallback, useState } from "react";

/**
 * Hook for the "Copy Page as Markdown" button.
 *
 * Calls the provided markdown generator, writes the result to the
 * clipboard, and tracks a transient "copied" state for UI feedback.
 */
export function useCopyPage(buildMarkdown: () => string) {
  const [pageCopied, setPageCopied] = useState(false);

  const handleCopyPage = useCallback(() => {
    const md = buildMarkdown();
    navigator.clipboard?.writeText(md).then(() => {
      setPageCopied(true);
      setTimeout(() => setPageCopied(false), 2000);
    });
  }, [buildMarkdown]);

  return { pageCopied, handleCopyPage };
}
