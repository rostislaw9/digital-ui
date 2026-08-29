# Changelog

All notable changes to Ionbit UI will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- **Variant renaming:** renamed all `-inverted` button and alert variants
  to `-soft` for shorter, clearer naming (`primary-inverted` →
  `primary-soft`, `destructive-inverted` → `destructive-soft`,
  `accent-inverted` → `accent-soft`, `success-inverted` →
  `success-soft`, `warning-inverted` → `warning-soft`, `error-inverted`
  → `error-soft`). Updated source, registry, demos, tests, and docs.
- **Arrow icons:** replaced all `←`/`→` text arrows with Lucide icons
  (`ArrowLeft`, `ArrowRight`) across the docs app. Icons are placed
  inside `Button` with `Slottable` and `data-icon` attributes for
  correct spacing. Re-exported `Slottable` from `@ionbit-ui/ui`.
- **ComponentsSidebar:** redesigned as a flat list using `ScrollArea`
  with hidden scrollbar, vertical gradient line, top/bottom fade shadows
  that appear/disappear based on scroll position, and `Reveal` entrance
  animation. Hidden on mobile (`lg:hidden` back link shown instead).
- **PrevNextNav:** changed from link buttons with text labels to
  outline buttons with arrow icons, no "Previous"/"Next" labels.
- **Homepage hero:** widened hero text from `max-w-2xl` to `max-w-5xl`
  and reworded the description to fill the wider layout evenly.
- **Homepage showcase:** extracted 12 inline showcase cards into
  separate files under `apps/docs/src/showcase/`. Added 6 new cards
  (TeamCard, BillingCard, NotificationsCard, SearchCard, SecurityCard,
  IntegrationCard) and 5 more (ApiKeyCard, WebhookCard, AnalyticsCard,
  CommandCard, UptimeCard) for 23 total. All cards are now purely
  visual (no state/effects). Removed the feature grid section.
  Lazy-loaded `HomePage` as a separate chunk.
- **Tooltip registry:** removed stale `inverted` variant from Tooltip
  API docs (the component never had it).
- **Vite plugin fix:** added `this.addWatchFile()` to the Shiki
  highlight plugin so `?highlighted` imports update on HMR.

### Known Issues

- **Homepage showcase grid** needs to be moved into a separate
  component and adjusted for better responsive UI — column alignment,
  mobile scaling, and card distribution require further work.
- **ComponentsSidebar** does not auto-scroll to the currently active
  component when navigating via the sidebar or URL — the active item
  can become not visible if it is outside the scroll viewport.
- **Performance optimizations needed:** chunk sizes require
  investigation (ComponentDetailPage chunk is ~678 kB), code quality
  review needed (reuse of components, large source files, hierarchy
  issues).

- **Documentation comments:** added `/** */` doc comments to all 14
  components that were missing them (AlertDialog, Button, Checkbox,
  Command, ContextMenu, Dialog, HoverCard, Pagination, Progress,
  RadioGroup, ScrollArea, Sheet, Slider, Switch). Each comment notes
  whether the component is Radix-based and/or shadcn-inspired, plus a
  short accessibility summary.
- **Comment standardization:** moved all main component doc comments to
  right before the `export const`/`export function` declaration (JSDoc
  convention). Added per-subcomponent `/** */` doc comments to every
  exported subcomponent across all 31 component files (~80 subcomponents
  total). All main comments now follow a consistent format: one-line
  description, "Built on `@radix-ui/...`" or "Built on native HTML",
  shadcn-inspired note, behavior/composition paragraphs, and an
  Accessibility section.
- **Toast attribution:** the `Toast` doc comment now credits Sonner and
  its author Emil Kowalski. The Toast docs page has a new "About" section
  with the same credit, and the README has an "Acknowledgments" section
  listing shadcn/ui, Radix UI, Sonner, cmdk, and Tailwind CSS.
- **Shadcn framing:** removed "not a shadcn clone" language from the
  README, homepage hero, and competitive research. The project is now
  described as "inspired by shadcn's source-ownership model."
- **Rebrand cleanup:** renamed the leftover `DigitalToasterProps` type to
  `IonBitToasterProps` (and updated re-exports).

## [0.1.0] — MVP (first iteration)

### Added

- **31 UI components:** Accordion, Alert, AlertDialog, Avatar, Badge,
  Breadcrumb, Button (8 variants, 10 sizes including icon variants,
  data-icon padding, data-slot/data-variant/data-size attributes),
  Card, Checkbox, Command (cmdk-based), ContextMenu, Dialog,
  DropdownMenu, HoverCard, Input, Label, Pagination, Popover, Progress,
  RadioGroup, ScrollArea, Select, Separator, Sheet, Skeleton, Slider,
  Switch, Tabs, Textarea, Toast, Tooltip.
- **5 motion primitives:** Glow, Pulse, Spotlight, Magnetic, Reveal —
  with `prefers-reduced-motion` support and automatic border-radius
  inheritance (`@ionbit-ui/motion`).
- **Design tokens** (`@ionbit-ui/tokens`): semantic color, typography,
  spacing, radius, shadow, and motion tokens as CSS custom properties
  with Tailwind v4 `@theme` mapping. Dark theme default, light theme
  override.
- **CLI** (`ionbit-ui`): `ionbit-ui init`, `ionbit-ui add <component>`,
  `ionbit-ui list` — source-owned component installation with transitive
  dependency resolution, auto-install of npm dependencies, and support
  for pnpm, npm, yarn, and bun.
- **Source registry** (`registry.json`): shadcn-compatible schema with
  39 items (cn, tokens, 31 components, 5 motion primitives). Registry
  item JSON files are committed and served via GitHub raw URLs.
- **Documentation app:** interactive component browser, live previews,
  separate import/code usage blocks with copy buttons, composition
  trees, API tables, accessibility notes, Radix-UI badges, on-this-page
  sidebar, prev/next navigation, tokens page, motion page.
- **Build-time Shiki highlighting:** demo source files, usage examples,
  cursor CSS, and install commands are pre-highlighted at build time via
  a custom Vite plugin. No Shiki runtime in the browser bundle.
- **Per-component registry metadata:** `apps/docs/src/components/registry/`
  contains one metadata file per component with a normalized field
  order (`name`, `label`, `description`, `category`, `examples`,
  `usageImport`, `usageCode`, `composition`, `props`, `accessibility`,
  `radixBased`, `primitives`, `isNew`).
- **Testing:** 171 tests across 37 files — component behavior, keyboard
  navigation, ARIA, reduced-motion, motion primitives.
- **Performance:** lazy-loaded routes, vendor chunk splitting (react/radix/
  motion), Spotlight bounding-rect caching.
- **Visual polish:** consistent focus-visible rings, semantic token usage,
  responsive table overflow, token-based error shadows.
- `CONTRIBUTING.md` with development workflow and conventions.
- `CHANGELOG.md`.
- `docs/AGENT_RULES.md` with editor workflow rules (add code before
  imports; keep changelog and docs up to date on every commit).
- `packages/cli/README.md` for the npm package page.

### Changed

- Adopted shadcn-style source-owned import paths. Component source now
  uses `import { cn } from "@/lib/utils"` with an empty line between
  external and local imports. Renamed `lib/cn.ts` to `lib/utils.ts`.
  Configured `@/` path aliases in `packages/ui` (tsconfig, vite,
  vitest) and `apps/docs` (tsconfig, vite).
- Updated all docs usage examples and demo imports to show
  `@/components/ui/*` and `@/components/motion/*` paths instead of
  `@ionbit-ui/ui` / `@ionbit-ui/motion`.
- Removed `cursor-pointer` from all UI components. Tailwind v4 defaults
  to `cursor: default` for buttons. The docs app restores pointer cursor
  via a CSS `@layer base` rule. Consumers can opt in with
  `ionbit-ui init --pointer`.
- Added `--border-error` token (light + dark) and
  `--color-border-error` Tailwind mapping. Fixes `--shadow-glow-error`
  being silently dropped because `--border-error` was undefined.
- Added soft Alert variants (`accent-soft`, `success-soft`,
  `warning-soft`, `error-soft`) with `bg-surface` and colored
  text/icons. Removed hardcoded `text-foreground` from `AlertTitle` and
  `text-foreground-muted` from `AlertDescription` so they inherit the
  alert's variant color.
- Renamed `Breadcrumbs` component to `Breadcrumb` (singular) across
  source, registry, demos, and docs. Fixed composition tree:
  `BreadcrumbSeparator` is a sibling of `BreadcrumbItem` under
  `BreadcrumbList`, not a child of `BreadcrumbItem`.
- Refactored Pagination to the composable shadcn pattern. Now exports
  `Pagination`, `PaginationContent`, `PaginationItem`, `PaginationLink`,
  `PaginationPrevious`, `PaginationNext`, `PaginationEllipsis`.
  `PaginationLink` uses `<Button asChild>` instead of duplicating button
  styles. The old self-managed API (`currentPage`, `totalPages`,
  `onPageChange`, `siblingCount`) was removed.
- Updated Dialog, Sheet, and AlertDialog to use `<Button asChild>`
  instead of `buttonVariants()`. Command now imports Dialog via
  `@/components/ui/dialog`. All cross-component imports use
  `@/components/ui/*` paths.
- Collapsed all component `cn()` style strings to single-line strings
  with `// prettier-ignore` where needed.
- Updated `registry.json` with component-to-component
  `registryDependencies` so `ionbit-ui add <component>` also
  installs dependencies (e.g. pagination → button, command → dialog).
- Added `@source` directives in docs CSS pointing to
  `packages/ui/src/components` and `packages/motion/src` so Tailwind v4
  scans actual component source files for class names.
- Moved `<Toaster>` from `ComponentDetailPage` to the `App` root so
  toasts persist across navigation.
- Fixed pagination demo page range logic: ellipsis thresholds and
  off-by-one that dropped the last page.
- Updated Tokens page to include all missing tokens: `accent-foreground`,
  `error-foreground`, `border-error`, `shadow-glow-error`,
  `shadow-focus-error`, typography (fonts, text sizes, leading, tracking,
  weights), spacing scale, effect intensities, and accordion animations.
  Color groups arranged in a responsive multi-column grid to fill page
  width.
- Added `eslint-plugin-perfectionist` for import ordering with custom
  groups: external, internal (`@ionbit-ui/*`), alias (`@/`), relative.

### Removed

- `docs/IMPLEMENTATION_PLAN.md` — the phased plan is complete; the
  repository is now treated as the first MVP iteration and tracked via
  `CHANGELOG.md` and `docs/AGENT_RULES.md` instead.

### Fixed

- Fixed motion primitive imports in registry: the registry build now
  rewrites `../hooks/` to `./hooks/` and `../tokens` to `./tokens` for
  motion primitive files, since the registry flattens the `primitives/`
  subdirectory. Removed `.js` extensions from motion primitive imports
  (incompatible with Vite v8/rolldown resolution).
- Fixed CLI `init` command: now actually creates directory structure
  (was logging "Created" without calling `mkdirSync`), auto-installs base
  items (`cn` utility + design tokens), adds token CSS imports to the
  user's stylesheet, and auto-installs npm dependencies for base items.
- Fixed CLI `add` command: now auto-installs npm dependencies instead of
  just printing the install command for the user to run manually. Detects
  package manager (pnpm/yarn/npm/bun) from lockfile.
- Fixed motion primitives in registry: each primitive (`glow`, `magnetic`,
  `pulse`, `reveal`, `spotlight`) now includes its hooks
  (`use-inherited-radius`, `use-reduced-motion`) and `tokens.ts` files in
  the registry entry. Previously only the primitive itself was included,
  causing broken imports when installed. Added `motion` to npm
  dependencies for all motion primitives.
- Fixed `radixBased` metadata for Button and Breadcrumb (both use
  `@radix-ui/react-slot`).
