import { Underline } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export function ToggleTextDemo() {
  return (
    <Toggle aria-label="Toggle underline">
      <Underline className="size-4" />
      Underline
    </Toggle>
  );
}
