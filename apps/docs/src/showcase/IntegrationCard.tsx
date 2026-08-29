import {
  Badge,
  Button,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator,
} from "@ionbit-ui/ui";

import { ShowcaseCard } from "./ShowcaseCard";

export function IntegrationCard() {
  return (
    <ShowcaseCard>
      <CardHeader>
        <CardTitle>Integrations</CardTitle>
        <CardDescription>Connect your favorite tools.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {[
          { name: "GitHub", status: "Connected" },
          { name: "Slack", status: "Connected" },
          { name: "Figma", status: "Not connected" },
          { name: "Vercel", status: "Connected" },
        ].map((integration, i) => (
          <div key={i}>
            {i > 0 && <Separator />}
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-md border border-border bg-surface-elevated font-mono text-xs text-foreground-muted">
                  {integration.name[0]}
                </div>
                <span className="text-sm text-foreground">
                  {integration.name}
                </span>
              </div>
              <Badge
                variant={
                  integration.status === "Connected" ? "accent" : "default"
                }
              >
                {integration.status}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button variant="secondary" className="w-full">
          Browse marketplace
        </Button>
      </CardFooter>
    </ShowcaseCard>
  );
}
