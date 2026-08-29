import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Glow } from "@/components/motion";
import { Button, Slottable } from "@/components/ui/button";

export function GlowLinkDemo() {
  return (
    <Glow variant="text" intensity={0.9}>
      <Button asChild variant="link">
        <Slottable>
          <Link to="/components">Components</Link>
        </Slottable>
        <ArrowRight data-icon="inline-end" />
      </Button>
    </Glow>
  );
}
