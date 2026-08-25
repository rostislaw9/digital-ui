import { Checkbox } from "@digital-ui/ui";

export function CheckboxBasicDemo() {
  return (
    <div className="flex items-center gap-6">
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox disabled />
    </div>
  );
}
