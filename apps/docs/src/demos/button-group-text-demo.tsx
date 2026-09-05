import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";

export function ButtonGroupTextDemo() {
  return (
    <ButtonGroup>
      <ButtonGroupText>Email</ButtonGroupText>
      <Input placeholder="you@example.com" className="h-8" />
      <Button variant="secondary">Verify</Button>
    </ButtonGroup>
  );
}
