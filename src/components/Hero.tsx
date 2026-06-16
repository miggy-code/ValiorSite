"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const WA_URL = "https://wa.me/51999999999";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const handleContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
    window.open(WA_URL, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      heroRef.current?.classList.add("loaded");
    });
    // Pin final state after all animations complete so re-entry doesn't reset opacity
    const t = setTimeout(() => {
      heroRef.current?.classList.add("settled");
    }, 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero" id="top" ref={heroRef}>
      <Image
        className="hero-img"
        src="https://images.unsplash.com/photo-1668999814760-136075e8899a?q=80&w=2400&auto=format&fit=crop"
        alt="Atardecer sobre la costa de Miraflores, Lima — Valior"
        fill
        priority
        style={{ objectFit: "cover" }}
      />
      <div className="hero-overlay" />
      <div className="hero-frame" />
      <div className="hero-content">
        <h1 className="hero-anim a1">
          Construimos patrimonio <em>con visión</em>.
        </h1>
        <div className="tagline-en hero-anim a2">
          Inmobiliaria · Asesoría Legal · Miraflores, Lima
        </div>
        <div className="hero-ctas hero-anim a3">
          <button onClick={handleContact} className="btn btn-gold">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.2.2 2.1 3.2 5 4.5.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z" />
              <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4c1.4.7 2.9 1.1 4.7 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3C4 15 3.6 13.5 3.6 12 3.6 7.4 7.4 3.6 12 3.6S20.4 7.4 20.4 12 16.6 20.2 12 20.2z" />
            </svg>
            Contáctanos por WhatsApp
          </button>
          <Link href="#nosotros" className="btn btn-ghost">
            Conoce Valior
          </Link>
        </div>
      </div>
      <div className="hero-loc hero-anim a3">
        <span className="tick" />
        Miraflores · Lima · Perú
      </div>
      <Link
        href="#servicios"
        className="scroll-hint"
        aria-label="Desliza para descubrir"
      >
        <span className="line" />
      </Link>
    </section>
  );
}
