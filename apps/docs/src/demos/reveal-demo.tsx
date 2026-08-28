import { Reveal } from "@/components/motion";

export function RevealDemo() {
  return (
    <div className="flex flex-col gap-3">
      <Reveal direction="up">
        <p className="text-sm text-foreground-muted">
          Reveal — animates in when scrolled into view.
        </p>
      </Reveal>
      <Reveal direction="up" delay={80}>
        <p className="text-sm text-foreground-muted">
          Second line, staggered by 80ms.
        </p>
      </Reveal>
    </div>
  );
}
