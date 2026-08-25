import { Button } from "@digital-ui/ui";
import { ArrowRight, Search } from "lucide-react";

export function ButtonWithIconDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>
        <Search data-icon="inline-start" />
        Search
      </Button>
      <Button variant="outline">
        Continue
        <ArrowRight data-icon="inline-end" />
      </Button>
    </div>
  );
}
