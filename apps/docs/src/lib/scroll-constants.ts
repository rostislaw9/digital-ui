/**
 * Shared constants for scroll-spy and scroll-to-section.
 *
 * Both modules must use the same trigger line model to stay in sync:
 * when you click a section link, scroll-to-section scrolls to the
 * position where that section's top meets the trigger line — which
 * is the same position where scroll-spy highlights it.
 */

/** Trigger line position at scroll position 0 (just below the sticky header). */
export const TRIGGER_TOP = 140;

/** Trigger line position at max scroll (near the bottom of the viewport). */
export const TRIGGER_BOTTOM_OFFSET = 20;

/** Threshold for detecting the bottom of the page (scroll-spy only). */
export const BOTTOM_MARGIN = 4;
