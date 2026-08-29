import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { ScrollArea } from "./scroll-area";

describe("ScrollArea", () => {
  it("renders children", () => {
    render(
      <ScrollArea className="h-32" data-testid="scroll-area">
        <div>Content inside</div>
      </ScrollArea>,
    );
    expect(screen.getByText("Content inside")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <ScrollArea className="h-48 w-64" data-testid="scroll-area">
        <div>Content</div>
      </ScrollArea>,
    );
    const root = screen.getByTestId("scroll-area");
    expect(root).toHaveClass("h-48", "w-64");
  });
});
