import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Tooltip } from "./tooltip.js";

describe("Tooltip", () => {
  it("renders children when disabled", () => {
    render(
      <Tooltip content="tip" disabled>
        <button>Hover me</button>
      </Tooltip>,
    );
    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });

  it("renders children with provider", () => {
    render(
      <Tooltip content="tip">
        <button>Hover me</button>
      </Tooltip>,
    );
    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });
});
