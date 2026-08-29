import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Progress } from "./progress";

describe("Progress", () => {
  it("renders a progressbar", () => {
    render(<Progress value={50} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("sets aria-valuenow", () => {
    render(<Progress value={75} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-valuenow",
      "75",
    );
  });

  it("clamps value to 0-100", () => {
    render(<Progress value={150} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-valuenow",
      "100",
    );
  });

  it("clamps negative to 0", () => {
    render(<Progress value={-10} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-valuenow",
      "0",
    );
  });

  it("accepts custom className", () => {
    render(<Progress value={50} className="custom" />);
    expect(screen.getByRole("progressbar")).toHaveClass("custom");
  });
});
