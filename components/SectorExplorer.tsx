"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Img from "./Img";
import { sectors, distributors, certifications } from "@/lib/data";

type SectorId = "agro" | "petrogas" | "seeds";

export default function SectorExplorer() {
  const [id, setId] = useState<SectorId>("agro");
  const sector = sectors.find((s) => s.id === id)!;

  useEffect(() => {
    const h = window.location.hash.replace("#", "");
    if (h === "agro" || h === "petrogas" || h === "seeds") setId(h);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.sector = id;
    return () => { document.documentElement.dataset.sector = "agro"; };
  }, [id]);

  const select = (next: SectorId) => {
    setId(next);
    window.history.replaceState(null, "", `#${next}`);
  };

  return (
    <div className="sector-fx">
      <section id="sectors" className="container-x pt-14 md:pt-20">
        <p className="eyebrow animate-rise">Commander Group · Since 1996</p>
        <h1 className="h-display mt-4 max-w-4xl animate-rise text-4xl md:text-7xl">
          Choose your sector.<br /><span className="text-accent">We&apos;ll take it from here.</span>
        </h1>
        <p className="mt-5 max-w-2xl animate-rise text-lg text-fg/65">
          Three businesses, one standard of quality. Pick the one you&apos;re here for and see exactly what matters to you.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {sectors.map((s) => {
            const on = s.id === id;
            return (
              <button
                key={s.id}
                onClick={() => select(s.id as SectorId)}
                aria-pressed={on}
                className={`group relative h-72 overflow-hidden rounded-[var(--radius)] text-left transition-all duration-500 md:h-[22rem] ${on ? "ring-4 ring-accent md:-translate-y-2" : "opacity-80 hover:opacity-100"}`}
              >
                <Img name={s.cover} alt={s.name} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className={`absolute inset-0 transition ${on ? "bg-gradient-to-t from-black/85 via-black/35 to-transparent" : "bg-gradient-to-t from-black/90 via-black/55 to-black/20"}`} />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest backdrop-blur">{s.tag}</span>
                  <h3 className="h-display mt-3 text-2xl">{s.name}</h3>
                  <p className="mt-1 text-sm text-white/75">Est. {s.since} {on && "· Selected"}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section key={sector.id} className="container-x animate-fade pt-14">
        <div className="grid gap-10 rounded-[28px] bg-tint p-8 md:grid-cols-[1.1fr_1fr] md:p-12">
          <div>
            <p className="eyebrow">{sector.tag}</p>
            <h2 className="h-display mt-3 text-3xl md:text-5xl">{sector.name}</h2>
            <p className="mt-5 text-fg/70">{sector.blurb}</p>
            <dl className="mt-8 grid grid-cols-3 gap-4">
              {sector.facts.map(([v, l]) => (
                <div key={l} className="rounded-2xl bg-panel p-4">
                  <dt className="h-display text-xl text-accent md:text-2xl">{v}</dt>
                  <dd className="mt-1 text-xs text-fg/60">{l}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={sector.href} className="btn btn-primary">Explore {sector.name}</Link>
              <Link href="/contact" className="btn btn-ghost">Talk to our team</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {sector.gallery.slice(0, 4).map((g) => (
              <Img key={g} name={`${g}-thumb.jpg`} alt={g} className="aspect-square w-full rounded-2xl border border-line bg-panel object-cover" />
            ))}
          </div>
        </div>

        {sector.id === "petrogas" && (
          <div className="mt-6 rounded-[var(--radius)] border border-line bg-panel p-8">
            <p className="eyebrow">Find a distributor</p>
            <div className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {distributors.slice(0, 6).map(([n, p]) => (
                <a key={n} href={`tel:${p.replace(/\s/g, "")}`} className="flex justify-between border-b border-line py-2 text-sm hover:text-accent">
                  <span className="font-semibold">{n}</span><span className="text-fg/60">{p}</span>
                </a>
              ))}
            </div>
            <Link href="/petrogas" className="mt-4 inline-block text-sm font-semibold text-accent">Full distributor list →</Link>
          </div>
        )}
        {sector.id === "agro" && (
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {["Pesticides", "Fungicides", "Rodenticides", "Acaricides", "Weedicides", "Seeds"].slice(0, 3).map((x) => (
              <div key={x} className="rounded-[var(--radius)] border border-line bg-panel p-6"><p className="h-display text-lg">{x}</p><p className="mt-1 text-sm text-fg/60">Imported &amp; formulated in Multan</p></div>
            ))}
          </div>
        )}
        {sector.id === "seeds" && (
          <div className="mt-6 rounded-[var(--radius)] border border-line bg-panel p-8">
            <p className="eyebrow">Farmer training</p>
            <p className="mt-3 max-w-3xl text-fg/70">
              Our Field Training Staff run regular sessions at the farmer&apos;s doorstep for the best application of products and best crop yield, plus emergency programs for extreme climate conditions.
            </p>
          </div>
        )}
      </section>

      <section className="container-x pt-20">
        <div className="grid gap-4 md:grid-cols-3">
          {certifications.map((c) => (
            <div key={c.code} className="rounded-[var(--radius)] border border-line bg-panel p-7">
              <p className="h-display text-2xl text-accent">{c.code}</p>
              <p className="mt-1 text-fg/60">{c.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
