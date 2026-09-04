# Installation

> Set up Ionbit UI in your React project with the CLI, or add components manually.

## Quick Start

The fastest way to get started. The CLI scaffolds the directory structure, installs base dependencies, and sets up your CSS imports.

### Initialize your project

Run `init` in your project root. This creates an `ionbit-ui.config.json`, sets up the directory structure, and installs the `cn` utility and design tokens.

**pnpm:**

```bash
pnpm dlx ionbit-ui@latest init
```

**npm:**

```bash
npx ionbit-ui@latest init
```

**yarn:**

```bash
yarn dlx ionbit-ui@latest init
```

**bun:**

```bash
bunx ionbit-ui@latest init
```

### Add components

Add individual components as needed. The CLI fetches the source from the registry and places it in your project.

**pnpm:**

```bash
pnpm dlx ionbit-ui@latest add button
```

**npm:**

```bash
npx ionbit-ui@latest add button
```

**yarn:**

```bash
yarn dlx ionbit-ui@latest add button
```

**bun:**

```bash
bunx ionbit-ui@latest add button
```

You can add multiple components at once:

**pnpm:**

```bash
pnpm dlx ionbit-ui@latest add button dialog accordion
```

**npm:**

```bash
npx ionbit-ui@latest add button dialog accordion
```

**yarn:**

```bash
yarn dlx ionbit-ui@latest add button dialog accordion
```

**bun:**

```bash
bunx ionbit-ui@latest add button dialog accordion
```

### Browse available components

List all components and utilities available in the registry.

**pnpm:**

```bash
pnpm dlx ionbit-ui@latest list
```

**npm:**

```bash
npx ionbit-ui@latest list
```

**yarn:**

```bash
yarn dlx ionbit-ui@latest list
```

**bun:**

```bash
bunx ionbit-ui@latest list
```

### Import and use

Components are added to `src/components/ui/`. Import them using the path alias configured during init.

```tsx
import { Button } from "@/components/ui/button";

export function App() {
  return <Button variant="primary">Click me</Button>;
}
```

## Manual Setup

Prefer to set things up yourself? Follow these steps to configure Ionbit UI manually.

### Create the config file

Create an `ionbit-ui.config.json` in your project root. This tells the CLI where to place components and styles.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "style": "digital",
  "tailwind": {
    "css": "src/index.css",
    "cssVariables": true
  },
  "aliases": {
    "components": "src/components/ui",
    "motion": "src/components/motion",
    "lib": "src/lib",
    "styles": "src/styles"
  }
}
```

### Set up CSS imports

Add the token, base, and utility CSS imports to your main stylesheet. The `init` command does this automatically.

```css
@import "tailwindcss";

@import "./styles/tokens.css";
@import "./styles/base.css";
@import "./styles/utilities.css";
```

### Add components with the CLI

Once configured, use the `add` command to fetch component source files into your project.

**pnpm:**

```bash
pnpm dlx ionbit-ui@latest add button
```

**npm:**

```bash
npx ionbit-ui@latest add button
```

**yarn:**

```bash
yarn dlx ionbit-ui@latest add button
```

**bun:**

```bash
bunx ionbit-ui@latest add button
```

## Requirements

- React 18+ — components use modern React features.
- Tailwind CSS v4 — the design system is built on Tailwind v4 with CSS custom properties.
- Node.js 18+ — required for the CLI.
- A bundler — Vite, Next.js, or any bundler that supports CSS imports and path aliases.
