import { useState } from "react";
import { Switch } from "@digital-ui/ui";

export function SwitchDemo() {
  const [on, setOn] = useState(true);
  return (
    <div className="flex items-center gap-4">
      <Switch checked={on} onCheckedChange={setOn} />
      <span className="text-sm text-foreground">{on ? "On" : "Off"}</span>
    </div>
  );
}
