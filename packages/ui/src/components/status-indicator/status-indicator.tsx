import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

// prettier-ignore
export const statusIndicatorVariants = cva(
  "inline-flex items-center font-medium transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  {
    variants: {
      variant: {
        online: "text-foreground",
        busy: "text-foreground",
        away: "text-foreground",
        error: "text-foreground",
        warning: "text-foreground",
        info: "text-foreground",
        offline: "text-foreground-muted",
      },
      size: {
        sm: "gap-1.5 text-xs",
        md: "gap-2 text-sm",
        lg: "gap-2.5 text-base",
      },
    },
    defaultVariants: {
      variant: "online",
      size: "md",
    },
  },
);

// prettier-ignore
export const statusBeaconVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center rounded-full transition-all duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  {
    variants: {
      variant: {
        online: "bg-success text-success",
        busy: "bg-error text-error",
        away: "bg-warning text-warning",
        error: "bg-error text-error",
        warning: "bg-warning text-warning",
        info: "bg-accent text-accent",
        offline: "bg-foreground-subtle/50 text-foreground-subtle",
      },
      size: {
        sm: "size-2",
        md: "size-2.5",
        lg: "size-3",
      },
    },
    defaultVariants: {
      variant: "online",
      size: "md",
    },
  },
);

export interface StatusIndicatorProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusIndicatorVariants> {
  /**
   * Accessible text label describing the status.
   */
  label?: string;
}

export interface StatusBeaconProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statusBeaconVariants> {
  /**
   * Enables pulsing radar beacon ring effect around the dot.
   * Defaults to true for active status variants.
   */
  pulsing?: boolean;
  /**
   * Enables subtle glow aura effect around the beacon.
   * Defaults to true.
   */
  glow?: boolean;
}

export type StatusLabelProps = HTMLAttributes<HTMLSpanElement>;

/**
 * StatusIndicator — a production-quality status indicator component
 * with pulsing beacon halo and accessible status semantics.
 */
export const StatusIndicator = forwardRef<HTMLDivElement, StatusIndicatorProps>(
  function StatusIndicator(
    { className, variant = "online", size = "md", label, children, ...props },
    ref,
  ) {
    return (
      <div
        ref={ref}
        role="status"
        aria-label={label || (typeof children === "string" ? children : undefined)}
        className={cn(statusIndicatorVariants({ variant, size }), className)}
        {...props}
      >
        {children ? (
          children
        ) : (
          <>
            <StatusBeacon variant={variant} size={size} />
            {label && <StatusLabel>{label}</StatusLabel>}
          </>
        )}
      </div>
    );
  },
);

/**
 * StatusBeacon — glowing and pulsing dot indicator component.
 */
export const StatusBeacon = forwardRef<HTMLSpanElement, StatusBeaconProps>(
  function StatusBeacon(
    { className, variant = "online", size = "md", pulsing = true, glow = true, ...props },
    ref,
  ) {
    const isOffline = variant === "offline";
    const shouldPulse = pulsing && !isOffline;
    const shouldGlow = glow && !isOffline;

    return (
      <span
        ref={ref}
        className={cn(
          statusBeaconVariants({ variant, size }),
          shouldGlow && "shadow-[0_0_8px_0_currentColor]",
          className,
        )}
        {...props}
      >
        {shouldPulse && (
          <span
            className={cn(
              "absolute inset-0 rounded-full bg-current opacity-75 motion-safe:animate-ping",
              "motion-reduce:hidden",
            )}
          />
        )}
      </span>
    );
  },
);

/**
 * StatusLabel — label text for StatusIndicator.
 */
export const StatusLabel = forwardRef<HTMLSpanElement, StatusLabelProps>(
  function StatusLabel({ className, ...props }, ref) {
    return <span ref={ref} className={cn("select-none", className)} {...props} />;
  },
);
