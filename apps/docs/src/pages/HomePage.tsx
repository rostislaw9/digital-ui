import { Link } from "react-router-dom";

import { Glow, Magnetic, Reveal } from "@ionbit-ui/motion";
import { Button } from "@ionbit-ui/ui";

import { componentManifest } from "../components/registry/manifest";
import { ShowcaseGrid } from "../showcase";

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

      {/* Showcase grid */}
      <ShowcaseGrid />

      {/* Component count */}
      <section className="flex flex-col items-center gap-4 py-8 text-center">
        <Reveal direction="up">
          <p className="text-sm text-foreground-muted">
            {componentManifest.length} components, ready to use. Source-owned,
            accessible, and production-tested.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
