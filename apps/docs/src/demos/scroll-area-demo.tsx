import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const notifications = [
  { id: 1, title: "Deploy succeeded", time: "2 min ago" },
  { id: 2, title: "New comment on pull request #142", time: "12 min ago" },
  { id: 3, title: "Build failed on main", time: "34 min ago" },
  { id: 4, title: "Sarah joined the workspace", time: "1 hour ago" },
  { id: 5, title: "Weekly report is ready", time: "3 hours ago" },
  { id: 6, title: "API rate limit at 80%", time: "5 hours ago" },
  { id: 7, title: "Billing cycle renewed", time: "8 hours ago" },
  { id: 8, title: "New star on ionbit-ui", time: "12 hours ago" },
  { id: 9, title: "Security scan completed", time: "1 day ago" },
  { id: 10, title: "Database backup finished", time: "1 day ago" },
  { id: 11, title: "Domain DNS propagated", time: "2 days ago" },
  { id: 12, title: "Team invitation accepted", time: "2 days ago" },
];

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-72 rounded-md border border-border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Notifications</h4>
        {notifications.map((n) => (
          <div key={n.id}>
            <div className="flex flex-col gap-0.5 py-2">
              <span className="text-sm text-foreground">{n.title}</span>
              <span className="text-xs text-foreground-subtle">{n.time}</span>
            </div>
            <Separator />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
