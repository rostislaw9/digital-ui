import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
} from "@ionbit-ui/ui";
export function AnalyticsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics</CardTitle>
        <CardDescription>Traffic sources this week.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {[
          { label: "Direct", value: 45, color: "bg-accent" },
          { label: "Search", value: 30, color: "bg-accent-muted" },
          { label: "Social", value: 15, color: "bg-border-strong" },
          { label: "Referral", value: 10, color: "bg-border" },
        ].map((source) => (
          <div key={source.label} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-foreground-muted">{source.label}</span>
              <span className="text-foreground">{source.value}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-surface-elevated">
              <div
                className={`h-full rounded-full ${source.color}`}
                style={{ width: `${source.value}%` }}
              />
            </div>
          </div>
        ))}
        <Separator />
        <div className="flex items-center justify-between">
          <span className="text-xs text-foreground-subtle">Total visits</span>
          <span className="text-sm font-semibold text-foreground">48.2K</span>
        </div>
      </CardContent>
    </Card>
  );
}
