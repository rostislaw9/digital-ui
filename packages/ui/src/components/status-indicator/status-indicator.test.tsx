import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { StatusBeacon, StatusIndicator, StatusLabel } from "./status-indicator";

describe("StatusIndicator", () => {
  it("renders with role status and aria-label", () => {
    render(<StatusIndicator label="System Online" />);
    const indicator = screen.getByRole("status");
    expect(indicator).toBeInTheDocument();
    expect(indicator).toHaveAttribute("aria-label", "System Online");
  });

  it("renders custom children and text", () => {
    render(
      <StatusIndicator variant="online">
        <StatusBeacon variant="online" />
        <StatusLabel>Active</StatusLabel>
      </StatusIndicator>,
    );
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("applies status variants correctly", () => {
    const { container: onlineContainer } = render(<StatusIndicator variant="online" label="Online" />);
    expect(onlineContainer.querySelector(".bg-success")).toBeInTheDocument();

    const { container: busyContainer } = render(<StatusIndicator variant="busy" label="Busy" />);
    expect(busyContainer.querySelector(".bg-error")).toBeInTheDocument();

    const { container: awayContainer } = render(<StatusIndicator variant="away" label="Away" />);
    expect(awayContainer.querySelector(".bg-warning")).toBeInTheDocument();
  });

  it("disables pulse animation for offline state or when pulsing is false", () => {
    const { container: offlineContainer } = render(
      <StatusBeacon variant="offline" />,
    );
    expect(offlineContainer.querySelector(".animate-ping")).not.toBeInTheDocument();

    const { container: noPulseContainer } = render(
      <StatusBeacon variant="online" pulsing={false} />,
    );
    expect(noPulseContainer.querySelector(".animate-ping")).not.toBeInTheDocument();
  });

  it("applies size classes to beacon and label container", () => {
    const { container: smContainer } = render(
      <StatusIndicator size="sm" label="Small" />,
    );
    expect(smContainer.firstChild).toHaveClass("text-xs");

    const { container: lgContainer } = render(
      <StatusIndicator size="lg" label="Large" />,
    );
    expect(lgContainer.firstChild).toHaveClass("text-base");
  });
});
