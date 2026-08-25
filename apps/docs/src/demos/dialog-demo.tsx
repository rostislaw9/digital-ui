import {
  Button,
  Dialog,
  DialogAction,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@digital-ui/ui";
import { useState } from "react";

export function DialogDemo() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="primary">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Confirm action</DialogTitle>
        <DialogDescription>
          This is a Digital UI dialog. It traps focus, closes on Escape and
          backdrop click, and animates using shared motion tokens.
        </DialogDescription>
        <DialogFooter>
          {/* DialogClose auto-closes the dialog. Add onClick for side effects. */}
          <DialogClose onClick={() => {}}>Cancel</DialogClose>
          {/* DialogAction does NOT auto-close — control closing via onOpenChange. */}
          <DialogAction
            onClick={() => {
              // Perform your action here, then close the dialog
              setOpen(false);
            }}
          >
            Confirm
          </DialogAction>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
