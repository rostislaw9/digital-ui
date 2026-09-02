import {
  forwardRef,
  useEffect,
  useRef,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { useReducedMotion } from "../hooks/use-reduced-motion";
import { ensureMotionStyles } from "../styles";
import { motionTokens } from "../tokens";

export interface RevealProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  children: ReactNode;
  /** Direction the content reveals from. @default "up" */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Distance in px. @default 12 */
  distance?: number;
  /** Delay in ms. @default 0 */
  delay?: number;
  /** Disable the reveal (content appears instantly). @default false */
  disabled?: boolean;
  /** Animate only once (default) or every time it enters the viewport. */
  once?: boolean;
  /** Threshold for IntersectionObserver. @default 0.15 */
  threshold?: number;
}

/**
 * Reveal — an in-view entrance animation.
 *
 * Implementation: `IntersectionObserver` toggles a `data-revealed` attribute;
 * the actual transition is CSS (transform + opacity), compositor-only.
 *
 * Reduced motion: the effect is disabled entirely. Content appears
 * immediately at full opacity with no transform.
 *
 * Performance: no JavaScript animation loop. The observer only fires on
 * enter/leave. The transition runs on the compositor.
 */
export const Reveal = forwardRef<HTMLDivElement, RevealProps>(function Reveal(
  {
    children,
    direction = "up",
    distance = 12,
    delay = 0,
    disabled = false,
    once = true,
    threshold = 0.15,
    style,
    ...rest
  },
  ref,
) {
  const reduced = useReducedMotion();
  const enabled = !disabled && !reduced;
  const innerRef = useRef<HTMLDivElement | null>(null);

  ensureMotionStyles();

  useEffect(() => {
    if (!enabled) return;
    const el = innerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      // No IO support — show immediately.
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            entry.target.removeAttribute("data-revealed");
          }
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [enabled, once, threshold]);

  const initialTransform = (() => {
    if (!enabled) return "none";
    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0)`;
      case "down":
        return `translate3d(0, -${distance}px, 0)`;
      case "left":
        return `translate3d(${distance}px, 0, 0)`;
      case "right":
        return `translate3d(-${distance}px, 0, 0)`;
      default:
        return "none";
    }
  })();

  const baseStyle: CSSProperties = {
    opacity: enabled ? 0 : 1,
    transform: initialTransform,
    transition: `opacity ${motionTokens.duration.normal}ms var(--ease-standard, ease-out) ${delay}ms, transform ${motionTokens.duration.normal}ms var(--ease-standard, ease-out) ${delay}ms`,
    ...style,
  };

  const revealedStyle: CSSProperties = {
    opacity: 1,
    transform: "none",
  };

  return (
    <div
      {...rest}
      ref={(node) => {
        innerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      data-digital-reveal=""
      style={enabled ? baseStyle : { ...baseStyle, ...revealedStyle }}
    >
      {children}
    </div>
  );
});
