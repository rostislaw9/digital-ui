import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

export function ToastActionDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="secondary"
        onClick={() =>
          toast("File deleted", {
            description: "Undo to restore the file.",
            action: {
              label: "Undo",
              onClick: (event) => {
                event.preventDefault();
                toast.success("File restored");
              },
            },
          })
        }
      >
        Delete file
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast("Event created", {
            description: "Sunday, December 3 at 9:00 AM",
            action: {
              label: "Open",
              onClick: (event) => {
                event.preventDefault();
                toast.info("Opening event...");
              },
            },
          })
        }
      >
        Create event
      </Button>
    </div>
  );
}
