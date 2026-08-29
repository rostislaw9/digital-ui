import {
  Badge,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
} from "@ionbit-ui/ui";

import { ShowcaseCard } from "./ShowcaseCard";

export function CommandCard() {
  return (
    <ShowcaseCard>
      <CardHeader>
        <CardTitle>Quick actions</CardTitle>
        <CardDescription>Press ⌘K to open command palette.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {[
          { cmd: "Go to Components", keys: "⌘K" },
          { cmd: "Search components", keys: "/" },
          { cmd: "Toggle theme", keys: "⌘D" },
          { cmd: "View tokens", keys: "T" },
        ].map((item, i) => (
          <div key={i}>
            {i > 0 && <Separator />}
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-foreground-muted">{item.cmd}</span>
              <Badge variant="default">{item.keys}</Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </ShowcaseCard>
  );
}
