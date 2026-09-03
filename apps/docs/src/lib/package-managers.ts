/**
 * Shared package-manager constants.
 *
 * Imported by both the Vite Shiki plugin (build-time, Node) and
 * client-side React components. Contains no browser-only or Node-only
 * dependencies so it is safe in both contexts.
 */

/** Package manager IDs and CLI prefixes for `npx`-style commands. */
export const PACKAGE_MANAGERS = [
  { id: "pnpm", prefix: "pnpm dlx" },
  { id: "npm", prefix: "npx" },
  { id: "yarn", prefix: "yarn dlx" },
  { id: "bun", prefix: "bunx --bun" },
] as const;

/** Package manager `add`/`install` command prefixes (no package name). */
export const PM_INSTALL_PREFIX: Record<string, string> = {
  pnpm: "pnpm add",
  npm: "npm install",
  yarn: "yarn add",
  bun: "bun add",
};

/** Full `add`/`install` commands for a given package. */
export function pmInstallCmd(pkg: string): Record<string, string> {
  return Object.fromEntries(
    PACKAGE_MANAGERS.map((pm) => [pm.id, `${PM_INSTALL_PREFIX[pm.id]} ${pkg}`]),
  );
}
