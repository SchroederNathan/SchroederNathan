import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "./App";
import { BentoLayout } from "./layouts/BentoLayout";
import { ChatLayout } from "./layouts/ChatLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { HolyGrailLayout } from "./layouts/HolyGrailLayout";
import { MagazineLayout } from "./layouts/MagazineLayout";
import { SplitLayout } from "./layouts/SplitLayout";
import type { LayoutId } from "./layouts/types";

const LAYOUT_NAV_LABELS: Record<LayoutId, RegExp> = {
  dashboard: /dashboard \(grid \+ sticky sidebar\)/i,
  split: /split \(responsive two-column\)/i,
  magazine: /magazine \(featured \+ grid\)/i,
  holyGrail: /holy grail \(nav \/ main \/ aside \/ footer\)/i,
  bento: /bento \(asymmetric grid\)/i,
  chat: /chat \(threads \+ conversation\)/i,
};

const LAYOUT_TEST_ID: Record<LayoutId, string> = {
  dashboard: "layout-dashboard",
  split: "layout-split",
  magazine: "layout-magazine",
  holyGrail: "layout-holy-grail",
  bento: "layout-bento",
  chat: "layout-chat",
};

const ALL_LAYOUT_IDS: LayoutId[] = [
  "dashboard",
  "split",
  "magazine",
  "holyGrail",
  "bento",
  "chat",
];

describe("App layout switching", () => {
  it("starts on dashboard", () => {
    render(<App />);
    expect(screen.getByTestId("layout-dashboard")).toBeInTheDocument();
  });

  it("shows exactly one layout at a time for each option", async () => {
    const user = userEvent.setup();
    render(<App />);
    const nav = screen.getByRole("navigation", { name: /choose layout/i });

    for (const id of ALL_LAYOUT_IDS) {
      await user.click(
        within(nav).getByRole("button", { name: LAYOUT_NAV_LABELS[id] }),
      );
      expect(screen.getByTestId(LAYOUT_TEST_ID[id])).toBeInTheDocument();
      for (const other of ALL_LAYOUT_IDS) {
        if (other === id) continue;
        expect(
          screen.queryByTestId(LAYOUT_TEST_ID[other]),
        ).not.toBeInTheDocument();
      }
    }
  });
});

describe("Layout structure", () => {
  it("dashboard exposes complementary navigation sidebar", () => {
    render(<DashboardLayout />);
    expect(
      screen.getByRole("complementary", { name: /^navigation$/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/metric a/i)).toBeInTheDocument();
  });

  it("split layout has primary section and supporting complementary", () => {
    render(<SplitLayout />);
    expect(
      screen.getByRole("region", { name: /primary content/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("complementary", { name: /supporting content/i }),
    ).toBeInTheDocument();
  });

  it("magazine layout has featured plus four tiles", () => {
    render(<MagazineLayout />);
    expect(screen.getByText(/featured story/i)).toBeInTheDocument();
    expect(screen.getAllByText(/^story \d$/i)).toHaveLength(4);
  });

  it("holy grail has banner, main, nav, complementary aside, and contentinfo", () => {
    render(<HolyGrailLayout />);
    expect(
      screen.getByRole("banner", { name: /^site header$/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: /^section$/i })).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(
      screen.getByRole("complementary", { name: /related links/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("bento exposes a labeled grid region with hero and stats", () => {
    render(<BentoLayout />);
    expect(
      screen.getByRole("region", { name: /bento grid/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /hero cell/i })).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { name: /^stat$/i })).toHaveLength(2);
  });

  it("chat layout has thread list, message log, and composer", () => {
    render(<ChatLayout />);
    expect(
      screen.getByRole("complementary", { name: /conversations/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /active conversation/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("log")).toBeInTheDocument();
    expect(screen.getByText(/message…/i)).toBeInTheDocument();
  });
});
