import { Bell, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";

export function TooltipPositionsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:gap-6">
      <Tooltip content="Settings" side="left">
        <Button variant="ghost" size="icon" aria-label="Settings">
          <Settings />
        </Button>
      </Tooltip>
      <Tooltip content="Add a new item">
        <Button variant="secondary">Hover me</Button>
      </Tooltip>
      <Tooltip content="Tooltip on bottom" side="bottom">
        <Button variant="outline">Bottom</Button>
      </Tooltip>
      <Tooltip content="Notifications" side="right">
        <Button variant="primary" size="icon" aria-label="Notifications">
          <Bell />
        </Button>
      </Tooltip>
    </div>
  );
}
