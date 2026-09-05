import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ToggleGroupSizesDemo() {
  return (
    <div className="flex flex-col gap-4">
      <ToggleGroup
        type="single"
        size="sm"
        defaultValue="top"
        variant="outline"
        aria-label="Position small"
      >
        <ToggleGroupItem value="top">Top</ToggleGroupItem>
        <ToggleGroupItem value="bottom">Bottom</ToggleGroupItem>
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
        <ToggleGroupItem value="right">Right</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup
        type="single"
        defaultValue="top"
        variant="outline"
        aria-label="Position medium"
      >
        <ToggleGroupItem value="top">Top</ToggleGroupItem>
        <ToggleGroupItem value="bottom">Bottom</ToggleGroupItem>
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
        <ToggleGroupItem value="right">Right</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup
        type="single"
        size="lg"
        defaultValue="top"
        variant="outline"
        aria-label="Position large"
      >
        <ToggleGroupItem value="top">Top</ToggleGroupItem>
        <ToggleGroupItem value="bottom">Bottom</ToggleGroupItem>
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
        <ToggleGroupItem value="right">Right</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
