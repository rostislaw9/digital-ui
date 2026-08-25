import { Alert, AlertDescription, AlertTitle } from "@digital-ui/ui";
import { CheckCircle2 } from "lucide-react";

export function AlertDescriptionDemo() {
  return (
    <div className="w-full max-w-sm">
      <Alert variant="success">
        <AlertTitle>
          <CheckCircle2 />
          Payment successful
        </AlertTitle>
        <AlertDescription>
          Your subscription is now active. A receipt has been sent to your
          email.
        </AlertDescription>
      </Alert>
    </div>
  );
}
