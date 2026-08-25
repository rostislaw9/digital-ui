import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { forwardRef, type ReactNode } from "react";
import { cn } from "../../lib/cn.js";

export interface HoverCardProps {
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  openDelay?: number;
  closeDelay?: number;
}

export function HoverCard({
  children,
  open,
  defaultOpen,
  onOpenChange,
  openDelay = 200,
  closeDelay = 300,
}: HoverCardProps) {
  return (
    <HoverCardPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      openDelay={openDelay}
      closeDelay={closeDelay}
    >
      {children}
    </HoverCardPrimitive.Root>
  );
}

export type HoverCardTriggerProps = React.ComponentProps<
  typeof HoverCardPrimitive.Trigger
>;
export const HoverCardTrigger = forwardRef<
  HTMLAnchorElement,
  HoverCardTriggerProps
>(function HoverCardTrigger({ children, ...props }, ref) {
  return (
    <HoverCardPrimitive.Trigger ref={ref} asChild {...props}>
      {children}
    </HoverCardPrimitive.Trigger>
  );
});

export type HoverCardContentProps = React.ComponentProps<
  typeof HoverCardPrimitive.Content
>;
export const HoverCardContent = forwardRef<
  HTMLDivElement,
  HoverCardContentProps
>(function HoverCardContent({ className, sideOffset = 6, ...props }, ref) {
  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-64 rounded-md border border-border-strong bg-surface-elevated p-4 text-foreground shadow-md",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
          "outline-none",
          className,
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  );
});
