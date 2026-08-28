# Changelog

All notable changes to Digital UI will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

No packages have been published to npm yet. The current state of the
repository is the first MVP iteration — the source, registry, CLI, and
documentation app are complete and validated locally, but no
`@digital-ui/*` package has been released. Publishing is a follow-up
task.

### Changed

- Adopted shadcn-style source-owned import paths. Component source now
  uses `import { cn } from "@/lib/utils"` with an empty line between
  external and local imports. Renamed `lib/cn.ts` to `lib/utils.ts`.
  Configured `@/` path aliases in `packages/ui` (tsconfig, vite,
  vitest) and `apps/docs` (tsconfig, vite).
- Updated all docs usage examples and demo imports to show
  `@/components/ui/*` and `@/components/motion/*` paths instead of
  `@digital-ui/ui` / `@digital-ui/motion`.
- Removed `cursor-pointer` from all UI components. Tailwind v4 defaults
  to `cursor: default` for buttons. The docs app restores pointer cursor
  via a CSS `@layer base` rule. Consumers can opt in with
  `digital-ui init --pointer`.
- Added `--border-error` token (light + dark) and
  `--color-border-error` Tailwind mapping. Fixes `--shadow-glow-error`
  being silently dropped because `--border-error` was undefined.
- Replaced manual `<pre>` in `InstallBlock` with `ShikiCodeBlock` using
  a new `shiki-compact` wrapper (no line numbers, transparent background).
- Added CSS language support to `ShikiCodeBlock`.
- Extracted reusable `InlineCode` component for the repeated inline code
  styling pattern in docs.
- Extracted `CursorSection` as a standalone docs component, gated by a
  new `cursor` field on `ComponentMeta` (enabled for Button).
- Fixed `radixBased` metadata for Button and Breadcrumb (both use
  `@radix-ui/react-slot`).
- Added inverted Alert variants (`accent-inverted`, `success-inverted`,
  `warning-inverted`, `error-inverted`) with `bg-surface` and colored
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
  `registryDependencies` so `npx digital-ui add <component>` also
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

## [0.1.0] — MVP (first iteration, unreleased)

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
  inheritance (`@digital-ui/motion`).
- **Design tokens** (`@digital-ui/tokens`): semantic color, typography,
  spacing, radius, shadow, and motion tokens as CSS custom properties
  with Tailwind v4 `@theme` mapping. Dark theme default, light theme
  override.
- **CLI** (`@digital-ui/cli`): `digital-ui init`, `digital-ui add <component>`,
  `digital-ui list` — source-owned component installation with transitive
  dependency resolution.
- **Source registry** (`registry.json`): shadcn-compatible schema with
  39 items (cn, tokens, 31 components, 5 motion primitives).
- **Documentation app:** interactive component browser, live previews,
  separate import/code usage blocks with copy buttons, composition
  trees, API tables, accessibility notes, Radix-UI badges, on-this-page
  sidebar, prev/next navigation, tokens page, motion page.
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

### Changed

- N/A (first iteration).

### Deprecated

- N/A.

### Removed

- `docs/IMPLEMENTATION_PLAN.md` — the phased plan is complete; the
  repository is now treated as the first MVP iteration and tracked via
  `CHANGELOG.md` and `docs/AGENT_RULES.md` instead.

### Fixed

- N/A.
