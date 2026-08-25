import type { PropMeta } from "../registry.js";

export function ApiTable({ props }: { props: PropMeta[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-surface">
            <th className="px-4 py-2 text-left font-mono text-xs uppercase tracking-wider text-foreground-subtle">
              Prop
            </th>
            <th className="px-4 py-2 text-left font-mono text-xs uppercase tracking-wider text-foreground-subtle">
              Type
            </th>
            <th className="px-4 py-2 text-left font-mono text-xs uppercase tracking-wider text-foreground-subtle">
              Default
            </th>
            <th className="px-4 py-2 text-left font-mono text-xs uppercase tracking-wider text-foreground-subtle">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr
              key={prop.name}
              className="border-b border-border last:border-0"
            >
              <td className="px-4 py-2 font-mono text-xs text-accent">
                {prop.name}
              </td>
              <td className="px-4 py-2 font-mono text-xs text-foreground-muted">
                {prop.type}
              </td>
              <td className="px-4 py-2 font-mono text-xs text-foreground-subtle">
                {prop.default ?? "—"}
              </td>
              <td className="px-4 py-2 text-xs text-foreground-muted">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
