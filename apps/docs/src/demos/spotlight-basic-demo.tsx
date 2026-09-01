import { Spotlight } from "@/components/motion/spotlight";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SpotlightBasicDemo() {
  return (
    <Spotlight intensity={0.5}>
      <Card elevated className="max-w-sm">
        <CardHeader>
          <CardTitle>Spotlight</CardTitle>
          <CardDescription>
            Move the cursor over this card — the highlight follows the pointer.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-foreground-muted">
            The radial gradient tracks the cursor position within the element
            bounds.
          </p>
        </CardContent>
      </Card>
    </Spotlight>
  );
}
