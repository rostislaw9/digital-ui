import { lazy, Suspense, useEffect } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";

import { cn, Toaster } from "@ionbit-ui/ui";

const HomePage = lazy(() =>
  import("./pages/HomePage").then((m) => ({ default: m.HomePage })),
);
const ComponentsPage = lazy(() =>
  import("./pages/ComponentsPage").then((m) => ({
    default: m.ComponentsPage,
  })),
);
const ComponentDetailPage = lazy(() =>
  import("./pages/ComponentDetailPage").then((m) => ({
    default: m.ComponentDetailPage,
  })),
);
const TokensPage = lazy(() =>
  import("./pages/TokensPage").then((m) => ({ default: m.TokensPage })),
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })),
);

function PageLoader() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-border border-t-accent" />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

/** Full-width layout for homepage and 404. */
function FullWidthLayout({ children }: { children: React.ReactNode }) {
  return <div className="w-full px-6 py-12">{children}</div>;
}

/** Centered content layout for /components and /tokens (no sidebar). */
function CenteredLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center px-6 py-8">
      <div className="w-full max-w-4xl">{children}</div>
    </div>
  );
}

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <header className="sticky top-0 z-20 border-b border-border bg-surface/80 backdrop-blur-md">
        <div className="flex w-full items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-mono text-md font-semibold tracking-tight text-foreground">
              ionbit
              <span className="text-accent">_ui</span>
            </span>
          </Link>
          <nav className="flex items-center gap-1 text-sm">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/components">Components</NavItem>
            <NavItem to="/tokens">Tokens</NavItem>
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<PageLoader />}>
                <FullWidthLayout>
                  <HomePage />
                </FullWidthLayout>
              </Suspense>
            }
          />
          <Route
            path="/components"
            element={
              <Suspense fallback={<PageLoader />}>
                <CenteredLayout>
                  <ComponentsPage />
                </CenteredLayout>
              </Suspense>
            }
          />
          <Route
            path="/components/:name"
            element={
              <Suspense fallback={<PageLoader />}>
                <ComponentDetailPage />
              </Suspense>
            }
          />
          <Route
            path="/tokens"
            element={
              <Suspense fallback={<PageLoader />}>
                <CenteredLayout>
                  <TokensPage />
                </CenteredLayout>
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoader />}>
                <FullWidthLayout>
                  <NotFoundPage />
                </FullWidthLayout>
              </Suspense>
            }
          />
        </Routes>
      </main>
      <Toaster position="top-center" />
    </div>
  );
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        cn(
          "rounded-md px-3 py-1.5 transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          isActive
            ? "bg-accent-muted text-accent"
            : "text-foreground-muted hover:bg-surface-hover hover:text-foreground",
        )
      }
    >
      {children}
    </NavLink>
  );
}
