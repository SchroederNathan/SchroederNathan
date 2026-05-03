import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "./App";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { MagazineLayout } from "./layouts/MagazineLayout";
import { SplitLayout } from "./layouts/SplitLayout";

describe("App layout switching", () => {
  it("starts on dashboard and can switch to split and magazine", async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByTestId("layout-dashboard")).toBeInTheDocument();
    expect(screen.queryByTestId("layout-split")).not.toBeInTheDocument();
    expect(screen.queryByTestId("layout-magazine")).not.toBeInTheDocument();

    const nav = screen.getByRole("navigation", { name: /choose layout/i });
    await user.click(
      within(nav).getByRole("button", {
        name: /split \(responsive two-column\)/i,
      }),
    );
    expect(screen.queryByTestId("layout-dashboard")).not.toBeInTheDocument();
    expect(screen.getByTestId("layout-split")).toBeInTheDocument();

    await user.click(
      within(nav).getByRole("button", {
        name: /magazine \(featured \+ grid\)/i,
      }),
    );
    expect(screen.getByTestId("layout-magazine")).toBeInTheDocument();
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
});
