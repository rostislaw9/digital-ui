import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
        <Button variant="secondary">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Configure notifications</SheetTitle>
          <SheetDescription>
            Adjust how you receive alerts. Save when you&lsquo;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 scroll-fade auto-rows-min gap-6 overflow-y-auto px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-basic-email">Email address</Label>
            <Input id="sheet-basic-email" defaultValue="user@example.com" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-basic-frequency">Digest frequency</Label>
            <Select defaultValue="daily">
              <SelectTrigger id="sheet-basic-frequency">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
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
