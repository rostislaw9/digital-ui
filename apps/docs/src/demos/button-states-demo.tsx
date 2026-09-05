import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export function ButtonStatesDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button disabled>Disabled</Button>
      <Button disabled>
        <Spinner data-icon="inline-start" />
        Loading
      </Button>
    </div>
  );
}
