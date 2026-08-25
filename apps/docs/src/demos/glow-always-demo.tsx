import { Button } from "@digital-ui/ui";
import { Glow } from "@digital-ui/motion";

export function GlowAlwaysDemo() {
  return (
    <Glow always intensity={0.7}>
      <Button variant="outline" size="lg">
        Active
      </Button>
    </Glow>
  );
}
