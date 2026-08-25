import { Button, toast } from "@digital-ui/ui";

export function ToastPositionsDemo() {
  const positions = [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ] as const;
  return (
    <div className="flex flex-wrap gap-3">
      {positions.map((pos) => (
        <Button
          key={pos}
          variant="secondary"
          size="sm"
          onClick={() =>
            toast.info(pos, {
              description: `Positioned ${pos}.`,
              position: pos,
            })
          }
        >
          {pos}
        </Button>
      ))}
    </div>
  );
}
