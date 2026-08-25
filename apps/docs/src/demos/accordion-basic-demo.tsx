import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@digital-ui/ui";

export function AccordionBasicDemo() {
  return (
    <Accordion className="w-full max-w-md">
      <AccordionItem value="installation">
        <AccordionTrigger>Installation</AccordionTrigger>
        <AccordionContent>
          <p className="text-sm text-foreground-muted leading-relaxed">
            Digital UI is designed for source ownership. Install individual
            components on demand using the CLI — no global dependency lock-in.
            Run{" "}
            <code className="text-foreground">npx digital-ui add button</code>{" "}
            to drop the component source directly into your project.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="theming">
        <AccordionTrigger>Theming & tokens</AccordionTrigger>
        <AccordionContent>
          <p className="text-sm text-foreground-muted leading-relaxed">
            All components are styled with semantic design tokens mapped to CSS
            custom properties. Override colors, spacing, and motion by editing a
            single tokens file — no component source changes required. Dark mode
            is built in via token-level overrides.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="accessibility">
        <AccordionTrigger>Accessibility</AccordionTrigger>
        <AccordionContent>
          <p className="text-sm text-foreground-muted leading-relaxed">
            Every component ships with ARIA attributes, keyboard navigation, and
            focus management out of the box. Radix UI primitives handle the
            heavy lifting — arrow keys, focus traps, and screen reader
            announcements are all included by default.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="motion">
        <AccordionTrigger>Motion primitives</AccordionTrigger>
        <AccordionContent>
          <p className="text-sm text-foreground-muted leading-relaxed">
            The motion package provides reusable interaction primitives —
            Magnetic, Glow, Pulse, and Reveal — that compose with any component.
            Each primitive respects{" "}
            <code className="text-foreground">prefers-reduced-motion</code> and
            degrades gracefully when motion is disabled.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
