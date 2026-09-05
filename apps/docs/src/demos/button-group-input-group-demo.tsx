import { AudioLines, Paperclip } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Tooltip } from "@/components/ui/tooltip";

export function ButtonGroupInputGroupDemo() {
  const [voiceEnabled, setVoiceEnabled] = useState(false);

  return (
    <ButtonGroup className="[--radius-md:9999px]">
      <ButtonGroup>
        <Button variant="outline" size="icon" aria-label="Add">
          <Paperclip />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup>
          <InputGroupInput
            placeholder={
              voiceEnabled ? "Record and send audio..." : "Send a message..."
            }
            disabled={voiceEnabled}
          />
          <InputGroupAddon align="inline-end">
            <Tooltip content="Voice Mode">
              <InputGroupButton
                onClick={() => setVoiceEnabled(!voiceEnabled)}
                size="icon-xs"
                data-active={voiceEnabled}
                className="data-[active=true]:bg-error-muted data-[active=true]:text-error"
                aria-pressed={voiceEnabled}
              >
                <AudioLines />
              </InputGroupButton>
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  );
}
