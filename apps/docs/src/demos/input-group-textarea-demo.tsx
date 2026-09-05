import { Copy, RefreshCw, FileCode, CornerDownLeft } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

export function InputGroupTextareaDemo() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <InputGroup>
        <InputGroupTextarea
          placeholder="console.log('Hello, world!');"
          className="min-h-[200px] font-mono text-sm"
        />
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupText>Line 1, Column 1</InputGroupText>
          <InputGroupButton size="sm" className="ms-auto" variant="primary">
            Run <CornerDownLeft />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="block-start" className="border-b">
          <InputGroupText className="font-mono font-medium">
            <FileCode />
            script.js
          </InputGroupText>
          <InputGroupButton className="ms-auto" size="icon-xs">
            <RefreshCw />
          </InputGroupButton>
          <InputGroupButton variant="ghost" size="icon-xs">
            <Copy />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
