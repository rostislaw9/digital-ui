import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogAction,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
          {/* DialogAction auto-closes the dialog. Add onClick for side effects. */}
          <DialogAction
            onClick={() => {
              // Perform your action here
            }}
          >
            Confirm
          </DialogAction>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
