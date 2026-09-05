import { Toggle } from "@/components/ui/toggle";

export function ToggleSizesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle variant="outline" size="xs" aria-label="Toggle extra small">
        XS
      </Toggle>
      <Toggle variant="outline" size="sm" aria-label="Toggle small">
        Small
      </Toggle>
      <Toggle variant="outline" size="md" aria-label="Toggle medium">
        Medium
      </Toggle>
      <Toggle variant="outline" size="lg" aria-label="Toggle large">
        Large
      </Toggle>
      <Toggle variant="outline" size="xl" aria-label="Toggle extra large">
        XL
      </Toggle>
    </div>
  );
}
