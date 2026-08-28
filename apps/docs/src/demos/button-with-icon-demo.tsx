import { ArrowRight, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

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
