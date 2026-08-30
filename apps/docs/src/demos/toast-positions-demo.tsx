import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

export function ToastPositionsDemo() {
  const positions = [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ] as const;
  const labels: Record<(typeof positions)[number], string> = {
    "top-left": "Top Left",
    "top-center": "Top Center",
    "top-right": "Top Right",
    "bottom-left": "Bottom Left",
    "bottom-center": "Bottom Center",
    "bottom-right": "Bottom Right",
  };
  return (
    <div className="flex flex-wrap gap-3">
      {positions.map((pos) => (
        <Button
          key={pos}
          variant="secondary"
          size="sm"
          onClick={() =>
            toast.info(labels[pos], {
              description: `Positioned ${pos}`,
              position: pos,
            })
          }
        >
          {labels[pos]}
        </Button>
      ))}
    </div>
  );
}
