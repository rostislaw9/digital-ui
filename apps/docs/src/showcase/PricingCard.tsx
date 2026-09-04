import {
  Card,
  Button,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator,
} from "@ionbit-ui/ui";
export function PricingCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Starter plan</CardTitle>
        <CardDescription>Everything you need to begin.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-semibold text-foreground">$0</span>
          <span className="text-sm text-foreground-muted">/month</span>
        </div>
        <Separator />
        <ul className="flex flex-col gap-2 text-sm text-foreground-muted">
          <li>Up to 3 projects</li>
          <li>Community support</li>
          <li>Basic analytics</li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="primary" className="w-full">
          Get started
        </Button>
      </CardFooter>
    </Card>
  );
}
