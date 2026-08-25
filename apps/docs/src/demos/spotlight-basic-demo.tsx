import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@digital-ui/ui";
import { Spotlight } from "@digital-ui/motion";

export function SpotlightBasicDemo() {
  return (
    <Spotlight intensity={0.5}>
      <Card elevated className="w-80">
        <CardHeader>
          <CardTitle>Spotlight</CardTitle>
          <CardDescription>
            Move the cursor near this card — the highlight starts before you
            touch it.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-foreground-muted">
            The radial gradient follows the pointer with a 20px proximity
            threshold.
          </p>
        </CardContent>
      </Card>
    </Spotlight>
  );
}
