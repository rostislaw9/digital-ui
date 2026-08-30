import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

export function ToastDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="secondary" onClick={() => toast("Hello, world!")}>
        Show Toast
      </Button>
    </div>
  );
}
