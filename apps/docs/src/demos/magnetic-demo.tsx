import { Magnetic } from "@/components/motion";
import { Button } from "@/components/ui/button";

export function MagneticDemo() {
  return (
    <Magnetic intensity={0.35}>
      <Button size="lg">Magnetic</Button>
    </Magnetic>
  );
}
