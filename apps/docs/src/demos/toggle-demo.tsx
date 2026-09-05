import { Bookmark } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bookmark" variant="outline">
      <Bookmark className="size-4 group-data-[state=on]/toggle:fill-accent" />
      Bookmark
    </Toggle>
  );
}
