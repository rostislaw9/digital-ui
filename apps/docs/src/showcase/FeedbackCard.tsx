import {
  Button,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Textarea,
  toast,
} from "@ionbit-ui/ui";

import { ShowcaseCard } from "./ShowcaseCard";

export function FeedbackCard() {
  return (
    <ShowcaseCard>
      <CardHeader>
        <CardTitle>Feedback</CardTitle>
        <CardDescription>How was your experience?</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={
                star <= 4 ? "text-lg text-accent" : "text-lg text-border-strong"
              }
              aria-label={`Rate ${star} stars`}
            >
              ★
            </span>
          ))}
        </div>
        <Textarea
          placeholder="Tell us what you think..."
          className="resize-none"
        />
      </CardContent>
      <CardFooter>
        <Button
          variant="primary"
          className="w-full"
          onClick={() => toast.success("Feedback sent (demo)")}
        >
          Send feedback
        </Button>
      </CardFooter>
    </ShowcaseCard>
  );
}
