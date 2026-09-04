import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { scrollToSection } from "../lib/scroll-to-section";

/**
 * Scrolls to the element matching the URL hash on mount and whenever
 * the hash changes (including navigation between pages with a hash).
 *
 * Waits for the target element to appear in the DOM (the registry
 * metadata is lazy-loaded, so sections may not exist on first render).
 *
 * Uses the same `scrollToSection` logic as the scroll-spy so both
 * sidebar clicks and heading-link clicks scroll to the same position.
 */
export function useScrollToAnchor(sectionIds: string[]) {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    if (!id) return;

    const tryScroll = () => scrollToSection(id, sectionIds);

    // Try immediately, then retry for up to ~1s (lazy-loaded content).
    if (tryScroll()) return;

    const attempts: number[] = [];
    const maxAttempts = 20;
    for (let i = 0; i < maxAttempts; i++) {
      attempts.push(
        window.setTimeout(
          () => {
            if (tryScroll()) {
              attempts.forEach(clearTimeout);
            }
          },
          50 * (i + 1),
        ),
      );
    }

    return () => {
      attempts.forEach(clearTimeout);
    };
  }, [hash, sectionIds]);
}
