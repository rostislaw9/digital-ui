export function ShimmerSpreadDemo() {
  return (
    <div className="mx-auto grid w-full max-w-lg gap-6 text-center text-sm text-foreground-muted sm:grid-cols-2">
      <div className="flex flex-col gap-3">
        <p className="shimmer shimmer-spread-4 text-lg">
          Generating response&hellip;
        </p>
        <p className="font-mono text-xs">shimmer-spread-4</p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="shimmer shimmer-spread-24 text-lg">
          Generating response&hellip;
        </p>
        <p className="font-mono text-xs">shimmer-spread-24</p>
      </div>
    </div>
  );
}
