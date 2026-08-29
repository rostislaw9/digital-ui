import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

describe("Sheet", () => {
  it("opens on trigger click", async () => {
    const user = userEvent.setup();
    render(
      <Sheet>
        <SheetTrigger asChild>
          <button>Open</button>
        </SheetTrigger>
        <SheetContent>
          <SheetTitle>Sheet title</SheetTitle>
          <SheetDescription>Sheet description</SheetDescription>
        </SheetContent>
      </Sheet>,
    );
    await user.click(screen.getByText("Open"));
    expect(screen.getByText("Sheet title")).toBeInTheDocument();
  });

  it("closes on close button click", async () => {
    const user = userEvent.setup();
    render(
      <Sheet>
        <SheetTrigger asChild>
          <button>Open</button>
        </SheetTrigger>
        <SheetContent>
          <SheetTitle>Sheet title</SheetTitle>
        </SheetContent>
      </Sheet>,
    );
    await user.click(screen.getByText("Open"));
    await user.click(screen.getByLabelText("Close"));
    expect(screen.queryByText("Sheet title")).not.toBeInTheDocument();
  });

  it("renders with different sides", async () => {
    const user = userEvent.setup();
    render(
      <Sheet>
        <SheetTrigger asChild>
          <button>Open</button>
        </SheetTrigger>
        <SheetContent side="left" data-testid="sheet-content">
          <SheetTitle>Left sheet</SheetTitle>
        </SheetContent>
      </Sheet>,
    );
    await user.click(screen.getByText("Open"));
    const content = screen.getByTestId("sheet-content");
    expect(content).toHaveAttribute("data-side", "left");
    expect(content.className).toContain("data-[side=left]:left-0");
  });
});
