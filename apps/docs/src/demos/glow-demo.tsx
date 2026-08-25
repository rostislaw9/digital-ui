import { Button } from "@digital-ui/ui";
import { Glow } from "@digital-ui/motion";

export function GlowDemo() {
  return (
    <Glow intensity={0.7}>
      <Button variant="outline" size="lg">
        Glow on hover
      </Button>
    </Glow>
  );
}
