import {
  Avatar,
  AvatarFallback,
  Badge,
  Button,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  toast,
} from "@ionbit-ui/ui";

import { ShowcaseCard } from "./ShowcaseCard";

const pending = [
  { email: "sarah@ionbit.ui", initial: "S" },
  { email: "marcus@ionbit.ui", initial: "M" },
];

export function InviteCard() {
  return (
    <ShowcaseCard>
      <CardHeader>
        <CardTitle>Invite teammates</CardTitle>
        <CardDescription>Collaborate with your team.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex gap-2">
          <Input type="email" placeholder="teammate@example.com" />
          <Button
            variant="primary"
            onClick={() => toast.success("Invitation sent")}
          >
            Invite
          </Button>
        </div>
        <div className="flex flex-col gap-1">
          {pending.map((p) => (
            <div key={p.email} className="flex items-center gap-2 text-sm">
              <Avatar className="size-6">
                <AvatarFallback>{p.initial}</AvatarFallback>
              </Avatar>
              <span className="text-foreground-muted">{p.email}</span>
              <Badge variant="default" className="ml-auto">
                Pending
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </ShowcaseCard>
  );
}
