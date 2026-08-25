import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Pagination } from "./pagination.js";

describe("Pagination", () => {
  it("renders correct page numbers", () => {
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />,
    );
    expect(screen.getByLabelText("Page 1")).toBeInTheDocument();
    expect(screen.getByLabelText("Page 5")).toBeInTheDocument();
  });

  it("marks current page as active", () => {
    render(
      <Pagination currentPage={3} totalPages={5} onPageChange={() => {}} />,
    );
    expect(screen.getByLabelText("Page 3")).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("calls onPageChange when clicking a page", async () => {
    const user = userEvent.setup();
    const onPageChange = vi.fn();
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />,
    );
    await user.click(screen.getByLabelText("Page 3"));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it("disables previous button on first page", () => {
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />,
    );
    expect(screen.getByLabelText("Previous page")).toBeDisabled();
  });

  it("disables next button on last page", () => {
    render(
      <Pagination currentPage={5} totalPages={5} onPageChange={() => {}} />,
    );
    expect(screen.getByLabelText("Next page")).toBeDisabled();
  });

  it("shows ellipsis for large page counts", () => {
    render(
      <Pagination currentPage={5} totalPages={20} onPageChange={() => {}} />,
    );
    // Should have ellipsis (rendered as MoreHorizontal icon spans)
    const ellipsisSpans = screen.getAllByText("", { selector: "span" });
    expect(ellipsisSpans.length).toBeGreaterThan(0);
  });
});
