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
    <section className="hero" id="hero-original" ref={heroRef}>
      <Image
        className="hero-img"
        src="https://images.unsplash.com/photo-1668999814760-136075e8899a?q=80&w=2400&auto=format&fit=crop"
        alt="Atardecer sobre la costa de Miraflores, Lima — Valior"
        fill
      />
      <div className="hero-overlay" />
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-kicker hero-anim a1">
            Comercialización inmobiliaria &amp; asesoría legal
          </div>
          <h1 className="hero-anim a1">
            Patrimonio privado en Lima, curado con <em>criterio legal</em>.
          </h1>
          <p className="hero-sub hero-anim a2">
            Acceso discreto a propiedades seleccionadas, negociación precisa y
            respaldo jurídico desde el primer día.
          </p>
        </div>
        <div className="hero-lower">
          <div className="hero-actions hero-anim a3">
            <Link href="/contacto?intent=vender" className="btn btn-line-light">
              Vende tu propiedad
            </Link>
            <Link href="/contacto?intent=comprar" className="btn btn-line-light">
              Compra tu primer departamento
            </Link>
            <Link href="/contacto?intent=asesoria" className="btn btn-line-light">
              Agenda una asesoría
            </Link>
          </div>
          <div className="hero-meta hero-anim a4">
            <span>Miraflores — Lima, Perú</span>
            <span>Residencias · Inversión · Legal</span>
            <span>Atención en español e inglés</span>
          </div>
        </div>
      </div>
    </section>
  );
}
