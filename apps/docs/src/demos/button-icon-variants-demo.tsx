import { Button } from "@digital-ui/ui";
import {
  MoreHorizontal,
  Paperclip,
  Plus,
  Power,
  Settings,
  Trash2,
  User2,
} from "lucide-react";

export function ButtonIconVariantsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary" size="icon" aria-label="Add">
        <Plus />
      </Button>
      <Button variant="primary-inverted" size="icon" aria-label="User profile">
        <User2 />
      </Button>
      <Button variant="secondary" size="icon" aria-label="Settings">
        <Settings />
      </Button>
      <Button variant="outline" size="icon" aria-label="Attach file">
        <Paperclip />
      </Button>
      <Button variant="ghost" size="icon" aria-label="More options">
        <MoreHorizontal />
      </Button>
      <Button variant="destructive" size="icon" aria-label="Delete">
        <Trash2 />
      </Button>
      <Button variant="destructive-inverted" size="icon" aria-label="Power off">
        <Power />
      </Button>
    </div>
  );
}
