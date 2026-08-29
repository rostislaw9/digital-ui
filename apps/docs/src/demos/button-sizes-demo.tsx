import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ButtonSizesDemo() {
  return (
    <div className="flex flex-col items-start gap-6 sm:flex-row">
      <div className="flex items-center gap-2">
        <Button size="xs" variant="primary-soft">
          Extra Small
        </Button>
        <Button size="icon-xs" variant="primary-soft" aria-label="Download">
          <Download />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="primary-soft">
          Small
        </Button>
        <Button size="icon-sm" variant="primary-soft" aria-label="Download">
          <Download />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="md" variant="primary-soft">
          Medium
        </Button>
        <Button size="icon" variant="primary-soft" aria-label="Download">
          <Download />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="lg" variant="primary-soft">
          Large
        </Button>
        <Button size="icon-lg" variant="primary-soft" aria-label="Download">
          <Download />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="xl" variant="primary-soft">
          Extra Large
        </Button>
        <Button size="icon-xl" variant="primary-soft" aria-label="Download">
          <Download />
        </Button>
      </div>
    </div>
  );
}
