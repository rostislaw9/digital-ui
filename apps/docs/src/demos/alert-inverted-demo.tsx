import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import { Alert, AlertTitle } from "@/components/ui/alert";

export function AlertInvertedDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Alert variant="accent-inverted">
        <AlertTitle>
          <AlertCircle />
          Accent
        </AlertTitle>
      </Alert>
      <Alert variant="success-inverted">
        <AlertTitle>
          <CheckCircle2 />
          Success
        </AlertTitle>
      </Alert>
      <Alert variant="warning-inverted">
        <AlertTitle>
          <AlertTriangle />
          Warning
        </AlertTitle>
      </Alert>
      <Alert variant="error-inverted">
        <AlertTitle>
          <XCircle />
          Error
        </AlertTitle>
      </Alert>
    </div>
  );
}
