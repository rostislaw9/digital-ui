import { Separator } from "@/components/ui/separator";

export function SeparatorHorizontalDemo() {
  return (
    <div className="flex max-w-sm flex-col gap-4 text-sm">
      <div className="flex flex-col gap-1.5">
        <div className="font-medium leading-none">Installation</div>
        <div className="text-foreground-muted">
          Source-owned components installed via CLI
        </div>
      </div>
      <Separator />
      <div className="text-foreground-muted">
        Add individual components on demand with{" "}
        <code className="text-foreground">npx ionbit-ui add button</code> — no
        global dependency lock-in, full control over your source.
      </div>
    </div>
  );
}
