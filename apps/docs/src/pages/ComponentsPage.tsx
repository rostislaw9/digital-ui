import { useState } from "react";
import { Link } from "react-router-dom";

import { Reveal } from "@ionbit-ui/motion";
import { Badge, Button, cn, Input } from "@ionbit-ui/ui";

import {
  componentCategories,
  componentRegistry,
} from "../components/registry.js";

export function ComponentsPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = componentRegistry.filter((c) => {
    const matchesQuery =
      c.label.toLowerCase().includes(query.toLowerCase()) ||
      c.description.toLowerCase().includes(query.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || c.category === activeCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="flex flex-col gap-8">
      <Reveal direction="up">
        <header className="flex flex-col gap-2">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Component browser
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            All components
          </h1>
          <p className="max-w-2xl text-foreground-muted">
            {componentRegistry.length} production-ready primitives. Click any
            component for live previews, code, and API details.
          </p>
        </header>
      </Reveal>

      <Reveal direction="up">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Input
            placeholder="Search components..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full max-w-xs"
          />
          <div className="flex flex-wrap gap-1">
            {["All", ...componentCategories].map((cat) => (
              <Button
                key={cat}
                variant="ghost"
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "text-xs",
                  activeCategory === cat &&
                    "bg-accent-muted text-accent hover:bg-accent-muted hover:text-accent",
                )}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((comp, i) => (
          <Reveal key={comp.name} direction="up" delay={(i % 3) * 60}>
            <Link
              to={`/components/${comp.name}`}
              className="group flex h-full flex-col gap-3 rounded-lg border border-border bg-surface p-5 transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:border-border-strong hover:bg-surface-hover"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-[var(--duration-fast)]">
                    {comp.label}
                  </h3>
                  {comp.isNew && <Badge variant="accent">New</Badge>}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-foreground-subtle">
                  {comp.category}
                </span>
              </div>
              <p className="text-sm text-foreground-muted leading-relaxed line-clamp-2">
                {comp.description}
              </p>
              <div className="mt-auto flex items-center gap-1 text-xs text-foreground-subtle">
                <span>
                  {comp.examples.length} example
                  {comp.examples.length > 1 ? "s" : ""}
                </span>
                <span>→</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center gap-2 py-16 text-center">
          <p className="text-sm text-foreground-muted">No components found.</p>
          <Button
            variant="link"
            size="sm"
            onClick={() => {
              setQuery("");
              setActiveCategory("All");
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
}
