import { Button } from "@digital-ui/ui";
import { Loader2 } from "lucide-react";

export function ButtonStatesDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button disabled>Disabled</Button>
      <Button disabled>
        <Loader2 data-icon="inline-start" className="animate-spin" />
        Loading
      </Button>
    </div>
  );
}
