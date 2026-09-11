import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Cormorant_Garamond,
  DM_Sans,
  Libre_Baskerville,
  Manrope,
  Outfit,
  Playfair_Display,
} from "next/font/google";
import "./hero-variants.css";

export const metadata: Metadata = {
  title: "Hero typeface options | Valior",
  robots: { index: false, follow: false },
};

const dmSans = DM_Sans({
  variable: "--variant-sans-a",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--variant-serif-a",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--variant-sans-b",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--variant-serif-b",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--variant-sans-c",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--variant-serif-c",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const variants = [
  {
    id: "a",
    name: "A — Geometric quiet",
    note: "DM Sans + Cormorant Garamond · closest to Noir + Orpheus Pro",
    sans: dmSans.variable,
    serif: cormorant.variable,
    sansVar: "--variant-sans-a",
    serifVar: "--variant-serif-a",
  },
  {
    id: "b",
    name: "B — Fashion editorial",
    note: "Manrope + Playfair Display · sharper contrast and more presence",
    sans: manrope.variable,
    serif: playfair.variable,
    sansVar: "--variant-sans-b",
    serifVar: "--variant-serif-b",
  },
  {
    id: "c",
    name: "C — Refined contemporary",
    note: "Outfit + Libre Baskerville · warmer, calmer, and more readable",
    sans: outfit.variable,
    serif: libreBaskerville.variable,
    sansVar: "--variant-sans-c",
    serifVar: "--variant-serif-c",
  },
];

export default function HeroVariantsPage() {
  return (
    <main className={`${dmSans.variable} ${cormorant.variable} ${manrope.variable} ${playfair.variable} ${outfit.variable} ${libreBaskerville.variable} hero-variants`}>
      <header className="hero-variants__intro">
        <span>Typeface comparison</span>
        <h1>Elige la voz de Valior.</h1>
        <p>La misma hero section, tres combinaciones tipográficas para comparar carácter, elegancia y lectura.</p>
      </header>

      <div className="hero-variants__list">
        {variants.map((variant) => (
          <section
            className={`hero-variant hero-variant--${variant.id} ${variant.sans} ${variant.serif}`}
            key={variant.id}
          >
            <Image
              className="hero-variant__image"
              src="https://images.unsplash.com/photo-1668999814760-136075e8899a?q=80&w=2400&auto=format&fit=crop"
              alt="Atardecer sobre la costa de Miraflores, Lima"
              fill
              sizes="100vw"
            />
            <div className="hero-variant__overlay" />
            <div className="hero-variant__label">
              <strong>{variant.name}</strong>
              <span>{variant.note}</span>
            </div>
            <div className="hero-variant__content">
              <span className="hero-variant__kicker">Comercialización inmobiliaria &amp; asesoría legal</span>
              <h2>
                Patrimonio privado en Lima, curado con <em>criterio legal</em>.
              </h2>
              <p>Acceso discreto a propiedades seleccionadas, negociación precisa y respaldo jurídico desde el primer día.</p>
              <div className="hero-variant__actions">
                <Link href="/contacto?intent=vender">Vende tu propiedad</Link>
                <Link href="/contacto?intent=comprar">Compra tu primer departamento</Link>
                <Link href="/contacto?intent=asesoria">Agenda una asesoría</Link>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
