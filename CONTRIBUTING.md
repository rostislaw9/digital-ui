# Contributing to IonBit UI

Thank you for your interest in contributing to IonBit UI! This document
describes the development workflow and conventions.

## Prerequisites

- Node.js >= 20
- Yarn 4 (pinned via `packageManager` in the root `package.json`)

## Getting started

```bash
git clone https://github.com/rostislaw9/ionbit-ui.git
cd ionbit-ui
yarn install
```

## Monorepo structure

```text
apps/docs/        Documentation & component playground (Vite + React)
packages/tokens/  Design tokens as CSS (@ionbit-ui/tokens)
packages/motion/  Motion primitives (@ionbit-ui/motion)
packages/ui/      Component library (@ionbit-ui/ui)
packages/cli/     IonBit UI CLI (ionbit-ui)
registry/         Source registry build scripts
docs/             Project spec, architecture, design system docs
```

## Common commands

```bash
yarn install          # install dependencies
yarn build            # build all packages
yarn dev              # start the docs app (http://localhost:5173)
yarn test             # run vitest
yarn test:watch       # vitest in watch mode
yarn typecheck        # tsc --noEmit across all packages
yarn lint             # eslint across the monorepo
yarn format           # prettier write
yarn format:check     # prettier check
yarn registry:build   # build the source registry
```

## Development workflow

1. Create a branch from `main`.
2. Make your changes. Follow the existing code style — Prettier and ESLint
   configurations are already set up.
3. Add or update tests for any component or behavior changes.
4. Run all checks before submitting:

   ```bash
   yarn typecheck && yarn lint && yarn test && yarn build
   ```

5. Commit with a clear message. Use the conventional commit format
   (e.g. `feat:`, `fix:`, `docs:`, `refactor:`, `test:`).
6. Open a pull request describing what changed and why.

## Code conventions

- **TypeScript:** strict mode with `noUncheckedIndexedAccess`. Array and
  object indexing may return `undefined` — guard accordingly.
- **Imports:** use `import type` for type-only imports (enforced by ESLint).
- **Components:** use semantic design tokens (`bg-surface`, `text-foreground`,
  `border-border`, etc.) — never hardcode colors.
- **Motion:** use `--duration-fast`/`--duration-normal` and `--ease-standard`
  tokens. Respect `prefers-reduced-motion` via the `useReducedMotion` hook.
- **Accessibility:** all interactive components must be keyboard navigable
  and have appropriate ARIA attributes.
- **Tests:** co-locate test files next to the source they test
  (`*.test.tsx`).

## Adding a new component

1. Create the component under `packages/ui/src/components/<name>/`:
   - `index.ts` — public exports
   - `<name>.tsx` — implementation
   - `<name>.test.tsx` — tests
2. Add the entry to `packages/ui/vite.config.ts` (lib entry).
3. Add the export path to `packages/ui/package.json` (exports map).
4. Export from `packages/ui/src/index.ts`.
5. Add the component to `registry.json`.
6. Add a per-component metadata file at
   `apps/docs/src/components/registry/<name>.tsx` and re-export it from
   `apps/docs/src/components/registry/index.ts`. Follow the normalized
   field order: `name`, `label`, `description`, `category`, `examples`,
   `usageImport`, `usageCode`, `composition`, `props`, `accessibility`,
   `radixBased`, `primitives`, `isNew`.
7. Create a demo and documentation in the docs app.
8. Run `yarn registry:build` to generate the registry item.
9. Update `CHANGELOG.md` and any affected docs (`README.md`,
   `docs/ARCHITECTURE.md`, etc.) to reflect the new component.

## Adding a new motion primitive

1. Create the primitive under `packages/motion/src/primitives/<name>.tsx`.
2. Add tests at `packages/motion/src/primitives/<name>.test.tsx`.
3. Export from `packages/motion/src/index.ts`.
4. Add to `registry.json` and the docs registry.
5. Add documentation to the motion page.

## Release process

> No package has been published yet. The workflow below describes the
> intended process for the first npm release and subsequent releases.

1. Update `CHANGELOG.md` with the changes since the last release.
2. Bump versions in all publishable packages
   (`@ionbit-ui/ui`, `@ionbit-ui/motion`, `@ionbit-ui/tokens`,
   `ionbit-ui`).
3. Run all checks: `yarn typecheck && yarn lint && yarn test && yarn build`.
4. Build the registry: `yarn registry:build`.
5. Publish packages in dependency order: tokens → motion → ui → cli.
6. Tag the release: `git tag v0.x.0`.
7. Push tags and the changelog update.

## License

By contributing, you agree that your contributions will be licensed under the
MIT License.
