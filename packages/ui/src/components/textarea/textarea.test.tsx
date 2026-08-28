import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, it, expect } from "vitest";

import { Textarea } from "./textarea.js";

describe("Textarea", () => {
  it("renders with default classes", () => {
    render(<Textarea placeholder="Enter text" />);
    const el = screen.getByPlaceholderText("Enter text");
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass(
      "flex",
      "w-full",
      "rounded-md",
      "border",
      "bg-surface",
    );
    expect(el).toHaveClass("min-h-[80px]");
  });

  it("applies invalid state classes", () => {
    render(<Textarea placeholder="err" invalid />);
    const el = screen.getByPlaceholderText("err");
    expect(el).toHaveAttribute("aria-invalid", "true");
    expect(el).toHaveClass("border-error");
    expect(el).toHaveClass("focus-visible:shadow-focus-error");
  });

  it("does not set aria-invalid when not invalid", () => {
    render(<Textarea placeholder="ok" />);
    expect(screen.getByPlaceholderText("ok")).not.toHaveAttribute(
      "aria-invalid",
    );
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLTextAreaElement>();
    render(<Textarea ref={ref} placeholder="ref" />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
    expect(ref.current).toBe(screen.getByPlaceholderText("ref"));
  });

  it("supports custom className override", () => {
    render(<Textarea placeholder="custom" className="my-custom" />);
    expect(screen.getByPlaceholderText("custom")).toHaveClass("my-custom");
  });

  it("is keyboard focusable", async () => {
    const user = userEvent.setup();
    render(<Textarea placeholder="focus me" />);
    const el = screen.getByPlaceholderText("focus me");
    await user.tab();
    expect(el).toHaveFocus();
  });

  it("respects disabled", () => {
    render(<Textarea placeholder="dis" disabled />);
    expect(screen.getByPlaceholderText("dis")).toBeDisabled();
  });

  it("supports typing", async () => {
    const user = userEvent.setup();
    render(<Textarea placeholder="Type here" />);
    const el = screen.getByPlaceholderText("Type here");
    await user.type(el, "hello world");
    expect(el).toHaveValue("hello world");
  });
});
