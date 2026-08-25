import { Separator } from "@digital-ui/ui";

export function SeparatorVerticalDemo() {
  return (
    <div className="flex items-center gap-2 text-sm md:gap-4">
      <div className="flex flex-col gap-1">
        <span className="font-medium">Notifications</span>
        <span className="text-xs text-foreground-muted">
          Email & push alerts
        </span>
      </div>
      <Separator orientation="vertical" />
      <div className="flex flex-col gap-1">
        <span className="font-medium">Privacy</span>
        <span className="text-xs text-foreground-muted">
          Data & permissions
        </span>
      </div>
      <Separator orientation="vertical" className="hidden md:block" />
      <div className="hidden flex-col gap-1 md:flex">
        <span className="font-medium">Appearance</span>
        <span className="text-xs text-foreground-muted">Theme & layout</span>
      </div>
    </div>
  );
}
