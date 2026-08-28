import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./command.js";

describe("Command", () => {
  it("renders items when open in dialog", async () => {
    render(
      <CommandDialog open onOpenChange={() => {}}>
        <Command>
          <CommandInput placeholder="Search…" />
          <CommandList>
            <CommandItem>Action 1</CommandItem>
          </CommandList>
        </Command>
      </CommandDialog>,
    );
    await waitFor(() => {
      expect(screen.getByText("Action 1")).toBeInTheDocument();
    });
  });

  it("filters items based on search", async () => {
    const user = userEvent.setup();
    render(
      <CommandDialog open onOpenChange={() => {}}>
        <Command>
          <CommandInput placeholder="Search…" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandItem>Components</CommandItem>
            <CommandItem>Tokens</CommandItem>
            <CommandItem>Documentation</CommandItem>
          </CommandList>
        </Command>
      </CommandDialog>,
    );
    const input = screen.getByPlaceholderText("Search…");
    await user.type(input, "tok");
    expect(screen.getByText("Tokens")).toBeInTheDocument();
    expect(screen.queryByText("Components")).not.toBeInTheDocument();
    expect(screen.queryByText("Documentation")).not.toBeInTheDocument();
  });

  it("shows empty state when no items match", async () => {
    const user = userEvent.setup();
    render(
      <CommandDialog open onOpenChange={() => {}}>
        <Command>
          <CommandInput placeholder="Search…" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandItem>Components</CommandItem>
            <CommandItem>Tokens</CommandItem>
          </CommandList>
        </Command>
      </CommandDialog>,
    );
    const input = screen.getByPlaceholderText("Search…");
    await user.type(input, "xyz");
    expect(screen.getByText("No results found.")).toBeInTheDocument();
  });

  it("calls onSelect when item is clicked", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(
      <CommandDialog open onOpenChange={() => {}}>
        <Command>
          <CommandInput placeholder="Search…" />
          <CommandList>
            <CommandItem onSelect={onSelect}>Run action</CommandItem>
          </CommandList>
        </Command>
      </CommandDialog>,
    );
    await waitFor(() => {
      expect(screen.getByText("Run action")).toBeInTheDocument();
    });
    await user.click(screen.getByText("Run action"));
    expect(onSelect).toHaveBeenCalledOnce();
  });

  it("renders groups with headings", async () => {
    render(
      <CommandDialog open onOpenChange={() => {}}>
        <Command>
          <CommandInput placeholder="Search…" />
          <CommandList>
            <CommandGroup heading="Actions">
              <CommandItem>Action 1</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>Open settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>,
    );
    await waitFor(() => {
      expect(screen.getByText("Actions")).toBeInTheDocument();
    });
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });

  it("renders shortcuts", async () => {
    render(
      <CommandDialog open onOpenChange={() => {}}>
        <Command>
          <CommandInput placeholder="Search…" />
          <CommandList>
            <CommandItem>
              Copy
              <CommandShortcut>⌘C</CommandShortcut>
            </CommandItem>
          </CommandList>
        </Command>
      </CommandDialog>,
    );
    await waitFor(() => {
      expect(screen.getByText("⌘C")).toBeInTheDocument();
    });
  });
});
