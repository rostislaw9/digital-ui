import { Pulse } from "@digital-ui/motion";

export function PulseTextDemo() {
  return (
    <div className="flex items-baseline gap-2">
      <Pulse variant="text" intensity={0.7}>
        <span className="text-2xl font-bold tracking-wider text-accent">
          LIVE
        </span>
      </Pulse>
      <span className="text-lg font-semibold text-foreground-muted">
        Recording
      </span>
    </div>
  );
}
