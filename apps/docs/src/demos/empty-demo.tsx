import { ArrowUpRight, FolderCode } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export function EmptyDemo() {
  return (
    <Empty className="max-w-sm">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderCode />
        </EmptyMedia>
        <EmptyTitle>No Projects Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating
          your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button size="sm">Create Project</Button>
        <Button variant="outline" size="sm">
          Import Project
        </Button>
      </EmptyContent>
      <Button
        variant="link"
        className="text-foreground-muted"
        size="sm"
        onClick={() => {}}
      >
        Learn More <ArrowUpRight />
      </Button>
    </Empty>
  );
}
