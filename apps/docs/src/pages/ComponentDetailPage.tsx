import { Button, Toaster, cn } from "@digital-ui/ui";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AccessibilityList } from "../components/detail/AccessibilityList.js";
import { ApiTable } from "../components/detail/ApiTable.js";
import { CompositionSection } from "../components/detail/CompositionSection.js";
import { OnThisPage } from "../components/detail/OnThisPage.js";
import { PrevNextNav } from "../components/detail/PrevNextNav.js";
import { UsageSection } from "../components/detail/UsageSection.js";
import { InstallBlock } from "../components/InstallBlock.js";
import { PreviewCodeBlock } from "../components/PreviewCodeBlock.js";
import { componentRegistry } from "../components/registry.js";
import { useScrollSpy, type Section } from "../hooks/useScrollSpy.js";

function toSectionId(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function ComponentDetailPage() {
  const { name } = useParams<{ name: string }>();
  const comp = componentRegistry.find((c) => c.name === name);
  const [activeExample, setActiveExample] = useState(0);

  useEffect(() => {
    setActiveExample(0);
  }, [name]);

  // Build the "On this page" sections dynamically
  const sections: Section[] = [{ id: "preview", label: "Preview" }];
  sections.push({ id: "installation", label: "Installation" });
  if (comp?.usageImport && comp.usageCode)
    sections.push({ id: "usage", label: "Usage" });
  if (comp?.composition)
    sections.push({ id: "composition", label: "Composition" });
  if (comp?.props && comp.props.length > 0)
    sections.push({ id: "api", label: "API" });
  if (comp?.accessibility && comp.accessibility.length > 0)
    sections.push({ id: "accessibility", label: "Accessibility" });
  if (comp?.primitives) {
    for (const primitive of comp.primitives) {
      const id = `primitive-${toSectionId(primitive.name)}`;
      sections.push({ id, label: `${primitive.name} API` });
    }
  }

  const { activeSection, handleSectionClick } = useScrollSpy(
    sections.map((s) => s.id),
    sections.map((s) => s.id).join(","),
  );

  if (!comp) {
    return (
      <div className="flex flex-col items-center gap-4 py-20 text-center">
        <h1 className="text-2xl font-semibold text-foreground">
          Component not found
        </h1>
        <p className="text-sm text-foreground-muted">
          No component named &quot;{name}&quot;.
        </p>
        <Link to="/components" className="text-sm text-accent hover:underline">
          ← Back to all components
        </Link>
      </div>
    );
  }

  const example = comp.examples[activeExample] ?? comp.examples[0];
  if (!example) return null;

  return (
    <>
      <div className="flex gap-12">
        {/* Main content */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Link
                to="/components"
                className="text-sm text-foreground-muted hover:text-foreground transition-colors"
              >
                ← Components
              </Link>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                  {comp.label}
                </h1>
                <span className="font-mono text-[10px] uppercase tracking-wider rounded bg-accent-muted text-accent px-2 py-0.5">
                  {comp.category}
                </span>
                {comp.radixBased && (
                  <span className="font-mono text-[10px] uppercase tracking-wider rounded border border-border text-foreground-subtle px-2 py-0.5">
                    Radix
                  </span>
                )}
              </div>
              <p className="max-w-2xl text-foreground-muted">
                {comp.description}
              </p>
            </div>

            {comp.examples.length > 1 && (
              <div className="flex flex-wrap gap-1">
                {comp.examples.map((ex, i) => (
                  <Button
                    key={ex.title}
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveExample(i)}
                    className={cn(
                      activeExample === i &&
                        "bg-accent-muted text-accent hover:bg-accent-muted hover:text-accent",
                    )}
                  >
                    {ex.title}
                  </Button>
                ))}
              </div>
            )}

            <section id="preview" className="flex flex-col gap-3 scroll-mt-24">
              <h2 className="text-sm font-semibold text-foreground">
                {example.title}
              </h2>
              <p className="text-sm text-foreground-muted">
                {example.description}
              </p>
              <PreviewCodeBlock
                key={`${name}-${activeExample}`}
                preview={example.render()}
                code={example.code}
              />
            </section>

            <section
              id="installation"
              className="flex flex-col gap-3 scroll-mt-24"
            >
              <h2 className="text-sm font-semibold text-foreground">
                Installation
              </h2>
              <InstallBlock name={comp.name} />
              {comp.radixBased && (
                <p className="text-xs text-foreground-subtle">
                  Built on Radix UI — npm dependencies will be installed
                  automatically.
                </p>
              )}
            </section>

            {comp.usageImport && comp.usageCode && (
              <UsageSection
                usageImport={comp.usageImport}
                usageCode={comp.usageCode}
              />
            )}

            {comp.composition && (
              <CompositionSection tree={comp.composition} label={comp.label} />
            )}

            {comp.props && comp.props.length > 0 && (
              <section id="api" className="flex flex-col gap-3 scroll-mt-24">
                <h2 className="text-sm font-semibold text-foreground">API</h2>
                <ApiTable props={comp.props} />
              </section>
            )}

            {comp.accessibility && comp.accessibility.length > 0 && (
              <section
                id="accessibility"
                className="flex flex-col gap-3 scroll-mt-24"
              >
                <h2 className="text-sm font-semibold text-foreground">
                  Accessibility
                </h2>
                <AccessibilityList notes={comp.accessibility} />
              </section>
            )}

            {comp.primitives &&
              comp.primitives.map((primitive) => {
                const sectionId = `primitive-${toSectionId(primitive.name)}`;
                return (
                  <section
                    key={primitive.name}
                    id={sectionId}
                    className="flex flex-col gap-3 scroll-mt-24"
                  >
                    <h2 className="text-sm font-semibold text-foreground">
                      {primitive.name} API
                    </h2>
                    <p className="text-sm text-foreground-muted">
                      {primitive.description}
                    </p>
                    <ApiTable props={primitive.props} />
                    <h3 className="text-xs font-semibold text-foreground-muted">
                      {primitive.name} Accessibility
                    </h3>
                    <AccessibilityList notes={primitive.accessibility} />
                  </section>
                );
              })}

            <PrevNextNav current={comp} registry={componentRegistry} />
          </div>
        </div>

        {/* On this page sidebar */}
        <aside className="hidden w-48 shrink-0 lg:block">
          <div className="sticky top-24">
            <OnThisPage
              sections={sections}
              activeSection={activeSection}
              onSectionClick={handleSectionClick}
            />
          </div>
        </aside>
      </div>
      <Toaster position="bottom-right" />
    </>
  );
}
