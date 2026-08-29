import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Label,
  Progress,
} from "@ionbit-ui/ui";

import { ShowcaseCard } from "./ShowcaseCard";

export function TaskCard() {
  return (
    <ShowcaseCard>
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
        <CardDescription>1 of 3 completed</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Checkbox id="task-1" defaultChecked />
          <Label
            htmlFor="task-1"
            className="text-sm text-foreground-subtle line-through"
          >
            Review pull requests
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="task-2" />
          <Label htmlFor="task-2" className="text-sm">
            Update documentation
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="task-3" />
          <Label htmlFor="task-3" className="text-sm">
            Deploy staging build
          </Label>
        </div>
      </CardContent>
      <CardFooter>
        <Progress value={33} />
      </CardFooter>
    </ShowcaseCard>
  );
}
