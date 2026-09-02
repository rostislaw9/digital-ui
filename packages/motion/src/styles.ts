// Single global <style> tag for all motion primitives.
// Injected once on first use; subsequent calls are no-ops.

const STYLES = `
/* Reveal — toggled via data-revealed attribute by IntersectionObserver. */
[data-digital-reveal][data-revealed="true"] {
  opacity: 1 !important;
  transform: none !important;
}

/* Glow — hover/focus-driven box-shadow or text-shadow.
   Triggers are controlled via data-glow-hover and data-glow-focus;
   the shadow value is set as a CSS custom property on the element. */
[data-digital-glow][data-glow-hover="true"][data-glow-variant="halo"]:hover,
[data-digital-glow][data-glow-focus="true"][data-glow-variant="halo"]:focus-within {
  box-shadow: var(--glow-shadow);
}

[data-digital-glow][data-glow-hover="true"][data-glow-variant="text"]:hover,
[data-digital-glow][data-glow-focus="true"][data-glow-variant="text"]:focus-within {
  text-shadow: var(--glow-text-shadow);
}

/* Pulse — single shared keyframes; intensity controlled via CSS vars. */
@keyframes ionbit-ui-pulse-halo {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in oklab, var(--pulse-color) 0%, transparent);
  }
  50% {
    box-shadow: 0 0 var(--pulse-blur) var(--pulse-spread)
      color-mix(in oklab, var(--pulse-color) var(--pulse-alpha), transparent);
  }
}

@keyframes ionbit-ui-pulse-text {
  0%, 100% {
    text-shadow: 0 0 0 color-mix(in oklab, var(--pulse-color) 0%, transparent);
  }
  50% {
    text-shadow: 0 0 var(--pulse-blur)
      color-mix(in oklab, var(--pulse-color) var(--pulse-alpha), transparent);
  }
}
`;

let injected = false;

export function ensureMotionStyles(): void {
  if (injected || typeof document === "undefined") return;
  if (document.getElementById("ionbit-ui-motion-styles")) {
    injected = true;
    return;
  }
  const el = document.createElement("style");
  el.id = "ionbit-ui-motion-styles";
  el.textContent = STYLES;
  document.head.appendChild(el);
  injected = true;
}
