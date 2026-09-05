import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";

export function ButtonGroupSeparatorDemo() {
  return (
    <ButtonGroup variant="separated">
      <Button variant="primary" size="sm">
        Copy
      </Button>
      <ButtonGroupSeparator />
      <Button variant="primary" size="sm">
        Paste
      </Button>
    </ButtonGroup>
  );
}
