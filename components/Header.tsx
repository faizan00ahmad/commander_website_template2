"use client";
import Link from "next/link";
import { useState } from "react";
import Img from "./Img";

const links = [
  { href: "/#sectors", label: "Sectors" },
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur sector-fx">
      <div className="container-x flex h-[70px] items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)} aria-label="Commander Group home">
          <Img name="logo1-1.png" alt="Commander Group" className="h-10 w-auto" />
        </Link>
        <nav className="hidden items-center gap-1 text-sm font-semibold md:flex">
          {[{ href: "/agro", label: "Agro" }, { href: "/petrogas", label: "Petrogas" }, { href: "/gharbeen", label: "Seeds & Retail" }, ...links].map((l) => (
            <Link key={l.href} href={l.href} className="rounded-full px-4 py-2 text-fg/75 transition hover:bg-tint hover:text-accent">{l.label}</Link>
          ))}
        </nav>
        <Link href="/contact" className="btn btn-primary hidden md:inline-flex">Get in touch</Link>
        <button className="md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="block h-0.5 w-6 bg-fg" />
          <span className="mt-1.5 block h-0.5 w-6 bg-fg" />
          <span className="mt-1.5 block h-0.5 w-6 bg-fg" />
        </button>
      </div>
      {open && (
        <nav className="container-x flex flex-col gap-4 border-t border-line py-5 text-sm font-semibold md:hidden">
          {[{ href: "/agro", label: "Commander Agro" }, { href: "/petrogas", label: "Commander Petrogas" }, { href: "/gharbeen", label: "Seeds & Retail" }, ...links].map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
