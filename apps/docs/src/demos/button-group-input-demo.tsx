import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";

export function ButtonGroupInputDemo() {
  return (
    <ButtonGroup>
      <Input placeholder="Search..." className="h-8" />
      <Button variant="secondary" aria-label="Search">
        <Search className="size-4" />
      </Button>
    </ButtonGroup>
  );
}
