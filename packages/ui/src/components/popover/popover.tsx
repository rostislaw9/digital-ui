import * as PopoverPrimitive from "@radix-ui/react-popover";
import { forwardRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface PopoverProps {
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Close when clicking outside. @default true */
  modal?: boolean;
}

/**
 * Popover — a Radix-based popover root.
 *
 * Accessibility: Radix handles focus management, keyboard navigation
 * (Escape to dismiss), and ARIA attributes.
 */
export function Popover({
  children,
  open,
  defaultOpen,
  onOpenChange,
  modal = true,
}: PopoverProps) {
  return (
    <PopoverPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      modal={modal}
    >
      {children}
    </PopoverPrimitive.Root>
  );
}

export type PopoverTriggerProps = React.ComponentProps<
  typeof PopoverPrimitive.Trigger
>;
export const PopoverTrigger = forwardRef<
  HTMLButtonElement,
  PopoverTriggerProps
>(function PopoverTrigger({ children, ...props }, ref) {
  return (
    <PopoverPrimitive.Trigger ref={ref} asChild {...props}>
      {children}
    </PopoverPrimitive.Trigger>
  );
});

export type PopoverContentProps = React.ComponentProps<
  typeof PopoverPrimitive.Content
>;
export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  function PopoverContent({ className, children, ...props }, ref) {
    return (
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          ref={ref}
          sideOffset={6}
          className={cn(
            "z-50 w-72 rounded-md border border-border bg-surface-elevated p-4",
            "text-foreground shadow-md",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
            "duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
            "focus-visible:outline-none",
            className,
          )}
          {...props}
        >
          {children}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    );
  },
);
