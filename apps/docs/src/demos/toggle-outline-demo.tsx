import { Bold, Italic } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export function ToggleOutlineDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle variant="outline" aria-label="Toggle italic">
        <Italic className="size-4" />
        Italic
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle bold">
        <Bold className="size-4" />
        Bold
      </Toggle>
    </div>
  );
}
