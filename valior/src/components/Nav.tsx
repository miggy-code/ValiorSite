"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <Link href="#top" className="brand-mark">
          VALIOR
        </Link>
        <nav className="nav-links">
          <Link href="#servicios">Servicios</Link>
          <Link href="#distincion">Distinción</Link>
          <Link href="#proceso">Proceso</Link>
          <Link href="#nosotros">Nosotros</Link>
          <Link href="#contacto" className="nav-cta">
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
