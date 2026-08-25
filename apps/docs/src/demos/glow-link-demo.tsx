import { Glow } from "@digital-ui/motion";
import { Button } from "@digital-ui/ui";
import { Link } from "react-router-dom";

export function GlowLinkDemo() {
  return (
    <Glow variant="text" intensity={0.9}>
      <Button asChild variant="link">
        <Link to="/components">Components →</Link>
      </Button>
    </Glow>
  );
}
