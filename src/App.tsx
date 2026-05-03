import { useState } from "react";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { SplitLayout } from "./layouts/SplitLayout";
import { MagazineLayout } from "./layouts/MagazineLayout";
import type { LayoutId } from "./layouts/types";
import "./App.css";

const LAYOUT_LABELS: Record<LayoutId, string> = {
  dashboard: "Dashboard (grid + sticky sidebar)",
  split: "Split (responsive two-column)",
  magazine: "Magazine (featured + grid)",
};

export function App() {
  const [layout, setLayout] = useState<LayoutId>("dashboard");

  return (
    <div className="app">
      <header className="app-header">
        <h1>Layout exploration</h1>
        <nav className="layout-switcher" aria-label="Choose layout">
          {(Object.keys(LAYOUT_LABELS) as LayoutId[]).map((id) => (
            <button
              key={id}
              type="button"
              className={layout === id ? "active" : ""}
              onClick={() => setLayout(id)}
            >
              {LAYOUT_LABELS[id]}
            </button>
          ))}
        </nav>
      </header>
      <main className="app-main">
        {layout === "dashboard" && <DashboardLayout />}
        {layout === "split" && <SplitLayout />}
        {layout === "magazine" && <MagazineLayout />}
      </main>
    </div>
  );
}
