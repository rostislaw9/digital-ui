import type { HTMLAttributes } from "react";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { forwardRef, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface DialogProps {
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Close when clicking outside. @default true */
  modal?: boolean;
}

/**
 * Dialog — a modal overlay for focused tasks, Radix-based, shadcn-inspired.
 *
 * Built on `@radix-ui/react-dialog`, shadcn-inspired. A window overlaid on
 * the page, centered with a backdrop. Includes a built-in close button (X).
 * `DialogAction` is a primary button that closes on click; `DialogClose` is
 * a secondary cancel button that also closes. For confirmations that block
 * dismissal, use `AlertDialog` instead.
 *
 * Accessibility: Radix handles focus trapping, `aria-describedby`, Escape
 * to dismiss, and scroll lock. Provide a `DialogTitle` and
 * `DialogDescription` for screen readers.
 */
export function Dialog({
  children,
  open,
  defaultOpen,
  onOpenChange,
  modal = true,
}: DialogProps) {
  return (
    <DialogPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      modal={modal}
    >
      {children}
    </DialogPrimitive.Root>
  );
}

export type DialogTriggerProps = React.ComponentProps<
  typeof DialogPrimitive.Trigger
>;
/**
 * DialogTrigger — the element that opens the dialog on click.
 *
 * Wraps the Radix trigger with `asChild` so the child element becomes the
 * trigger. Place around a button or interactive element.
 */
export const DialogTrigger = forwardRef<HTMLButtonElement, DialogTriggerProps>(
  function DialogTrigger({ children, ...props }, ref) {
    return (
      <DialogPrimitive.Trigger ref={ref} asChild {...props}>
        {children}
      </DialogPrimitive.Trigger>
    );
  },
);

export type DialogContentProps = React.ComponentProps<
  typeof DialogPrimitive.Content
>;
/**
 * DialogContent — the modal panel containing the dialog's content.
 *
 * Renders a backdrop overlay and a centered panel with entrance/exit
 * animations. Includes a built-in close button (X) in the top-right corner.
 */
export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  function DialogContent({ className, children, ...props }, ref) {
    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          // prettier-ignore
          className={cn("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 duration-[var(--duration-normal)] ease-[var(--ease-standard)]")}
        />
        <DialogPrimitive.Content
          ref={ref}
          // prettier-ignore
          className={cn("fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg rounded-lg border border-border-strong bg-surface-elevated shadow-lg p-6 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 duration-[var(--duration-normal)] ease-[var(--ease-standard)] focus-visible:outline-none", className)}
          {...props}
        >
          {children}
          <DialogPrimitive.Close
            // prettier-ignore
            className={cn("absolute right-4 top-4 rounded-md p-1 text-foreground-muted hover:text-foreground hover:bg-surface-hover transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background")}
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    );
  },
);

export type DialogTitleProps = React.ComponentProps<
  typeof DialogPrimitive.Title
>;
/**
 * DialogTitle — the accessible heading for the dialog.
 *
 * Renders the Radix title with semibold typography. Required for screen
 * reader support; can be visually hidden with `sr-only` if needed.
 */
export const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(
  function DialogTitle({ className, ...props }, ref) {
    return (
      <DialogPrimitive.Title
        ref={ref}
        // prettier-ignore
        className={cn("text-lg font-semibold tracking-tight text-foreground", className)}
        {...props}
      />
    );
  },
);

export type DialogDescriptionProps = React.ComponentProps<
  typeof DialogPrimitive.Description
>;
/**
 * DialogDescription — the accessible description for the dialog.
 *
 * Renders the Radix description with muted text. Provides additional
 * context for screen readers; can be visually hidden with `sr-only`.
 */
export const DialogDescription = forwardRef<
  HTMLParagraphElement,
  DialogDescriptionProps
>(function DialogDescription({ className, ...props }, ref) {
  return (
    <DialogPrimitive.Description
      ref={ref}
      className={cn("text-sm text-foreground-muted leading-relaxed", className)}
      {...props}
    />
  );
});

export type DialogFooterProps = HTMLAttributes<HTMLDivElement>;

/**
 * DialogFooter — the bottom action area of a dialog.
 *
 * Renders a flex row aligned to the end with top margin. Use for action
 * buttons such as `DialogClose` and `DialogAction`.
 */
export const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>(
  function DialogFooter({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn("mt-6 flex items-center justify-end gap-3", className)}
        {...props}
      />
    );
  },
);

export type DialogCloseProps = React.ComponentProps<
  typeof DialogPrimitive.Close
>;

/**
 * DialogClose — auto-closes the dialog (Radix Close primitive).
 *
 * Use for "Cancel" / "Dismiss" buttons. Add onClick for side effects.
 */
export const DialogClose = forwardRef<HTMLButtonElement, DialogCloseProps>(
  function DialogClose({ className, ...props }, ref) {
    return (
      <Button asChild variant="secondary" className={cn(className)}>
        <DialogPrimitive.Close ref={ref} {...props} />
      </Button>
    );
  },
);

export type DialogActionProps = React.ComponentProps<"button">;

/**
 * DialogAction — a styled primary button that does NOT auto-close.
 *
 * The user controls closing via onClick + onOpenChange on the Dialog.
 * This allows validation, async operations, or conditional closing.
 */
export const DialogAction = forwardRef<HTMLButtonElement, DialogActionProps>(
  function DialogAction({ className, ...props }, ref) {
    return (
      <Button asChild variant="primary" className={cn(className)}>
        <DialogPrimitive.Close ref={ref} {...props} />
      </Button>
    );
  },
);
