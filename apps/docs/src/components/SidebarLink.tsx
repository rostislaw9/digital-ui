import { forwardRef } from "react";
import { Link } from "react-router-dom";

import { Button, cn } from "@ionbit-ui/ui";

const activeClass =
  "lg:bg-accent-muted lg:text-accent lg:hover:bg-accent-muted lg:hover:text-accent";
const mobileClass =
  "max-lg:h-10 max-lg:w-full max-lg:justify-start max-lg:text-2xl max-lg:hover:bg-inherit";

/** Sidebar link that highlights when the current path matches. */
export const SidebarLink = forwardRef<
  HTMLAnchorElement,
  {
    to: string;
    label: string;
    active?: boolean;
    onClick?: () => void;
  }
>(function SidebarLink({ to, label, active, onClick }, ref) {
  return (
    <Button
      asChild
      variant="ghost"
      // size="sm"
      className={cn(mobileClass, active && activeClass)}
    >
      <Link ref={ref} to={to} onClick={onClick}>
        {label}
      </Link>
    </Button>
  );
});
