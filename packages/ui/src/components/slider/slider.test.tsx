import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Slider } from "./slider";

describe("Slider", () => {
  it("renders with default value", () => {
    render(<Slider defaultValue={[50]} max={100} step={1} />);
    const slider = screen.getByRole("slider");
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute("aria-valuenow", "50");
  });

  it("has slider role", () => {
    render(<Slider defaultValue={[25]} max={100} step={1} />);
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });

  it("is keyboard accessible", () => {
    render(<Slider defaultValue={[50]} max={100} step={1} />);
    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("tabindex", "0");
  });

  it("renders multiple thumbs for range values", () => {
    render(<Slider defaultValue={[25, 75]} max={100} step={1} />);
    const sliders = screen.getAllByRole("slider");
    expect(sliders).toHaveLength(2);
  });
});
