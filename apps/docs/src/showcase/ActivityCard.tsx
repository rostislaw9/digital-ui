import {
  Avatar,
  AvatarFallback,
  Badge,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ionbit-ui/ui";

import { ShowcaseCard } from "./ShowcaseCard";

export function ActivityCard() {
  return (
    <ShowcaseCard>
      <CardHeader>
        <CardTitle>Recent activity</CardTitle>
        <CardDescription>Latest events from your workspace.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {[
          { name: "MK", action: "pushed a new commit", time: "2m ago" },
          { name: "JS", action: "opened a pull request", time: "1h ago" },
          { name: "AB", action: "merged a branch", time: "3h ago" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>{item.name}</AvatarFallback>
            </Avatar>
            <div className="flex flex-1 flex-col">
              <span className="text-sm text-foreground">{item.action}</span>
              <span className="text-xs text-foreground-subtle">
                {item.time}
              </span>
            </div>
            <Badge variant="default">{item.name}</Badge>
          </div>
        ))}
      </CardContent>
    </ShowcaseCard>
  );
}
