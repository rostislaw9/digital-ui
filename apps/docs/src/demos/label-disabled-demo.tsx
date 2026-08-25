import { Input, Label } from "@digital-ui/ui";

export function LabelDisabledDemo() {
  return (
    <div className="flex w-64 flex-col gap-2">
      <Label htmlFor="username" className="peer-disabled:opacity-50">
        Username
      </Label>
      <Input id="username" placeholder="Disabled" disabled />
    </div>
  );
}
