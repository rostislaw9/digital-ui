import { Badge } from "@/components/ui/badge";

export function BadgeVariantsDemo() {
  return (
    <div className="flex justify-center flex-wrap gap-3">
      <Badge>Default</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}
