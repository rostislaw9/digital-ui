import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { Button, cn } from "@ionbit-ui/ui";

import { componentManifest } from "../registry/components/manifest";
import { utilManifest } from "../registry/utils/manifest";

export function DocsSidebar() {
  const { pathname } = useLocation();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef<HTMLAnchorElement | null>(null);

  // Auto-scroll the active item into view with padding from the faded edges.
  useEffect(() => {
    const el = activeRef.current;
    const viewport = scrollRef.current;
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
      <div
        ref={scrollRef}
        className="scroll-fade scroll-fade-24 no-scrollbar h-full overflow-y-auto"
      >
        <nav className="flex flex-col items-start gap-1">
          <span className="px-2.5 py-1 text-xs font-semibold text-foreground-subtle">
            Components
          </span>
          {componentManifest.map((comp) => {
            const isActive = pathname === `/docs/components/${comp.name}`;
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
                  to={`/docs/components/${comp.name}`}
                >
                  {comp.label}
                </Link>
              </Button>
            );
          })}

          <span className="mt-4 px-2.5 py-1 text-xs font-semibold text-foreground-subtle">
            Utilities
          </span>
          {utilManifest.map((util) => {
            const isActive = pathname === `/docs/utils/${util.name}`;
            return (
              <Button
                key={util.name}
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
                  to={`/docs/utils/${util.name}`}
                >
                  {util.label}
                </Link>
              </Button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
