import * as SliderPrimitive from "@radix-ui/react-slider";
import { forwardRef, useMemo } from "react";

import { cn } from "@/lib/utils";

export type SliderProps = React.ComponentProps<typeof SliderPrimitive.Root>;

export const Slider = forwardRef<HTMLSpanElement, SliderProps>(function Slider(
  { className, defaultValue, value, min = 0, max = 100, ...props },
  ref,
) {
  const values = useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max],
  );

  return (
    <SliderPrimitive.Root
      ref={ref}
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      // prettier-ignore
      className={cn("relative flex w-full touch-none select-none items-center cursor-grab active:cursor-grabbing data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-40 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col", className)}
      {...props}
    >
      <SliderPrimitive.Track
        // prettier-ignore
        className={cn("relative grow overflow-hidden rounded-full bg-surface-elevated border border-border data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5")}
      >
        <SliderPrimitive.Range
          // prettier-ignore
          className={cn("absolute bg-accent data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          // prettier-ignore
          className={cn("relative block size-4 shrink-0 rounded-full border-2 border-background bg-accent shadow-sm transition-shadow duration-[var(--duration-fast)] ease-[var(--ease-standard)] after:absolute after:-inset-2 hover:shadow-[var(--shadow-focus)] focus-visible:shadow-[var(--shadow-focus)] focus-visible:outline-none active:shadow-[var(--shadow-focus)] disabled:pointer-events-none disabled:opacity-50")}
        />
      ))}
    </SliderPrimitive.Root>
  );
});
