import {
  Card,
  Badge,
  Button,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator,
} from "@ionbit-ui/ui";
export function SecurityCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Security</CardTitle>
        <CardDescription>Protect your account.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-sm text-foreground">Two-factor auth</span>
            <span className="text-xs text-foreground-muted">
              Extra layer of security.
            </span>
          </div>
          <Badge variant="accent">Enabled</Badge>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-sm text-foreground">Password</span>
            <span className="text-xs text-foreground-muted">
              Last changed 3 months ago.
            </span>
          </div>
          <Badge variant="default">Strong</Badge>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-sm text-foreground">Active sessions</span>
            <span className="text-xs text-foreground-muted">
              2 devices currently signed in.
            </span>
          </div>
          <Badge variant="default">2</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Review sessions
        </Button>
      </CardFooter>
    </Card>
  );
}
