import { Glow } from "@/components/motion";
import { Button } from "@/components/ui/button";

export function GlowDemo() {
  return (
    <Glow intensity={0.7}>
      <Button variant="outline" size="lg">
        Glow on hover
      </Button>
    </Glow>
  );
}
