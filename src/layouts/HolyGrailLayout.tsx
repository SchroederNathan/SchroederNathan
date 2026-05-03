export function HolyGrailLayout() {
  return (
    <div className="layout-holy-grail" data-testid="layout-holy-grail">
      <header className="hg-header" aria-label="Site header">
        Site header
      </header>
      <div className="hg-middle">
        <nav className="hg-nav" aria-label="Section">
          <ul>
            <li>Alpha</li>
            <li>Beta</li>
            <li>Gamma</li>
          </ul>
        </nav>
        <main className="hg-main" id="hg-main">
          <h2>Main column</h2>
          <p>Classic header / nav / main / aside / footer shell.</p>
        </main>
        <aside className="hg-aside" aria-label="Related links">
          <p>Sidebar promos or related reading.</p>
        </aside>
      </div>
      <footer className="hg-footer" aria-label="Site footer">
        Site footer
      </footer>
    </div>
  );
}
