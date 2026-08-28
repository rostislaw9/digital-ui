import { Button } from "@/components/ui/button";
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

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

export function SheetSideDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="secondary" className="capitalize">
              {side}
            </Button>
          </SheetTrigger>
          <SheetContent
            side={side}
            className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
          >
            <SheetHeader>
              <SheetTitle>Panel settings</SheetTitle>
              <SheetDescription>
                Slide-in panel from the {side} edge. Adjust preferences below.
              </SheetDescription>
            </SheetHeader>
            <div className="overflow-y-auto px-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <p
                  key={index}
                  className="mb-2 text-sm leading-relaxed text-foreground-muted"
                >
                  Digital UI ships with semantic design tokens mapped to CSS
                  custom properties. Override colors, spacing, and motion by
                  editing a single tokens file — no component source changes
                  required.
                </p>
              ))}
            </div>
            <SheetFooter>
              <Button variant="primary" noScale>
                Apply
              </Button>
              <SheetClose asChild>
                <Button variant="secondary" noScale>
                  Cancel
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
