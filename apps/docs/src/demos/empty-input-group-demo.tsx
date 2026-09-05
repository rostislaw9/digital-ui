import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export function EmptyInputGroupDemo() {
  return (
    <Empty className="max-w-sm">
      <EmptyHeader>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription>
          The page you&apos;re looking for doesn&apos;t exist. Try searching for
          what you need below.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <InputGroup className="sm:w-3/4">
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupInput placeholder="Try searching for pages..." />
        </InputGroup>
        <EmptyDescription>
          Need help?{" "}
          <Button variant="link" onClick={() => {}}>
            Contact support
          </Button>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  );
}
