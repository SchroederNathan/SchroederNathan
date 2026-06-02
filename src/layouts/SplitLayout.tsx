export function SplitLayout() {
  return (
    <div className="layout-split" data-testid="layout-split">
      <section className="split-primary" aria-label="Primary content">
        <h2>Primary</h2>
        <p>Main narrative or form lives here.</p>
      </section>
      <aside className="split-secondary" aria-label="Supporting content">
        <h3>Secondary</h3>
        <p>Notes, preview, or metadata.</p>
      </aside>
    </div>
  );
}
