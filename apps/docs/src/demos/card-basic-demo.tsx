import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardBasicDemo() {
  return (
    <Card className="max-w-sm">
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
