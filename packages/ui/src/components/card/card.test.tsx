import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card.js";

describe("Card", () => {
  it("renders all sub-components", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("applies elevated classes when elevated prop is set", () => {
    const { container } = render(
      <Card elevated>
        <CardContent>Content</CardContent>
      </Card>,
    );
    const card = container.firstElementChild as HTMLElement;
    expect(card.className).toContain("shadow");
  });

  it("accepts custom className", () => {
    const { container } = render(
      <Card className="w-80">
        <CardContent>Content</CardContent>
      </Card>,
    );
    const card = container.firstElementChild as HTMLElement;
    expect(card.className).toContain("w-80");
  });

  it("forwards ref", () => {
    const ref = { current: null as HTMLDivElement | null };
    render(
      <Card ref={ref}>
        <CardContent>Content</CardContent>
      </Card>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
