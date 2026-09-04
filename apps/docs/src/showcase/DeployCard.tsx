import {
  Card,
  Badge,
  Button,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Progress,
} from "@ionbit-ui/ui";
export function DeployCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Deployment</CardTitle>
        <CardDescription>Deploy your project to production.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-foreground-muted">Status</span>
          <Badge variant="accent">Live</Badge>
        </div>
        <Progress value={100} />
        <div className="flex items-center justify-between text-xs text-foreground-subtle">
          <span>Build progress</span>
          <span>100%</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="primary" className="w-full">
          Deploy now
        </Button>
      </CardFooter>
    </Card>
  );
}
