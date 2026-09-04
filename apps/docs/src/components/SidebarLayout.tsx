import { Reveal } from "@ionbit-ui/motion";

import { Sidebar } from "./Sidebar";

/** Layout with a fixed left sidebar (desktop only) and truly centered content. */
export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-8 px-6 py-8">
      {/* Left sidebar — hidden on mobile (burger menu shows instead) */}
      <aside className="hidden w-60 shrink-0 lg:block">
        <div className="fixed top-1/2 h-[calc(100vh-16rem)] w-60 -translate-y-1/2">
          <Reveal direction="right" className="h-full">
            <Sidebar />
          </Reveal>
        </div>
      </aside>

      {/* Main content — centered on the page */}
      <div className="flex min-w-0 flex-1 justify-center">
        <div className="w-full max-w-4xl">{children}</div>
      </div>

      {/* Right spacer — balances the left sidebar for true centering */}
      <aside className="hidden w-60 shrink-0 lg:block" aria-hidden="true" />
    </div>
  );
}
