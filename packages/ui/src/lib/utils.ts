import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * IonBit UI class-merging utility.
 *
 * `clsx` flattens conditional inputs; `tailwind-merge` resolves conflicting
 * Tailwind classes (last wins). Together they let consumers pass a `className`
 * prop that overrides variant defaults predictably.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
