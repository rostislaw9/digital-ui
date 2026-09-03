import { useState } from "react";

import { Button } from "@/components/ui/button";

export function ShimmerOnceDemo() {
  const [key, setKey] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4">
      <p
        key={key}
        className="shimmer shimmer-duration-1100 shimmer-once text-lg text-foreground-muted"
      >
        Response generated.
      </p>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setKey((value) => value + 1)}
      >
        Replay
      </Button>
    </div>
  );
}
