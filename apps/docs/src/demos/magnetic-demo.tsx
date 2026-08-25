import { Button } from "@digital-ui/ui";
import { Magnetic } from "@digital-ui/motion";

export function MagneticDemo() {
  return (
    <Magnetic intensity={0.35}>
      <Button size="lg">Magnetic</Button>
    </Magnetic>
  );
}
