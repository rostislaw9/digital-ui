# tooling/

Placeholder for the future IonBit UI CLI and shared build tooling.

Planned CLI surface:

```bash
yarn ionbit-ui init
yarn ionbit-ui add button
yarn ionbit-ui add card
yarn ionbit-ui list
```

The CLI will read the registry (in `../registry/`), resolve a component's npm
and registry dependencies, fetch source files, transform imports to match the
consumer's alias config, and write files into the consumer's `components/ui/`.

**Not implemented in this phase.** The package layout (one folder per
component, separated `cn` helper and motion primitives) is what the CLI will
operate on.
