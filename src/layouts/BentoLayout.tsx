export function BentoLayout() {
  return (
    <section
      className="layout-bento"
      data-testid="layout-bento"
      aria-label="Bento grid"
    >
      <article className="bento-cell bento-hero">
        <h2>Hero cell</h2>
        <p>Spans two columns on wide screens.</p>
      </article>
      <article className="bento-cell">
        <h3>Stat</h3>
        <p>+12%</p>
      </article>
      <article className="bento-cell">
        <h3>Stat</h3>
        <p>48 ms</p>
      </article>
      <article className="bento-cell bento-wide">
        <h3>Wide strip</h3>
        <p>Full row on medium+ breakpoints.</p>
      </article>
      <article className="bento-cell bento-tall">
        <h3>Tall</h3>
        <p>Extra row span.</p>
      </article>
      <article className="bento-cell">
        <h3>Small</h3>
      </article>
    </section>
  );
}
