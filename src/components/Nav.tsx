"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SECTIONS = ["proceso", "distincion", "servicios", "nosotros", "contacto"];

export default function Nav() {
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
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <Link href="#top" className="brand" aria-label="Valior — inicio">
          <span className="brand-name">Valior</span>
          <span className="brand-sub">Boutique Inmobiliaria &amp; Consultoría Legal</span>
        </Link>
        <nav className="nav-links">
          <Link href="#servicios" className={activeSection === "servicios" ? "active" : ""}>Servicios</Link>
          <Link href="#distincion" className={activeSection === "distincion" ? "active" : ""}>Distinción</Link>
          <Link href="#proceso" className={activeSection === "proceso" ? "active" : ""}>Proceso</Link>
          <Link href="#nosotros" className={activeSection === "nosotros" ? "active" : ""}>Nosotros</Link>
          <Link href="#contacto" className={`nav-cta${activeSection === "contacto" ? " active" : ""}`}>
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
        <Link href="#servicios" onClick={closeMenu}>Servicios</Link>
        <Link href="#distincion" onClick={closeMenu}>Distinción</Link>
        <Link href="#proceso" onClick={closeMenu}>Proceso</Link>
        <Link href="#nosotros" onClick={closeMenu}>Nosotros</Link>
        <Link href="#contacto" onClick={closeMenu}>Contacto</Link>
      </div>
    </>
  );
}
