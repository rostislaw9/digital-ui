import * as SwitchPrimitive from "@radix-ui/react-switch";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root>;

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  function Switch({ className, ...props }, ref) {
    return (
      <SwitchPrimitive.Root
        ref={ref}
        className={cn(
          "peer inline-flex h-5 w-9 shrink-0 items-center rounded-full",
          "border border-border bg-surface transition-[background-color,border-color]",
          "duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:cursor-not-allowed disabled:opacity-40",
          "data-[state=checked]:bg-accent data-[state=checked]:border-accent",
          "hover:border-border-strong",
          className,
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb
          className={cn(
            "pointer-events-none block h-3.5 w-3.5 rounded-full bg-foreground shadow-sm",
            "translate-x-0.5 transition-transform",
            "duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
            "data-[state=checked]:translate-x-[18px] data-[state=checked]:bg-accent-foreground",
          )}
        />
      </SwitchPrimitive.Root>
    );
  },
);
