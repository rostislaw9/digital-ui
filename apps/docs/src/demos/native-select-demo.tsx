import { NativeSelect } from "@/components/ui/native-select";

export function NativeSelectDemo() {
  return (
    <div className="flex w-64 flex-col gap-4">
      <NativeSelect defaultValue="apple">
        <option value="" disabled>
          Select a fruit
        </option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="cherry">Cherry</option>
        <option value="grape">Grape</option>
      </NativeSelect>
    </div>
  );
}
