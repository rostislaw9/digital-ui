import {
  Card,
  Button,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  toast,
} from "@ionbit-ui/ui";
export function NewsletterCard() {
  return (
    <Card>
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
          onClick={() => toast.success("Subscribed")}
        >
          Subscribe
        </Button>
      </CardFooter>
    </Card>
  );
}
