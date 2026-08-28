import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

export type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

export function detectPackageManager(cwd: string): PackageManager {
  if (existsSync(resolve(cwd, "bun.lockb"))) return "bun";
  if (existsSync(resolve(cwd, "bun.lock"))) return "bun";
  if (existsSync(resolve(cwd, "pnpm-lock.yaml"))) return "pnpm";
  if (existsSync(resolve(cwd, "yarn.lock"))) return "yarn";
  return "npm";
}

export function installNpmDeps(deps: string[], cwd: string): void {
  if (deps.length === 0) return;
  const pm = detectPackageManager(cwd);
  const cmd =
    pm === "pnpm"
      ? `pnpm add ${deps.join(" ")}`
      : pm === "yarn"
        ? `yarn add ${deps.join(" ")}`
        : pm === "bun"
          ? `bun add ${deps.join(" ")}`
          : `npm install ${deps.join(" ")}`;
  execSync(cmd, { cwd, stdio: "inherit" });
}
