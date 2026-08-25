import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { HTMLAttributes } from "react";
import { forwardRef, type ReactNode } from "react";
import { cn } from "../../lib/cn.js";
import { buttonVariants } from "../button/button.js";

export interface DialogProps {
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Close when clicking outside. @default true */
  modal?: boolean;
}

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
export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  function DialogContent({ className, children, ...props }, ref) {
    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={cn(
            "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
            "duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
          )}
        />
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
            "w-full max-w-lg rounded-lg border border-border-strong bg-surface-elevated shadow-lg",
            "p-6",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
            "duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
            "focus-visible:outline-none",
            className,
          )}
          {...props}
        >
          {children}
          <DialogPrimitive.Close
            className={cn(
              "absolute right-4 top-4 rounded-md p-1 cursor-pointer",
              "text-foreground-muted hover:text-foreground hover:bg-surface-hover",
              "transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            )}
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
export const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(
  function DialogTitle({ className, ...props }, ref) {
    return (
      <DialogPrimitive.Title
        ref={ref}
        className={cn(
          "text-lg font-semibold tracking-tight text-foreground",
          className,
        )}
        {...props}
      />
    );
  },
);

export type DialogDescriptionProps = React.ComponentProps<
  typeof DialogPrimitive.Description
>;
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

/**
 * Close button — auto-closes the dialog (Radix Close primitive).
 * Use for "Cancel" / "Dismiss" buttons. Add onClick for side effects.
 */
export type DialogCloseProps = React.ComponentProps<
  typeof DialogPrimitive.Close
>;

export const DialogClose = forwardRef<HTMLButtonElement, DialogCloseProps>(
  function DialogClose({ className, ...props }, ref) {
    return (
      <DialogPrimitive.Close
        ref={ref}
        className={cn(buttonVariants({ variant: "secondary" }), className)}
        {...props}
      />
    );
  },
);

/**
 * Action button — a styled primary button that does NOT auto-close.
 * The user controls closing via onClick + onOpenChange on the Dialog.
 * This allows validation, async operations, or conditional closing.
 */
export type DialogActionProps = React.ComponentProps<"button">;

export const DialogAction = forwardRef<HTMLButtonElement, DialogActionProps>(
  function DialogAction({ className, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant: "primary" }), className)}
        {...props}
      />
    );
  },
);
