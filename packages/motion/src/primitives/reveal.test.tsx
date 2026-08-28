import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Reveal } from "./reveal.js";

describe("Reveal", () => {
  it("renders children", () => {
    render(
      <Reveal>
        <p>Revealed content</p>
      </Reveal>,
    );
    expect(screen.getByText("Revealed content")).toBeInTheDocument();
  });

  it("renders children when disabled", () => {
    render(
      <Reveal disabled>
        <p>Revealed content</p>
      </Reveal>,
    );
    expect(screen.getByText("Revealed content")).toBeInTheDocument();
  });

  it("applies initial opacity style", () => {
    const { container } = render(
      <Reveal>
        <p>Content</p>
      </Reveal>,
    );
    const wrapper =
      container.querySelector("span") ?? container.querySelector("div");
    expect(wrapper).toBeTruthy();
    // Reveal starts hidden (opacity 0) until in view
    expect(wrapper?.style.opacity).toBe("0");
  });

  it("content is always in DOM (not lazy-loaded)", () => {
    render(
      <Reveal>
        <p data-testid="content">Always present</p>
      </Reveal>,
    );
    expect(screen.getByTestId("content")).toBeInTheDocument();
  });
});
