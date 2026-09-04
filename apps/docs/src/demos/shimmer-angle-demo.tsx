export function ShimmerAngleDemo() {
  return (
    <div className="mx-auto grid w-full max-w-lg gap-6 text-center text-sm text-foreground-muted sm:grid-cols-2">
      <div className="flex flex-col gap-3">
        <p className="shimmer text-lg">Generating response&hellip;</p>
        <p className="font-mono text-xs">shimmer</p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="shimmer text-lg shimmer-angle-45">
          Generating response&hellip;
        </p>
        <p className="font-mono text-xs">shimmer-angle-45</p>
      </div>
    </div>
  );
}
