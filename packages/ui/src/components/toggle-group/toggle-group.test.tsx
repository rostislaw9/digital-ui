import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

describe("ToggleGroup", () => {
  it("renders a radiogroup in single mode", () => {
    render(
      <ToggleGroup type="single" aria-label="Alignment">
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
        <ToggleGroupItem value="right">Right</ToggleGroupItem>
      </ToggleGroup>,
    );
    expect(
      screen.getByRole("radiogroup", { name: "Alignment" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "Left" })).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "Right" })).toBeInTheDocument();
  });

  it("renders a toolbar in multiple mode", () => {
    render(
      <ToggleGroup type="multiple" aria-label="Styles">
        <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
        <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
      </ToggleGroup>,
    );
    expect(screen.getByRole("toolbar", { name: "Styles" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Bold" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Italic" })).toBeInTheDocument();
  });

  it("toggles single type — only one active", async () => {
    const user = userEvent.setup();
    render(
      <ToggleGroup type="single" aria-label="Alignment">
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
        <ToggleGroupItem value="right">Right</ToggleGroupItem>
      </ToggleGroup>,
    );
    const left = screen.getByRole("radio", { name: "Left" });
    const right = screen.getByRole("radio", { name: "Right" });
    await user.click(left);
    expect(left).toHaveAttribute("data-state", "on");
    expect(right).toHaveAttribute("data-state", "off");
    await user.click(right);
    expect(right).toHaveAttribute("data-state", "on");
    expect(left).toHaveAttribute("data-state", "off");
  });

  it("toggles multiple type — independent toggles", async () => {
    const user = userEvent.setup();
    render(
      <ToggleGroup type="multiple" aria-label="Styles">
        <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
        <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
      </ToggleGroup>,
    );
    const bold = screen.getByRole("button", { name: "Bold" });
    const italic = screen.getByRole("button", { name: "Italic" });
    await user.click(bold);
    await user.click(italic);
    expect(bold).toHaveAttribute("data-state", "on");
    expect(italic).toHaveAttribute("data-state", "on");
  });

  it("respects disabled on individual items", () => {
    render(
      <ToggleGroup type="single" aria-label="Alignment">
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
        <ToggleGroupItem value="right" disabled>
          Right
        </ToggleGroupItem>
      </ToggleGroup>,
    );
    expect(screen.getByRole("radio", { name: "Right" })).toBeDisabled();
  });

  it("propagates variant from group to items via context", () => {
    render(
      <ToggleGroup type="single" variant="outline" aria-label="Alignment">
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
      </ToggleGroup>,
    );
    expect(screen.getByRole("radio", { name: "Left" }).className).toContain(
      "border",
    );
  });

  it("calls onValueChange in single mode", async () => {
    const user = userEvent.setup();
    let value = "";
    render(
      <ToggleGroup
        type="single"
        aria-label="Alignment"
        onValueChange={(v: string) => (value = v)}
      >
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
      </ToggleGroup>,
    );
    await user.click(screen.getByRole("radio", { name: "Left" }));
    expect(value).toBe("left");
  });

  it("applies spacing gap class on the group", () => {
    render(
      <ToggleGroup type="single" spacing={4} aria-label="Alignment">
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
      </ToggleGroup>,
    );
    expect(screen.getByRole("radiogroup", { name: "Alignment" })).toHaveClass(
      "gap-4",
    );
  });

  it("defaults to gap-2 spacing", () => {
    render(
      <ToggleGroup type="single" aria-label="Alignment">
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
      </ToggleGroup>,
    );
    expect(screen.getByRole("radiogroup", { name: "Alignment" })).toHaveClass(
      "gap-2",
    );
  });

  it("sets data-variant on items from group context", () => {
    render(
      <ToggleGroup type="single" variant="outline" aria-label="Alignment">
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
      </ToggleGroup>,
    );
    expect(screen.getByRole("radio", { name: "Left" })).toHaveAttribute(
      "data-variant",
      "outline",
    );
  });

  it("passes orientation to Radix for accessibility", () => {
    render(
      <ToggleGroup type="single" orientation="vertical" aria-label="Alignment">
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
      </ToggleGroup>,
    );
    expect(screen.getByRole("radiogroup", { name: "Alignment" })).toHaveClass(
      "flex-col",
    );
  });
});
