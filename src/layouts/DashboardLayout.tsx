export function DashboardLayout() {
  return (
    <div className="layout-dashboard" data-testid="layout-dashboard">
      <aside className="dash-sidebar" aria-label="Navigation">
        <div className="dash-brand">Nav</div>
        <ul>
          <li>Overview</li>
          <li>Projects</li>
          <li>Settings</li>
        </ul>
      </aside>
      <div className="dash-body">
        <header className="dash-topbar">Top bar</header>
        <div className="dash-grid">
          <article className="dash-card span-2">Metric A</article>
          <article className="dash-card">Metric B</article>
          <article className="dash-card span-2">Chart area</article>
          <article className="dash-card">Activity</article>
        </div>
      </div>
    </div>
  );
}
