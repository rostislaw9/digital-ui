/*
 * Tailwind class safelist for IonBit UI components.
 *
 * Tailwind v4's @source directive scans package source files but does not
 * reliably generate variant classes (hover:, active:, disabled:, focus-visible:)
 * from them. This file re-declares every class string used by the components
 * so Tailwind's scanner — which reliably processes files in the project's own
 * src/ — generates the full set of utilities.
 *
 * This file is imported in main.tsx solely so Tailwind's content scanner
 * detects it in dev mode. The arrays have no runtime effect and are
 * tree-shaken in production. Maintained alongside the components.
 */

const _buttonClasses = [
  "inline-flex items-center justify-center gap-2 whitespace-nowrap",
  "font-medium select-none rounded-md shrink-0",
  "transition-[background-color,border-color,color,box-shadow,transform]",
  "duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  "disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-40",
  "hover:scale-[1.02] active:scale-[0.97] will-change-transform",
  "animate-spin",
  "shadow-glow",
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",

  // Variants
  "bg-accent text-accent-foreground hover:bg-accent-hover hover:shadow-[var(--shadow-glow)]",
  "bg-accent-muted text-accent hover:bg-accent-muted hover:text-accent hover:shadow-[var(--shadow-glow)]",
  "bg-surface-elevated text-foreground border border-border hover:bg-surface-hover hover:border-border-strong",
  "bg-transparent text-foreground border border-border-strong hover:bg-accent-muted hover:border-accent hover:text-accent",
  "bg-transparent text-foreground-muted hover:bg-surface-hover hover:text-foreground",
  "bg-error text-error-foreground hover:bg-error/90 hover:shadow-[var(--shadow-glow-error)]",
  "bg-error/10 text-error hover:bg-error/10 hover:text-error hover:shadow-[var(--shadow-glow-error)]",
  "bg-transparent text-accent underline-offset-4 hover:underline",

  // Sizes
  "h-6 gap-1 px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
  "h-7 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
  "h-8 gap-1 px-3 text-sm has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 [&_svg:not([class*='size-'])]:size-4",
  "h-9 gap-2 px-4 text-base has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 [&_svg:not([class*='size-'])]:size-4",
  "h-10 gap-2 px-5 text-lg has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4 [&_svg:not([class*='size-'])]:size-5",
  "size-6 [&_svg:not([class*='size-'])]:size-3.5",
  "size-7 [&_svg:not([class*='size-'])]:size-4",
  "size-8 [&_svg:not([class*='size-'])]:size-4",
  "size-9 [&_svg:not([class*='size-'])]:size-5",
  "size-10 [&_svg:not([class*='size-'])]:size-5",
];

const _inputClasses = [
  "flex w-full rounded-md border bg-surface px-3 py-1.5",
  "text-sm text-foreground placeholder:text-foreground-subtle",
  "transition-[border-color,box-shadow,background-color]",
  "duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  "focus-visible:outline-none",
  "disabled:cursor-not-allowed disabled:opacity-40",
  "border-border hover:border-border-strong",
  "focus-visible:shadow-focus",
  "border-error hover:border-error",
  "focus-visible:shadow-focus-error",
];

const _cardClasses = [
  "rounded-lg border border-border bg-surface text-foreground",
  "transition-[background-color,border-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  "border-border-strong bg-surface-elevated shadow-md",
  "hover:bg-surface-hover hover:border-border-strong",
  "flex flex-col gap-1.5 p-5",
  "text-base font-semibold leading-tight tracking-tight text-foreground",
  "text-sm text-foreground-muted leading-relaxed",
  "p-5 pt-0",
  "flex items-center gap-2 p-5 pt-0",
];

const _tooltipClasses = [
  "z-50 rounded-md border border-border-strong bg-surface-elevated px-2.5 py-1.5",
  "text-xs text-foreground shadow-md",
  "data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0",
  "data-[state=instant-open]:animate-in data-[state=instant-open]:fade-in-0",
  "data-[state=delayed-open]:slide-in-from-bottom-2",
  "data-[state=delayed-open]:slide-in-from-top-2",
  "data-[state=delayed-open]:slide-in-from-left-2",
  "data-[state=delayed-open]:slide-in-from-right-2",
  "data-[state=instant-open]:slide-in-from-bottom-2",
  "data-[state=instant-open]:slide-in-from-top-2",
  "data-[state=instant-open]:slide-in-from-left-2",
  "data-[state=instant-open]:slide-in-from-right-2",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
  "duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
];

const _tabsClasses = [
  "flex flex-col gap-4",
  "relative inline-flex items-center gap-1 rounded-md border border-border bg-surface p-1",
  "pointer-events-none absolute top-1 bottom-1 left-0",
  "rounded bg-accent-muted",
  "transition-[transform,width,opacity] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
  "will-change-transform",
  "relative z-[1] inline-flex items-center justify-center whitespace-nowrap rounded px-3 py-1",
  "text-sm font-medium select-none",
  "transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  "disabled:pointer-events-none disabled:opacity-40",
  "text-foreground-muted hover:text-foreground",
  "data-[state=active]:text-accent",
  "data-[state=active]:animate-in data-[state=active]:fade-in-50",
  "data-[state=active]:slide-in-from-right-4",
  "data-[state=active]:slide-in-from-left-4",
  "data-[state=active]:duration-[var(--duration-normal)] data-[state=active]:ease-[var(--ease-standard)]",
  "data-[state=inactive]:hidden",
];

const _switchClasses = [
  "peer inline-flex h-5 w-9 shrink-0 items-center rounded-full",
  "border border-border bg-surface transition-[background-color,border-color]",
  "duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  "disabled:cursor-not-allowed disabled:opacity-40",
  "data-[state=checked]:bg-accent data-[state=checked]:border-accent",
  "hover:border-border-strong",
  "pointer-events-none block h-3.5 w-3.5 rounded-full bg-foreground shadow-sm",
  "translate-x-0.5 transition-transform",
  "duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  "data-[state=checked]:translate-x-[18px] data-[state=checked]:bg-accent-foreground",
];

const _progressClasses = [
  "relative h-2 w-full overflow-hidden rounded-full border border-border bg-surface",
  "h-full rounded-full bg-accent transition-transform duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
];

const _dialogClasses = [
  "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
  "data-[state=open]:animate-in data-[state=open]:fade-in-0",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
  "duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
  "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
  "w-full max-w-lg rounded-lg border border-border-strong bg-surface-elevated shadow-lg",
  "p-6",
  "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
  "duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
  "focus-visible:outline-none",
  "absolute right-4 top-4 rounded-md p-1",
  "text-foreground-muted hover:text-foreground hover:bg-surface-hover",
  "transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  "text-lg font-semibold tracking-tight text-foreground",
  "text-sm text-foreground-muted leading-relaxed",
  "mt-6 flex items-center justify-end gap-3",
];

// Sonner handles its own styling via CSS variables mapped in the Toaster component.
const _toastClasses: string[] = [];

const _checkboxClasses = [
  "peer inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
  "border-2 border-foreground-subtle bg-surface transition-[background-color,border-color]",
  "duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  "focus-visible:outline-none focus-visible:shadow-focus",
  "disabled:cursor-not-allowed disabled:opacity-40",
  "data-[state=checked]:bg-accent data-[state=checked]:border-accent",
  "hover:border-accent",
  "flex items-center justify-center text-accent-foreground",
  "data-[state=checked]:animate-in data-[state=checked]:fade-in",
];

const _sliderClasses = [
  "relative flex w-full touch-none select-none items-center cursor-grab active:cursor-grabbing",
  "data-[disabled]:opacity-50",
  "data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-40 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
  "relative grow overflow-hidden rounded-full bg-surface-elevated border border-border",
  "data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full",
  "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5",
  "absolute bg-accent",
  "data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
  "relative block size-4 shrink-0 rounded-full border-2 border-background bg-accent",
  "shadow-sm transition-shadow duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  "after:absolute after:-inset-2",
  "hover:shadow-[var(--shadow-focus)]",
  "focus-visible:shadow-[var(--shadow-focus)] focus-visible:outline-none",
  "active:shadow-[var(--shadow-focus)]",
  "disabled:pointer-events-none disabled:opacity-50",
];

const _selectClasses = [
  "flex items-center justify-between rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-foreground",
  "hover:border-border-strong focus-visible:outline-none focus-visible:shadow-focus",
  "disabled:cursor-not-allowed disabled:opacity-40",
  "z-50 max-h-96 overflow-hidden rounded-md border border-border bg-surface-elevated p-1 text-foreground shadow-md",
  "w-[var(--radix-select-trigger-width)] min-w-[max(var(--radix-select-trigger-width),8rem)]",
  "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
  "relative flex select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm text-foreground-muted outline-none transition-colors",
  "hover:bg-surface-hover hover:text-foreground focus:bg-surface-hover focus:text-foreground",
  "data-[state=checked]:text-accent data-[disabled]:opacity-40",
  "px-2 py-1.5 text-xs font-semibold text-foreground-subtle",
  "my-1 h-px bg-border",
];

const _popoverClasses = [
  "z-50 w-72 rounded-md border border-border bg-surface-elevated p-4 text-foreground shadow-md",
  "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
];

const _dropdownMenuClasses = [
  "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-surface-elevated p-1 text-foreground shadow-md",
  "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-2",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2",
  "relative flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-foreground-muted outline-none transition-colors",
  "hover:bg-surface-hover hover:text-foreground focus:bg-surface-hover focus:text-foreground",
  "data-[disabled]:opacity-40",
  "my-1 h-px bg-border",
  "px-2 py-1.5 text-xs font-semibold text-foreground-subtle",
];

const _accordionClasses = [
  "border-b border-border",
  "flex flex-1 items-center justify-between py-4",
  "font-medium text-sm text-foreground",
  "hover:text-accent transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  "group",
  "group-data-[state=open]:rotate-180",
  "transition-transform duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
  "overflow-hidden text-sm text-foreground-muted",
  "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
  "pb-4 pt-1",
];

const _skeletonClasses = ["animate-pulse rounded-md bg-surface-elevated"];

const _alertClasses = [
  "relative flex w-full flex-col gap-2 rounded-lg border p-4",
  "text-sm text-foreground",
  "transition-[border-color,box-shadow]",
  "duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  "border-border bg-surface text-foreground",
  "border-border-accent bg-accent-muted/50 text-foreground [&_svg]:text-accent",
  "border-success/30 bg-success/10 text-foreground [&_svg]:text-success",
  "border-warning/30 bg-warning/10 text-foreground [&_svg]:text-warning",
  "border-error/30 bg-error/10 text-foreground [&_svg]:text-error",
  "flex items-center gap-2 font-medium leading-none tracking-tight text-foreground",
  "[&_svg]:size-4 [&_svg]:shrink-0",
  "text-sm text-foreground-muted leading-relaxed pl-6",
];

const _avatarClasses = [
  "relative flex shrink-0 rounded-full",
  "size-8 size-10 size-12",
  "absolute inset-0 size-full rounded-full object-cover border border-border bg-surface",
  "absolute inset-0 flex items-center justify-center rounded-full",
  "border border-border bg-surface-elevated text-sm font-medium text-foreground-muted",
  "absolute z-10 size-3.5 rounded-full border-2 border-background ring-2 ring-background/50",
  "transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  "bg-success bg-foreground-subtle bg-error bg-warning",
  "left-0.5 top-0.5 right-0.5 bottom-0.5",
];

const _badgeClasses = [
  "inline-flex items-center gap-1 rounded-md border",
  "px-2 py-0.5 text-xs font-medium",
  "transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3",
  "border-border bg-surface text-foreground-muted",
  "border-border-accent bg-accent-muted text-accent",
  "border-success/30 bg-success/10 text-success",
  "border-warning/30 bg-warning/10 text-warning",
  "border-error/30 bg-error/10 text-error",
  "border-border-strong bg-transparent text-foreground",
];

const _breadcrumbClasses = [
  "text-sm",
  "flex flex-wrap items-center gap-1.5 text-foreground-muted",
  "inline-flex items-center gap-1.5",
  "rounded transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  "hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  "font-medium text-foreground",
  "text-foreground-subtle",
  "flex size-4 items-center justify-center",
];

const _labelClasses = [
  "text-sm font-medium leading-none text-foreground",
  "peer-disabled:cursor-not-allowed peer-disabled:opacity-40",
  "transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
];

const _separatorClasses = ["shrink-0 bg-border h-px w-full w-px self-stretch"];

const _radioGroupClasses = [
  "grid w-full gap-2",
  "relative flex aspect-square size-4 shrink-0 rounded-full border border-border-strong bg-surface outline-none",
  "transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  "hover:border-accent",
  "focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  "disabled:cursor-not-allowed disabled:opacity-50",
  "data-[state=checked]:border-accent data-[state=checked]:bg-accent",
  "flex size-4 items-center justify-center",
  "absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-foreground",
];

const _alertDialogClasses = [
  "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
  "data-[state=open]:animate-in data-[state=open]:fade-in-0",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
  "duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
  "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
  "w-full max-w-lg rounded-lg border border-border-strong bg-surface-elevated shadow-lg p-6",
  "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
  "focus-visible:outline-none",
  "text-lg font-semibold text-foreground",
  "text-sm text-foreground-muted leading-relaxed mt-2",
  "mt-6 flex items-center justify-end gap-3",
];

const _hoverCardClasses = [
  "z-50 w-64 rounded-md border border-border-strong bg-surface-elevated p-4 text-foreground shadow-md",
  "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
  "duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  "outline-none",
];

const _contextMenuClasses = [
  "select-none",
  "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-surface-elevated p-1 text-foreground shadow-md",
  "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
  "duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  "relative flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-foreground-muted outline-none transition-colors",
  "focus:bg-surface-hover focus:text-foreground",
  "data-[state=open]:bg-surface-hover data-[state=open]:text-foreground",
  "data-[inset]:pl-7",
  "data-[variant=destructive]:text-error data-[variant=destructive]:focus:bg-error/10 data-[variant=destructive]:focus:text-error",
  "data-[disabled]:opacity-40",
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  "relative flex select-none items-center gap-2 rounded-sm py-1.5 pl-2 pr-8 text-sm text-foreground-muted outline-none transition-colors",
  "pointer-events-none absolute right-2 flex items-center justify-center",
  "ml-auto",
  "-mx-1 my-1 h-px bg-border",
  "px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground-subtle",
  "ml-auto text-xs tracking-widest text-foreground-subtle",
  "flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed border-border text-sm text-foreground-muted",
  "hidden pointer-fine:inline-block",
  "hidden pointer-coarse:inline-block",
];

const _scrollAreaClasses = [
  "relative overflow-hidden",
  "h-full w-full rounded-[inherit]",
  "flex touch-none select-none transition-colors",
  "h-full w-2.5 border-l border-l-transparent p-px",
  "h-2.5 flex-col border-t border-t-transparent p-px",
  "relative flex-1 rounded-full bg-border hover:bg-border-strong transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
];

const _sheetClasses = [
  "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
  "data-[state=open]:animate-in data-[state=open]:fade-in-0",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
  "duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
  "fixed z-50 flex flex-col gap-4 bg-surface-elevated shadow-lg",
  "transition-transform duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
  "data-[state=open]:animate-in data-[state=open]:fade-in-0",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
  "data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:border-b data-[side=top]:data-[state=open]:slide-in-from-top data-[side=top]:data-[state=closed]:slide-out-to-top",
  "data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=right]:sm:max-w-sm data-[side=right]:data-[state=open]:slide-in-from-right data-[side=right]:data-[state=closed]:slide-out-to-right",
  "data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:border-t data-[side=bottom]:data-[state=open]:slide-in-from-bottom data-[side=bottom]:data-[state=closed]:slide-out-to-bottom",
  "data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=left]:sm:max-w-sm data-[side=left]:data-[state=open]:slide-in-from-left data-[side=left]:data-[state=closed]:slide-out-to-left",
  "absolute right-3 top-3",
  "h-4 w-4",
  "sr-only",
  "flex flex-col gap-1.5 p-4",
  "mt-auto flex flex-col gap-2 p-4",
  "text-base font-medium text-foreground",
  "text-sm text-foreground-muted",
];

const _paginationClasses = [
  "flex items-center gap-1",
  "inline-flex h-8 min-w-8 items-center justify-center rounded-md px-2 text-sm",
  "font-medium select-none",
  "transition-[background-color,border-color,color,box-shadow,transform]",
  "duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  "disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-40",
  "hover:scale-[1.02] active:scale-[0.97] will-change-transform",
  "bg-accent text-accent-foreground hover:bg-accent-hover hover:shadow-[var(--shadow-glow)]",
  "text-foreground-muted hover:bg-surface-hover hover:text-foreground",
  "flex h-8 w-8 items-center justify-center text-foreground-subtle",
  "h-4 w-4",
];

const _commandClasses = [
  "flex size-full flex-col overflow-hidden",
  "bg-surface-elevated text-foreground",
  "top-[20%] -translate-y-0 overflow-hidden p-0",
  "max-w-xl",
  "sr-only",
  "flex items-center border-b border-border px-3",
  "mr-2 h-4 w-4 shrink-0 text-foreground-subtle",
  "flex h-12 w-full bg-transparent text-sm text-foreground",
  "placeholder:text-foreground-subtle",
  "focus-visible:outline-none",
  "disabled:cursor-not-allowed disabled:opacity-40",
  "max-h-[300px] overflow-y-auto overflow-x-hidden p-1",
  "relative flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-foreground-muted",
  "outline-none transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  "data-[selected=true]:bg-surface-hover data-[selected=true]:text-foreground",
  "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-40",
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  "overflow-hidden p-1",
  "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-foreground-subtle",
  "-mx-1 h-px bg-border",
  "py-6 text-center text-sm text-foreground-subtle",
  "ml-auto text-xs tracking-widest text-foreground-subtle",
];

const _textareaClasses = [
  "flex w-full rounded-md border bg-surface px-3 py-2 min-h-[80px]",
  "text-sm text-foreground placeholder:text-foreground-subtle",
  "transition-[border-color,box-shadow,background-color]",
  "duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  "focus-visible:outline-none",
  "disabled:cursor-not-allowed disabled:opacity-40",
  "border-border hover:border-border-strong",
  "focus-visible:shadow-focus",
  "border-error hover:border-error",
  "focus-visible:shadow-focus-error",
];

const _docsAppClasses = [
  "min-h-screen bg-background text-foreground",
  "sticky top-0 z-10 border-b border-border bg-surface/80 backdrop-blur-md",
  "mx-auto flex max-w-6xl items-center justify-between px-6 py-4",
  "font-mono text-sm font-semibold tracking-tight text-foreground",
  "text-accent",
  "flex items-center gap-1 text-sm",
  "rounded-md px-3 py-1.5 transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  "bg-accent-muted text-accent",
  "text-foreground-muted hover:bg-surface-hover hover:text-foreground",
  "mx-auto max-w-6xl px-6 py-12",
  "font-mono text-xs uppercase tracking-[0.2em]",
  "text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl",
  "max-w-3xl text-lg text-foreground-muted leading-relaxed",
  "flex flex-wrap gap-3",
  "grid gap-4 sm:grid-cols-3",
  "rounded-lg border border-border bg-surface p-5",
  "text-sm font-semibold text-foreground",
  "mt-2 text-sm text-foreground-muted leading-relaxed",
  "flex flex-col gap-16",
  "flex flex-col gap-4",
  "text-3xl font-semibold tracking-tight text-foreground",
  "max-w-2xl text-foreground-muted",
  "flex flex-wrap items-center gap-3",
  "flex flex-wrap items-center gap-6",
  "inline-flex h-3 w-3 rounded-full bg-accent",
  "mt-6 flex flex-col gap-3",
  "grid gap-2 font-mono text-xs text-foreground-muted sm:grid-cols-2",
  "flex items-center justify-between gap-4 rounded-md border border-border bg-surface px-3 py-2",
  "flex items-center gap-3",
  "h-10 w-10 rounded-md border border-border-strong",
  "flex flex-wrap items-end gap-4",
  "h-16 w-16 border border-border-strong bg-surface-elevated",
  "flex flex-wrap gap-6",
  "h-16 w-16 rounded-md bg-surface-elevated",
  "flex flex-col items-center gap-2",
  "flex flex-col gap-12",
  "flex flex-col gap-2",
  "text-lg font-semibold tracking-tight text-foreground",
  "h-full",
  "flex items-center gap-4",
  "flex flex-col gap-2",
  "flex items-center gap-2",
  "text-sm text-foreground",
  "text-xs text-foreground-muted",
  "w-64",
  "flex flex-col gap-1.5",
  "flex flex-col gap-3",
  "grid grid-cols-2 gap-4",
  "h-[400px]",
];
