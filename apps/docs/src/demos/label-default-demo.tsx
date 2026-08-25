import { Input, Label } from "@digital-ui/ui";

export function LabelDefaultDemo() {
  return (
    <div className="flex w-64 flex-col gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" placeholder="you@example.com" />
    </div>
  );
}
