# Digital UI — Competitive Research

## Purpose

This document records concrete findings about the current React UI
ecosystem and identifies a meaningful differentiation for Digital UI.

It is intentionally opinionated. Generic descriptions of "what each
library does" are kept short. The focus is on:

- the actual distribution / ownership model;
- the registry and CLI architecture where relevant;
- the motion system (or absence of one);
- accessibility approach;
- visual identity;
- concrete weaknesses;
- what Digital UI can do differently.

---

## 1. shadcn/ui

### What it is

A source-owned component distribution system built on top of Radix UI
Primitives and Tailwind CSS. Components are not installed as an npm
package — the CLI copies TypeScript source files directly into the
consumer's repository.

### Distribution model

- `npx shadcn@latest add button` copies `button.tsx` into
  `components/ui/`.
- The consumer owns the code. There is no `node_modules/shadcn-button`.
- Updates are opt-in: re-running `add` overwrites the file, but the
  consumer can diff and choose.
- Bundle size claim: ~12 KB for Button + Dialog versus ~340 KB for
  Material UI (per shadcn's own marketing). The real win is that you
  only ship the components you actually use.

### Registry architecture

- A `registry.json` schema defines items with `name`, `type`, `files`,
  `dependencies`, `registryDependencies`, and metadata.
- Item types include `registry:ui`, `registry:block`, `registry:lib`,
  `registry:hook`, `registry:file`, `registry:page`, `registry:theme`,
  `registry:style`, `registry:font`.
- A "source registry" (authored `registry.json` with `include` paths)
  is compiled by `shadcn build` into a "built registry" of static JSON
  payloads served over HTTP.
- The CLI resolves aliases, transforms imports, and writes files.
- Third parties can host their own registries and register them in
  `components.json` under `registries`.

### Component API

- Built on Radix Primitives with the `asChild` / `Slot` pattern.
- Variants managed with `class-variance-authority`.
- Class merging via the `cn()` helper (`clsx` + `tailwind-merge`).
- Tailwind v4 migration moved to `@theme inline`, OKLCH colors,
  `data-slot` attributes, and removed `forwardRef` in favor of
  React 19 ref-as-prop.

### Motion system

- None. shadcn ships no motion system. Hover/focus rely on Tailwind
  `transition-*` utilities. Any animation is left to the consumer.

### Accessibility

- Inherited from Radix Primitives. Generally WCAG 2.1 AA, focus
  management, keyboard navigation, ARIA roles.

### Visual identity

- Deliberately neutral. shadcn is a styling baseline, not a visual
  brand. The "New York" and "Default" styles are conservative.

### Weaknesses

- No motion language. Every consumer reinvents hover/focus/transition
  timing.
- No distinctive visual identity — the ecosystem is visually
  homogeneous.
- The registry ecosystem is fragmenting (ReUI, Aceternity, Magic UI
  all piggyback on the shadcn CLI), which makes "shadcn-compatible"
  mean very little visually.
- Radix coupling: components depend on `@radix-ui/*` packages. Users
  who want Base UI or React Aria underneath must use a different
  registry.
- No opinionated dark, technical, "digital" aesthetic.

### Patterns worth adopting

- Source-ownership model.
- `registry.json` schema with `dependencies` and
  `registryDependencies`.
- `cn()` helper as the class-merging primitive.
- `data-slot` attributes for styling subparts.
- `components.json` for project configuration.

### Patterns to avoid

- Treating "shadcn-compatible" as a goal in itself — it dilutes visual
  identity.
- Shipping components with zero motion opinion and calling it a
  feature.

---

## 2. Radix UI

### What it is

A library of unstyled, accessible React primitives (`@radix-ui/react-*`
packages). Behavior and accessibility only; the consumer provides all
styling.

### Component API

- Compound component pattern: `<Dialog.Root>`, `<Dialog.Trigger>`,
  `<Dialog.Portal>`, `<Dialog.Content>`, `<Dialog.Close>`.
- `asChild` prop forwards props to the single child via `Slot`,
  letting the consumer render their own element.
- Controlled and uncontrolled state.
- Data attributes (`data-state`, `data-disabled`, `data-side`) for
  styling.

### Accessibility

- Strong. Focus trapping, restore focus, keyboard navigation, ARIA
  roles, `aria-controls`, dismiss behavior. This is the main reason
  shadcn built on top of it.

### Motion system

- None. Radix exposes `data-state="open" | "closed"` so consumers can
  author CSS transitions, but provides no animation runtime.

### Weaknesses

- No styling, no motion, no visual identity by design.
- Some components (e.g. Select) have a reputation for being awkward to
  style fully.
- Animation of mount/unmount requires extra work because Radix unmounts
  content immediately; consumers use `data-state` + CSS or wrap with
  Motion.

### Patterns worth adopting

- Compound component API for complex primitives (Dialog, Popover,
  Select, Tabs).
- `asChild` / `Slot` for letting consumers render their own element.
- `data-state` attributes for CSS-driven transitions.

### Patterns to avoid

- Re-implementing Radix behavior ourselves. Accessibility is expensive
  to get right; we should layer on top of a headless primitive.

---

## 3. Base UI

### What it is

An unstyled React component library from the MUI team, positioned as
the successor to "MUI Base". Built by contributors with Radix,
Floating UI, and Material UI backgrounds.

### Component API

- Compound, parts-based: `Root`, `Trigger`, `Popup`, `Item`.
- Store-based state management (`ReactStore` / `useControlledProp`)
  centralizes controlled/uncontrolled state.
- Floating UI hooks for positioning and interactions.
- `render` prop for custom rendering instead of (or alongside) slots.

### Accessibility

- ARIA patterns implemented via interaction hooks and state attributes.
- Designed to be comparable to Radix in coverage.

### Motion system

- None of its own. Relies on consumer CSS or external animation
  libraries.

### Weaknesses

- Younger ecosystem than Radix; smaller adoption and fewer third-party
  guides.
- Documentation is improving but less battle-tested than Radix.
- Fewer "shadcn-style" wrappers exist for it today (ReUI is one of the
  few providing dual Radix/Base UI versions).

### Patterns worth adopting

- Store-based state model is cleaner than Radix's context-heavy
  approach and worth keeping in mind if we ever outgrow Radix.
- `render` prop as an alternative to `asChild`.

### Patterns to avoid

- Adopting Base UI as the primary headless layer right now. The
  ecosystem gravity is still with Radix, and we want our source-owned
  components to feel familiar to the largest possible audience.

---

## 4. React Aria

### What it is

Adobe's accessibility-focused library. Historically hooks-first
(`useButton`, `useSelect`), now also offering `react-aria-components`
with a higher-level component API. Used to build Adobe Spectrum.

### Component API

- Hooks: extremely granular. Full control but verbose.
- `react-aria-components`: compound components with a `className`
  callback that receives render state (`{ isHovered, isFocused,
isSelected }`) for state-driven styling.

### Accessibility

- The strictest in the ecosystem. WCAG 2.1 patterns, mobile/touch
  behavior, virtual keyboard handling, internationalization.

### Motion system

- Some built-in animation support in the components API, but generally
  external.

### Weaknesses

- Heavier core logic than Radix due to extreme robustness.
- API surface is larger and more granular — steeper learning curve.
- Less idiomatic with the shadcn/Tailwind `cn()` + `cva` workflow.
- Smaller share of the copy-paste ecosystem.

### Patterns worth adopting

- Treating mobile/touch and i18n as first-class concerns (we should at
  least not break them).
- State-callback `className` for complex state-driven styling, when
  `data-*` attributes are insufficient.

### Patterns to avoid

- Adopting React Aria as the primary headless layer. The DX cost is
  real and the shadcn-style ecosystem is built around Radix. We can
  revisit for specific components where React Aria is clearly stronger
  (e.g. complex date/calendar work post-MVP).

---

## 5. Magic UI

### What it is

A collection of 150+ animated components and effects built with React,
TypeScript, Tailwind CSS, and Motion. Copy-paste distribution. Markets
itself as "the perfect companion for shadcn/ui".

### Distribution model

- Copy-paste source. A "Magic UI Pro" tier sells blocks and templates.
- Built on the same Motion + Tailwind stack as Aceternity.

### Component API

- Effect-oriented: `AnimatedBeam`, `ShimmerButton`, `BorderBeam`,
  `NumberTicker`, `Marquee`, `OrbitingCircles`, `AnimatedGridPattern`.
- Many components are decorative wrappers, not application primitives.

### Motion system

- Motion (`motion/react`) throughout. Heavy use of `whileHover`,
  `whileInView`, layout animations, and SVG path animations.

### Accessibility

- Inconsistent. Many effects are purely decorative and do not
  consider reduced motion by default. Some components animate
  constantly, which conflicts with `prefers-reduced-motion`.

### Visual identity

- "Magic" — gradients, beams, shimmer, glow. Visually impressive in
  demos, but heavily skewed toward landing pages and marketing sites.

### Weaknesses

- Marketing-page bias. Most components are not the primitives you
  build a real product UI from.
- No coherent design system. Each effect is a standalone artifact.
- No accessibility guarantee.
- No registry/CLI workflow as mature as shadcn's.

### Patterns worth adopting

- Demonstrating the value of motion through vivid, copy-pasteable
  examples.
- Using Motion's `whileInView` and layout animation judiciously.

### Patterns to avoid

- Building a library of disconnected "wow" effects. Digital UI must be
  a system, not a scrapbook.
- Defaulting to constant/infinite animations.
- Ignoring reduced motion.

---

## 6. Aceternity UI

### What it is

200+ components, blocks, and templates built with React, Tailwind CSS,
and Motion. Copy-paste distribution. Free components plus a paid
"All-Access" tier.

### Distribution model

- Copy-paste source, shadcn-compatible in the sense that it shares the
  distribution model (not an official shadcn project).
- Differentiates "primitives" (button, dialog) from "blocks" (hero
  sections, pricing tables).

### Component API

- Heavy on visual effects: `Spotlight`, `DirectionAwareHover`,
  `ContainerScrollAnimation`, `BackgroundGradientAnimation`,
  `InfiniteMovingCards`, `LayoutGrid`.
- Uses Motion variants, `staggerChildren`, `layoutId` for shared
  element transitions.

### Motion system

- Motion throughout. The docs explicitly discuss the Tailwind/Motion
  property-ownership rule: pick one owner per property (Tailwind for
  static, Motion for interpolated) to avoid inline-style/class
  conflicts.

### Accessibility

- Inconsistent. Many showcase components prioritize visual impact.

### Visual identity

- Bold, demo-driven, "wow"-first. Strong for landing pages, weaker for
  product UI.

### Weaknesses

- Same marketing-page bias as Magic UI.
- Performance: some effects (3D scroll rotation, distortion filters,
  infinite loops) are expensive and not suitable for large lists.
- No coherent design system or token structure.
- No accessibility story.

### Patterns worth adopting

- The "one owner per animated property" rule (Tailwind vs Motion) is
  an excellent engineering principle we will adopt explicitly.
- Motion `variants` + `staggerChildren` for list entrances.
- `layoutId` for shared-element transitions — but only where the
  movement carries meaning.

### Patterns to avoid

- Building 200+ components where most are showcase blocks.
- Animating `width`/`height`/`top`/`margin` (forces layout every
  frame). Stick to `transform` and `opacity`.

---

## 7. Motion Primitives

### What it is

A focused UI kit of ~34 animated components built with Motion and
Tailwind CSS by Julien Thibeaut (`ibelick`). Distributed via a CLI
(`npx motion-primitives add ...`) and also available on 21st.dev.

### Distribution model

- CLI-based, shadcn-style. Installs Motion as a dependency
  automatically.
- Components are small by design and compose into existing interfaces
  "without pulling in layout opinions".

### Component API

- Effect primitives: `Magnetic`, `Spotlight`, `Tilt`, `TextMorph`,
  `TextLoop`, `TextScramble`, `SpinningText`, `AnimatedNumber`.
- Text-effect focused.

### Motion system

- Motion throughout. This is the closest existing project to what
  Digital UI's motion layer aspires to be: small, composable,
  effect-focused primitives.

### Accessibility

- Not a primary focus. Reduced-motion handling is left largely to the
  consumer.

### Visual identity

- Neutral. Motion Primitives is a motion toolkit, not a visual design
  system.

### Weaknesses

- Not a component library. There is no Button, Card, Dialog, etc.
- No design tokens, no visual identity.
- No accessibility story.
- Motion-only; no CSS-first fallback philosophy.

### Patterns worth adopting

- Small, composable motion primitives with a CLI.
- Naming effect primitives as first-class components (`<Magnetic>`,
  `<Spotlight>`).
- Keeping motion primitives layout-agnostic so they wrap any child.

### Patterns to avoid

- Treating motion primitives as the entire product. Digital UI needs
  real components underneath the motion.

---

## 8. ReUI

### What it is

A "design-forward shadcn/ui platform" by KeenThemes. 1,072+ free
shadcn-compatible components plus paid blocks, icons, and templates.
Notable for shipping dual Radix UI and Base UI versions of 19 in-house
primitives (Data Grid, Kanban, Gantt, Event Calendar, Filters, etc.).

### Distribution model

- shadcn registry under the `@reui` namespace.
- Free `c-*` components; paid blocks/icons/templates require a license
  key sent as a bearer token in the registry headers.
- MCP server (`mcp.reui.io`) exposes 18 tools so AI agents can search
  and install real components instead of guessing markup.

### Component API

- Standard shadcn primitives extended with production-ready layouts.
- In-house primitives for dashboard-grade workflows not in base
  shadcn.
- Dual Radix/Base UI versions share identical Tailwind styling; only
  the headless primitive differs.

### Motion system

- Minimal. ReUI is about breadth and dashboard polish, not motion.

### Accessibility

- Inherited from Radix / Base UI.

### Visual identity

- Dashboard-oriented, "production-ready" look. Multiple named themes
  (Vega, Nova, Maia, Lyra, Mira) via Shadcn Create.

### Weaknesses

- Still visually a shadcn derivative. No distinctive "digital" brand.
- No motion language.
- Breadth over depth: 1,000+ components means quality is uneven.
- Paid tier introduces licensing complexity.

### Patterns worth adopting

- Dual-headless support (Radix + Base UI) is a smart hedge for
  ecosystem fragmentation — but premature for our MVP.
- MCP-first AI integration is forward-looking. We should keep the
  registry structured enough that an MCP layer could be added later.
- In-house primitives for gaps the base ecosystem doesn't cover.

### Patterns to avoid

- Optimizing for component count over quality.
- Paid/licensed registry complexity at this stage.

---

## Cross-cutting observations

### The ecosystem is bifurcated

1. **Production primitive libraries** (shadcn, Radix, Base UI, React
   Aria, ReUI) — strong on accessibility and ownership, weak on motion
   and visual identity.
2. **Animation/effect collections** (Magic UI, Aceternity, Motion
   Primitives) — strong on motion, weak on production primitives,
   accessibility, and system coherence.

No widely adopted project sits in the middle: **production-quality
primitives + a coherent motion system + a distinctive visual
identity**. That is the gap Digital UI targets.

### Motion is treated as decoration, not system

In every animation-focused library surveyed, motion is per-component
and per-demo. There is no shared motion token system (timing, easing,
intensity, reduced-motion policy) enforced across the library. This is
the single biggest design opportunity for Digital UI.

### Accessibility is outsourced, not owned

The production libraries outsource a11y to Radix/Base UI/React Aria.
The animation libraries ignore it. Digital UI should outsource the
heavy a11y lifting to a headless primitive (Radix) but **own the
reduced-motion and motion-a11y story ourselves**, because no headless
library does that.

### Source ownership is the winning distribution model

Every successful recent project (shadcn, Magic UI, Aceternity, Motion
Primitives, ReUI) uses copy-paste source ownership. npm-only component
libraries are losing mindshare. Digital UI should adopt source
ownership from day one, with an npm package only for shared utilities,
tokens, and motion primitives that are not meant to be customized per
project.

### Registry + CLI is the expected DX

`npx <lib> add <component>` is now table stakes. We do not need to
build it for the foundation, but the architecture must not preclude
it. The shadcn `registry.json` schema is the de facto standard and is
worth following closely for interoperability.

---

## Proposed differentiation for Digital UI

1. **A coherent motion system as a first-class design layer.**
   Shared timing, easing, intensity, and reduced-motion tokens enforced
   across all components and motion primitives. No existing library
   does this.

2. **A distinctive, restrained "digital" visual identity.**
   Dark, technical, sophisticated — not neon cyberpunk. Built on
   hierarchy, typography, surface depth, and controlled accent light.
   Not a shadcn clone, not a Magic UI clone.

3. **Production-quality primitives, not landing-page blocks.**
   Button, Input, Card, Dialog, Tabs, Select, etc. — the components
   real applications are built from. Motion enhances them; it does not
   define them.

4. **Accessibility owned, not just inherited.**
   Radix provides the headless a11y base. Digital UI owns the
   reduced-motion, focus-visible, and motion-a11y story on top.

5. **Source ownership with a small runtime core.**
   Components are copy-paste source-owned. A small npm package
   (`@digital-ui/motion`, `@digital-ui/tokens`) provides the shared
   motion primitives and design tokens that should not be duplicated
   into every project.

6. **CSS-first motion, Motion where required.**
   CSS transitions for hover/focus/state. Motion only for spring
   physics, pointer tracking, and gesture-driven effects. This keeps
   the runtime small and the components usable without JavaScript
   animation.

---

## Exit criteria

A clear statement of why Digital UI should exist:

> Digital UI should exist because no widely adopted React UI library
> combines production-quality accessible primitives, a coherent
> system-level motion language, and a distinctive restrained digital
> visual identity. The ecosystem is split between visually generic
> primitive libraries and visually loud but production-weak animation
> collections. Digital UI occupies the middle: a real component system
> that feels alive without sacrificing usability, accessibility, or
> taste.
