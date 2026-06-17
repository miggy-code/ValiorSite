"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SECTIONS = ["proceso", "distincion", "servicios", "nosotros", "contacto"];

export default function Nav() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3 }
    );

    const elements = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [onHome]);

  const closeMenu = () => setMenuOpen(false);
  // On the home page, in-page anchors highlight via the observer; "/#id" links
  // work from any page (Next navigates home, then scrolls to the anchor).
  const isActive = (id: string) => onHome && activeSection === id;

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <Link href="/#top" className="brand" aria-label="Valior — inicio">
          <span className="brand-name">Valior</span>
          <span className="brand-sub">Boutique Inmobiliaria &amp; Consultoría Legal</span>
        </Link>
        <nav className="nav-links">
          <Link href="/#servicios" className={isActive("servicios") ? "active" : ""}>Servicios</Link>
          <Link href="/#distincion" className={isActive("distincion") ? "active" : ""}>Distinción</Link>
          <Link href="/#proceso" className={isActive("proceso") ? "active" : ""}>Proceso</Link>
          <Link href="/nosotros" className={pathname === "/nosotros" || isActive("nosotros") ? "active" : ""}>Nosotros</Link>
          <Link href="/#contacto" className={`nav-cta${isActive("contacto") ? " active" : ""}`}>
            Contacto
          </Link>
        </nav>
        <button
          className="nav-toggle"
          aria-label="Menú"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-nav${menuOpen ? " open" : ""}`}>
        <Link href="/#servicios" onClick={closeMenu}>Servicios</Link>
        <Link href="/#distincion" onClick={closeMenu}>Distinción</Link>
        <Link href="/#proceso" onClick={closeMenu}>Proceso</Link>
        <Link href="/nosotros" onClick={closeMenu}>Nosotros</Link>
        <Link href="/#contacto" onClick={closeMenu}>Contacto</Link>
      </div>
    </>
  );
}
