# tooling/

Placeholder for the future Digital UI CLI and shared build tooling.

Planned CLI surface:

```bash
yarn digital-ui init
yarn digital-ui add button
yarn digital-ui add card
yarn digital-ui list
```

The CLI will read the registry (in `../registry/`), resolve a component's npm
and registry dependencies, fetch source files, transform imports to match the
consumer's alias config, and write files into the consumer's `components/ui/`.

**Not implemented in this phase.** The package layout (one folder per
component, separated `cn` helper and motion primitives) is what the CLI will
operate on.
