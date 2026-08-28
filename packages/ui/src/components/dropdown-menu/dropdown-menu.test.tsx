import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu.js";

describe("DropdownMenu", () => {
  it("renders the trigger", () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button>Open menu</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item one</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );
    expect(screen.getByText("Open menu")).toBeInTheDocument();
  });

  it("does not show menu items initially", () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button>Open menu</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item one</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );
    expect(screen.queryByText("Item one")).not.toBeInTheDocument();
  });

  it("opens the menu on trigger click", async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button>Open menu</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item one</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );
    await user.click(screen.getByText("Open menu"));
    expect(screen.getByText("Item one")).toBeInTheDocument();
  });

  it("shows all menu items when open", async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button>Open menu</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem>Item one</DropdownMenuItem>
          <DropdownMenuItem>Item two</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Item three</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );
    await user.click(screen.getByText("Open menu"));
    expect(screen.getByText("Actions")).toBeInTheDocument();
    expect(screen.getByText("Item one")).toBeInTheDocument();
    expect(screen.getByText("Item two")).toBeInTheDocument();
    expect(screen.getByText("Item three")).toBeInTheDocument();
  });

  it("closes on Escape key", async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button>Open menu</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item one</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );
    await user.click(screen.getByText("Open menu"));
    expect(screen.getByText("Item one")).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.queryByText("Item one")).not.toBeInTheDocument();
  });

  it("trigger has aria-haspopup", () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button>Open menu</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item one</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );
    expect(screen.getByText("Open menu")).toHaveAttribute("aria-haspopup");
  });
});
