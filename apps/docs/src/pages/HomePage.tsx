import { Glow, Magnetic, Reveal, Spotlight } from "@digital-ui/motion";
import { Button, Input, Progress, Switch } from "@digital-ui/ui";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { componentRegistry } from "../components/registry.js";

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
          <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
            Production interfaces that feel{" "}
            <Glow always variant="text" intensity={0.7}>
              <span className="text-accent">alive</span>
            </Glow>
          </h1>
        </Reveal>
        <Reveal direction="up" delay={120}>
          <p className="max-w-2xl text-lg text-foreground-muted leading-relaxed">
            Digital UI is a React component system with a distinctive digital
            visual language and a coherent motion system. Not a shadcn clone.
            Not a collection of landing-page effects. Real primitives, polished
            interaction, restrained taste.
          </p>
        </Reveal>
        <Reveal direction="up" delay={180}>
          <div className="flex flex-wrap justify-center gap-3">
            <Magnetic intensity={0.7}>
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

      {/* Live demo strip */}
      <section className="grid gap-4 sm:grid-cols-3">
        <Reveal direction="up">
          <DemoCard label="Switch" to="/components/switch">
            <SwitchDemo />
          </DemoCard>
        </Reveal>
        <Reveal direction="up" delay={60}>
          <DemoCard label="Progress" to="/components/progress" fullWidth>
            <ProgressDemo />
          </DemoCard>
        </Reveal>
        <Reveal direction="up" delay={120}>
          <DemoCard label="Input" to="/components/input">
            <InputDemo />
          </DemoCard>
        </Reveal>
      </section>

      {/* Feature grid */}
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          {
            label: "Production primitives",
            body: "Button, Card, Dialog, Tabs, Toast — the components real apps are built from.",
          },
          {
            label: "Coherent motion",
            body: "Shared timing, easing, and reduced-motion tokens enforced across the library.",
          },
          {
            label: "Restrained identity",
            body: "Dark, technical, sophisticated. Hierarchy and typography, not neon and particles.",
          },
        ].map((f, i) => (
          <Reveal key={f.label} direction="up" delay={i * 60}>
            <div className="rounded-lg border border-border bg-surface p-5 h-full">
              <h3 className="text-sm font-semibold text-foreground">
                {f.label}
              </h3>
              <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                {f.body}
              </p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Component count */}
      <section className="flex flex-col items-center gap-6 py-8">
        <Reveal direction="up">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            {componentRegistry.length} components, ready to use
          </h2>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-2">
          {componentRegistry.map((c) => (
            <Link
              key={c.name}
              to={`/components/${c.name}`}
              className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-foreground-muted transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:border-border-strong hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function DemoCard({
  label,
  to,
  children,
  fullWidth = false,
}: {
  label: string;
  to: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}) {
  const navigate = useNavigate();
  return (
    <Spotlight intensity={0.4} proximity={220}>
      {}
      <div
        role="button"
        tabIndex={0}
        onClick={() => navigate(to)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            navigate(to);
          }
        }}
        className="group flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:border-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div className="flex min-h-[80px] items-center justify-center">
          {/* eslint-disable jsx-a11y/no-static-element-interactions -- stop navigation only on the showcased component, not the card padding around it */}
          <div
            className={fullWidth ? "flex w-full" : "inline-flex"}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
            {label}
          </span>
          <span className="text-xs text-foreground-subtle group-hover:text-foreground transition-colors">
            →
          </span>
        </div>
      </div>
    </Spotlight>
  );
}

function SwitchDemo() {
  const [on, setOn] = useState(true);
  return (
    <div className="flex items-center gap-3">
      <Switch checked={on} onCheckedChange={setOn} />
      <span className="text-sm text-foreground-muted">{on ? "On" : "Off"}</span>
    </div>
  );
}

function ProgressDemo() {
  const [value, setValue] = useState(13);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => {
        const next = prev + Math.random() * 15;
        return next >= 100 ? 13 : next;
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);
  return <Progress value={value} className="w-full" />;
}

function InputDemo() {
  const [val, setVal] = useState("");
  return (
    <Input
      placeholder="Try typing..."
      value={val}
      onChange={(e) => setVal(e.target.value)}
    />
  );
}
