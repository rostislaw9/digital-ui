import { Link } from "react-router-dom";

import { Glow, Magnetic, Reveal } from "@ionbit-ui/motion";
import { Button } from "@ionbit-ui/ui";

import { componentRegistry } from "../components/registry";
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
} from "../showcase";

const showcaseCards = [
  LoginCard,
  ActivityCard,
  PricingCard,
  StatsCard,
  NewsletterCard,
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
];

// Mobile: split into vertical columns for horizontal scroll.
// 2 columns fully visible + a peek of the 3rd.
const mobileCardsPerColumn = 8;
const mobileColumns = Array.from(
  { length: Math.ceil(showcaseCards.length / mobileCardsPerColumn) },
  (_, i) =>
    showcaseCards.slice(
      i * mobileCardsPerColumn,
      (i + 1) * mobileCardsPerColumn,
    ),
);

export function HomePage() {
  return (
    <div className="flex flex-col gap-24">
      {/* Hero */}
      <section className="flex flex-col items-center gap-6 py-16 text-center">
        <Reveal direction="up">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            React UI system
          </p>
        </Reveal>
        <Reveal direction="up" delay={60}>
          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
            Production interfaces that feel{" "}
            <Glow always variant="text" intensity={0.7}>
              <span className="text-accent">alive</span>
            </Glow>
          </h1>
        </Reveal>
        <Reveal direction="up" delay={120}>
          <p className="max-w-5xl text-lg text-foreground-muted leading-relaxed">
            Ionbit UI is a React component system with a distinctive digital
            visual language and a coherent motion system. Inspired by
            shadcn&apos;s source-ownership model, extended with a motion layer
            and a restrained digital identity — real primitives, polished
            interaction, and the kind of restrained taste that lets your product
            do the talking.
          </p>
        </Reveal>
        <Reveal direction="up" delay={180}>
          <div className="flex flex-wrap justify-center gap-3">
            <Magnetic intensity={0.15}>
              <Glow intensity={0.7}>
                <Button variant="primary" size="lg" asChild>
                  <Link to="/components">Browse components</Link>
                </Button>
              </Glow>
            </Magnetic>
            <Glow intensity={0.7}>
              <Button variant="outline" size="lg" asChild>
                <Link to="/tokens">Design tokens</Link>
              </Button>
            </Glow>
          </div>
        </Reveal>
      </section>

      {/* Showcase — mobile: horizontal scroll, desktop: masonry columns */}
      <section className="relative max-h-[calc(100vh-12rem)] overflow-hidden lg:max-h-[calc(100vh-16rem)]">
        {/* Mobile — horizontal columns, 2 visible + peek of 3rd */}
        <div className="flex gap-6 overflow-x-auto pb-4 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {mobileColumns.map((column, colIdx) => (
            <div key={colIdx} className="flex w-[42vw] shrink-0 flex-col gap-8">
              {column.map((Card, i) => (
                <Card key={i} />
              ))}
            </div>
          ))}
        </div>

        {/* Desktop — masonry columns, section clips overflow with fade */}
        <div className="hidden lg:block">
          <div className="columns-3 gap-8 xl:columns-4 2xl:columns-5">
            {showcaseCards.map((Card, i) => (
              <div key={i} className="break-inside-avoid pb-8">
                <Card />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade shadow — gives the feeling of a limitless list */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </section>

      {/* Component count */}
      <section className="flex flex-col items-center gap-4 py-8 text-center">
        <Reveal direction="up">
          <p className="text-sm text-foreground-muted">
            {componentRegistry.length} components, ready to use. Source-owned,
            accessible, and production-tested.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
