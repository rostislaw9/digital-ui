import { Pulse } from "@/components/motion";

export function PulseDemo() {
  return (
    <div className="flex items-center gap-3">
      <Pulse intensity={0.8}>
        <span className="h-3 w-3 rounded-full bg-accent" />
      </Pulse>
      <span className="text-sm text-foreground-muted">Active status</span>
    </div>
  );
}
