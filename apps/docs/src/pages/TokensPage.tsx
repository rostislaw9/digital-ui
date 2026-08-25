export function TokensPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="flex flex-col gap-2">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
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

      <TokenGroup title="Surfaces">
        <Swatch name="background" var="--background" />
        <Swatch name="surface" var="--surface" />
        <Swatch name="surface-elevated" var="--surface-elevated" />
        <Swatch name="surface-hover" var="--surface-hover" />
      </TokenGroup>

      <TokenGroup title="Foreground">
        <Swatch name="foreground" var="--foreground" />
        <Swatch name="foreground-muted" var="--foreground-muted" />
        <Swatch name="foreground-subtle" var="--foreground-subtle" />
      </TokenGroup>

      <TokenGroup title="Accent & status">
        <Swatch name="accent" var="--accent" />
        <Swatch name="accent-hover" var="--accent-hover" />
        <Swatch name="accent-muted" var="--accent-muted" />
        <Swatch name="success" var="--success" />
        <Swatch name="warning" var="--warning" />
        <Swatch name="error" var="--error" />
        <Swatch name="info" var="--info" />
      </TokenGroup>

      <TokenGroup title="Borders & ring">
        <Swatch name="border" var="--border" />
        <Swatch name="border-strong" var="--border-strong" />
        <Swatch name="border-accent" var="--border-accent" />
        <Swatch name="ring" var="--ring" />
      </TokenGroup>

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
              style={{ boxShadow: "var(--shadow-focus)" }}
            />
            <span className="font-mono text-xs text-foreground-muted">
              focus
            </span>
          </div>
        </div>
      </TokenGroup>

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
