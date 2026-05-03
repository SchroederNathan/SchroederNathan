import { useState, type ComponentType } from "react";
import { BentoLayout } from "./layouts/BentoLayout";
import { ChatLayout } from "./layouts/ChatLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { HolyGrailLayout } from "./layouts/HolyGrailLayout";
import { MagazineLayout } from "./layouts/MagazineLayout";
import { SplitLayout } from "./layouts/SplitLayout";
import type { LayoutId } from "./layouts/types";
import "./App.css";

const LAYOUT_LABELS: Record<LayoutId, string> = {
  dashboard: "Dashboard (grid + sticky sidebar)",
  split: "Split (responsive two-column)",
  magazine: "Magazine (featured + grid)",
  holyGrail: "Holy grail (nav / main / aside / footer)",
  bento: "Bento (asymmetric grid)",
  chat: "Chat (threads + conversation)",
};

const LAYOUT_COMPONENTS: Record<LayoutId, ComponentType> = {
  dashboard: DashboardLayout,
  split: SplitLayout,
  magazine: MagazineLayout,
  holyGrail: HolyGrailLayout,
  bento: BentoLayout,
  chat: ChatLayout,
};

export function App() {
  const [layout, setLayout] = useState<LayoutId>("dashboard");
  const LayoutComponent = LAYOUT_COMPONENTS[layout];

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
        <LayoutComponent />
      </main>
    </div>
  );
}
