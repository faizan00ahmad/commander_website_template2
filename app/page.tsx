import Link from "next/link";
import Img from "@/components/Img";
import SectorExplorer from "@/components/SectorExplorer";
import { Awards, CTA } from "@/components/Blocks";
import { stats, leaders } from "@/lib/data";

export default function Home() {
  return (
    <>
      <SectorExplorer />

      <section className="container-x pt-24">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-[var(--radius)] bg-tint p-7">
              <p className="h-display text-3xl text-accent md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-fg/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pt-24">
        <div className="grid items-center gap-8 rounded-[28px] border border-line bg-panel p-8 md:grid-cols-[200px_1fr] md:p-12">
          <Img name="ceo.gif" alt="Mr. Rafique, Chairman" className="w-44 rounded-2xl" />
          <div>
            <p className="eyebrow">Message from the Chairman</p>
            <blockquote className="h-display mt-3 text-2xl leading-snug md:text-3xl">
              “We embrace a strong foundation of commitment, integrity and excellence.”
            </blockquote>
            <p className="mt-4 text-fg/60">{leaders[0].name}, {leaders[0].role}</p>
            <Link href="/leadership" className="mt-3 inline-block text-sm font-semibold text-accent">Read more →</Link>
          </div>
        </div>
      </section>

      <Awards />
      <CTA />
    </>
  );
}
