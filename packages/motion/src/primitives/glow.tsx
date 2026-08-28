import { forwardRef, useId, type CSSProperties, type ReactNode } from "react";

import { useInheritedRadius } from "../hooks/use-inherited-radius";
import { motionTokens } from "../tokens";

export interface GlowProps {
  children: ReactNode;
  /**
   * 0..1 — glow strength multiplier.
   * @default motionTokens.intensity.glow
   */
  intensity?: number;
  /** Color override. Defaults to the `--accent` token. */
  color?: string;
  /** Disable the glow entirely. @default false */
  disabled?: boolean;
  /** Trigger the glow on hover of the wrapped element. @default true */
  onHover?: boolean;
  /** Trigger the glow on focus-visible of the wrapped element. @default true */
  onFocus?: boolean;
  /** Always show the glow (not just on hover/focus). @default false */
  always?: boolean;
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
 * Glow — a state-driven accent halo around an element.
 *
 * Implementation: pure CSS `box-shadow` (halo) or `text-shadow` (text)
 * transitions on `:hover` and `:focus-visible` of the wrapped element.
 * No JavaScript animation.
 *
 * Use `always` to show the glow constantly instead of only on hover/focus.
 *
 * For halo variant, the wrapper automatically inherits the wrapped
 * element's border-radius — no need to pass `className` for rounding.
 *
 * Reduced motion: handled globally by the base CSS layer, which collapses
 * transition durations. The glow still appears (it is a state signal, not
 * motion), it just does not animate in.
 */
export const Glow = forwardRef<HTMLSpanElement, GlowProps>(function Glow(
  {
    children,
    intensity = motionTokens.intensity.glow,
    color,
    disabled = false,
    onHover = true,
    onFocus = true,
    always = false,
    variant = "halo",
    className,
    style,
  },
  ref,
) {
  const id = useId().replace(/[:]/g, "");
  const scope = `digital-glow-${id}`;
  const radiusRef = useInheritedRadius<HTMLSpanElement>(style);

  // Merge refs
  const setRef = (el: HTMLSpanElement | null) => {
    radiusRef.current = el;
    if (typeof ref === "function") ref(el);
    else if (ref) ref.current = el;
  };

  if (disabled) return <>{children}</>;

  const glowColor = color ?? "var(--accent, oklch(0.62 0.19 230))";
  const isText = variant === "text";

  const maxBlur = isText
    ? Math.round(16 * intensity)
    : Math.round(20 * intensity);
  const maxAlpha = Math.round(70 * intensity);

  const shadow = isText
    ? `0 0 ${maxBlur}px color-mix(in oklab, ${glowColor} ${maxAlpha}%, transparent)`
    : `0 0 ${maxBlur}px -2px color-mix(in oklab, ${glowColor} ${maxAlpha}%, transparent)`;

  const transitionProp = isText ? "text-shadow" : "box-shadow";
  const transitionPropCamel = isText ? "textShadow" : "boxShadow";

  const wrapperStyle: CSSProperties = {
    display: "inline-flex",
    transition: `${transitionProp} ${motionTokens.duration.fast}ms var(--ease-standard, ease-out)`,
    ...(always ? { [transitionPropCamel]: shadow } : {}),
    ...style,
  };

  const selectors: string[] = [];
  if (onHover) selectors.push(`.${scope}:hover`);
  if (onFocus) selectors.push(`.${scope}:focus-within`);
  const selectorStr = selectors.length > 0 ? selectors.join(", ") : null;

  return (
    <>
      {selectorStr && (
        <style>{`
          .${scope}:hover,
          .${scope}:focus-within {
            ${transitionProp}: ${shadow};
          }
        `}</style>
      )}
      <span ref={setRef} className={cn(scope, className)} style={wrapperStyle}>
        {children}
      </span>
    </>
  );
});

// Local cn to avoid pulling tailwind-merge into the motion package.
function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
