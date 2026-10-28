export default function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="container-x pt-14">
      <div className="relative overflow-hidden rounded-[28px] bg-tint px-8 py-16 md:px-14 md:py-24">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/15 blur-2xl" />
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="h-display relative mt-4 max-w-4xl animate-rise text-4xl md:text-6xl">{title}</h1>
        {children && <p className="relative mt-5 max-w-2xl animate-rise text-lg text-fg/65">{children}</p>}
      </div>
    </section>
  );
}
