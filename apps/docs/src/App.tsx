import { cn } from "@digital-ui/ui";
import { lazy, Suspense, useEffect } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage.js";

const ComponentsPage = lazy(() =>
  import("./pages/ComponentsPage.js").then((m) => ({
    default: m.ComponentsPage,
  })),
);
const ComponentDetailPage = lazy(() =>
  import("./pages/ComponentDetailPage.js").then((m) => ({
    default: m.ComponentDetailPage,
  })),
);
const TokensPage = lazy(() =>
  import("./pages/TokensPage.js").then((m) => ({ default: m.TokensPage })),
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage.js").then((m) => ({ default: m.NotFoundPage })),
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

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <header className="sticky top-0 z-20 border-b border-border bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-mono text-sm font-semibold tracking-tight text-foreground">
              digital
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
      <main className="mx-auto max-w-7xl px-6 py-12">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/components"
            element={
              <Suspense fallback={<PageLoader />}>
                <ComponentsPage />
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
                <TokensPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoader />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Routes>
      </main>
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
