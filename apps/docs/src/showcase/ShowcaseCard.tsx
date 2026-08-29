import { Card } from "@ionbit-ui/ui";

export function ShowcaseCard({ children }: { children: React.ReactNode }) {
  return (
    <Card className="transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:border-border-strong">
      {children}
    </Card>
  );
}
