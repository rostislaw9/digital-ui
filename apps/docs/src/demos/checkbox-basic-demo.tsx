import { Checkbox } from "@/components/ui/checkbox";

export function CheckboxBasicDemo() {
  return (
    <div className="flex w-fit max-w-xs flex-col gap-4">
      <p className="text-start text-sm font-medium text-foreground">
        Email notifications
      </p>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Checkbox id="cb-deployments" defaultChecked />
          <label
            htmlFor="cb-deployments"
            className="text-sm leading-none text-foreground-muted peer-disabled:pointer-events-none"
          >
            Deployment completions
          </label>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox id="cb-errors" defaultChecked />
          <label
            htmlFor="cb-errors"
            className="text-sm leading-none text-foreground-muted"
          >
            Error rate spikes
          </label>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox id="cb-weekly" />
          <label
            htmlFor="cb-weekly"
            className="text-sm leading-none text-foreground-muted"
          >
            Weekly usage summary
          </label>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox id="cb-disabled" disabled />
          <label
            htmlFor="cb-disabled"
            className="text-sm leading-none text-foreground-subtle"
          >
            Security alerts (admin only)
          </label>
        </div>
      </div>
    </div>
  );
}
