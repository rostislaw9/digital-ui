import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ToggleGroupOutlineDemo() {
  return (
    <ToggleGroup
      variant="outline"
      type="single"
      defaultValue="all"
      aria-label="Filter"
    >
      <ToggleGroupItem value="all">All</ToggleGroupItem>
      <ToggleGroupItem value="unread">Unread</ToggleGroupItem>
      <ToggleGroupItem value="archived">Archived</ToggleGroupItem>
    </ToggleGroup>
  );
}
