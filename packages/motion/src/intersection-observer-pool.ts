// Shared IntersectionObserver pool — one observer per threshold value.
// Avoids creating N separate observers when many Reveal instances are
// on the page (e.g. ComponentsPage with 30+ cards).

type EntryCallback = (isIntersecting: boolean, target: Element) => void;

interface Subscription {
  callback: EntryCallback;
  once: boolean;
}

const observers = new Map<
  number,
  { io: IntersectionObserver; targets: Map<Element, Set<Subscription>> }
>();

function getPool(threshold: number) {
  let pool = observers.get(threshold);
  if (pool) return pool;

  const targets = new Map<Element, Set<Subscription>>();
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const subs = targets.get(entry.target);
        if (!subs) continue;
        for (const sub of subs) {
          sub.callback(entry.isIntersecting, entry.target);
          if (sub.once && entry.isIntersecting) {
            subs.delete(sub);
            if (subs.size === 0) {
              targets.delete(entry.target);
              io.unobserve(entry.target);
            }
          }
        }
      }
    },
    { threshold },
  );

  pool = { io, targets };
  observers.set(threshold, pool);
  return pool;
}

export function observeIntersection(
  el: Element,
  threshold: number,
  callback: EntryCallback,
  once: boolean,
): () => void {
  if (typeof IntersectionObserver === "undefined") {
    // No IO support — reveal immediately.
    callback(true, el);
    return () => {};
  }

  const pool = getPool(threshold);
  const sub: Subscription = { callback, once };
  let subs = pool.targets.get(el);
  if (!subs) {
    subs = new Set();
    pool.targets.set(el, subs);
    pool.io.observe(el);
  }
  subs.add(sub);

  return () => {
    const s = pool.targets.get(el);
    if (!s) return;
    s.delete(sub);
    if (s.size === 0) {
      pool.targets.delete(el);
      pool.io.unobserve(el);
    }
  };
}
