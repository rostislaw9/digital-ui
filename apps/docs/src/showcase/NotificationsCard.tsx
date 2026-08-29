import {
  Badge,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
} from "@ionbit-ui/ui";

import { ShowcaseCard } from "./ShowcaseCard";

export function NotificationsCard() {
  return (
    <ShowcaseCard>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {[
          {
            title: "New comment",
            body: "Sarah replied to your PR.",
            time: "1m",
            unread: true,
          },
          {
            title: "Build failed",
            body: "CI pipeline failed on main.",
            time: "10m",
            unread: true,
          },
          {
            title: "Deploy succeeded",
            body: "Production is live.",
            time: "1h",
            unread: true,
          },
          {
            title: "Weekly digest",
            body: "Your summary is ready.",
            time: "2d",
            unread: false,
          },
        ].map((n, i) => (
          <div key={i} className="flex flex-col gap-2">
            {i > 0 && <Separator />}
            <div className="flex items-start gap-2">
              <div className="flex flex-1 flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">
                    {n.title}
                  </span>
                  {n.unread && (
                    <Badge variant="accent" className="w-fit">
                      New
                    </Badge>
                  )}
                </div>
                <span className="text-xs text-foreground-muted">{n.body}</span>
              </div>
              <span className="text-xs text-foreground-subtle">{n.time}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </ShowcaseCard>
  );
}
