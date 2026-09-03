export function ShimmerNoneDemo() {
  return (
    <div className="flex flex-col items-center gap-3 text-sm text-foreground-muted">
      <p className="shimmer md:shimmer-none text-lg">
        Generating response&hellip;
      </p>
      <p className="font-mono text-xs">shimmer md:shimmer-none</p>
    </div>
  );
}
