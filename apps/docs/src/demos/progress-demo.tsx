import { Progress } from "@digital-ui/ui";
import { useEffect, useState } from "react";

export function ProgressDemo() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 15;
        return next >= 100 ? 13 : next;
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return <Progress value={progress} className="w-[60%]" />;
}
