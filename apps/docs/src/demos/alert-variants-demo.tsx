import { Alert, AlertTitle } from "@digital-ui/ui";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Info,
  XCircle,
} from "lucide-react";

export function AlertVariantsDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Alert>
        <AlertTitle>
          <Info />
          Default
        </AlertTitle>
      </Alert>
      <Alert variant="accent">
        <AlertTitle>
          <AlertCircle />
          Accent
        </AlertTitle>
      </Alert>
      <Alert variant="success">
        <AlertTitle>
          <CheckCircle2 />
          Success
        </AlertTitle>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>
          <AlertTriangle />
          Warning
        </AlertTitle>
      </Alert>
      <Alert variant="error">
        <AlertTitle>
          <XCircle />
          Error
        </AlertTitle>
      </Alert>
    </div>
  );
}
