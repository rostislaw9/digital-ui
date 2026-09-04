# Changelog

All notable changes to Ionbit UI will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- **Prettier Tailwind class sorting:** added `prettier-plugin-tailwindcss`
  (official Tailwind Labs plugin) to auto-sort Tailwind classes in JSX
  `className` and `cn()` calls on every `yarn format`. Configured with
  `tailwindStylesheet` pointing to the docs CSS entry and
  `tailwindFunctions: ["cn"]`.

### Changed

- **RTL-aware logical properties:** replaced physical `left`/`right`/`pl`/
  `pr`/`ml`/`mr`/`text-left` utilities with logical `start`/`end`/`ps`/
  `pe`/`ms`/`me`/`text-start` across all UI components so they flip
  correctly in RTL layouts. Affected: Select (check indicator moved to
  the end side), Dialog and Sheet (close button), Alert (description
  padding), Tabs (indicator start), Table (header alignment), Pagination
  (prev/next padding), Button (icon padding), Command (search icon and
  shortcut), ContextMenu (inset padding, check indicator, chevron,
  shortcut). Sheet `side`, Avatar positions, Tooltip `side`, and
  Dialog/AlertDialog centering remain physical by design.
- **Tokens page responsive grid:** color swatch grid now shows 2 columns
  on landscape mobile (`md:`) instead of collapsing to 1 column until
  the `lg` breakpoint.

## [0.1.8] — 2026-09-04

### Added

- **Anchored section headings:** section titles on both component and
  utility detail pages are now wrapped in anchor links. A muted `#`
  symbol appears to the right of the title on hover. Clicking a heading
  navigates to `#<section-id>` and scrolls to that section. URL hash
  navigation (e.g. `/docs/components/tooltip#usage`) opens the page
  scrolled to the target section.
- **Copy Page button for utilities:** the utility detail page now has a
  "Copy Page" button (matching the component detail page). Copies the
  full utility documentation as markdown (description, install command,
  CSS import, class reference table, usage code, hero demo, and all
  content sections with prose and code blocks) via a new
  `utilToMarkdown` helper.
- **Scroll-to-anchor hook:** new `useScrollToAnchor` hook that scrolls
  to the element matching the URL hash on page load, with retry logic
  for lazy-loaded registry content.
- **Shared scroll utility:** extracted `scrollToSection` into a shared
  module used by both the scroll-spy (On this page sidebar) and the
  scroll-to-anchor hook, ensuring all three scroll paths (sidebar,
  heading links, URL hash) target the same position.
- **AvatarGroup, AvatarGroupCount, and AvatarBadge:** overlapping avatar
  group support with overflow count and custom badge overlay for icons.
  Added `data-slot` to Avatar root for group ring styling. New demos:
  overview, group, group with count, group with icon, and badge.
- **Shimmer utility documentation:** full docs for the shimmer utility
  with demos for color, duration, spread, angle, play once, reverse,
  disabling, fallback, and reduced motion sections.
- **Toast setup step:** added Toaster setup step to toast installation
  (both Command and Manual tabs), with shared step styling and
  conditional step markers.
- **Class-based dark mode for docs:** added `@custom-variant dark` to
  docs `index.css` so `@variant dark` in utilities resolves via the
  `.dark` class instead of `prefers-color-scheme`.
- **Shared package-manager constants:** consolidated duplicate
  package-manager constants into a shared `package-managers.ts` module
  imported by the Shiki plugin and docs components.
- **CSS minification:** tokens package now minifies CSS with lightningcss
  instead of copying verbatim.

### Changed

- **Unified scroll behavior:** the scroll-spy and scroll-to-anchor now
  use the same `scrollToSection` logic. Tall sections (taller than or
  equal to the viewport height) align the section title to the top of
  the page with a header offset, instead of centering the section
  midpoint. Both scroll paths apply the `section-flash` attention
  animation.
- **Sheet demos:** updated sheet demos with lorem ipsum text content,
  `scroll-fade` utility on scrollable content areas, and a Select
  component for digest frequency in the basic demo (demonstrating
  Select usage inside a Sheet).
- **Util class table styling:** restyled the utility class reference
  table with monospace uppercase headers and an overflow guard.
- **Flattened docs component structure:** flattened
  `components/detail/` into `components/`, relocated registry to
  `registry/components/` and `registry/utils/`.
- **Reduced re-renders:** extracted `ExampleSwitcher` into a memo
  component so switching examples only re-renders the preview area.
  Memoized sections/sectionIds/depKey to stabilize `useScrollSpy`.
  Wrapped `OnThisPage` in `React.memo`. Memoized Tabs context value.
- **Vendor chunk strategy:** replaced static `manualChunks` with a
  function that routes all `@radix-ui/*` packages into `vendor-radix`
  (8 were missing before). Split sonner into its own `vendor-sonner`
  chunk so motion-only pages do not download sonner.
- **Throttled listeners:** `useScrollSpy` now throttles scroll/resize
  with `requestAnimationFrame`. `ComponentsPage` memoizes filtered list.
  `InstallBlock` only fetches source files when the Manual tab is opened.
- **Shared IntersectionObserver:** Reveal now shares a single
  IntersectionObserver per threshold via `intersection-observer-pool.ts`
  instead of one observer per instance.
- **Content visibility:** `ShowcaseGrid` adds `content-visibility:auto`
  to desktop cards so the browser skips rendering off-screen cards.

### Fixed

- **Input and Textarea mobile font size:** use `text-base` (16px) on
  mobile and `text-sm` (14px) on sm+ to prevent iOS auto-zoom on focus.
- **Dead CSS:** removed unused `.shiki-placeholder` selector from docs
  `index.css`.

## [0.1.7] — 2026-09-02

### Changed

- **Deduplicated shared chunks:** UI build now uses `manualChunks` to
  deduplicate Button and Dialog into shared chunks referenced by all
  consumers (dialog, sheet, alert-dialog, pagination, command). Entry
  files shrink from ~3.3 kB to ~0.1 kB re-export wrappers.
- **Shared motion styles:** replaced per-instance `<style>` tags in
  Glow, Pulse, and Reveal with a single global stylesheet injected
  once via `ensureMotionStyles()`. Instance-specific values passed
  through CSS custom properties. Pulse uses two shared `@keyframes`
  instead of unique keyframes per instance.
- **Shared pointer coordinator:** replaced per-instance `pointermove`
  listeners in Magnetic and Spotlight with a shared pointer coordinator
  (subscribe/unsubscribe pub-sub pattern). N instances now share 1
  listener instead of N.

### Fixed

- **useInheritedRadius:** removed style dependency, runs once on mount.
- **Spotlight radius sync:** runs on mount + resize, not every render.
- **Reveal:** removed unnecessary `willChange` hint.
- **Glow:** uses data attributes for variant/trigger-specific CSS
  selectors.
- **Registry:** added `styles.ts` and `pointer-coordinator.ts` to
  motion items, updated `build.mjs` import rewriting for flattened
  paths.
- **Tests:** added reduced-motion tests for Magnetic and Reveal.

## [0.1.6] — 2026-09-02

### Changed

- **CI workflow renamed:** `publish.yml` renamed to `release.yml`,
  workflow renamed to "Publish package and deploy docs". The workflow
  now both publishes the CLI to npm and triggers a docs deploy on
  Render via the `RENDER_DEPLOY_HOOK_URL` secret. Enable Corepack
  before setup-node to fix Yarn 4 detection on setup-node v5.
- **GitHub Actions bumped:** `actions/checkout` and `setup-node`
  upgraded to v5 (fixes Node.js 20 deprecation warning; both v5
  releases run on Node 24 internally).

## [0.1.5] — 2026-09-02

### Added

- **Table component:** new Table component with 8 subcomponents
  (Table, TableHeader, TableBody, TableFooter, TableRow, TableHead,
  TableCell, TableCaption) using native HTML elements and project
  design tokens.

### Changed

- **Docs API reference audit:** removed non-existent subcomponents from
  usage imports, code, and composition. Added missing subcomponents.
  Fixed composition trees to list all exported subcomponents. Removed
  composition from flat components (Tooltip). Standardized prop names
  to dot notation. Fixed incorrect defaults and removed non-existent
  props. Added missing props. Used Table primitives in ApiTable instead
  of raw HTML. Unified first demo title to "Basic" across all
  components.
- **README and CONTRIBUTING cleanup:** removed self-promotional
  language, updated CLI commands to `npx ionbit-ui@latest`, removed
  outdated Status section, removed maintainer-only release process from
  CONTRIBUTING.

## [0.1.4] — 2026-09-01

### Added

- **SVG favicon:** 64x64 SVG favicon with the `i_` monogram using the
  design system's surface, foreground, and accent colors in monospace
  font.
- **Motion primitives separated into individual pages:** Glow, Magnetic,
  Pulse, and Reveal now each have their own component detail page
  (like Spotlight), instead of being combined into a single "Motion
  Primitives" page. Each page shows its own demos, props, and manual
  install source.
- **AGENT_RULES §25.3:** added rule requiring `yarn registry:build`
  before committing when modifying component source.

### Changed

- **Mobile typography:** bumped page title to `text-3xl`, section
  headings to `text-xl`, step headings to `text-lg`, and composition
  description to `text-base` on mobile. Replaced custom span badges
  with the Badge component (accent and outline variants).

### Fixed

- **Mobile layout:** restructured component detail page header so
  badges and action buttons share the first row on mobile, with title
  and description stacked below. Extracted `PageActions` into a
  dedicated component. Improved CopyButton visibility on mobile via
  `bg-inherit`.
- **Source code block header:** added `shrink-0` to file icon,
  inserted `<wbr>` after slashes for long path breaks, added `min-w-0`
  to prevent filename from touching the expand button.
- **Step markers:** show markers inline before heading text on mobile
  instead of absolutely positioned off-screen. Restored opaque backing
  circle at md+.
- **Dialog and AlertDialog edge spacing:** replaced `w-full` with
  `w-[calc(100%-2rem)]` so cards have 1rem padding on each side on
  mobile.
- **Code block horizontal scroll:** replaced Radix ScrollArea with
  native `overflow-auto` in PreviewCodeBlock, SourceCodeBlock, and
  UsageSection.
- **Demo container widths:** replaced fixed-width `w-80`, `w-[60%]`
  with responsive `max-w-sm`, `max-w-2xl` and responsive gaps.
- **Registry dependencies for motion primitives:** each primitive now
  only lists the hooks it actually imports.
- **Duplicate source files in manual install:** removed the motion
  grouping map that caused duplicate source files. Keyed
  SourceCodeBlock by `${name}/${filename}` so expanded state doesn't
  persist across pages sharing the same filenames.
- **Extra copy-all button:** removed the standalone "copy all" button
  after source file blocks.

## [0.1.3] — 2026-08-31

### Added

- **CLI --force flag:** separated skip-prompts (`--yes`/`-y`) from
  overwrite (`--force`/`-f`) following shadcn's convention. The "config
  already exists" check now uses `--force` and the error message
  correctly references it.

### Changed

- **Conventional commits spec:** added section 26 to AGENT_RULES.md
  with the full Conventional Commits specification (format, type table,
  examples, automated commit rules, optional scope). Expanded
  CONTRIBUTING.md commit message section with a type table.

### Fixed

- **Render deployment:** added `render.yaml` with a catch-all SPA
  rewrite rule (`/* -> /index.html`) so direct links to non-root paths
  don't return 404 on Render static sites.
- **OIDC publish workflow:** upgraded Node 20 to 24, added explicit
  `npm@latest` upgrade step (npm Trusted Publisher requires
  npm >= 11.5.1), added OIDC token availability check. Removed `.git`
  suffix from all `repository.url` fields (Sigstore provenance
  verification requires exact match with the GitHub OIDC token).
- **sync-versions.mjs:** fixed missing blank line after new CHANGELOG
  heading (MD022 violation).

## [0.1.2] — 2026-08-31

### Added

- **OIDC publish workflow:** added GitHub Actions workflow for automated
  npm publishing via npm Trusted Publisher (OIDC), plus the
  `sync-versions.mjs` script for keeping all package.json versions in
  sync across the monorepo.

## [0.1.1] — MVP (first published release)

> Note: `0.1.0` was briefly published to npm and then unpublished. npm
> permanently blocks reusing a published version number, so the identical
> MVP content is released as `0.1.1`. There is no `0.1.0` on the registry.

### Added

- **Copy Page button:** added a "Copy Page" button next to the prev/next
  chevrons on the component detail page. Copies the full component
  documentation as markdown (description, installation, usage, examples
  with source code, API props table, accessibility notes, composition
  tree) so consumers can paste it into AI agent context.

### Changed

- **Demo improvements:** updated 14 component demos with real-world
  wording and examples. Accordion now shows a billing FAQ. Alert
  "with description" demo includes both success and error variants.
  Alert Dialog reworded to "Discard changes?" with "Open Dialog"
  trigger. Checkbox demo shows an email notifications preferences
  form. Context Menu reworded to a file manager (Open, Rename,
  Duplicate, Share, Move to trash). Dialog description spacing fixed
  to match AlertDialog (added `mt-2`). Dropdown Menu trigger is now
  "Open Menu". Popover trigger is "Open Popover" with a scheduled
  maintenance card. ScrollArea shows a notifications list instead of
  version tags. Separator shows an account settings layout. Sheet
  trigger is "Open Sheet". Spotlight basic demo wording fixed (no
  proximity threshold — activates on hover, not "near"). Tabs shows
  a profile/security/billing/API keys settings layout. Toast trigger
  is "Show Toast" and position buttons are capitalized ("Top Left",
  "Top Right", etc.).
- **Sidebar auto-scroll:** `ComponentsSidebar` now automatically scrolls
  the active component into view with padding from the faded edges when
  navigating via the sidebar or URL.
- **Showcase grid extraction:** extracted the homepage showcase grid
  from `HomePage.tsx` into a separate `ShowcaseGrid` component under
  `apps/docs/src/showcase/`. `HomePage` is now 69 lines (was 156).
- **Registry lazy-loading:** `ComponentDetailPage` now lazy-loads only
  the requested component's registry data via `import.meta.glob`
  instead of importing all 35 registry files eagerly. Created a
  lightweight `componentManifest` (name, label, category, description,
  example count) for `ComponentsSidebar`, `ComponentsPage`, and
  `HomePage` to avoid pulling in demo components and `?raw`/
  `?highlighted` strings.
- **Chunk optimization:** added `lucide-react` and `cmdk` as separate
  vendor chunks in `vite.config.ts`. Switched `App.tsx` to direct `@/`
  imports instead of the `@ionbit-ui/ui` barrel. Main `index` chunk
  reduced from 678 kB to 27 kB (95% reduction). The 500 kB Rollup
  warning is gone.
- **Navigation flicker fix:** `ComponentDetailPage` keeps old content
  visible while the new component's registry data loads asynchronously,
  preventing page flicker and re-triggered Reveal animations.
- **Variant renaming:** renamed all `-inverted` button and alert variants
  to `-soft` for shorter, clearer naming (`primary-inverted` →
  `primary-soft`, `destructive-inverted` → `destructive-soft`,
  `accent-inverted` → `accent-soft`, `success-inverted` →
  `success-soft`, `warning-inverted` → `warning-soft`, `error-inverted`
  → `error-soft`). Updated source, registry, demos, tests, and docs.
- **Arrow icons:** replaced all `←`/`→` text arrows with Lucide icons
  (`ArrowLeft`, `ArrowRight`) across the docs app. Icons are placed
  inside `Button` with `data-icon` attributes for correct spacing.
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
- **Command attribution:** the Command docs page now has an "About"
  section crediting `cmdk` by Paco Coursey, matching the Toast
  attribution pattern.
- **Manual install tab:** the Installation block now has two tabs:
  "Command" (CLI install) and "Manual" (copy-paste source). The Manual
  tab shows numbered steps with circled markers on a vertical line:
  for Radix-based components, install `radix-ui` via pnpm/npm/yarn/bun;
  then copy the component source code (expandable/collapsible code
  blocks with filename header, FileCodeCorner icon, per-file copy
  button, and scrollable expansion); then update import paths. The
  selected tab and package manager persist across page navigation via
  localStorage. Source code is lazy-loaded per component via a new
  `virtual:highlighted-source/<name>` Vite virtual module so it
  doesn't bloat the main bundle. The Command/Manual tabs use a
  link-style underline variant.
- **Section titles:** increased component detail page section titles
  (Preview, About, Installation, API, Accessibility, Composition,
  Usage, Cursor) from `text-sm` to `text-lg` for better hierarchy.
- **Shadcn framing:** removed "not a shadcn clone" language from the
  README, homepage hero, and competitive research. The project is now
  described as "inspired by shadcn's source-ownership model."
- **Rebrand cleanup:** renamed the leftover `DigitalToasterProps` type to
  `IonBitToasterProps` (and updated re-exports).
- **Accordion last item border:** `AccordionItem` no longer renders a
  bottom border on the last item (`last:border-b-0`).
- **Install block refactor:** extracted `SourceCodeBlock` and
  `PmCommandBlock` into separate files under
  `apps/docs/src/components/detail/` for better separation of concerns.

### Known Issues

- **Homepage showcase grid** responsive layout (mobile scaling, column
  alignment) requires further adjustment.

### Added (MVP foundation)

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

### Changed (MVP foundation)

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
