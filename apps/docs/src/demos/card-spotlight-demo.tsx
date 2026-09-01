import { Spotlight } from "@/components/motion/spotlight";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardSpotlightDemo() {
  return (
    <Spotlight intensity={0.5}>
      <Card elevated className="max-w-sm">
        <CardHeader>
          <CardTitle>Spotlight</CardTitle>
          <CardDescription>Move the cursor across this card.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-foreground-muted">
            The highlight follows the pointer.
          </p>
        </CardContent>
      </Card>
    </Spotlight>
  );
}
