import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import { Input } from "./input";

describe("Input", () => {
  it("renders with placeholder", () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("supports typing", async () => {
    const user = userEvent.setup();
    render(<Input placeholder="Type here" />);
    const input = screen.getByPlaceholderText("Type here");
    await user.type(input, "hello");
    expect(input).toHaveValue("hello");
  });

  it("sets aria-invalid when invalid", () => {
    render(<Input placeholder="err" invalid />);
    expect(screen.getByPlaceholderText("err")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
  });

  it("does not set aria-invalid when not invalid", () => {
    render(<Input placeholder="ok" />);
    expect(screen.getByPlaceholderText("ok")).not.toHaveAttribute(
      "aria-invalid",
    );
  });

  it("respects disabled", () => {
    render(<Input placeholder="dis" disabled />);
    expect(screen.getByPlaceholderText("dis")).toBeDisabled();
  });

  it("accepts custom className", () => {
    render(<Input placeholder="custom" className="my-custom" />);
    expect(screen.getByPlaceholderText("custom")).toHaveClass("my-custom");
  });
});
