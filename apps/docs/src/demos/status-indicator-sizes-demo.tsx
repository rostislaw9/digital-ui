import { StatusBeacon, StatusIndicator } from "@/components/ui/status-indicator";

export function StatusIndicatorSizesDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6">
        <StatusIndicator size="sm" variant="online" label="Small (sm)" />
        <StatusIndicator size="md" variant="online" label="Medium (md)" />
        <StatusIndicator size="lg" variant="online" label="Large (lg)" />
      </div>
      <div className="flex items-center gap-4 text-xs text-foreground-muted">
        <span>Standalone Beacons:</span>
        <StatusBeacon size="sm" variant="online" />
        <StatusBeacon size="md" variant="busy" />
        <StatusBeacon size="lg" variant="warning" />
      </div>
    </div>
  );
}
