import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "../button/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "./button-group";

describe("ButtonGroup", () => {
  it("renders a group role with aria-label", () => {
    render(
      <ButtonGroup aria-label="Actions">
        <Button>Save</Button>
        <Button>Cancel</Button>
      </ButtonGroup>,
    );
    expect(screen.getByRole("group", { name: "Actions" })).toBeInTheDocument();
  });

  it("renders child buttons", () => {
    render(
      <ButtonGroup aria-label="Actions">
        <Button>Save</Button>
        <Button>Cancel</Button>
      </ButtonGroup>,
    );
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
  });

  it("defaults to horizontal orientation and overlapped variant", () => {
    render(
      <ButtonGroup aria-label="Actions">
        <Button>Save</Button>
      </ButtonGroup>,
    );
    const group = screen.getByRole("group");
    expect(group).toHaveAttribute("data-orientation", "horizontal");
    expect(group).toHaveAttribute("data-variant", "overlapped");
  });

  it("supports vertical orientation", () => {
    render(
      <ButtonGroup orientation="vertical" aria-label="Actions">
        <Button>Save</Button>
      </ButtonGroup>,
    );
    expect(screen.getByRole("group")).toHaveAttribute(
      "data-orientation",
      "vertical",
    );
  });

  it("supports separated variant", () => {
    render(
      <ButtonGroup variant="separated" aria-label="Actions">
        <Button>Save</Button>
      </ButtonGroup>,
    );
    expect(screen.getByRole("group")).toHaveAttribute(
      "data-variant",
      "separated",
    );
  });

  it("renders a separator", () => {
    render(
      <ButtonGroup aria-label="Actions">
        <Button>Save</Button>
        <ButtonGroupSeparator />
        <Button>Cancel</Button>
      </ButtonGroup>,
    );
    const sep = screen.getByText("", {
      selector: "[data-slot=button-group-separator]",
    });
    expect(sep).toBeInTheDocument();
  });

  it("renders ButtonGroupText content", () => {
    render(
      <ButtonGroup aria-label="Actions">
        <ButtonGroupText>Label:</ButtonGroupText>
        <Button>Save</Button>
      </ButtonGroup>,
    );
    expect(screen.getByText("Label:")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <ButtonGroup className="custom-group" aria-label="Actions">
        <Button>Save</Button>
      </ButtonGroup>,
    );
    expect(screen.getByRole("group")).toHaveClass("custom-group");
  });

  it("renders data-slot attribute", () => {
    render(
      <ButtonGroup aria-label="Actions">
        <Button>Save</Button>
      </ButtonGroup>,
    );
    expect(screen.getByRole("group")).toHaveAttribute(
      "data-slot",
      "button-group",
    );
  });
});
