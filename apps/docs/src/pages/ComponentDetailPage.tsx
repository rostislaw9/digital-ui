import type { ComponentMeta } from "../components/registry/types";

import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Reveal } from "@ionbit-ui/motion";
import { Badge, Button, cn } from "@ionbit-ui/ui";

import { ComponentsSidebar } from "../components/ComponentsSidebar";
import { AccessibilityList } from "../components/detail/AccessibilityList";
import { ApiTable } from "../components/detail/ApiTable";
import { CompositionSection } from "../components/detail/CompositionSection";
import { CursorSection } from "../components/detail/CursorSection";
import { InstallBlock } from "../components/detail/InstallBlock";
import { OnThisPage } from "../components/detail/OnThisPage";
import { PageActions } from "../components/detail/PageActions";
import { PreviewCodeBlock } from "../components/detail/PreviewCodeBlock";
import { PrevNextNav } from "../components/detail/PrevNextNav";
import { UsageSection } from "../components/detail/UsageSection";
import { componentManifest } from "../components/registry/manifest";
import { useScrollSpy, type Section } from "../hooks/useScrollSpy";
import { componentToMarkdown } from "../lib/component-to-markdown";
import { getPrevNext } from "../lib/getPrevNext";

// Lazy-load registry files — only the requested component's metadata
// (with demos, ?raw, ?highlighted) is imported, not the entire registry.
const registryModules = import.meta.glob<Record<string, ComponentMeta>>(
  "../components/registry/*.tsx",
  { eager: false },
);

// Map component names to their glob keys for O(1) lookup.
// The glob returns keys like "../components/registry/button.tsx".
const registryKeyMap: Record<string, string> = {};
for (const key of Object.keys(registryModules)) {
  const match = key.match(/\/([^/]+)\.tsx$/);
  if (match && match[1]) registryKeyMap[match[1]] = key;
}

// Registry files export named consts (e.g. `buttonMeta`).
// Find the ComponentMeta value in the module.
function findMeta(mod: Record<string, unknown>): ComponentMeta | null {
  for (const value of Object.values(mod)) {
    if (
      value &&
      typeof value === "object" &&
      "name" in value &&
      "examples" in value
    ) {
      return value as ComponentMeta;
    }
  }
  return null;
}

function toSectionId(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function ComponentDetailPage() {
  const { name } = useParams<{ name: string }>();
  const [comp, setComp] = useState<ComponentMeta | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [activeExample, setActiveExample] = useState(0);
  const [pageCopied, setPageCopied] = useState(false);

  const handleCopyPage = () => {
    if (!comp) return;
    const md = componentToMarkdown(comp);
    navigator.clipboard?.writeText(md).then(() => {
      setPageCopied(true);
      setTimeout(() => setPageCopied(false), 2000);
    });
  };

  // Dynamically import only the requested component's registry data.
  // Keep old content visible while loading to avoid flicker.
  useEffect(() => {
    const key = name ? registryKeyMap[name] : undefined;
    if (!key || !registryModules[key]) {
      setNotFound(true);
      return;
    }
    setNotFound(false);
    setActiveExample(0);
    let cancelled = false;
    registryModules[key]().then((mod) => {
      if (cancelled) return;
      setComp(findMeta(mod));
    });
    return () => {
      cancelled = true;
    };
  }, [name]);

  // Build the "On this page" sections dynamically
  const sections: Section[] = [{ id: "preview", label: "Preview" }];
  if (comp?.about) sections.push({ id: "about", label: "About" });
  sections.push({ id: "installation", label: "Installation" });
  if (comp?.usageImport && comp.usageCode)
    sections.push({ id: "usage", label: "Usage" });
  if (comp?.cursor) sections.push({ id: "cursor", label: "Cursor" });
  if (comp?.composition)
    sections.push({ id: "composition", label: "Composition" });
  if (comp?.props && comp.props.length > 0)
    sections.push({ id: "api", label: "API Reference" });
  if (comp?.apiReference) sections.push({ id: "api", label: "API Reference" });
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

  if (notFound) {
    return (
      <div className="flex flex-col items-center gap-4 py-20 text-center">
        <h1 className="text-2xl font-semibold text-foreground">
          Component not found
        </h1>
        <p className="text-sm text-foreground-muted">
          No component named &quot;{name}&quot;.
        </p>
        <Button asChild variant="outline">
          <Link to="/components">
            <ArrowLeft data-icon="inline-start" /> Back to all components
          </Link>
        </Button>
      </div>
    );
  }

  if (!comp) return null;

  const example = comp.examples[activeExample] ?? comp.examples[0];
  if (!example) return null;

  const { prev, next } = getPrevNext(comp, componentManifest);

  return (
    <>
      <div className="flex gap-8 px-6 py-8">
        {/* Left sidebar — component navigation */}
        <aside className="hidden w-60 shrink-0 lg:block">
          <div className="fixed top-1/2 h-[calc(100vh-16rem)] w-60 -translate-y-1/2">
            <Reveal direction="right" className="h-full">
              <ComponentsSidebar />
            </Reveal>
          </div>
        </aside>

        {/* Main content — centered within the available middle space */}
        <div className="flex min-w-0 flex-1 justify-center">
          <div className="w-full max-w-4xl">
            <div className="flex flex-col gap-8">
              <Reveal direction="up">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                        <h1 className="order-2 text-3xl font-semibold tracking-tight text-foreground sm:order-1">
                          {comp.label}
                        </h1>
                        <div className="order-1 flex flex-wrap items-center gap-2 sm:order-2">
                          <Badge
                            variant="accent"
                            className="font-mono text-[10px] uppercase tracking-wider"
                          >
                            {comp.category}
                          </Badge>
                          {comp.radixBased && (
                            <Badge
                              variant="outline"
                              className="font-mono text-[10px] uppercase tracking-wider"
                            >
                              Radix
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 sm:hidden">
                        <PageActions prev={prev} next={next} />
                      </div>
                    </div>
                    <p className="max-w-2xl text-foreground-muted">
                      {comp.description}
                    </p>
                  </div>
                  <div className="hidden items-center gap-1 sm:flex sm:shrink-0">
                    <PageActions
                      prev={prev}
                      next={next}
                      pageCopied={pageCopied}
                      onCopyPage={handleCopyPage}
                    />
                  </div>
                </div>
              </Reveal>

              {comp.examples.length > 1 && (
                <Reveal direction="up">
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
                </Reveal>
              )}

              <Reveal direction="up" delay={60}>
                <section
                  id="preview"
                  className="flex flex-col gap-3 scroll-mt-24"
                >
                  <h2 className="text-xl md:text-lg font-semibold text-foreground">
                    {example.title}
                  </h2>
                  <p className="text-base md:text-sm text-foreground-muted">
                    {example.description}
                  </p>
                  <PreviewCodeBlock
                    key={`${name}-${activeExample}`}
                    preview={example.render()}
                    code={example.code}
                    rawCode={example.rawCode}
                  />
                </section>
              </Reveal>

              {comp.about && (
                <Reveal direction="up" delay={120}>
                  <section
                    id="about"
                    className="flex flex-col gap-3 scroll-mt-24"
                  >
                    <h2 className="text-xl md:text-lg font-semibold text-foreground">
                      About
                    </h2>
                    <p className="text-sm text-foreground-muted">
                      {comp.about}
                    </p>
                  </section>
                </Reveal>
              )}

              <Reveal direction="up" delay={120}>
                <section
                  id="installation"
                  className="flex flex-col gap-3 scroll-mt-24"
                >
                  <h2 className="text-xl md:text-lg font-semibold text-foreground">
                    Installation
                  </h2>
                  <InstallBlock name={comp.name} radixBased={comp.radixBased} />
                </section>
              </Reveal>

              {comp.usageImport && comp.usageCode && (
                <Reveal direction="up" delay={180}>
                  <UsageSection
                    componentName={comp.name}
                    usageImport={comp.usageImport}
                    usageCode={comp.usageCode}
                  />
                </Reveal>
              )}

              {comp.cursor && (
                <Reveal direction="up">
                  <CursorSection />
                </Reveal>
              )}

              {comp.composition && (
                <Reveal direction="up">
                  <CompositionSection
                    tree={comp.composition}
                    label={comp.label}
                  />
                </Reveal>
              )}

              {comp.apiReference && (
                <Reveal direction="up">
                  <section
                    id="api"
                    className="flex flex-col gap-3 scroll-mt-24"
                  >
                    <h2 className="text-xl md:text-lg font-semibold text-foreground">
                      API Reference
                    </h2>
                    <p className="text-sm text-foreground-muted">
                      See the{" "}
                      <a
                        href={comp.apiReference.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        {comp.apiReference.label}
                      </a>{" "}
                      for more information.
                    </p>
                  </section>
                </Reveal>
              )}

              {!comp.apiReference && comp.props && comp.props.length > 0 && (
                <Reveal direction="up">
                  <section
                    id="api"
                    className="flex flex-col gap-3 scroll-mt-24"
                  >
                    <h2 className="text-xl md:text-lg font-semibold text-foreground">
                      API Reference
                    </h2>
                    <ApiTable props={comp.props} />
                  </section>
                </Reveal>
              )}

              {comp.accessibility && comp.accessibility.length > 0 && (
                <Reveal direction="up">
                  <section
                    id="accessibility"
                    className="flex flex-col gap-3 scroll-mt-24"
                  >
                    <h2 className="text-xl md:text-lg font-semibold text-foreground">
                      Accessibility
                    </h2>
                    <AccessibilityList notes={comp.accessibility} />
                  </section>
                </Reveal>
              )}

              {comp.primitives &&
                comp.primitives.map((primitive) => {
                  const sectionId = `primitive-${toSectionId(primitive.name)}`;
                  return (
                    <Reveal key={primitive.name} direction="up">
                      <section
                        id={sectionId}
                        className="flex flex-col gap-3 scroll-mt-24"
                      >
                        <h2 className="text-xl md:text-lg font-semibold text-foreground">
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
                    </Reveal>
                  );
                })}

              <PrevNextNav current={comp} registry={componentManifest} />
            </div>
          </div>
        </div>

        {/* On this page sidebar */}
        <aside className="hidden w-60 shrink-0 xl:block">
          <div className="sticky top-24">
            <Reveal direction="up">
              <OnThisPage
                sections={sections}
                activeSection={activeSection}
                onSectionClick={handleSectionClick}
              />
            </Reveal>
          </div>
        </aside>
      </div>
    </>
  );
}
