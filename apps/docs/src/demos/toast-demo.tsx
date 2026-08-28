import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

export function ToastDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="secondary"
        onClick={() =>
          toast("Default", {
            description: "A simple notification.",
          })
        }
      >
        Default
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast.info("Info", {
            description: "Something to know.",
          })
        }
      >
        Info
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast.success("Success!", {
            description: "Operation completed.",
          })
        }
      >
        Success
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast.warning("Warning", {
            description: "Check before proceeding.",
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="destructive"
        onClick={() =>
          toast.error("Error", {
            description: "Something went wrong.",
          })
        }
      >
        Error
      </Button>
    </div>
  );
}
