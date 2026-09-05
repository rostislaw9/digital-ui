import { Copy, Check, Star, Info } from "lucide-react";
import { useState } from "react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export function InputGroupButtonDemo() {
  const [isCopied, setIsCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="https://x.com/shadcn" readOnly />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            aria-label="Copy"
            title="Copy"
            size="icon-xs"
            onClick={() => setIsCopied(true)}
          >
            {isCopied ? <Check /> : <Copy />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupButton variant="secondary" size="icon-xs">
            <Info />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon className="ps-1.5 text-foreground-muted">
          https://
        </InputGroupAddon>
        <InputGroupInput />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            onClick={() => setIsFavorite(!isFavorite)}
            size="icon-xs"
          >
            <Star
              data-favorite={isFavorite}
              className="data-[favorite=true]:fill-accent data-[favorite=true]:stroke-accent"
            />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Type to search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
