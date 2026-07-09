"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    requestAnimationFrame(() => {
      heroRef.current?.classList.add("loaded");
    });
  }, []);

  return (
    <section className="hero" id="top" ref={heroRef}>
      <Image
        className="hero-img"
        src="https://images.unsplash.com/photo-1668999814760-136075e8899a?q=80&w=2400&auto=format&fit=crop"
        alt="Atardecer sobre la costa de Miraflores, Lima — Valior"
        fill
        preload
      />
      <div className="hero-overlay" />
      <div className="hero-inner">
        <div className="hero-kicker hero-anim a1">
          Inmobiliaria boutique &amp; asesoría legal
        </div>
        <h1 className="hero-anim a1">
          Patrimonio privado en Lima, curado con <em>criterio legal</em>.
        </h1>
        <p className="hero-sub hero-anim a2">
          Acceso discreto a propiedades seleccionadas, negociación precisa y
          respaldo jurídico desde el primer día.
        </p>
        <div className="hero-actions hero-anim a3">
          <a
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-line-light"
          >
            Solicitar una conversación
          </a>
          <Link href="/nosotros" className="tlink tlink--light">
            Conocer Valior <span className="arr">→</span>
          </Link>
        </div>
        <div className="hero-meta hero-anim a4">
          <span>Miraflores — Lima, Perú</span>
          <span>Residencias · Inversión · Legal</span>
          <span>Atención en español e inglés</span>
        </div>
      </div>
    </section>
  );
}
