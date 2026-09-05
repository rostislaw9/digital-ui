import {
  Archive,
  ArrowLeft,
  BellOff,
  Flag,
  Forward,
  MailCheck,
  MoreHorizontal,
  Printer,
  Reply,
  Save,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ButtonGroupDemo() {
  return (
    <ButtonGroup>
      <ButtonGroup className="hidden sm:flex">
        <Button variant="secondary" size="icon" aria-label="Go back">
          <ArrowLeft className="size-4" />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary" size="icon" aria-label="Mark as read">
          <MailCheck className="size-4 text-success" />
        </Button>
        <Button variant="secondary" size="icon" aria-label="Snooze">
          <BellOff className="size-4 text-error" />
        </Button>
        <Button variant="secondary" size="icon" aria-label="Flag">
          <Flag className="size-4 text-warning" />
        </Button>
        <Button variant="secondary" size="icon" aria-label="Archive">
          <Archive className="size-4 text-info" />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary">
          <Reply className="size-4" />
          Reply
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" aria-label="More options">
              <MoreHorizontal className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Forward className="size-4" />
              Forward
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Printer className="size-4" />
              Print
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Save className="size-4" />
              Save as PDF
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-error hover:bg-error-muted! hover:text-error! focus:bg-error-muted! focus:text-error!">
              <Trash2 className="size-4" />
              Delete forever
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </ButtonGroup>
  );
}
