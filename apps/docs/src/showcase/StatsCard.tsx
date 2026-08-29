import {
  Badge,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Progress,
  Separator,
} from "@ionbit-ui/ui";

import { ShowcaseCard } from "./ShowcaseCard";

export function StatsCard() {
  return (
    <ShowcaseCard>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
        <CardDescription>Last 30 days</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-foreground-muted">Visitors</span>
            <span className="text-2xl font-semibold text-foreground">
              12.4K
            </span>
            <Badge variant="accent" className="w-fit">
              +12%
            </Badge>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-foreground-muted">Conversion</span>
            <span className="text-2xl font-semibold text-foreground">3.2%</span>
            <Badge variant="default" className="w-fit">
              +0.4%
            </Badge>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-2">
          <span className="text-xs text-foreground-muted">Goal completion</span>
          <Progress value={68} />
        </div>
      </CardContent>
    </ShowcaseCard>
  );
}
