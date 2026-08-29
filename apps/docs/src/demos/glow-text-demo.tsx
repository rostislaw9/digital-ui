import { Glow } from "@/components/motion";

export function GlowTextDemo() {
  return (
    <Glow variant="text" intensity={0.9}>
      <span className="text-3xl font-bold">Ionbit UI</span>
    </Glow>
  );
}
