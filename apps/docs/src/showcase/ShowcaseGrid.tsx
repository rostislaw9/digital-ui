import { useEffect, useRef } from "react";

import { useReducedMotion } from "@ionbit-ui/motion";
import { cn } from "@ionbit-ui/ui";

import {
  ActivityCard,
  AnalyticsCard,
  ApiKeyCard,
  BillingCard,
  CommandCard,
  DeployCard,
  FeedbackCard,
  IntegrationCard,
  InviteCard,
  LoginCard,
  NewsletterCard,
  NotificationsCard,
  PricingCard,
  ProfileCard,
  SearchCard,
  SecurityCard,
  SettingsCard,
  StatsCard,
  StorageCard,
  TaskCard,
  TeamCard,
  UptimeCard,
  WebhookCard,
} from ".";

const showcaseCards = [
  LoginCard,
  StatsCard,
  ActivityCard,
  PricingCard,
  AnalyticsCard,
  SettingsCard,
  TeamCard,
  FeedbackCard,
  BillingCard,
  ApiKeyCard,
  DeployCard,
  ProfileCard,
  TaskCard,
  NotificationsCard,
  CommandCard,
  StorageCard,
  UptimeCard,
  SearchCard,
  InviteCard,
  SecurityCard,
  WebhookCard,
  IntegrationCard,
  NewsletterCard,
];

const COLUMN_COUNT = 5;

// Per-column speed multipliers for parallax effect.
const columnSpeeds = [0.7, 1.0, 1.3, 0.85, 1.15];

const columns: React.ComponentType[][] = Array.from(
  { length: COLUMN_COUNT },
  () => [],
);
showcaseCards.forEach((card, i) => {
  columns[i % COLUMN_COUNT]!.push(card);
});

// Responsive column visibility: 2 on mobile, 3 on sm, 4 on lg, 5 on xl.
const columnVisibility = [
  "block",
  "block",
  "hidden md:block",
  "hidden lg:block",
  "hidden 2xl:block",
];

const BASE_PX_PER_SECOND = 120;

// Detect touch devices — no waterfall animation on touch.
function isTouchDevice() {
  return (
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0)
  );
}

export function ShowcaseGrid() {
  const reduced = useReducedMotion();
  const columnRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (reduced || isTouchDevice()) return;

    // Snapshot refs so cleanup uses the same nodes.
    const refs = columnRefs.current;

    let rafId = 0;
    let cancelled = false;

    // Damping: animation slows down and stops after DAMP_DURATION.
    const DAMP_DURATION = 1300;
    const startTime = performance.now();

    const start = () => {
      if (cancelled) return;

      // Measure each column's single-set height.
      const heights: number[] = [];
      const speeds: number[] = [];
      refs.forEach((el, i) => {
        if (!el) {
          heights[i] = 0;
          return;
        }
        heights[i] = Math.round(el.scrollHeight / 2);
        speeds[i] = BASE_PX_PER_SECOND / (columnSpeeds[i] ?? 1);
      });

      // Start each column at a different offset so they don't all
      // show the same cards at the top.
      const offsets = heights.map((h) => -Math.round(h * Math.random()));

      // Apply initial positions immediately.
      refs.forEach((el, i) => {
        if (!el || !heights[i]) return;
        el.style.transform = `translateY(${offsets[i]}px)`;
      });

      let lastTime = performance.now();

      const tick = (now: number) => {
        if (cancelled) return;

        const delta = now - lastTime;
        lastTime = now;

        // Damping factor: 1 at start, 0 after DAMP_DURATION.
        const elapsed = now - startTime;
        const damp = Math.max(0, 1 - elapsed / DAMP_DURATION);

        if (damp > 0) {
          refs.forEach((el, i) => {
            const h = heights[i];
            const sp = speeds[i];
            if (!el || !h || !sp) return;
            let y = (offsets[i] ?? 0) + (sp / 1000) * delta * damp;
            if (y >= 0) {
              y -= h;
            }
            offsets[i] = y;
            el.style.transform = `translateY(${y}px)`;
          });
          rafId = requestAnimationFrame(tick);
        }
      };

      rafId = requestAnimationFrame(tick);
    };

    // Wait for fonts to load before measuring.
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) start();
      });
    } else {
      start();
    }

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      refs.forEach((el) => {
        if (el) el.style.transform = "";
      });
    };
  }, [reduced]);

  return (
    <section className="relative h-[800px] overflow-clip sm:h-[900px] md:h-[1000px] lg:h-[1100px] xl:h-[1200px] 2xl:h-[1300px]">
      {/* Top fade — cards appear from here */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-background to-transparent" />

      {/* Waterfall columns */}
      <div className="flex items-start gap-2 px-2 md:gap-3 md:px-3 xl:gap-4 xl:px-4 2xl:gap-5 2xl:px-5">
        {columns.map((column, i) => (
          <div key={i} className={cn("min-w-0 flex-1", columnVisibility[i])}>
            <div className="[zoom:0.5] sm:[zoom:0.7] xl:[zoom:1]">
              <div
                ref={(el) => {
                  columnRefs.current[i] = el;
                }}
                className="flex w-full flex-col [will-change:transform]"
              >
                {[...column, ...column].map((Card, j) => (
                  <div key={j} className="pb-3 md:pb-4 2xl:pb-5">
                    <Card />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom fade — cards disappear here */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
