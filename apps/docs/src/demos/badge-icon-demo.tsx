import { Badge } from "@digital-ui/ui";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

export function BadgeIconDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge variant="success">
        <CheckCircle2 /> Verified
      </Badge>
      <Badge variant="error">
        <XCircle /> Failed
      </Badge>
      <Badge variant="warning">
        <AlertTriangle /> Pending
      </Badge>
    </div>
  );
}
