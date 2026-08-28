import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import { Popover, PopoverTrigger, PopoverContent } from "./popover.js";

describe("Popover", () => {
  it("renders the trigger", () => {
    render(
      <Popover>
        <PopoverTrigger>
          <button>Open popover</button>
        </PopoverTrigger>
        <PopoverContent>Popover body</PopoverContent>
      </Popover>,
    );
    expect(screen.getByText("Open popover")).toBeInTheDocument();
  });

  it("does not show content initially", () => {
    render(
      <Popover>
        <PopoverTrigger>
          <button>Open popover</button>
        </PopoverTrigger>
        <PopoverContent>Popover body</PopoverContent>
      </Popover>,
    );
    expect(screen.queryByText("Popover body")).not.toBeInTheDocument();
  });

  it("opens content on trigger click", async () => {
    const user = userEvent.setup();
    render(
      <Popover>
        <PopoverTrigger>
          <button>Open popover</button>
        </PopoverTrigger>
        <PopoverContent>Popover body</PopoverContent>
      </Popover>,
    );
    await user.click(screen.getByText("Open popover"));
    expect(screen.getByText("Popover body")).toBeInTheDocument();
  });
});
