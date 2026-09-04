import { useCallback, useEffect, useRef, useState } from "react";

import {
  BOTTOM_MARGIN,
  TRIGGER_BOTTOM_OFFSET,
  TRIGGER_TOP,
} from "../lib/scroll-constants";
import { scrollToSection } from "../lib/scroll-to-section";

export interface Subsection {
  id: string;
  label: string;
}

export interface Section {
  id: string;
  label: string;
  subsections?: Subsection[];
}

/** Flatten sections and their subsections into a list of all IDs. */
export function flattenSectionIds(sections: Section[]): string[] {
  const ids: string[] = [];
  for (const section of sections) {
    ids.push(section.id);
    if (section.subsections) {
      for (const sub of section.subsections) {
        ids.push(sub.id);
      }
    }
  }
  return ids;
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

    let rafId: number | null = null;

    const updateActive = () => {
      if (isScrollingRef.current) return;

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const maxScroll = Math.max(1, docHeight - viewportHeight);

      // The trigger line moves with scroll position:
      // - At the top of the page: near the header (catches early sections)
      // - At the center of the page: at the viewport center
      // - At the bottom of the page: near the bottom (catches late sections)
      const progress = Math.min(1, Math.max(0, scrollY / maxScroll));
      const bottom = viewportHeight - TRIGGER_BOTTOM_OFFSET;
      const triggerLine = TRIGGER_TOP + (bottom - TRIGGER_TOP) * progress;

      let current = sectionIds[0] ?? "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerLine) {
          current = id;
        }
      }

      // At the very bottom, force the last section active.
      if (scrollY + viewportHeight >= docHeight - BOTTOM_MARGIN) {
        current = sectionIds[sectionIds.length - 1] ?? current;
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
