import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "../../lib/cn.js";
import { buttonVariants } from "../button/button.js";

export type SheetProps = React.ComponentProps<typeof DialogPrimitive.Root>;

export function Sheet({ ...props }: SheetProps) {
  return <DialogPrimitive.Root {...props} />;
}

export type SheetTriggerProps = React.ComponentProps<
  typeof DialogPrimitive.Trigger
>;
export const SheetTrigger = forwardRef<HTMLButtonElement, SheetTriggerProps>(
  function SheetTrigger({ ...props }, ref) {
    return <DialogPrimitive.Trigger ref={ref} asChild {...props} />;
  },
);

export type SheetCloseProps = React.ComponentProps<
  typeof DialogPrimitive.Close
>;
export const SheetClose = forwardRef<HTMLButtonElement, SheetCloseProps>(
  function SheetClose({ ...props }, ref) {
    return <DialogPrimitive.Close ref={ref} asChild {...props} />;
  },
);

export type SheetContentProps = React.ComponentProps<
  typeof DialogPrimitive.Content
> & {
  side?: "top" | "right" | "bottom" | "left";
  showCloseButton?: boolean;
};

export const SheetContent = forwardRef<HTMLDivElement, SheetContentProps>(
  function SheetContent(
    { className, children, side = "right", showCloseButton = true, ...props },
    ref,
  ) {
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
          data-side={side}
          className={cn(
            "fixed z-50 flex flex-col gap-4 bg-surface-elevated shadow-lg",
            "transition-transform duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
            "data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:border-b data-[side=top]:data-[state=open]:slide-in-from-top data-[side=top]:data-[state=closed]:slide-out-to-top",
            "data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=right]:sm:max-w-sm data-[side=right]:data-[state=open]:slide-in-from-right data-[side=right]:data-[state=closed]:slide-out-to-right",
            "data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:border-t data-[side=bottom]:data-[state=open]:slide-in-from-bottom data-[side=bottom]:data-[state=closed]:slide-out-to-bottom",
            "data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=left]:sm:max-w-sm data-[side=left]:data-[state=open]:slide-in-from-left data-[side=left]:data-[state=closed]:slide-out-to-left",
            className,
          )}
          {...props}
        >
          {children}
          {showCloseButton && (
            <DialogPrimitive.Close asChild>
              <button
                aria-label="Close"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "absolute right-3 top-3",
                )}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>
            </DialogPrimitive.Close>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    );
  },
);

export type SheetHeaderProps = React.ComponentProps<"div">;
export const SheetHeader = forwardRef<HTMLDivElement, SheetHeaderProps>(
  function SheetHeader({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-1.5 p-4", className)}
        {...props}
      />
    );
  },
);

export type SheetFooterProps = React.ComponentProps<"div">;
export const SheetFooter = forwardRef<HTMLDivElement, SheetFooterProps>(
  function SheetFooter({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn("mt-auto flex flex-col gap-2 p-4", className)}
        {...props}
      />
    );
  },
);

export type SheetTitleProps = React.ComponentProps<
  typeof DialogPrimitive.Title
>;
export const SheetTitle = forwardRef<HTMLHeadingElement, SheetTitleProps>(
  function SheetTitle({ className, ...props }, ref) {
    return (
      <DialogPrimitive.Title
        ref={ref}
        className={cn("text-base font-medium text-foreground", className)}
        {...props}
      />
    );
  },
);

export type SheetDescriptionProps = React.ComponentProps<
  typeof DialogPrimitive.Description
>;
export const SheetDescription = forwardRef<
  HTMLParagraphElement,
  SheetDescriptionProps
>(function SheetDescription({ className, ...props }, ref) {
  return (
    <DialogPrimitive.Description
      ref={ref}
      className={cn("text-sm text-foreground-muted", className)}
      {...props}
    />
  );
});
