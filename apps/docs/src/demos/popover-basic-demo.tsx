import { Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function PopoverBasicDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-md bg-accent-muted">
              <Calendar className="size-4 text-accent" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm leading-none font-medium text-foreground">
                Scheduled maintenance
              </p>
              <p className="text-xs text-foreground-muted">
                Saturday, 2:00–4:00 AM UTC
              </p>
            </div>
          </div>
          <p className="text-sm text-foreground-muted">
            Services may experience brief interruptions during the upgrade
            window. No action required.
          </p>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" size="sm">
              Dismiss
            </Button>
            <Button variant="primary" size="sm">
              Remind me
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
