import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { useReducedMotion } from "../hooks/use-reduced-motion";
import { motionTokens } from "../tokens";

export interface SpotlightProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  children: ReactNode;
  /**
   * 0..1 — how strong the radial highlight is.
   * @default motionTokens.intensity.spotlight
   */
  intensity?: number;
  /** Radius of the spotlight in px. @default 220 */
  radius?: number;
  /** Disable the effect entirely (keeps the wrapper DOM). @default false */
  disabled?: boolean;
  /** Render as a different element. @default "div" */
  as?: "div" | "section" | "article" | "li" | "button";
  /**
   * How far (in px) the effect starts before the cursor reaches the element.
   * The spotlight activates when the pointer is within this distance of the
   * element's bounding box.
   * @default 0
   */
  proximity?: number;
}

/**
 * Spotlight — a pointer-following radial highlight for surfaces.
 *
 * Implementation: a window-level `pointermove` listener tracks the cursor
 * and activates the highlight when it comes within `proximity` px of the
 * element's bounding box. The highlight position is updated via CSS custom
 * properties (`--digital-spot-x/y`) on a `requestAnimationFrame`-throttled
 * callback, so no JavaScript animation loop runs while the pointer is idle.
 *
 * Reduced motion: the effect is disabled entirely. The surface remains
 * fully usable; spotlight is purely decorative.
 */
export const Spotlight = forwardRef<HTMLDivElement, SpotlightProps>(
  function Spotlight(
    {
      children,
      intensity = motionTokens.intensity.spotlight,
      radius = 220,
      disabled = false,
      proximity = 0,
      as: Tag = "div",
      style,
      onPointerMove,
      onPointerLeave,
      ...rest
    },
    ref,
  ) {
    const reduced = useReducedMotion();
    const frame = useRef<number | null>(null);
    const innerRef = useRef<HTMLDivElement | null>(null);
    const activeRef = useRef(false);
    const rectRef = useRef<DOMRect | null>(null);

    const enabled = !disabled && !reduced;

    // Cache the bounding rect and refresh on scroll/resize to avoid
    // calling getBoundingClientRect on every pointermove event.
    const refreshRect = useCallback(() => {
      const el = innerRef.current;
      if (!el) return;
      rectRef.current = el.getBoundingClientRect();
    }, []);

    const updateSpotlight = useCallback(
      (clientX: number, clientY: number) => {
        const el = innerRef.current;
        if (!el) return;
        const rect = rectRef.current ?? el.getBoundingClientRect();
        const expandedRect = {
          left: rect.left - proximity,
          top: rect.top - proximity,
          right: rect.right + proximity,
          bottom: rect.bottom + proximity,
        };
        const inside =
          clientX >= expandedRect.left &&
          clientX <= expandedRect.right &&
          clientY >= expandedRect.top &&
          clientY <= expandedRect.bottom;

        if (frame.current != null) cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(() => {
          const el2 = innerRef.current;
          if (!el2) return;
          if (inside) {
            const x = clientX - rect.left;
            const y = clientY - rect.top;
            el2.style.setProperty("--digital-spot-x", `${x}px`);
            el2.style.setProperty("--digital-spot-y", `${y}px`);
            el2.style.setProperty("--digital-spot-opacity", String(intensity));
            activeRef.current = true;
          } else if (activeRef.current) {
            el2.style.setProperty("--digital-spot-opacity", "0");
            activeRef.current = false;
          }
          frame.current = null;
        });
      },
      [intensity, proximity],
    );

    useEffect(() => {
      if (!enabled) return;
      refreshRect();
      const handleMove = (e: PointerEvent) => {
        updateSpotlight(e.clientX, e.clientY);
      };
      window.addEventListener("pointermove", handleMove, { passive: true });
      window.addEventListener("scroll", refreshRect, { passive: true });
      window.addEventListener("resize", refreshRect, { passive: true });
      return () => {
        window.removeEventListener("pointermove", handleMove);
        window.removeEventListener("scroll", refreshRect);
        window.removeEventListener("resize", refreshRect);
        if (frame.current != null) cancelAnimationFrame(frame.current);
      };
    }, [enabled, updateSpotlight, refreshRect]);

    // Inherit border-radius from the actual content child (not the overlay).
    // The wrapper has overflow:hidden, so the overlay is clipped to the
    // wrapper's radius. We read the content's radius and apply it to the
    // wrapper so the clip matches the visual shape of the wrapped element.
    useEffect(() => {
      const el = innerRef.current;
      if (!el) return;
      // The content wrapper is the last child span (display:contents).
      // Its first child is the actual user content (e.g. Card).
      const contentWrapper = el.lastElementChild as HTMLElement | null;
      if (!contentWrapper) return;
      const contentChild =
        contentWrapper.firstElementChild as HTMLElement | null;
      if (!contentChild) return;
      const childRadius = getComputedStyle(contentChild).borderRadius;
      if (childRadius && childRadius !== "0px") {
        el.style.borderRadius = childRadius;
      }
    }, [children]);

    const handlePointerMove = useCallback(
      (e: React.PointerEvent<HTMLDivElement>) => {
        onPointerMove?.(e);
      },
      [onPointerMove],
    );

    const handlePointerLeave = useCallback(
      (e: React.PointerEvent<HTMLDivElement>) => {
        onPointerLeave?.(e);
      },
      [onPointerLeave],
    );

    const surfaceStyle: CSSProperties = {
      // The spotlight layer reads these variables. Defaults keep it hidden
      // until the pointer enters proximity.
      ["--digital-spot-x" as string]: "50%",
      ["--digital-spot-y" as string]: "50%",
      ["--digital-spot-opacity" as string]: "0",
      ["--digital-spot-radius" as string]: `${radius}px`,
      position: "relative",
      isolation: "isolate",
      // Clip the overlay to the wrapper's border radius. The radius is
      // automatically inherited from the first child element.
      overflow: "hidden",
      ...style,
    };

    const Comp = Tag as "div";

    return (
      <Comp
        {...rest}
        ref={(node: HTMLDivElement | null) => {
          innerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        style={surfaceStyle}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        {enabled && (
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              pointerEvents: "none",
              opacity: "var(--digital-spot-opacity)",
              transition: `opacity ${motionTokens.duration.fast}ms var(--ease-standard, ${motionTokens.easing.standard[2]})`,
              background:
                "radial-gradient(var(--digital-spot-radius) circle at var(--digital-spot-x) var(--digital-spot-y), color-mix(in oklab, var(--accent, oklch(0.82 0.16 220)) 18%, transparent), transparent 70%)",
              zIndex: 0,
            }}
          />
        )}
        <span style={{ position: "relative", zIndex: 1, display: "contents" }}>
          {children}
        </span>
      </Comp>
    );
  },
);
