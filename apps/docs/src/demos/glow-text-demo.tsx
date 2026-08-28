import { Glow } from "@/components/motion";

export function GlowTextDemo() {
  return (
    <Glow always variant="text" intensity={0.9}>
      <span className="text-3xl font-bold">IonBit UI</span>
    </Glow>
  );
}
