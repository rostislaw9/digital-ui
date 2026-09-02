import { useEffect, useRef, type MutableRefObject } from "react";

/**
 * Reads the first child's computed border-radius and applies it to the
 * wrapper element. This lets motion wrappers (Glow, Pulse, Spotlight)
 * automatically match the wrapped element's rounded corners without
 * requiring the user to pass a `className` for the radius.
 *
 * @returns A ref to attach to the wrapper element.
 */
export function useInheritedRadius<
  T extends HTMLElement = HTMLElement,
>(): MutableRefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const child = el.firstElementChild as HTMLElement | null;
    if (!child) return;

    const childRadius = getComputedStyle(child).borderRadius;
    if (childRadius && childRadius !== "0px") {
      el.style.borderRadius = childRadius;
    }
  }, []);

  return ref;
}
