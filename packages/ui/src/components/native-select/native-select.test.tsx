import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it } from "vitest";

import { NativeSelect } from "./index";

describe("NativeSelect", () => {
  it("renders with options", () => {
    render(
      <NativeSelect defaultValue="apple">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
      </NativeSelect>,
    );
    expect(screen.getByDisplayValue("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
  });

  it("applies appearance-none to hide native arrow", () => {
    render(
      <NativeSelect>
        <option value="a">A</option>
      </NativeSelect>,
    );
    expect(screen.getByRole("combobox")).toHaveClass("appearance-none");
  });

  it("renders chevron icon", () => {
    const { container } = render(
      <NativeSelect>
        <option value="a">A</option>
      </NativeSelect>,
    );
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });

  it("sets aria-invalid when invalid", () => {
    render(
      <NativeSelect invalid>
        <option value="a">A</option>
      </NativeSelect>,
    );
    expect(screen.getByRole("combobox")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
  });

  it("does not set aria-invalid when not invalid", () => {
    render(
      <NativeSelect>
        <option value="a">A</option>
      </NativeSelect>,
    );
    expect(screen.getByRole("combobox")).not.toHaveAttribute("aria-invalid");
  });

  it("respects disabled", () => {
    render(
      <NativeSelect disabled>
        <option value="a">A</option>
      </NativeSelect>,
    );
    expect(screen.getByRole("combobox")).toBeDisabled();
  });

  it("supports changing selection", async () => {
    const user = userEvent.setup();
    render(
      <NativeSelect defaultValue="apple">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
      </NativeSelect>,
    );
    const select = screen.getByRole("combobox");
    await user.selectOptions(select, "banana");
    expect(select).toHaveValue("banana");
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLSelectElement>();
    render(
      <NativeSelect ref={ref}>
        <option value="a">A</option>
      </NativeSelect>,
    );
    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });

  it("accepts custom className", () => {
    render(
      <NativeSelect className="my-custom">
        <option value="a">A</option>
      </NativeSelect>,
    );
    expect(screen.getByRole("combobox")).toHaveClass("my-custom");
  });
});
