import type { UtilMeta } from "../registry/utils/types";

/**
 * Convert a UtilMeta object into a markdown document suitable for
 * pasting into AI agent context. Includes description, install command,
 * CSS import, class reference table, usage code, and all content sections
 * with their demos and code blocks.
 */
export function utilToMarkdown(util: UtilMeta): string {
  const lines: string[] = [];

  lines.push(`# ${util.label}`);
  lines.push("");
  lines.push(`> ${util.description}`);
  lines.push("");
  lines.push(`**Tags:** ${util.category}`);
  lines.push("");

  // Installation
  lines.push("## Installation");
  lines.push("");
  lines.push("```bash");
  lines.push(util.installCommand);
  lines.push("```");
  lines.push("");
  if (util.cssImport) {
    lines.push("```css");
    lines.push(util.cssImport);
    lines.push("```");
    lines.push("");
  }

  // Usage — class reference table
  if (util.classTable && util.classTable.length > 0) {
    lines.push("## Usage");
    lines.push("");
    lines.push("| Class | Styles |");
    lines.push("| --- | --- |");
    for (const entry of util.classTable) {
      const styles = nodeToText(entry.styles);
      lines.push(`| \`${entry.className}\` | ${styles} |`);
    }
    lines.push("");
  }

  // Usage — code example
  if (util.usageCode) {
    if (!util.classTable || util.classTable.length === 0) {
      lines.push("## Usage");
      lines.push("");
    }
    if (util.usageProse) {
      lines.push(nodeToText(util.usageProse));
      lines.push("");
    }
    lines.push("```tsx");
    lines.push(util.usageCode);
    lines.push("```");
    lines.push("");
    if (util.usageProseAfter) {
      lines.push(nodeToText(util.usageProseAfter));
      lines.push("");
    }
  }

  // Hero demo
  if (util.heroDemo) {
    lines.push("## Overview");
    lines.push("");
    lines.push("```tsx");
    lines.push(util.heroDemo.rawCode);
    lines.push("```");
    lines.push("");
  }

  // Additional sections
  for (const section of util.sections) {
    lines.push(`## ${section.title}`);
    lines.push("");
    if (section.prose) {
      lines.push(nodeToText(section.prose));
      lines.push("");
    }
    if (section.before) {
      for (const block of section.before) {
        if (block.prose) {
          lines.push(nodeToText(block.prose));
          lines.push("");
        }
        if (block.code) {
          lines.push("```tsx");
          lines.push(block.code);
          lines.push("```");
          lines.push("");
        }
      }
    }
    if (section.demo) {
      lines.push("```tsx");
      lines.push(section.demo.rawCode);
      lines.push("```");
      lines.push("");
    }
    if (section.after) {
      for (const block of section.after) {
        if (block.prose) {
          lines.push(nodeToText(block.prose));
          lines.push("");
        }
        if (block.code) {
          lines.push("```tsx");
          lines.push(block.code);
          lines.push("```");
          lines.push("");
        }
      }
    }
  }

  return lines.join("\n").trim() + "\n";
}

/** Convert a ReactNode (prose/styles) to a plain-text approximation. */
function nodeToText(node: React.ReactNode): string {
  if (node == null || node === false || node === true) return "";
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join("");
  if (typeof node === "object" && "props" in node) {
    const props = (node as React.ReactElement).props as Record<string, unknown>;
    const children = props.children as React.ReactNode;
    if (children != null) return nodeToText(children);
  }
  return "";
}
