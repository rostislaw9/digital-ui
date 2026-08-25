import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@digital-ui/ui";

export function PopoverBasicDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className="text-sm text-foreground-muted">
          Anchored content with animation.
        </p>
      </PopoverContent>
    </Popover>
  );
}
