import { Separator } from "@/components/ui/separator";

export function SeparatorHorizontalDemo() {
  return (
    <div className="flex max-w-sm flex-col gap-4 text-sm">
      <div className="flex flex-col gap-1.5">
        <div className="font-medium leading-none">Account</div>
        <div className="text-foreground-muted">
          Manage your profile and sign-in preferences
        </div>
      </div>
      <Separator />
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-foreground">Display name</span>
          <span className="text-foreground-muted">Alex Rivera</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-foreground">Email</span>
          <span className="text-foreground-muted">alex@example.com</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-foreground">Time zone</span>
          <span className="text-foreground-muted">UTC−05:00</span>
        </div>
      </div>
    </div>
  );
}
