import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SheetNoCloseDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open panel</Button>
      </SheetTrigger>
      <SheetContent showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>Auto-dismiss panel</SheetTitle>
          <SheetDescription>
            This panel has no close button. Click outside or press Escape to
            dismiss.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
