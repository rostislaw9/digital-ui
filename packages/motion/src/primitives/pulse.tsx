import { forwardRef, useId, type CSSProperties, type ReactNode } from "react";

import { useInheritedRadius } from "../hooks/use-inherited-radius";
import { motionTokens } from "../tokens";

export interface PulseProps {
  children: ReactNode;
  /**
   * 0..1 — pulse strength.
   * @default motionTokens.intensity.glow
   */
  intensity?: number;
  /** Color override. Defaults to the `--accent` token. */
  color?: string;
  /** Disable the pulse. @default false */
  disabled?: boolean;
  /** Pulse cycle duration in ms. @default 1600 */
  duration?: number;
  /**
   * Visual variant.
   * - `"halo"` — box-shadow glow around the element bounding box (default).
   * - `"text"` — text-shadow glow that follows individual letter shapes.
   * @default "halo"
   */
  variant?: "halo" | "text";
  className?: string;
  style?: CSSProperties;
}

/**
 * Pulse — a slow, periodic accent halo for active/status states.
 *
 * Implementation: a single CSS `@keyframes` animation on `box-shadow` (halo)
 * or `text-shadow` (text).
 *
 * For halo variant, the wrapper automatically inherits the wrapped
 * element's border-radius — no need to pass `className` for rounding.
 *
 * Reduced motion: the global base CSS layer sets `animation-duration: 0.001ms`
 * under `prefers-reduced-motion: reduce`, so the pulse collapses to a static
 * state. The element remains fully usable; status is communicated by
 * color/shape, not motion.
 *
 * Use sparingly — only for genuinely active states (live status, in-progress).
 * Do not apply to idle components.
 */
export const Pulse = forwardRef<HTMLSpanElement, PulseProps>(function Pulse(
  {
    children,
    intensity = motionTokens.intensity.glow,
    color,
    disabled = false,
    duration = 1600,
    variant = "halo",
    className,
    style,
  },
  ref,
) {
  const id = useId().replace(/:/g, "");
  const keyframeName = `ionbit-ui-pulse-${id}`;
  const radiusRef = useInheritedRadius<HTMLSpanElement>(style);

  // Merge refs
  const setRef = (el: HTMLSpanElement | null) => {
    radiusRef.current = el;
    if (typeof ref === "function") ref(el);
    else if (ref) ref.current = el;
  };

  if (disabled) return <>{children}</>;

  const pulseColor = color ?? "var(--accent, oklch(0.62 0.19 230))";
  const isText = variant === "text";
  const maxBlur = Math.round(40 * intensity);
  const maxAlpha = Math.round(100 * intensity);
  const maxSpread = Math.round(6 * intensity);

  const wrapperStyle: CSSProperties = {
    display: "inline-flex",
    animation: `${keyframeName} ${duration}ms var(--ease-standard, ease-in-out) infinite`,
    ...style,
  };

  const keyframes = isText
    ? `@keyframes ${keyframeName} {
        0%, 100% {
          text-shadow: 0 0 0 color-mix(in oklab, ${pulseColor} 0%, transparent);
        }
        50% {
          text-shadow: 0 0 ${maxBlur}px color-mix(in oklab, ${pulseColor} ${maxAlpha}%, transparent);
        }
      }`
    : `@keyframes ${keyframeName} {
        0%, 100% {
          box-shadow: 0 0 0 0 color-mix(in oklab, ${pulseColor} 0%, transparent);
        }
        50% {
          box-shadow: 0 0 ${maxBlur}px ${maxSpread}px color-mix(in oklab, ${pulseColor} ${maxAlpha}%, transparent);
        }
      }`;

  return (
    <>
      <style>{keyframes}</style>
      <span ref={setRef} className={className} style={wrapperStyle}>
        {children}
      </span>
    </>
  );
});
