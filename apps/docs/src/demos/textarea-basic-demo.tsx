import { Textarea } from "@/components/ui/textarea";

export function TextareaBasicDemo() {
  return (
    <div className="flex w-64 flex-col gap-3">
      <Textarea placeholder="Enter your message..." />
      <Textarea placeholder="Disabled" disabled />
    </div>
  );
}
