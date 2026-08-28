import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const avatarSizes = {
  sm: "size-8",
  md: "size-10",
  lg: "size-12",
} as const;

export interface AvatarProps extends React.ComponentProps<
  typeof AvatarPrimitive.Root
> {
  /** Avatar size. @default "md" */
  size?: keyof typeof avatarSizes;
}

/**
 * Avatar — an image element with fallback and status indicator support.
 *
 * Accessibility: Radix handles alt text via the `alt` prop on `AvatarImage`.
 * When the image fails to load, `AvatarFallback` is shown. Provide a
 * meaningful fallback (initials or icon). Use `AvatarStatus` to show a
 * presence indicator (online/offline/busy).
 */
export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(function Avatar(
  { className, size = "md", ...props },
  ref,
) {
  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex shrink-0 rounded-full",
        avatarSizes[size],
        className,
      )}
      {...props}
    />
  );
});

export type AvatarImageProps = React.ComponentProps<
  typeof AvatarPrimitive.Image
>;

export const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  function AvatarImage({ className, ...props }, ref) {
    return (
      <AvatarPrimitive.Image
        ref={ref}
        className={cn(
          "absolute inset-0 size-full rounded-full object-cover",
          "border border-border bg-surface",
          className,
        )}
        {...props}
      />
    );
  },
);

export type AvatarFallbackProps = React.ComponentProps<
  typeof AvatarPrimitive.Fallback
>;

export const AvatarFallback = forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  function AvatarFallback({ className, ...props }, ref) {
    return (
      <AvatarPrimitive.Fallback
        ref={ref}
        className={cn(
          "absolute inset-0 flex items-center justify-center rounded-full",
          "border border-border bg-surface-elevated text-sm font-medium text-foreground-muted",
          className,
        )}
        {...props}
      />
    );
  },
);

export interface AvatarStatusProps extends HTMLAttributes<HTMLSpanElement> {
  /** Status color variant. @default "online" */
  variant?: "online" | "offline" | "busy" | "away";
  /** Position of the status indicator. @default "bottom-right" */
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const statusColors: Record<
  NonNullable<AvatarStatusProps["variant"]>,
  string
> = {
  online: "bg-success",
  offline: "bg-foreground-subtle",
  busy: "bg-error",
  away: "bg-warning",
};

const statusPositions: Record<
  NonNullable<AvatarStatusProps["position"]>,
  string
> = {
  "top-left": "left-0.5 top-0.5",
  "top-right": "right-0.5 top-0.5",
  "bottom-left": "bottom-0.5 left-0.5",
  "bottom-right": "bottom-0.5 right-0.5",
};

/**
 * AvatarStatus — a small presence indicator overlaid on the avatar.
 *
 * Place inside `<Avatar>` as a sibling of `AvatarImage` / `AvatarFallback`.
 * The dot is bordered to separate it from the avatar edge.
 */
export const AvatarStatus = forwardRef<HTMLSpanElement, AvatarStatusProps>(
  function AvatarStatus(
    { className, variant = "online", position = "bottom-right", ...props },
    ref,
  ) {
    return (
      <span
        ref={ref}
        role="img"
        className={cn(
          "absolute z-10 size-3.5 rounded-full border-2 border-background ring-2 ring-background/50",
          "transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
          statusColors[variant],
          statusPositions[position],
          className,
        )}
        {...props}
      />
    );
  },
);
