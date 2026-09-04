import {
  Card,
  Badge,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Progress,
  Separator,
} from "@ionbit-ui/ui";
export function UptimeCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Uptime</CardTitle>
        <CardDescription>Last 90 days status.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-foreground-muted">Current</span>
          <Badge variant="accent">Operational</Badge>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-foreground-muted">Uptime</span>
            <span className="font-semibold text-foreground">99.98%</span>
          </div>
          <Progress value={99.98} />
        </div>
        <Separator />
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-foreground-subtle">Avg response</span>
            <span className="text-sm font-semibold text-foreground">42ms</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-foreground-subtle">Incidents</span>
            <span className="text-sm font-semibold text-foreground">0</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-foreground-subtle">Regions</span>
            <span className="text-sm font-semibold text-foreground">6</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full justify-center">
          <span className="text-xs text-foreground-subtle">
            90 days ago — today
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
