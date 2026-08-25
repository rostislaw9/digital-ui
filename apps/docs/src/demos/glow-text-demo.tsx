import { Glow } from "@digital-ui/motion";

export function GlowTextDemo() {
  return (
    <Glow always variant="text" intensity={0.9}>
      <span className="text-3xl font-bold">Digital UI</span>
    </Glow>
  );
}
