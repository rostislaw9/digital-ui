import { Toggle } from "@/components/ui/toggle";

export function ToggleDisabledDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle disabled aria-label="Toggle disabled">
        Disabled
      </Toggle>
      <Toggle variant="outline" disabled aria-label="Toggle disabled outline">
        Disabled
      </Toggle>
    </div>
  );
}
