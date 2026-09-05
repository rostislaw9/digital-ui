import { Label } from "@/components/ui/label";
import { NativeSelect } from "@/components/ui/native-select";

export function NativeSelectStatesDemo() {
  return (
    <div className="flex w-64 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="fruit">Fruit</Label>
        <NativeSelect id="fruit" defaultValue="apple">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
        </NativeSelect>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="invalid">Invalid</Label>
        <NativeSelect id="invalid" invalid defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          <option value="a">A</option>
        </NativeSelect>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="disabled">Disabled</Label>
        <NativeSelect id="disabled" disabled>
          <option value="a">A</option>
        </NativeSelect>
      </div>
    </div>
  );
}
