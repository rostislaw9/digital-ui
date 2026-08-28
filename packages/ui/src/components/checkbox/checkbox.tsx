import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export type CheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root>;

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  function Checkbox({ className, ...props }, ref) {
    return (
      <CheckboxPrimitive.Root
        ref={ref}
        // prettier-ignore
        className={cn("peer inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-foreground-subtle bg-surface transition-[background-color,border-color] duration-[var(--duration-fast)] ease-[var(--ease-standard)] focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed disabled:opacity-40 data-[state=checked]:bg-accent data-[state=checked]:border-accent hover:border-accent", className)}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          // prettier-ignore
          className={cn("flex items-center justify-center text-accent-foreground data-[state=checked]:animate-in data-[state=checked]:fade-in")}
        >
          <Check className="h-3 w-3" strokeWidth={3} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  },
);
