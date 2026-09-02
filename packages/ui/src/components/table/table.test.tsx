import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./index";

describe("Table", () => {
  it("renders a table inside an overflow container", () => {
    const { container } = render(<Table />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.tagName).toBe("DIV");
    expect(wrapper.className).toContain("overflow-x-auto");
    const table = wrapper.firstChild as HTMLElement;
    expect(table.tagName).toBe("TABLE");
  });

  it("applies custom className to the table element", () => {
    const { container } = render(<Table className="my-4" />);
    const table = container.querySelector("table")!;
    expect(table.className).toContain("my-4");
  });
});

describe("TableHeader", () => {
  it("renders a thead with border-b on child rows", () => {
    const { container } = render(<TableHeader />);
    const thead = container.firstChild as HTMLElement;
    expect(thead.tagName).toBe("THEAD");
    expect(thead.className).toContain("[&_tr]:border-b");
  });
});

describe("TableBody", () => {
  it("renders a tbody that removes border from last row", () => {
    const { container } = render(<TableBody />);
    const tbody = container.firstChild as HTMLElement;
    expect(tbody.tagName).toBe("TBODY");
    expect(tbody.className).toContain("[&_tr:last-child]:border-0");
  });
});

describe("TableFooter", () => {
  it("renders a tfoot with border-t and surface background", () => {
    const { container } = render(<TableFooter />);
    const tfoot = container.firstChild as HTMLElement;
    expect(tfoot.tagName).toBe("TFOOT");
    expect(tfoot.className).toContain("border-t");
    expect(tfoot.className).toContain("bg-surface-hover");
  });
});

describe("TableRow", () => {
  it("renders a tr with border-b and hover background", () => {
    const { container } = render(<TableRow />);
    const tr = container.firstChild as HTMLElement;
    expect(tr.tagName).toBe("TR");
    expect(tr.className).toContain("border-b");
    expect(tr.className).toContain("hover:bg-surface-hover");
  });
});

describe("TableHead", () => {
  it("renders a th with font-medium and whitespace-nowrap", () => {
    const { container } = render(<TableHead />);
    const th = container.firstChild as HTMLElement;
    expect(th.tagName).toBe("TH");
    expect(th.className).toContain("font-medium");
    expect(th.className).toContain("whitespace-nowrap");
  });
});

describe("TableCell", () => {
  it("renders a td with whitespace-nowrap", () => {
    const { container } = render(<TableCell />);
    const td = container.firstChild as HTMLElement;
    expect(td.tagName).toBe("TD");
    expect(td.className).toContain("whitespace-nowrap");
  });
});

describe("TableCaption", () => {
  it("renders a caption with muted foreground", () => {
    const { container } = render(<TableCaption />);
    const caption = container.firstChild as HTMLElement;
    expect(caption.tagName).toBe("CAPTION");
    expect(caption.className).toContain("text-foreground-muted");
  });
});

describe("Full table composition", () => {
  it("renders all parts together", () => {
    const { container } = render(
      <Table>
        <TableCaption>A list of users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Alice</TableCell>
            <TableCell>alice@example.com</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total: 1 user</TableCell>
          </TableRow>
        </TableFooter>
      </Table>,
    );
    expect(container.querySelector("table")).toBeTruthy();
    expect(container.querySelector("thead")).toBeTruthy();
    expect(container.querySelector("tbody")).toBeTruthy();
    expect(container.querySelector("tfoot")).toBeTruthy();
    expect(container.querySelector("caption")).toBeTruthy();
    expect(container.querySelectorAll("th")).toHaveLength(2);
    expect(container.querySelectorAll("td")).toHaveLength(3);
  });
});
