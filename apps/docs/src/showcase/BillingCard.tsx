import {
  Badge,
  Button,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator,
} from "@ionbit-ui/ui";

import { ShowcaseCard } from "./ShowcaseCard";

export function BillingCard() {
  return (
    <ShowcaseCard>
      <CardHeader>
        <CardTitle>Billing</CardTitle>
        <CardDescription>Your current subscription.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-foreground-muted">Plan</span>
          <Badge variant="accent">Pro</Badge>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <span className="text-sm text-foreground-muted">Amount</span>
          <span className="text-sm font-semibold text-foreground">$24/mo</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-foreground-muted">Next charge</span>
          <span className="text-sm text-foreground">Jan 15, 2025</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-foreground-muted">Method</span>
          <span className="text-sm text-foreground">•••• 4242</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Manage billing
        </Button>
      </CardFooter>
    </ShowcaseCard>
  );
}
