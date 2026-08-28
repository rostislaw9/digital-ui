import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

export function detectPackageManager(
  cwd: string,
): "npm" | "pnpm" | "yarn" {
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
        : `npm install ${deps.join(" ")}`;
  execSync(cmd, { cwd, stdio: "inherit" });
}
