import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ButtonSizesDemo() {
  return (
    <div className="flex flex-col items-start gap-6 sm:flex-row">
      <div className="flex items-center gap-2">
        <Button size="xs" variant="primary-inverted">
          Extra Small
        </Button>
        <Button size="icon-xs" variant="primary-inverted" aria-label="Download">
          <Download />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="primary-inverted">
          Small
        </Button>
        <Button size="icon-sm" variant="primary-inverted" aria-label="Download">
          <Download />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="md" variant="primary-inverted">
          Medium
        </Button>
        <Button size="icon" variant="primary-inverted" aria-label="Download">
          <Download />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="lg" variant="primary-inverted">
          Large
        </Button>
        <Button size="icon-lg" variant="primary-inverted" aria-label="Download">
          <Download />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="xl" variant="primary-inverted">
          Extra Large
        </Button>
        <Button size="icon-xl" variant="primary-inverted" aria-label="Download">
          <Download />
        </Button>
      </div>
    </div>
  );
}
