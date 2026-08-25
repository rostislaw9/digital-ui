import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@digital-ui/ui";

export function CardBasicDemo() {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Surface depth</CardTitle>
        <CardDescription>
          Subtle brightness step and hairline border.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground-muted">Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button variant="primary" size="sm">
          Action
        </Button>
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
      </CardFooter>
    </Card>
  );
}
