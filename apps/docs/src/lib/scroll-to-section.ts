/**
 * Shared scroll-to-section logic.
 *
 * Used by both the scroll-spy (On this page sidebar clicks) and the
 * scroll-to-anchor hook (URL hash navigation from SectionHeading links).
 *
 * - For sections shorter than the viewport: centers the section vertically.
 * - For sections taller than or equal to the viewport: aligns the section
 *   title to the top (with a header offset) so the heading is always visible.
 * - First section scrolls to page top; last section scrolls to page bottom.
 * - Applies the `section-flash` attention animation to the target element.
 */
export function scrollToSection(
  id: string,
  sectionIds: string[],
  isScrollingRef?: { current: boolean },
): boolean {
  const el = document.getElementById(id);
  if (!el) return false;

  const HEADER_OFFSET = 120;
  const viewportHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  const firstId = sectionIds[0];
  const lastId = sectionIds[sectionIds.length - 1];

  let targetY: number;

  if (id === firstId) {
    targetY = 0;
  } else if (id === lastId) {
    targetY = docHeight - viewportHeight;
  } else {
    const rect = el.getBoundingClientRect();
    if (rect.height >= viewportHeight - HEADER_OFFSET) {
      // Tall section: align title to top with header offset.
      targetY = rect.top + window.scrollY - HEADER_OFFSET;
    } else {
      // Short section: center vertically.
      const sectionMidpoint = rect.top + rect.height / 2 + window.scrollY;
      targetY = sectionMidpoint - viewportHeight / 2;
    }
  }

  targetY = Math.max(0, Math.min(targetY, docHeight - viewportHeight));

  // Attention animation — same as scroll-spy.
  el.classList.remove("section-flash");
  void el.offsetWidth;
  el.classList.add("section-flash");

  if (isScrollingRef) {
    isScrollingRef.current = true;
    const cleanup = () => {
      isScrollingRef.current = false;
      window.removeEventListener("scrollend", onScrollEnd);
      clearTimeout(fallback);
    };
    const onScrollEnd = () => cleanup();
    const fallback = setTimeout(cleanup, 2000);
    window.addEventListener("scrollend", onScrollEnd, { once: true });
  }

  window.scrollTo({ top: targetY, behavior: "smooth" });
  return true;
}
