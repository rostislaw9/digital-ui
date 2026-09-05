import { AudioLines, Paperclip } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Tooltip } from "@/components/ui/tooltip";

export function ButtonGroupNestedDemo() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon" aria-label="Add">
          <Paperclip />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup>
          <InputGroupInput placeholder="Send a message..." />
          <Tooltip content="Voice Mode">
            <InputGroupAddon align="inline-end">
              <AudioLines />
            </InputGroupAddon>
          </Tooltip>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  );
}
