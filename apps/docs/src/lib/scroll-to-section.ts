import { TRIGGER_TOP } from "./scroll-constants";

/**
 * Scrolls the target element to TRIGGER_TOP from the top of the viewport.
 * Used by scroll-spy sidebar clicks and URL hash navigation.
 */
export function scrollToSection(
  id: string,
  _sectionIds: string[] = [],
  isScrollingRef?: { current: boolean },
): boolean {
  const el = document.getElementById(id);
  if (!el) return false;

  el.classList.remove("section-flash");
  void el.offsetWidth;
  el.classList.add("section-flash");

  if (isScrollingRef) {
    isScrollingRef.current = true;
    const cleanup = () => {
      isScrollingRef.current = false;
      window.removeEventListener("scrollend", cleanup);
      clearTimeout(fallback);
    };
    const fallback = setTimeout(cleanup, 2000);
    window.addEventListener("scrollend", cleanup, { once: true });
  }

  const targetY = el.getBoundingClientRect().top + window.scrollY - TRIGGER_TOP;
  window.scrollTo({ top: targetY, behavior: "smooth" });
  return true;
}
