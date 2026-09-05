import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export function SpinnerButtonDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button disabled>
        <Spinner data-icon="inline-start" />
        Saving...
      </Button>
      <Button variant="outline" disabled>
        <Spinner data-icon="inline-start" />
        Loading
      </Button>
      <Button variant="ghost" size="icon" disabled aria-label="Loading">
        <Spinner />
      </Button>
    </div>
  );
}
