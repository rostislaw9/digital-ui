// Single global pointer-move listener that broadcasts to all registered
// subscribers. Avoids N separate window-level listeners when multiple
// Magnetic/Spotlight instances are on the page.

type PointerHandler = (clientX: number, clientY: number) => void;

const subscribers = new Set<PointerHandler>();
let listener: ((e: PointerEvent) => void) | null = null;

function ensureListener() {
  if (listener || typeof window === "undefined") return;
  listener = (e: PointerEvent) => {
    for (const handler of subscribers) {
      handler(e.clientX, e.clientY);
    }
  };
  window.addEventListener("pointermove", listener, { passive: true });
}

function maybeRemoveListener() {
  if (subscribers.size > 0 || !listener) return;
  window.removeEventListener("pointermove", listener);
  listener = null;
}

export function subscribePointerMove(handler: PointerHandler): () => void {
  subscribers.add(handler);
  ensureListener();
  return () => {
    subscribers.delete(handler);
    maybeRemoveListener();
  };
}
