import {
  Badge,
  Button,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Separator,
} from "@ionbit-ui/ui";

import { ShowcaseCard } from "./ShowcaseCard";

export function WebhookCard() {
  return (
    <ShowcaseCard>
      <CardHeader>
        <CardTitle>Webhooks</CardTitle>
        <CardDescription>
          Receive real-time event notifications.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Input readOnly value="https://api.example.com/webhook" />
        <div className="flex items-center justify-between">
          <span className="text-sm text-foreground-muted">Events</span>
          <Badge variant="accent">12 active</Badge>
        </div>
        <Separator />
        <div className="flex flex-col gap-1.5">
          {["push", "pull_request.opened", "deployment.created"].map(
            (event) => (
              <div key={event} className="flex items-center justify-between">
                <span className="font-mono text-xs text-foreground-muted">
                  {event}
                </span>
                <Badge variant="default">200</Badge>
              </div>
            ),
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Add endpoint
        </Button>
      </CardFooter>
    </ShowcaseCard>
  );
}
