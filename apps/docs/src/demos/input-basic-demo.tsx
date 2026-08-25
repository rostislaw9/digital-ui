import { Input } from "@digital-ui/ui";

export function InputBasicDemo() {
  return (
    <div className="flex w-64 flex-col gap-3">
      <Input placeholder="Enter text" />
      <Input placeholder="Disabled" disabled />
    </div>
  );
}
