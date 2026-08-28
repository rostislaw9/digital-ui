import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
import { forwardRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../dialog/dialog.js";

export type CommandProps = React.ComponentProps<typeof CommandPrimitive>;

export const Command = forwardRef<HTMLDivElement, CommandProps>(
  function Command({ className, ...props }, ref) {
    return (
      <CommandPrimitive
        ref={ref}
        className={cn(
          "flex size-full flex-col overflow-hidden",
          "bg-surface-elevated text-foreground",
          className,
        )}
        {...props}
      />
    );
  },
);

export interface CommandDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
  className?: string;
}

export function CommandDialog({
  open,
  onOpenChange,
  children,
  className,
}: CommandDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "top-[20%] -translate-y-0 overflow-hidden p-0",
          "max-w-xl",
          className,
        )}
      >
        <DialogTitle className="sr-only">Command palette</DialogTitle>
        <DialogDescription className="sr-only">
          Search for a command to run.
        </DialogDescription>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export type CommandInputProps = React.ComponentProps<
  typeof CommandPrimitive.Input
>;

export const CommandInput = forwardRef<HTMLInputElement, CommandInputProps>(
  function CommandInput({ className, ...props }, ref) {
    return (
      <div className="flex items-center border-b border-border px-3">
        <Search className="mr-2 h-4 w-4 shrink-0 text-foreground-subtle" />
        <CommandPrimitive.Input
          ref={ref}
          className={cn(
            "flex h-12 w-full bg-transparent text-sm text-foreground",
            "placeholder:text-foreground-subtle",
            "focus-visible:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-40",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

export type CommandListProps = React.ComponentProps<
  typeof CommandPrimitive.List
>;

export const CommandList = forwardRef<HTMLDivElement, CommandListProps>(
  function CommandList({ className, ...props }, ref) {
    return (
      <CommandPrimitive.List
        ref={ref}
        className={cn(
          "max-h-[300px] overflow-y-auto overflow-x-hidden p-1",
          className,
        )}
        {...props}
      />
    );
  },
);

export type CommandEmptyProps = React.ComponentProps<
  typeof CommandPrimitive.Empty
>;

export const CommandEmpty = forwardRef<HTMLDivElement, CommandEmptyProps>(
  function CommandEmpty({ className, ...props }, ref) {
    return (
      <CommandPrimitive.Empty
        ref={ref}
        className={cn(
          "py-6 text-center text-sm text-foreground-subtle",
          className,
        )}
        {...props}
      />
    );
  },
);

export type CommandGroupProps = React.ComponentProps<
  typeof CommandPrimitive.Group
>;

export const CommandGroup = forwardRef<HTMLDivElement, CommandGroupProps>(
  function CommandGroup({ className, ...props }, ref) {
    return (
      <CommandPrimitive.Group
        ref={ref}
        className={cn(
          "overflow-hidden p-1",
          "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-foreground-subtle",
          className,
        )}
        {...props}
      />
    );
  },
);

export type CommandItemProps = React.ComponentProps<
  typeof CommandPrimitive.Item
>;

export const CommandItem = forwardRef<HTMLDivElement, CommandItemProps>(
  function CommandItem({ className, ...props }, ref) {
    return (
      <CommandPrimitive.Item
        ref={ref}
        className={cn(
          "relative flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-foreground-muted",
          "outline-none transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
          "data-[selected=true]:bg-surface-hover data-[selected=true]:text-foreground",
          "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-40",
          "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className,
        )}
        {...props}
      />
    );
  },
);

export type CommandSeparatorProps = React.ComponentProps<
  typeof CommandPrimitive.Separator
>;

export const CommandSeparator = forwardRef<
  HTMLDivElement,
  CommandSeparatorProps
>(function CommandSeparator({ className, ...props }, ref) {
  return (
    <CommandPrimitive.Separator
      ref={ref}
      className={cn("-mx-1 h-px bg-border", className)}
      {...props}
    />
  );
});

export type CommandShortcutProps = React.ComponentProps<"span">;

export const CommandShortcut = forwardRef<
  HTMLSpanElement,
  CommandShortcutProps
>(function CommandShortcut({ className, ...props }, ref) {
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
