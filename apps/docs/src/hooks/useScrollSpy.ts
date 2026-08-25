import { useCallback, useEffect, useRef, useState } from "react";

export interface Section {
  id: string;
  label: string;
}

/**
 * Scroll-spy hook — tracks which section is currently most prominent in the
 * viewport and provides smooth-scroll navigation.
 *
 * Uses the section occupying the vertical center of the screen, with special
 * handling for page top/bottom.
 */
export function useScrollSpy(sectionIds: string[], depKey: string) {
  const [activeSection, setActiveSection] = useState<string>("");
  const isScrollingRef = useRef(false);

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const HEADER_OFFSET = 120;
    const BOTTOM_MARGIN = 4;

    const updateActive = () => {
      if (isScrollingRef.current) return;

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollY <= 0) {
        const firstId = sectionIds[0];
        if (firstId) setActiveSection(firstId);
        return;
      }

      if (scrollY + viewportHeight >= docHeight - BOTTOM_MARGIN) {
        const lastId = sectionIds[sectionIds.length - 1];
        if (lastId) setActiveSection(lastId);
        return;
      }

      const center = HEADER_OFFSET + (viewportHeight - HEADER_OFFSET) / 2;

      let current = sectionIds[0] ?? "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= center && rect.bottom >= center) {
          current = id;
          break;
        }
        if (rect.top <= center) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- depKey encodes section identity
  }, [depKey]);

  const handleSectionClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (!el) return;

      const firstId = sectionIds[0];
      const lastId = sectionIds[sectionIds.length - 1];
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      let targetY: number;

      if (id === firstId) {
        targetY = 0;
      } else if (id === lastId) {
        targetY = docHeight - viewportHeight;
      } else {
        const rect = el.getBoundingClientRect();
        const sectionMidpoint = rect.top + rect.height / 2 + window.scrollY;
        targetY = sectionMidpoint - viewportHeight / 2;
      }

      targetY = Math.max(0, Math.min(targetY, docHeight - viewportHeight));

      history.replaceState(null, "", `#${id}`);
      setActiveSection(id);

      el.classList.remove("section-flash");
      void el.offsetWidth;
      el.classList.add("section-flash");

      isScrollingRef.current = true;
      window.scrollTo({ top: targetY, behavior: "smooth" });

      const cleanup = () => {
        isScrollingRef.current = false;
        window.removeEventListener("scrollend", onScrollEnd);
        clearTimeout(fallback);
      };
      const onScrollEnd = () => cleanup();
      const fallback = setTimeout(cleanup, 2000);
      window.addEventListener("scrollend", onScrollEnd, { once: true });
    },
    [sectionIds],
  );

  return { activeSection, handleSectionClick };
}
