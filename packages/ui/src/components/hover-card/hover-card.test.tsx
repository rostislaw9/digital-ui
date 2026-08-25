import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card.js";

describe("HoverCard", () => {
  it("shows content on hover", async () => {
    const user = userEvent.setup();
    render(
      <HoverCard openDelay={0}>
        <HoverCardTrigger asChild>
          <button type="button">Hover me</button>
        </HoverCardTrigger>
        <HoverCardContent>Card content</HoverCardContent>
      </HoverCard>,
    );
    await user.hover(screen.getByText("Hover me"));
    await waitFor(() => {
      expect(screen.getByText("Card content")).toBeInTheDocument();
    });
  });

  it("hides content on unhover", async () => {
    const user = userEvent.setup();
    render(
      <HoverCard openDelay={0} closeDelay={0}>
        <HoverCardTrigger asChild>
          <button type="button">Hover me</button>
        </HoverCardTrigger>
        <HoverCardContent>Card content</HoverCardContent>
      </HoverCard>,
    );
    const trigger = screen.getByText("Hover me");
    await user.hover(trigger);
    await waitFor(() => {
      expect(screen.getByText("Card content")).toBeInTheDocument();
    });
    await user.unhover(trigger);
    await waitFor(() => {
      expect(screen.queryByText("Card content")).not.toBeInTheDocument();
    });
  });
});
