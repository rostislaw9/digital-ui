import { Link } from "react-router-dom";

import { Button } from "@digital-ui/ui";

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center gap-6 py-24 text-center">
      <p className="font-mono text-6xl font-bold text-accent">404</p>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-foreground">
          Page not found
        </h1>
        <p className="max-w-md text-sm text-foreground-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>
      </div>
      <Button variant="primary" asChild>
        <Link to="/">Back to home</Link>
      </Button>
    </div>
  );
}
