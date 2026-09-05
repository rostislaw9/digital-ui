import { Paperclip, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { Tooltip } from "@/components/ui/tooltip";

export function ButtonGroupNestedDemo() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Tooltip content="Add attachment">
          <Button variant="outline" size="icon" aria-label="Add attachment">
            <Paperclip className="size-4" />
          </Button>
        </Tooltip>
      </ButtonGroup>
      <ButtonGroup>
        <Input placeholder="Type a message..." className="h-8" />
        <Tooltip content="Send message">
          <Button variant="outline" size="icon" aria-label="Send message">
            <Send className="size-4" />
          </Button>
        </Tooltip>
      </ButtonGroup>
    </ButtonGroup>
  );
}
