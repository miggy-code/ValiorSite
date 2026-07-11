"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`nav${tone === "dark" ? " nav-dark" : ""}${scrolled ? " scrolled" : ""}`}
      >
        <Link href="/#top" className="brand-mark">
          VALIOR
        </Link>
        <nav className="nav-links">
          <Link href="/#servicios">Servicios</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/planifica">Planifica</Link>
          <Link href="/contacto" className="nav-cta">
            Contacto
          </Link>
        </nav>
        <button
          className={`nav-toggle${menuOpen ? " open" : ""}`}
          aria-label="Menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-nav${menuOpen ? " open" : ""}`}>
        <Link href="/#servicios" onClick={closeMenu}>Servicios</Link>
        <Link href="/nosotros" onClick={closeMenu}>Nosotros</Link>
        <Link href="/planifica" onClick={closeMenu}>Planifica</Link>
        <Link href="/contacto" onClick={closeMenu}>Contacto</Link>
        <span className="mn-meta">Miraflores — Lima, Perú</span>
      </div>
    </>
  );
}
