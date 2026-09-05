import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";

export function InputGroupBlockEndDemo() {
  return (
    <div className="flex max-w-sm flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Label htmlFor="block-end-input">Input</Label>
        <InputGroup className="h-auto">
          <InputGroupInput id="block-end-input" placeholder="Enter amount" />
          <InputGroupAddon align="block-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <p className="text-xs text-foreground-muted">
          Footer positioned below the input.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="block-end-textarea">Textarea</Label>
        <InputGroup>
          <InputGroupTextarea
            id="block-end-textarea"
            placeholder="Write a comment..."
          />
          <InputGroupAddon align="block-end">
            <InputGroupText>0/280</InputGroupText>
            <InputGroupButton variant="primary" size="sm" className="ms-auto">
              Post
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <p className="text-xs text-foreground-muted">
          Footer positioned below the textarea.
        </p>
      </div>
    </div>
  );
}
