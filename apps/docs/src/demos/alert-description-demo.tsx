import { AlertTriangle, CheckCircle2 } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertDescriptionDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
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
      <Alert variant="error">
        <AlertTitle>
          <AlertTriangle />
          Payment failed
        </AlertTitle>
        <AlertDescription>
          Your card was declined. Update your payment method to avoid service
          interruption.
        </AlertDescription>
      </Alert>
    </div>
  );
}
