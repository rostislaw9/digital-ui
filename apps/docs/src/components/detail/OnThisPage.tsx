import type { Section } from "../../hooks/useScrollSpy";
import type { ReactNode } from "react";

import { memo } from "react";

import { cn } from "@ionbit-ui/ui";

export const OnThisPage = memo(function OnThisPage({
  sections,
  activeSection,
  onSectionClick,
}: {
  sections: Section[];
  activeSection: string;
  onSectionClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}) {
  return (
    <nav className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle">
        On this page
      </span>
      <ul className="flex flex-col gap-1.5 border-l border-border">
        {sections.map((section) => (
          <li key={section.id}>
            <SidebarLink
              href={`#${section.id}`}
              isActive={activeSection === section.id}
              onClick={(e) => onSectionClick(e, section.id)}
            >
              {section.label}
            </SidebarLink>
          </li>
        ))}
      </ul>
    </nav>
  );
});

function SidebarLink({
  href,
  isActive,
  onClick,
  children,
}: {
  href: string;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "-ml-px block border-l pl-3 text-sm transition-colors ",
        isActive
          ? "border-accent text-foreground font-medium"
          : "border-transparent text-foreground-muted hover:border-accent hover:text-foreground",
      )}
    >
      {children}
    </a>
  );
}
