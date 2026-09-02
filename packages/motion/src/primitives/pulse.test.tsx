import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Pulse } from "./pulse";

describe("Pulse", () => {
  it("renders children when disabled", () => {
    render(
      <Pulse disabled>
        <span>Status</span>
      </Pulse>,
    );
    expect(screen.getByText("Status")).toBeInTheDocument();
  });

  it("renders children when not disabled", () => {
    render(
      <Pulse>
        <span>Status</span>
      </Pulse>,
    );
    expect(screen.getByText("Status")).toBeInTheDocument();
  });

  it("applies animation style for halo variant", () => {
    const { container } = render(
      <Pulse intensity={0.8}>
        <span className="h-3 w-3 rounded-full bg-accent" />
      </Pulse>,
    );
    const wrapper = container.querySelector("span");
    expect(wrapper?.style.animation).toContain("ionbit-ui-pulse");
    expect(wrapper?.style.animation).toContain("infinite");
  });

  it("uses text-shadow keyframes for text variant", () => {
    const { container } = render(
      <Pulse variant="text" intensity={0.7}>
        <span>LIVE</span>
      </Pulse>,
    );
    const wrapper = container.querySelector("span");
    expect(wrapper?.style.animation).toContain("ionbit-ui-pulse-text");
  });

  it("uses box-shadow keyframes for halo variant", () => {
    const { container } = render(
      <Pulse variant="halo" intensity={0.7}>
        <span>●</span>
      </Pulse>,
    );
    const wrapper = container.querySelector("span");
    expect(wrapper?.style.animation).toContain("ionbit-ui-pulse-halo");
  });

  it("respects custom duration", () => {
    const { container } = render(
      <Pulse duration={3000}>
        <span>●</span>
      </Pulse>,
    );
    const wrapper = container.querySelector("span");
    expect(wrapper?.style.animation).toContain("3000ms");
  });
});
