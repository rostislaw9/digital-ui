import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export type ContextMenuProps = React.ComponentProps<
  typeof ContextMenuPrimitive.Root
>;

export function ContextMenu({ ...props }: ContextMenuProps) {
  return <ContextMenuPrimitive.Root {...props} />;
}

export type ContextMenuTriggerProps = React.ComponentProps<
  typeof ContextMenuPrimitive.Trigger
>;
export const ContextMenuTrigger = forwardRef<
  HTMLSpanElement,
  ContextMenuTriggerProps
>(function ContextMenuTrigger({ className, ...props }, ref) {
  return (
    <ContextMenuPrimitive.Trigger
      ref={ref}
      className={cn("select-none", className)}
      {...props}
    />
  );
});

export type ContextMenuGroupProps = React.ComponentProps<
  typeof ContextMenuPrimitive.Group
>;
export const ContextMenuGroup = forwardRef<
  HTMLDivElement,
  ContextMenuGroupProps
>(function ContextMenuGroup({ ...props }, ref) {
  return <ContextMenuPrimitive.Group ref={ref} {...props} />;
});

export type ContextMenuPortalProps = React.ComponentProps<
  typeof ContextMenuPrimitive.Portal
>;
export function ContextMenuPortal({ ...props }: ContextMenuPortalProps) {
  return <ContextMenuPrimitive.Portal {...props} />;
}

export type ContextMenuSubProps = React.ComponentProps<
  typeof ContextMenuPrimitive.Sub
>;
export function ContextMenuSub({ ...props }: ContextMenuSubProps) {
  return <ContextMenuPrimitive.Sub {...props} />;
}

export type ContextMenuRadioGroupProps = React.ComponentProps<
  typeof ContextMenuPrimitive.RadioGroup
>;
export const ContextMenuRadioGroup = forwardRef<
  HTMLDivElement,
  ContextMenuRadioGroupProps
>(function ContextMenuRadioGroup({ ...props }, ref) {
  return <ContextMenuPrimitive.RadioGroup ref={ref} {...props} />;
});

export type ContextMenuContentProps = React.ComponentProps<
  typeof ContextMenuPrimitive.Content
>;
export const ContextMenuContent = forwardRef<
  HTMLDivElement,
  ContextMenuContentProps
>(function ContextMenuContent({ className, ...props }, ref) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        ref={ref}
        className={cn(
          "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-surface-elevated p-1 text-foreground shadow-md",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
          className,
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  );
});

export interface ContextMenuItemProps extends React.ComponentProps<
  typeof ContextMenuPrimitive.Item
> {
  inset?: boolean;
  variant?: "default" | "destructive";
}
export const ContextMenuItem = forwardRef<HTMLDivElement, ContextMenuItemProps>(
  function ContextMenuItem(
    { className, inset, variant = "default", ...props },
    ref,
  ) {
    return (
      <ContextMenuPrimitive.Item
        ref={ref}
        data-inset={inset}
        data-variant={variant}
        className={cn(
          "relative flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-foreground-muted outline-none transition-colors",
          "focus:bg-surface-hover focus:text-foreground",
          "data-[inset]:pl-7",
          "data-[variant=destructive]:text-error data-[variant=destructive]:focus:bg-error/10 data-[variant=destructive]:focus:text-error",
          "data-[disabled]:opacity-40",
          "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className,
        )}
        {...props}
      />
    );
  },
);

export type ContextMenuSubTriggerProps = React.ComponentProps<
  typeof ContextMenuPrimitive.SubTrigger
> & { inset?: boolean };
export const ContextMenuSubTrigger = forwardRef<
  HTMLDivElement,
  ContextMenuSubTriggerProps
>(function ContextMenuSubTrigger(
  { className, inset, children, ...props },
  ref,
) {
  return (
    <ContextMenuPrimitive.SubTrigger
      ref={ref}
      data-inset={inset}
      className={cn(
        "relative flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-foreground-muted outline-none transition-colors",
        "focus:bg-surface-hover focus:text-foreground",
        "data-[state=open]:bg-surface-hover data-[state=open]:text-foreground",
        "data-[inset]:pl-7",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  );
});

export type ContextMenuSubContentProps = React.ComponentProps<
  typeof ContextMenuPrimitive.SubContent
>;
export const ContextMenuSubContent = forwardRef<
  HTMLDivElement,
  ContextMenuSubContentProps
>(function ContextMenuSubContent({ className, ...props }, ref) {
  return (
    <ContextMenuPrimitive.SubContent
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-surface-elevated p-1 text-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
        className,
      )}
      {...props}
    />
  );
});

export interface ContextMenuCheckboxItemProps extends React.ComponentProps<
  typeof ContextMenuPrimitive.CheckboxItem
> {
  inset?: boolean;
}
export const ContextMenuCheckboxItem = forwardRef<
  HTMLDivElement,
  ContextMenuCheckboxItemProps
>(function ContextMenuCheckboxItem(
  { className, children, inset, ...props },
  ref,
) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      ref={ref}
      data-inset={inset}
      className={cn(
        "relative flex select-none items-center gap-2 rounded-sm py-1.5 pl-2 pr-8 text-sm text-foreground-muted outline-none transition-colors",
        "focus:bg-surface-hover focus:text-foreground",
        "data-[inset]:pl-7",
        "data-[disabled]:opacity-40",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute right-2 flex items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="h-4 w-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
});

export interface ContextMenuRadioItemProps extends React.ComponentProps<
  typeof ContextMenuPrimitive.RadioItem
> {
  inset?: boolean;
}
export const ContextMenuRadioItem = forwardRef<
  HTMLDivElement,
  ContextMenuRadioItemProps
>(function ContextMenuRadioItem({ className, children, inset, ...props }, ref) {
  return (
    <ContextMenuPrimitive.RadioItem
      ref={ref}
      data-inset={inset}
      className={cn(
        "relative flex select-none items-center gap-2 rounded-sm py-1.5 pl-2 pr-8 text-sm text-foreground-muted outline-none transition-colors",
        "focus:bg-surface-hover focus:text-foreground",
        "data-[inset]:pl-7",
        "data-[disabled]:opacity-40",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute right-2 flex items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="h-4 w-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
});

export interface ContextMenuLabelProps extends React.ComponentProps<
  typeof ContextMenuPrimitive.Label
> {
  inset?: boolean;
}
export const ContextMenuLabel = forwardRef<
  HTMLDivElement,
  ContextMenuLabelProps
>(function ContextMenuLabel({ className, inset, ...props }, ref) {
  return (
    <ContextMenuPrimitive.Label
      ref={ref}
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground-subtle",
        "data-[inset]:pl-7",
        className,
      )}
      {...props}
    />
  );
});

export type ContextMenuSeparatorProps = React.ComponentProps<
  typeof ContextMenuPrimitive.Separator
>;
export const ContextMenuSeparator = forwardRef<
  HTMLDivElement,
  ContextMenuSeparatorProps
>(function ContextMenuSeparator({ className, ...props }, ref) {
  return (
    <ContextMenuPrimitive.Separator
      ref={ref}
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  );
});

export type ContextMenuShortcutProps = React.ComponentProps<"span">;
export const ContextMenuShortcut = forwardRef<
  HTMLSpanElement,
  ContextMenuShortcutProps
>(function ContextMenuShortcut({ className, ...props }, ref) {
  return (
    <span
      ref={ref}
      className={cn(
        "ml-auto text-xs tracking-widest text-foreground-subtle",
        className,
      )}
      {...props}
    />
  );
});
