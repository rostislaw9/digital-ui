import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Toggle } from "./toggle";

describe("Toggle", () => {
  it("renders as a button with aria-pressed", () => {
    render(<Toggle aria-label="Bold">B</Toggle>);
    const btn = screen.getByRole("button", { name: "Bold" });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute("aria-pressed", "false");
  });

  it("toggles pressed state on click", async () => {
    const user = userEvent.setup();
    render(<Toggle aria-label="Bold">B</Toggle>);
    const btn = screen.getByRole("button", { name: "Bold" });
    await user.click(btn);
    expect(btn).toHaveAttribute("aria-pressed", "true");
    await user.click(btn);
    expect(btn).toHaveAttribute("aria-pressed", "false");
  });

  it("respects controlled pressed prop", () => {
    render(
      <Toggle pressed aria-label="Bold">
        B
      </Toggle>,
    );
    expect(screen.getByRole("button", { name: "Bold" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  it("calls onPressedChange when toggled", async () => {
    const user = userEvent.setup();
    let pressed = false;
    render(
      <Toggle aria-label="Bold" onPressedChange={(p) => (pressed = p)}>
        B
      </Toggle>,
    );
    await user.click(screen.getByRole("button", { name: "Bold" }));
    expect(pressed).toBe(true);
  });

  it("respects disabled", () => {
    render(
      <Toggle disabled aria-label="Bold">
        B
      </Toggle>,
    );
    expect(screen.getByRole("button", { name: "Bold" })).toBeDisabled();
  });

  it("applies outline variant classes", () => {
    render(
      <Toggle variant="outline" aria-label="Bold">
        B
      </Toggle>,
    );
    expect(screen.getByRole("button", { name: "Bold" }).className).toContain(
      "border",
    );
  });

  it("applies custom className", () => {
    render(
      <Toggle className="custom-class" aria-label="Bold">
        B
      </Toggle>,
    );
    expect(screen.getByRole("button", { name: "Bold" })).toHaveClass(
      "custom-class",
    );
  });

  it("toggles via Space key", async () => {
    const user = userEvent.setup();
    render(<Toggle aria-label="Bold">B</Toggle>);
    const btn = screen.getByRole("button", { name: "Bold" });
    btn.focus();
    await user.keyboard(" ");
    expect(btn).toHaveAttribute("aria-pressed", "true");
  });
});
