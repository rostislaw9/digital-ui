import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Magnetic } from "./magnetic.js";

describe("Magnetic", () => {
  it("renders children when disabled", () => {
    render(
      <Magnetic disabled>
        <button>Click me</button>
      </Magnetic>,
    );
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders children when not disabled", () => {
    render(
      <Magnetic intensity={0.35}>
        <button>Click me</button>
      </Magnetic>,
    );
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("wrapped button remains keyboard focusable", () => {
    render(
      <Magnetic>
        <button>Focus me</button>
      </Magnetic>,
    );
    const btn = screen.getByText("Focus me");
    btn.focus();
    expect(btn).toHaveFocus();
  });

  it("does not throw on pointermove", () => {
    const { container } = render(
      <Magnetic intensity={0.35}>
        <button>Hover me</button>
      </Magnetic>,
    );
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper).toBeTruthy();
    // Simulate pointer move — should not throw
    expect(() => {
      fireEvent.pointerMove(wrapper, {
        clientX: 100,
        clientY: 100,
      });
    }).not.toThrow();
  });
});
