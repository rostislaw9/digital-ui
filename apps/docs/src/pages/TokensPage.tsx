import { Reveal } from "@/components/motion";

import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function TokensPage() {
  useDocumentTitle("Tokens");
  return (
    <div className="flex flex-col gap-12">
      <Reveal direction="up">
        <header className="flex flex-col gap-2">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Design tokens
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            The visual contract
          </h1>
          <p className="max-w-2xl text-foreground-muted">
            Components reference these semantic tokens via Tailwind utilities.
            Retheme by overriding the variables in your CSS — no Tailwind config
            edit required.
          </p>
        </header>
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal direction="up">
          <TokenGroup title="Surfaces">
            <Swatch name="background" var="--background" />
            <Swatch name="surface" var="--surface" />
            <Swatch name="surface-elevated" var="--surface-elevated" />
            <Swatch name="surface-hover" var="--surface-hover" />
          </TokenGroup>
        </Reveal>

        <Reveal direction="up" delay={60}>
          <TokenGroup title="Foreground">
            <Swatch name="foreground" var="--foreground" />
            <Swatch name="foreground-muted" var="--foreground-muted" />
            <Swatch name="foreground-subtle" var="--foreground-subtle" />
          </TokenGroup>
        </Reveal>

        <Reveal direction="up" delay={120}>
          <TokenGroup title="Accent & status">
            <Swatch name="accent" var="--accent" />
            <Swatch name="accent-hover" var="--accent-hover" />
            <Swatch name="accent-muted" var="--accent-muted" />
            <Swatch name="accent-foreground" var="--accent-foreground" />
            <Swatch name="success" var="--success" />
            <Swatch name="warning" var="--warning" />
            <Swatch name="error" var="--error" />
            <Swatch name="error-foreground" var="--error-foreground" />
            <Swatch name="info" var="--info" />
          </TokenGroup>
        </Reveal>

        <Reveal direction="up" delay={180}>
          <TokenGroup title="Borders & ring">
            <Swatch name="border" var="--border" />
            <Swatch name="border-strong" var="--border-strong" />
            <Swatch name="border-accent" var="--border-accent" />
            <Swatch name="border-error" var="--border-error" />
            <Swatch name="ring" var="--ring" />
          </TokenGroup>
        </Reveal>
      </div>
      <Reveal direction="up">
        <TokenGroup title="Typography">
          <div className="grid gap-2 font-mono text-xs text-foreground-muted sm:grid-cols-2">
            <Row k="--font-sans" v="ui-sans-serif, system-ui, ..." />
            <Row k="--font-mono" v="ui-monospace, SF Mono, ..." />
            <Row k="--text-xs" v="0.75rem" />
            <Row k="--text-sm" v="0.875rem" />
            <Row k="--text-base" v="1rem" />
            <Row k="--text-lg" v="1.125rem" />
            <Row k="--text-xl" v="1.25rem" />
            <Row k="--text-2xl" v="1.5rem" />
            <Row k="--text-3xl" v="1.875rem" />
            <Row k="--leading-tight" v="1.2" />
            <Row k="--leading-normal" v="1.5" />
            <Row k="--leading-relaxed" v="1.65" />
            <Row k="--tracking-tight" v="-0.01em" />
            <Row k="--tracking-normal" v="0" />
            <Row k="--tracking-wide" v="0.02em" />
            <Row k="--weight-normal" v="400" />
            <Row k="--weight-medium" v="500" />
            <Row k="--weight-semibold" v="600" />
            <Row k="--weight-bold" v="700" />
          </div>
        </TokenGroup>
      </Reveal>
      <Reveal direction="up">
        <TokenGroup title="Spacing">
          <div className="grid gap-2 font-mono text-xs text-foreground-muted sm:grid-cols-2">
            <Row k="--space-1" v="0.25rem" />
            <Row k="--space-2" v="0.5rem" />
            <Row k="--space-3" v="0.75rem" />
            <Row k="--space-4" v="1rem" />
            <Row k="--space-5" v="1.25rem" />
            <Row k="--space-6" v="1.5rem" />
            <Row k="--space-8" v="2rem" />
            <Row k="--space-10" v="2.5rem" />
            <Row k="--space-12" v="3rem" />
            <Row k="--space-16" v="4rem" />
          </div>
        </TokenGroup>
      </Reveal>
      <Reveal direction="up">
        <TokenGroup title="Radius">
          <div className="flex flex-wrap items-end gap-4">
            {(["sm", "md", "lg", "xl", "full"] as const).map((r) => (
              <div key={r} className="flex flex-col items-center gap-2">
                <div
                  className="h-16 w-16 border border-border-strong bg-surface-elevated"
                  style={{ borderRadius: `var(--radius-${r})` }}
                />
                <span className="font-mono text-xs text-foreground-muted">
                  {r}
                </span>
              </div>
            ))}
          </div>
        </TokenGroup>
      </Reveal>
      <Reveal direction="up">
        <TokenGroup title="Shadows">
          <div className="flex flex-wrap gap-6 rounded-lg border border-border bg-surface p-6">
            {(["xs", "sm", "md", "lg"] as const).map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <div
                  className="h-16 w-16 rounded-md bg-surface-elevated"
                  style={{ boxShadow: `var(--shadow-${s})` }}
                />
                <span className="font-mono text-xs text-foreground-muted">
                  {s}
                </span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-2">
              <div
                className="h-16 w-16 rounded-md bg-surface-elevated"
                style={{ boxShadow: "var(--shadow-glow)" }}
              />
              <span className="font-mono text-xs text-foreground-muted">
                glow
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="h-16 w-16 rounded-md bg-surface-elevated"
                style={{ boxShadow: "var(--shadow-glow-error)" }}
              />
              <span className="font-mono text-xs text-foreground-muted">
                glow-error
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="h-16 w-16 rounded-md bg-surface-elevated"
                style={{ boxShadow: "var(--shadow-focus)" }}
              />
              <span className="font-mono text-xs text-foreground-muted">
                focus
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="h-16 w-16 rounded-md bg-surface-elevated"
                style={{ boxShadow: "var(--shadow-focus-error)" }}
              />
              <span className="font-mono text-xs text-foreground-muted">
                focus-error
              </span>
            </div>
          </div>
        </TokenGroup>
      </Reveal>
      <Reveal direction="up">
        <TokenGroup title="Motion">
          <div className="grid gap-2 font-mono text-xs text-foreground-muted sm:grid-cols-2">
            <Row k="--duration-fast" v="140ms" />
            <Row k="--duration-normal" v="220ms" />
            <Row k="--duration-slow" v="420ms" />
            <Row k="--ease-standard" v="cubic-bezier(.2,.8,.2,1)" />
            <Row k="--ease-emphasized" v="cubic-bezier(.3,0,0,1)" />
            <Row k="--ease-exit" v="cubic-bezier(.4,0,1,1)" />
          </div>
        </TokenGroup>
      </Reveal>
      <Reveal direction="up">
        <TokenGroup title="Effect intensities">
          <div className="grid gap-2 font-mono text-xs text-foreground-muted sm:grid-cols-2">
            <Row k="--spotlight-intensity" v="0.4" />
            <Row k="--magnetic-intensity" v="0.25" />
          </div>
        </TokenGroup>
      </Reveal>
      <Reveal direction="up">
        <TokenGroup title="Animations">
          <div className="grid gap-2 font-mono text-xs text-foreground-muted sm:grid-cols-2">
            <Row
              k="--animate-accordion-down"
              v="accordion-down 220ms ease-standard"
            />
            <Row
              k="--animate-accordion-up"
              v="accordion-up 220ms ease-standard"
            />
          </div>
        </TokenGroup>
      </Reveal>
    </div>
  );
}

function TokenGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Swatch({ name, var: v }: { name: string; var: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="h-10 w-10 rounded-md border border-border-strong"
        style={{ backgroundColor: `var(${v})` }}
      />
      <div className="flex flex-col">
        <span className="text-sm text-foreground">{name}</span>
        <span className="font-mono text-xs text-foreground-muted">{v}</span>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-md border border-border bg-surface px-3 py-2">
      <span className="text-foreground">{k}</span>
      <span className="text-foreground-muted">{v}</span>
    </div>
  );
}
