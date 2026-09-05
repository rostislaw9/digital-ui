import { render } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";

import { Spinner } from "./index";

describe("Spinner", () => {
  it("renders with default classes", () => {
    const { container } = render(<Spinner />);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveClass("animate-spin");
    expect(el).toHaveClass("text-current");
  });

  it("applies default size class", () => {
    const { container } = render(<Spinner />);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveClass("size-4");
  });

  it("applies custom size class", () => {
    const { container } = render(<Spinner size="lg" />);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveClass("size-5");
  });

  it("sets aria-hidden by default", () => {
    const { container } = render(<Spinner />);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveAttribute("aria-hidden", "true");
  });

  it("sets data-slot", () => {
    const { container } = render(<Spinner />);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveAttribute("data-slot", "spinner");
  });

  it("accepts custom className", () => {
    const { container } = render(<Spinner className="text-accent" />);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveClass("text-accent");
  });

  it("forwards ref", () => {
    const ref = createRef<SVGSVGElement>();
    render(<Spinner ref={ref} />);
    expect(ref.current).toBeInstanceOf(SVGSVGElement);
  });
});
