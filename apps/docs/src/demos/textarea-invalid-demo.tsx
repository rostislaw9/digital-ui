import { Textarea } from "@/components/ui/textarea";

export function TextareaInvalidDemo() {
  return (
    <div className="w-64">
      <Textarea placeholder="Invalid value" invalid />
    </div>
  );
}
