import { Link } from "react-router-dom";

import { cn } from "@ionbit-ui/ui";

interface SectionHeadingProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Section heading with an anchor link.
 *
 * Renders an h2 wrapped in a link button. A muted "#" symbol appears
 * to the right on hover. Clicking navigates to `#<id>`, and the
 * scroll-spy / scroll-to-anchor logic handles the actual scrolling.
 */
export function SectionHeading({
  id,
  children,
  className,
}: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "text-xl font-semibold text-foreground md:text-lg",
        className,
      )}
    >
      <span className="group inline-flex items-center gap-1">
        <Link
          to={`#${id}`}
          className="inline-flex items-center gap-1 rounded-sm bg-transparent px-0 text-foreground underline-offset-4"
        >
          <span className="group-hover:underline">{children}</span>
          <span
            aria-hidden="true"
            className="text-foreground-subtle opacity-0 transition-opacity group-hover:opacity-100"
          >
            #
          </span>
        </Link>
      </span>
    </h2>
  );
}
