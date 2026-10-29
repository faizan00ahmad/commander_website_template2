import Link from "next/link";
import Img from "./Img";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";

const links = [
  { href: "/agro", label: "Agro" },
  { href: "/petrogas", label: "Petrogas" },
  { href: "/gharbeen", label: "Seeds & Retail" },
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sector-fx sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="container-x flex h-[68px] items-center justify-between gap-3">
        <Link href="/" aria-label="Commander Group home" className="shrink-0">
          <Img name="logo1-1.png" alt="Commander Group" className="h-9 w-auto dark:hidden" />
          <Img name="logo-1-white.png" alt="Commander Group" className="hidden h-9 w-auto dark:block" />
        </Link>
        <nav className="hidden items-center gap-1 text-sm font-semibold md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="rounded-full px-4 py-2 text-fg/75 transition hover:bg-tint hover:text-accent">{l.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/contact" className="btn btn-primary hidden md:inline-flex">Get in touch</Link>
          <MobileNav links={[{ href: "/#sectors", label: "Choose a sector" }, ...links]} top={68} className="md:hidden" />
        </div>
      </div>
    </header>
  );
}
