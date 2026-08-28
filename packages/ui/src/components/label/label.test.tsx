import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Label } from "./index.js";

describe("Label", () => {
  it("renders children", () => {
    render(<Label htmlFor="email">Email</Label>);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("associates with a control via htmlFor", () => {
    render(
      <>
        <Label htmlFor="input-1">Name</Label>
        <input id="input-1" />
      </>,
    );
    const label = screen.getByText("Name");
    expect(label).toHaveAttribute("for", "input-1");
  });

  it("applies text-foreground class", () => {
    const { container } = render(<Label>Test</Label>);
    const label = container.firstChild as HTMLElement;
    expect(label.className).toContain("text-foreground");
  });
});
