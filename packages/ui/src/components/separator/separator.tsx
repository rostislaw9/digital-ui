import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { forwardRef } from "react";
import { cn } from "../../lib/cn.js";

export type SeparatorProps = React.ComponentProps<
  typeof SeparatorPrimitive.Root
>;

/**
 * Separator — a visual divider between content sections.
 *
 * Accessibility: Radix sets `role="separator"` with `aria-orientation`
 * based on the `orientation` prop. When the separator separates content
 * sections, it should not be focusable (default).
 */
export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  function Separator(
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) {
    return (
      <SeparatorPrimitive.Root
        ref={ref}
        orientation={orientation}
        decorative={decorative}
        className={cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-px w-full" : "w-px self-stretch",
          className,
        )}
        {...props}
      />
    );
  },
);
