import {
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@digital-ui/ui";

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">Hover Here</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-foreground">
            Digital UI
          </span>
          <span className="text-xs text-foreground-muted">
            A React component library with a distinctive digital visual
            language.
          </span>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
