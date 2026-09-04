import { TRIGGER_BOTTOM_OFFSET, TRIGGER_TOP } from "./scroll-constants";

/**
 * Shared scroll-to-section logic.
 *
 * Used by both the scroll-spy (On this page sidebar clicks) and the
 * scroll-to-anchor hook (URL hash navigation from SectionHeading links).
 *
 * The target scroll position is computed so that the element's top aligns
 * with the scroll-spy's moving trigger line at that position. This keeps
 * click-to-scroll and scroll-spy perfectly in sync:
 * - Near the top of the page, the trigger line is high, so early sections
 *   scroll less.
 * - Near the bottom, the trigger line is low, so late sections scroll more.
 * - First section scrolls to page top; last section scrolls to page bottom.
 *
 * Applies the `section-flash` attention animation to the target element.
 */
export function scrollToSection(
  id: string,
  sectionIds: string[],
  isScrollingRef?: { current: boolean },
): boolean {
  const el = document.getElementById(id);
  if (!el) return false;

  const viewportHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;
  const maxScroll = Math.max(1, docHeight - viewportHeight);

  const firstId = sectionIds[0];
  const lastId = sectionIds[sectionIds.length - 1];

  const bottom = viewportHeight - TRIGGER_BOTTOM_OFFSET;
  const range = bottom - TRIGGER_TOP;

  let targetY: number;

  if (id === firstId) {
    targetY = 0;
  } else if (id === lastId) {
    targetY = maxScroll;
  } else {
    // Solve: elTop - targetY = top + range * (targetY / maxScroll)
    // => targetY = (elTop - top) * maxScroll / (maxScroll + range)
    const elTop = el.getBoundingClientRect().top + window.scrollY;
    targetY = ((elTop - TRIGGER_TOP) * maxScroll) / (maxScroll + range);
  }

  targetY = Math.max(0, Math.min(targetY, maxScroll));

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
