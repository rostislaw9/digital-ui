import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Glow } from "./glow";

describe("Glow", () => {
  it("renders children when disabled", () => {
    render(
      <Glow disabled>
        <button>Click me</button>
      </Glow>,
    );
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders children when not disabled", () => {
    render(
      <Glow>
        <button>Click me</button>
      </Glow>,
    );
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies box-shadow transition for halo variant", () => {
    const { container } = render(
      <Glow intensity={0.5}>
        <button>Hover me</button>
      </Glow>,
    );
    const wrapper = container.querySelector("span");
    expect(wrapper).toBeTruthy();
    expect(wrapper?.style.transition).toContain("box-shadow");
  });

  it("applies text-shadow transition for text variant", () => {
    const { container } = render(
      <Glow variant="text" intensity={0.5}>
        <span>Glowing text</span>
      </Glow>,
    );
    const wrapper = container.querySelector("span");
    expect(wrapper?.style.transition).toContain("text-shadow");
  });

  it("applies inline shadow when always is true", () => {
    const { container } = render(
      <Glow always intensity={0.6}>
        <button>Active</button>
      </Glow>,
    );
    const wrapper = container.querySelector("span");
    expect(wrapper?.style.boxShadow).not.toBe("");
  });

  it("does not apply inline shadow when always is false", () => {
    const { container } = render(
      <Glow intensity={0.6}>
        <button>Active</button>
      </Glow>,
    );
    const wrapper = container.querySelector("span");
    expect(wrapper?.style.boxShadow).toBe("");
  });

  it("wrapped element remains keyboard focusable", async () => {
    render(
      <Glow>
        <button>Focus me</button>
      </Glow>,
    );
    const btn = screen.getByText("Focus me");
    btn.focus();
    expect(btn).toHaveFocus();
  });
});
