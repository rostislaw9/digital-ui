import { useCallback, useEffect, useRef, useState } from "react";

import { scrollToSection } from "../lib/scroll-to-section";

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

    let rafId: number | null = null;

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

    const scheduleUpdate = () => {
      if (rafId != null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        updateActive();
      });
    };

    updateActive();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    return () => {
      if (rafId != null) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- depKey encodes section identity
  }, [depKey]);

  const handleSectionClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      if (!scrollToSection(id, sectionIds, isScrollingRef)) return;
      history.replaceState(null, "", `#${id}`);
      setActiveSection(id);
    },
    [sectionIds],
  );

  return { activeSection, handleSectionClick };
}
