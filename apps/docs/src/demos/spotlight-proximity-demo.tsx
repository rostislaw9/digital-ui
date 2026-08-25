import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@digital-ui/ui";
import { Spotlight } from "@digital-ui/motion";

export function SpotlightProximityDemo() {
  return (
    <Spotlight intensity={0.5} proximity={220}>
      <Card elevated className="w-80">
        <CardHeader>
          <CardTitle>Wide proximity</CardTitle>
          <CardDescription>
            A 220px proximity threshold activates the highlight well before the
            cursor arrives.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-foreground-muted">
            Useful for larger surfaces or when you want a more anticipatory
            feel.
          </p>
        </CardContent>
      </Card>
    </Spotlight>
  );
}
