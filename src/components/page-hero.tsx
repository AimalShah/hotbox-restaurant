export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="hb-page-hero">
      <div className="hb-container">
        <div className="hb-eyebrow">{eyebrow}</div>
        <h1 className="hb-display" data-testid={`text-page-title-${title.toLowerCase().replaceAll(' ', '-')}`}>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
