import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Avatar, AvatarFallback, AvatarImage, AvatarStatus } from "./index";

describe("Avatar", () => {
  it("renders fallback when image fails", () => {
    render(
      <Avatar>
        <AvatarImage src="broken.jpg" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("renders fallback immediately", () => {
    render(
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByText("AB")).toBeInTheDocument();
  });

  it("applies rounded-full class", () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback>X</AvatarFallback>
      </Avatar>,
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className).toContain("rounded-full");
  });

  it("applies size prop", () => {
    const { container } = render(
      <Avatar size="sm">
        <AvatarFallback>X</AvatarFallback>
      </Avatar>,
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className).toContain("size-8");
  });

  it("defaults to md size", () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback>X</AvatarFallback>
      </Avatar>,
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className).toContain("size-10");
  });
});

describe("AvatarStatus", () => {
  it("renders with online variant by default", () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback>U</AvatarFallback>
        <AvatarStatus aria-label="Online" />
      </Avatar>,
    );
    const status = container.querySelector("[role='img']");
    expect(status).toBeInTheDocument();
    expect(status?.className).toContain("bg-success");
  });

  it("applies busy variant", () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback>U</AvatarFallback>
        <AvatarStatus variant="busy" aria-label="Busy" />
      </Avatar>,
    );
    const status = container.querySelector("[role='img']");
    expect(status?.className).toContain("bg-error");
  });

  it("applies offline variant", () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback>U</AvatarFallback>
        <AvatarStatus variant="offline" aria-label="Offline" />
      </Avatar>,
    );
    const status = container.querySelector("[role='img']");
    expect(status?.className).toContain("bg-foreground-subtle");
  });

  it("applies away variant", () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback>U</AvatarFallback>
        <AvatarStatus variant="away" aria-label="Away" />
      </Avatar>,
    );
    const status = container.querySelector("[role='img']");
    expect(status?.className).toContain("bg-warning");
  });

  it("positions at bottom-right by default", () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback>U</AvatarFallback>
        <AvatarStatus aria-label="Online" />
      </Avatar>,
    );
    const status = container.querySelector("[role='img']");
    expect(status?.className).toContain("bottom-0");
    expect(status?.className).toContain("right-0");
  });

  it("positions at top-left", () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback>U</AvatarFallback>
        <AvatarStatus position="top-left" aria-label="Online" />
      </Avatar>,
    );
    const status = container.querySelector("[role='img']");
    expect(status?.className).toContain("left-0");
    expect(status?.className).toContain("top-0");
  });
});
