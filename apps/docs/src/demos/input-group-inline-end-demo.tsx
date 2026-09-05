import { EyeOff } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";

export function InputGroupInlineEndDemo() {
  return (
    <div className="flex max-w-sm flex-col gap-2">
      <Label htmlFor="inline-end-input">Input</Label>
      <InputGroup>
        <InputGroupInput
          id="inline-end-input"
          type="password"
          placeholder="Enter password"
        />
        <InputGroupAddon align="inline-end">
          <EyeOff />
        </InputGroupAddon>
      </InputGroup>
      <p className="text-xs text-foreground-muted">
        Icon positioned at the end.
      </p>
    </div>
  );
}
