import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Glow } from "./primitives/glow";
import { Pulse } from "./primitives/pulse";
import { Spotlight } from "./primitives/spotlight";

// Helper to toggle matchMedia for prefers-reduced-motion
function setReducedMotion(enabled: boolean) {
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockImplementation((query: string) => ({
      matches: enabled && query.includes("reduce"),
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  );
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Reduced motion behavior", () => {
  it("Spotlight disables overlay when reduced motion is active", () => {
    setReducedMotion(true);
    const { container } = render(
      <Spotlight>
        <div>Content</div>
      </Spotlight>,
    );
    const overlays = container.querySelectorAll('[aria-hidden="true"]');
    expect(overlays.length).toBe(0);
  });

  it("Spotlight shows overlay when reduced motion is not active", () => {
    setReducedMotion(false);
    const { container } = render(
      <Spotlight>
        <div>Content</div>
      </Spotlight>,
    );
    const overlays = container.querySelectorAll('[aria-hidden="true"]');
    expect(overlays.length).toBeGreaterThan(0);
  });

  it("Glow still renders with reduced motion (state signal, not motion)", () => {
    setReducedMotion(true);
    render(
      <Glow always intensity={0.6}>
        <button>Active</button>
      </Glow>,
    );
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("Pulse still renders with reduced motion (collapses to static via CSS)", () => {
    setReducedMotion(true);
    render(
      <Pulse intensity={0.8}>
        <span>●</span>
      </Pulse>,
    );
    expect(screen.getByText("●")).toBeInTheDocument();
  });
});
