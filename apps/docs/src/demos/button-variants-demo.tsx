import { Button } from "@/components/ui/button";

export function ButtonVariantsDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="primary-inverted">Primary Inverted</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="destructive-inverted">Destructive Inverted</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}
