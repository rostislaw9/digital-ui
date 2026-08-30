import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Button, ScrollArea, cn } from "@ionbit-ui/ui";

import { componentManifest } from "./registry/manifest";

export function ComponentsSidebar() {
  const { pathname } = useLocation();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef<HTMLAnchorElement | null>(null);
  const [showTopFade, setShowTopFade] = useState(false);
  const [showBottomFade, setShowBottomFade] = useState(true);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const viewport = root.querySelector<HTMLElement>(
      "[data-radix-scroll-area-viewport]",
    );
    if (!viewport) return;

    function update() {
      if (!viewport) return;
      const { scrollTop, scrollHeight, clientHeight } = viewport;
      setShowTopFade(scrollTop > 0);
      setShowBottomFade(scrollTop + clientHeight < scrollHeight - 1);
    }

    update();
    viewport.addEventListener("scroll", update);
    const observer = new ResizeObserver(update);
    observer.observe(viewport);
    return () => {
      viewport.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  // Auto-scroll the active item into view with padding from the faded edges.
  useEffect(() => {
    const el = activeRef.current;
    const viewport = rootRef.current?.querySelector<HTMLElement>(
      "[data-radix-scroll-area-viewport]",
    );
    if (!el || !viewport) return;
    const pad = 48;
    const top = el.offsetTop - viewport.scrollTop;
    const bottom = top + el.offsetHeight;
    if (top < pad) viewport.scrollTop += top - pad;
    else if (bottom > viewport.clientHeight - pad)
      viewport.scrollTop += bottom - viewport.clientHeight + pad;
  }, [pathname]);

  return (
    <div className="relative h-full">
      <div className="absolute top-12 right-2 bottom-0 w-px bg-[linear-gradient(to_bottom,transparent_0%,var(--border)_10%,var(--border)_90%,transparent_100%)]" />
      <ScrollArea
        ref={rootRef}
        className="h-full [&_[data-orientation=vertical]]:hidden"
      >
        <nav className="flex flex-col items-start gap-1">
          <span className="px-2.5 py-1 text-xs font-semibold text-foreground-subtle">
            Components
          </span>
          {componentManifest.map((comp) => {
            const isActive = pathname === `/components/${comp.name}`;
            return (
              <Button
                key={comp.name}
                asChild
                variant="ghost"
                size="sm"
                className={cn(
                  "text-foreground",
                  isActive &&
                    "bg-accent-muted text-accent hover:bg-accent-muted hover:text-accent",
                )}
              >
                <Link
                  ref={isActive ? activeRef : undefined}
                  to={`/components/${comp.name}`}
                >
                  {comp.label}
                </Link>
              </Button>
            );
          })}
        </nav>
      </ScrollArea>
      {showTopFade && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-background to-transparent" />
      )}
      {showBottomFade && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-background to-transparent" />
      )}
    </div>
  );
}
