import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SheetBasicDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open panel</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Configure notifications</SheetTitle>
          <SheetDescription>
            Adjust how you receive alerts. Save when you&lsquo;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-basic-email">Email address</Label>
            <Input id="sheet-basic-email" defaultValue="user@example.com" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-basic-frequency">Digest frequency</Label>
            <Input id="sheet-basic-frequency" defaultValue="Daily" />
          </div>
        </div>
        <SheetFooter>
          <Button variant="primary">Save</Button>
          <SheetClose asChild>
            <Button variant="secondary">Cancel</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
