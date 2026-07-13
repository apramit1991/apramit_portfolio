import { useRef } from "react";
import { X } from "lucide-react";

export function PortfolioShell({ renderSidebar, renderTopBar, children }) {
  // Native <dialog> gives the mobile drawer a focus trap, Esc-to-close, and
  // a backdrop for free — no focus-trap library needed.
  const dialogRef = useRef(null);
  const openDrawer = () => dialogRef.current?.showModal();
  const closeDrawer = () => dialogRef.current?.close();

  return (
    <div className="flex h-dvh flex-col bg-surface font-sans text-ink-1 md:flex-row">
      <a
        href="#chat-main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded-lg focus:bg-elevated focus:px-3 focus:py-2 focus:text-sm focus:text-ink-1 focus:shadow-card"
      >
        Skip to conversation
      </a>

      <aside className="hidden w-[300px] shrink-0 border-r border-line bg-surface-2 md:flex md:flex-col">
        {renderSidebar(() => {})}
      </aside>

      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        {renderTopBar(openDrawer)}
        <main id="chat-main" className="flex min-h-0 flex-1 flex-col">
          {children}
        </main>
      </div>

      <dialog ref={dialogRef} className="chat-drawer md:hidden" aria-label="Menu">
        <div className="flex h-full flex-col font-sans">
          <div className="flex justify-end p-2">
            <button
              type="button"
              onClick={closeDrawer}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-xl text-ink-2 transition-colors hover:bg-surface-hover hover:text-ink-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto">{renderSidebar(closeDrawer)}</div>
        </div>
      </dialog>
    </div>
  );
}
