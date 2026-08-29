import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import { Alert, AlertTitle } from "@/components/ui/alert";

export function AlertSoftDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Alert variant="accent-soft">
        <AlertTitle>
          <AlertCircle />
          Accent
        </AlertTitle>
      </Alert>
      <Alert variant="success-soft">
        <AlertTitle>
          <CheckCircle2 />
          Success
        </AlertTitle>
      </Alert>
      <Alert variant="warning-soft">
        <AlertTitle>
          <AlertTriangle />
          Warning
        </AlertTitle>
      </Alert>
      <Alert variant="error-soft">
        <AlertTitle>
          <XCircle />
          Error
        </AlertTitle>
      </Alert>
    </div>
  );
}
