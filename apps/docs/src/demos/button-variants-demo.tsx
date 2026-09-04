import { Button } from "@/components/ui/button";

export function ButtonVariantsDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="primary-soft">Primary Soft</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="destructive-soft">Destructive Soft</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}
