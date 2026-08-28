import { StatusIndicator } from "@/components/ui/status-indicator";

export function StatusIndicatorVariantsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <StatusIndicator variant="online" label="Online" />
      <StatusIndicator variant="busy" label="Busy" />
      <StatusIndicator variant="away" label="Away" />
      <StatusIndicator variant="error" label="System Error" />
      <StatusIndicator variant="warning" label="Warning" />
      <StatusIndicator variant="info" label="Deploying" />
      <StatusIndicator variant="offline" label="Offline" />
    </div>
  );
}
