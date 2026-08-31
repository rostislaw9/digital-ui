#!/usr/bin/env node
/**
 * sync-versions.mjs — keep all version references in sync across the monorepo.
 *
 * Usage:
 *   node tooling/sync-versions.mjs <version>      # e.g. 0.1.2
 *   node tooling/sync-versions.mjs <version> --no-changelog
 *
 * Rewrites the "version" field in every package.json, the commander .version()
 * call in the CLI source, and (by default) inserts a new dated heading in
 * CHANGELOG.md below the [Unreleased] section.
 *
 * Peer/dependency ranges like "^0.1.0" are intentionally left untouched —
 * they are semver ranges, not pinned versions, and tightening them on a
 * patch bump is non-conventional.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const args = process.argv.slice(2);
if (args.length === 0 || args[0] === "--help" || args[0] === "-h") {
  console.error(
    "Usage: node tooling/sync-versions.mjs <version> [--no-changelog]",
  );
  process.exit(1);
}

const version = args[0].replace(/^v/, "");
const updateChangelog = !args.includes("--no-changelog");

if (!/^\d+\.\d+\.\d+(-[\w.]+)?$/.test(version)) {
  console.error(`Invalid version: "${version}". Expected semver like 0.1.2.`);
  process.exit(1);
}

// ─── Files with an exact "version" field ───────────────────────────────────
const packageFiles = [
  "package.json",
  "packages/cli/package.json",
  "packages/ui/package.json",
  "packages/tokens/package.json",
  "packages/motion/package.json",
  "apps/docs/package.json",
];

let changed = 0;

for (const rel of packageFiles) {
  const path = resolve(root, rel);
  const json = JSON.parse(readFileSync(path, "utf-8"));
  if (json.version === version) {
    console.log(`  · ${rel} — already ${version}, skipping`);
    continue;
  }
  json.version = version;
  writeFileSync(path, JSON.stringify(json, null, 2) + "\n");
  console.log(`  ✓ ${rel} → ${version}`);
  changed++;
}

// ─── CLI commander .version() call ─────────────────────────────────────────
const cliEntry = resolve(root, "packages/cli/src/index.ts");
let cliSrc = readFileSync(cliEntry, "utf-8");
const cliVersionRe = /\.version\("([^"]+)"\)/;
if (cliVersionRe.test(cliSrc)) {
  const current = cliSrc.match(cliVersionRe)[1];
  if (current === version) {
    console.log(`  · packages/cli/src/index.ts — already ${version}, skipping`);
  } else {
    cliSrc = cliSrc.replace(cliVersionRe, `.version("${version}")`);
    writeFileSync(cliEntry, cliSrc);
    console.log(`  ✓ packages/cli/src/index.ts → ${version}`);
    changed++;
  }
} else {
  console.error(
    `  ✗ packages/cli/src/index.ts — could not find .version("...") call`,
  );
  process.exit(1);
}

// ─── CHANGELOG.md — insert new dated heading under [Unreleased] ────────────
if (updateChangelog) {
  const changelogPath = resolve(root, "CHANGELOG.md");
  let md = readFileSync(changelogPath, "utf-8");

  // Skip if this version already has a heading
  const headingRe = new RegExp(
    `^## \\[${version.replace(/[.\\]/g, "\\$&")}\\]`,
    "m",
  );
  if (headingRe.test(md)) {
    console.log(
      `  · CHANGELOG.md — [${version}] heading already exists, skipping`,
    );
  } else {
    const today = new Date().toISOString().slice(0, 10);
    const newHeading = `## [${version}] — ${today}`;

    // Find the [Unreleased] heading and the next ## heading after it
    const unreleasedIdx = md.indexOf("## [Unreleased]");
    if (unreleasedIdx === -1) {
      // No Unreleased section — insert at the top after the header block
      const firstHeadingIdx = md.indexOf("\n## ");
      if (firstHeadingIdx === -1) {
        md = md + "\n" + newHeading + "\n";
      } else {
        md =
          md.slice(0, firstHeadingIdx + 1) +
          newHeading +
          "\n" +
          md.slice(firstHeadingIdx + 1);
      }
    } else {
      // Find the next "## " heading after Unreleased
      const afterUnreleased = md.indexOf("\n## ", unreleasedIdx + 1);
      if (afterUnreleased === -1) {
        // Unreleased is the only heading — append after its content
        md = md.trimEnd() + "\n\n" + newHeading + "\n";
      } else {
        // Insert the new heading right before the next version heading.
        // Content between [Unreleased] and the next heading stays under
        // [Unreleased] (standard Keep a Changelog flow: unreleased entries
        // accumulate there and are moved manually when releasing).
        md =
          md.slice(0, afterUnreleased + 1) +
          newHeading +
          "\n\n" +
          md.slice(afterUnreleased + 1);
      }
    }

    writeFileSync(changelogPath, md);
    console.log(`  ✓ CHANGELOG.md → added [${version}] heading (${today})`);
    changed++;
  }
}

console.log(`\nDone. ${changed} file(s) updated to ${version}.`);
