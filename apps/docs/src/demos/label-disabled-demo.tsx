import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
