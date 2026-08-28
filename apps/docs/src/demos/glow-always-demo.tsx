import { Glow } from "@/components/motion";
import { Button } from "@/components/ui/button";

export function GlowAlwaysDemo() {
  return (
    <Glow always intensity={0.7}>
      <Button variant="outline" size="lg">
        Active
      </Button>
    </Glow>
  );
}
