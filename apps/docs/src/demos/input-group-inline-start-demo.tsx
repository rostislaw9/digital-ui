import { Search } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";

export function InputGroupInlineStartDemo() {
  return (
    <div className="flex max-w-sm flex-col gap-2">
      <Label htmlFor="inline-start-input">Input</Label>
      <InputGroup>
        <InputGroupInput id="inline-start-input" placeholder="Search..." />
        <InputGroupAddon align="inline-start">
          <Search />
        </InputGroupAddon>
      </InputGroup>
      <p className="text-xs text-foreground-muted">
        Icon positioned at the start.
      </p>
    </div>
  );
}
