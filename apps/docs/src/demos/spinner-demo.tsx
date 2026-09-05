import { Spinner } from "@/components/ui/spinner";

export function SpinnerDemo() {
  return (
    <div className="flex items-center gap-4">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  );
}
