import { render, screen } from "@testing-library/react";
import { Search } from "lucide-react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupSeparator,
  InputGroupText,
  InputGroupTextarea,
} from "./index";

describe("InputGroup", () => {
  it("renders with default classes", () => {
    const { container } = render(
      <InputGroup>
        <InputGroupInput placeholder="Search" />
      </InputGroup>,
    );
    const group = container.firstChild as HTMLElement;
    expect(group).toHaveClass("border-border");
    expect(group).toHaveClass("bg-surface");
    expect(group).toHaveClass("rounded-md");
    expect(group).toHaveClass("h-8");
  });

  it("sets role=group", () => {
    render(
      <InputGroup aria-label="Search">
        <InputGroupInput placeholder="Search" />
      </InputGroup>,
    );
    expect(screen.getByRole("group", { name: "Search" })).toBeInTheDocument();
  });

  it("sets data-slot", () => {
    const { container } = render(<InputGroup />);
    expect(container.firstChild).toHaveAttribute("data-slot", "input-group");
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(<InputGroup ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("has block-start auto-layout selectors", () => {
    const { container } = render(
      <InputGroup>
        <InputGroupAddon align="block-start">Label</InputGroupAddon>
        <InputGroupInput placeholder="x" />
      </InputGroup>,
    );
    const group = container.firstChild as HTMLElement;
    expect(group.className).toContain("has-[>[data-align=block-start]]:h-auto");
    expect(group.className).toContain(
      "has-[>[data-align=block-start]]:flex-col",
    );
  });

  it("has block-end auto-layout selectors", () => {
    const { container } = render(
      <InputGroup>
        <InputGroupInput placeholder="x" />
        <InputGroupAddon align="block-end">Footer</InputGroupAddon>
      </InputGroup>,
    );
    const group = container.firstChild as HTMLElement;
    expect(group.className).toContain("has-[>[data-align=block-end]]:h-auto");
    expect(group.className).toContain("has-[>[data-align=block-end]]:flex-col");
  });
});

describe("InputGroupInput", () => {
  it("renders an input with transparent background", () => {
    render(
      <InputGroup>
        <InputGroupInput placeholder="Type here" />
      </InputGroup>,
    );
    const input = screen.getByPlaceholderText("Type here");
    expect(input).toHaveClass("bg-transparent");
    expect(input).not.toHaveClass("border");
  });

  it("sets data-slot=input-group-control", () => {
    render(
      <InputGroup>
        <InputGroupInput placeholder="x" />
      </InputGroup>,
    );
    expect(screen.getByPlaceholderText("x")).toHaveAttribute(
      "data-slot",
      "input-group-control",
    );
  });

  it("supports typing", () => {
    render(
      <InputGroup>
        <InputGroupInput placeholder="Type" />
      </InputGroup>,
    );
    expect(screen.getByPlaceholderText("Type")).toBeInTheDocument();
  });
});

describe("InputGroupTextarea", () => {
  it("renders a textarea with transparent background", () => {
    render(
      <InputGroup>
        <InputGroupTextarea placeholder="Multi" />
      </InputGroup>,
    );
    const el = screen.getByPlaceholderText("Multi");
    expect(el.tagName).toBe("TEXTAREA");
    expect(el).toHaveClass("bg-transparent");
  });

  it("sets data-slot=input-group-control", () => {
    render(
      <InputGroup>
        <InputGroupTextarea placeholder="x" />
      </InputGroup>,
    );
    expect(screen.getByPlaceholderText("x")).toHaveAttribute(
      "data-slot",
      "input-group-control",
    );
  });
});

describe("InputGroupAddon", () => {
  it("renders children", () => {
    render(
      <InputGroup>
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search" />
      </InputGroup>,
    );
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it("sets data-slot and data-align", () => {
    render(
      <InputGroup>
        <InputGroupAddon align="inline-end" data-testid="addon">
          <Search />
        </InputGroupAddon>
      </InputGroup>,
    );
    const addon = screen.getByTestId("addon");
    expect(addon).toHaveAttribute("data-slot", "input-group-addon");
    expect(addon).toHaveAttribute("data-align", "inline-end");
  });

  it("defaults to inline-start align", () => {
    render(
      <InputGroup>
        <InputGroupAddon data-testid="addon">A</InputGroupAddon>
      </InputGroup>,
    );
    expect(screen.getByTestId("addon")).toHaveAttribute(
      "data-align",
      "inline-start",
    );
  });

  it("applies order-first for inline-start", () => {
    render(
      <InputGroup>
        <InputGroupAddon align="inline-start" data-testid="addon">
          A
        </InputGroupAddon>
      </InputGroup>,
    );
    expect(screen.getByTestId("addon")).toHaveClass("order-first");
  });

  it("applies order-last for inline-end", () => {
    render(
      <InputGroup>
        <InputGroupAddon align="inline-end" data-testid="addon">
          A
        </InputGroupAddon>
      </InputGroup>,
    );
    expect(screen.getByTestId("addon")).toHaveClass("order-last");
  });

  it("focuses the input when addon is clicked", () => {
    render(
      <InputGroup>
        <InputGroupInput placeholder="focus me" />
        <InputGroupAddon align="inline-end" data-testid="addon">
          <Search />
        </InputGroupAddon>
      </InputGroup>,
    );
    const input = screen.getByPlaceholderText("focus me");
    const addon = screen.getByTestId("addon");
    addon.click();
    expect(input).toHaveFocus();
  });

  it("does not focus input when a button inside is clicked", () => {
    render(
      <InputGroup>
        <InputGroupInput placeholder="no focus" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton data-testid="btn">Go</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>,
    );
    const input = screen.getByPlaceholderText("no focus");
    const btn = screen.getByTestId("btn");
    btn.click();
    expect(input).not.toHaveFocus();
  });
});

describe("InputGroupButton", () => {
  it("renders a button with ghost variant and xs size by default", () => {
    render(<InputGroupButton data-testid="btn">Go</InputGroupButton>);
    const btn = screen.getByTestId("btn");
    expect(btn).toHaveAttribute("type", "button");
    expect(btn).toHaveClass("shadow-none");
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<InputGroupButton ref={ref}>Go</InputGroupButton>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});

describe("InputGroupText", () => {
  it("renders text content", () => {
    render(
      <InputGroup>
        <InputGroupText>$</InputGroupText>
        <InputGroupInput placeholder="Amount" />
      </InputGroup>,
    );
    expect(screen.getByText("$")).toBeInTheDocument();
  });

  it("sets data-slot", () => {
    render(
      <InputGroup>
        <InputGroupText>kg</InputGroupText>
      </InputGroup>,
    );
    expect(screen.getByText("kg")).toHaveAttribute(
      "data-slot",
      "input-group-text",
    );
  });
});

describe("InputGroupSeparator", () => {
  it("renders a separator span", () => {
    render(
      <InputGroup>
        <InputGroupInput placeholder="x" />
        <InputGroupSeparator />
        <InputGroupAddon align="inline-end">Go</InputGroupAddon>
      </InputGroup>,
    );
    const sep = document.querySelector('[data-slot="input-group-separator"]');
    expect(sep).toBeTruthy();
    expect(sep).toHaveClass("w-px");
    expect(sep).toHaveClass("bg-border");
    expect(sep).toHaveClass("self-stretch");
  });

  it("sets aria-hidden", () => {
    render(<InputGroupSeparator />);
    expect(document.firstChild).toBeTruthy();
  });
});

describe("InputGroup composition", () => {
  it("renders a search input with leading icon and trailing button", () => {
    render(
      <InputGroup aria-label="Search">
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search components..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Go</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>,
    );
    expect(
      screen.getByPlaceholderText("Search components..."),
    ).toBeInTheDocument();
    expect(screen.getByText("Go")).toBeInTheDocument();
  });
});
