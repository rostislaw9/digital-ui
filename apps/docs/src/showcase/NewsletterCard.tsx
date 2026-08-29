import {
  Button,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  toast,
} from "@ionbit-ui/ui";

import { ShowcaseCard } from "./ShowcaseCard";

export function NewsletterCard() {
  return (
    <ShowcaseCard>
      <CardHeader>
        <CardTitle>Stay in the loop</CardTitle>
        <CardDescription>Get the latest updates and releases.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Input type="email" placeholder="you@example.com" />
      </CardContent>
      <CardFooter>
        <Button
          variant="primary"
          className="w-full"
          onClick={() => toast.success("Subscribed (demo)")}
        >
          Subscribe
        </Button>
      </CardFooter>
    </ShowcaseCard>
  );
}
