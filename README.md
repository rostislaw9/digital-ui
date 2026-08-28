# Digital UI

A production-quality React UI component system with a distinctive digital
visual language and an integrated motion/interaction system.

> Build production interfaces that feel alive without having to design every
> interaction from scratch.

## What this is

Digital UI is **not**:

- a generic shadcn clone;
- a collection of copied Magic UI components;
- a collection of flashy landing-page effects;
- generic "neon cyberpunk" UI;
- animation for animation's sake.

It **is**:

- a small set of production-quality, accessible React primitives;
- a coherent motion system with shared timing, easing, intensity, and
  reduced-motion tokens;
- a restrained, dark, technical visual identity built on hierarchy,
  typography, surface depth, and controlled accent light;
- source-owned — you own the components you install, just like shadcn.

## Status

This is the first MVP iteration. The source, registry, CLI, and
documentation app are complete and validated locally, but **no
`@digital-ui/*` package has been published to npm yet**. Publishing is
a follow-up task. Until then, use the components via the source-owned
CLI workflow or directly from this repository.

## Packages

| Package              | Description                                                    |
| -------------------- | -------------------------------------------------------------- |
| `@digital-ui/ui`     | 31 production-quality React components                         |
| `@digital-ui/motion` | 5 motion primitives (Glow, Pulse, Spotlight, Magnetic, Reveal) |
| `@digital-ui/tokens` | Design tokens as CSS with Tailwind v4 mapping                  |
| `digital-ui`    | CLI for source-owned component installation                    |

## Components

**UI (31):** Accordion, Alert, AlertDialog, Avatar, Badge, Breadcrumb,
Button, Card, Checkbox, Command, ContextMenu, Dialog, DropdownMenu,
HoverCard, Input, Label, Pagination, Popover, Progress,
RadioGroup, ScrollArea, Select, Separator, Sheet, Skeleton, Slider,
Switch, Tabs, Textarea, Toast, Tooltip.

**Motion (5):** Glow, Pulse, Spotlight, Magnetic, Reveal.

## Quick start

> Packages are not published yet. Until the first npm release, use the
> source-owned CLI workflow below, or copy components directly from
> `packages/ui/src/components/`.

### Source-owned installation (CLI)

Install components as source files into your project — you own the code:

```bash
npx digital-ui init
npx digital-ui add button
npx digital-ui add accordion
npx digital-ui list
```

This copies the component source into `src/components/ui/`, resolves registry
dependencies, and tells you which npm packages to install.

## Motion primitives

```tsx
import { Spotlight, Glow, Magnetic, Pulse, Reveal } from "@digital-ui/motion";

// Spotlight — cursor-following radial light on hover
<Spotlight>
  <Card>...</Card>
</Spotlight>

// Glow — accent-colored box-shadow / text-shadow halo
<Glow variant="text">
  <h1>Digital UI</h1>
</Glow>

// Magnetic — element subtly translates toward the cursor
<Magnetic>
  <Button>Click me</Button>
</Magnetic>
```

All motion primitives respect `prefers-reduced-motion` automatically.

## Design tokens

Digital UI uses a semantic token system mapped to Tailwind v4 utilities:

```text
--background    --surface    --surface-elevated    --surface-hover
--foreground    --foreground-muted    --foreground-subtle
--border        --border-strong       --border-accent
--accent        --accent-hover        --accent-muted
--success       --warning             --error        --info
--radius-sm/md/lg/xl    --shadow-xs/sm/md/lg/glow
--duration-fast/normal/slow    --ease-standard/emphasized/exit
```

Override any token in your `:root` or `.dark` / `.light` selectors to retheme.

## Requirements

- React 18 or 19
- Tailwind CSS v4
- Node.js >= 20 (for development and CLI)

## Repository

```text
apps/docs/        Vite + React documentation app
packages/tokens/  Design tokens as CSS (@digital-ui/tokens)
packages/motion/  Motion primitives (@digital-ui/motion)
packages/ui/      Component library (@digital-ui/ui)
packages/cli/     Digital UI CLI (digital-ui)
registry/         Source registry build scripts
docs/             Project spec, architecture, design system docs
```

## Development

```bash
yarn install
yarn build          # build all packages
yarn dev            # start the docs app (http://localhost:5173)
yarn test           # run vitest
yarn typecheck      # tsc --noEmit across all packages
yarn lint           # eslint across the monorepo
yarn format         # prettier write
yarn registry:build # build the source registry
```

See `CONTRIBUTING.md` for the full development workflow.

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Design System](docs/DESIGN_SYSTEM.md)
- [Product Spec](docs/PRODUCT_SPEC.md)
- [Competitive Research](docs/COMPETITIVE_RESEARCH.md)
- [Agent Rules](docs/AGENT_RULES.md)

## License

[MIT](LICENSE)
