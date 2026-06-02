export function MagazineLayout() {
  return (
    <div className="layout-magazine" data-testid="layout-magazine">
      <article className="mag-featured">
        <h2>Featured story</h2>
        <p>Hero block spanning full width on large screens.</p>
      </article>
      <div className="mag-grid">
        <article className="mag-tile">Story 1</article>
        <article className="mag-tile">Story 2</article>
        <article className="mag-tile">Story 3</article>
        <article className="mag-tile">Story 4</article>
      </div>
    </div>
  );
}
