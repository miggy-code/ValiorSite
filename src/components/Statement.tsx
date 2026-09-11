import Image from "next/image";
import Link from "next/link";

export default function Statement() {
  return (
    <section
      className="about-statement about-statement--page"
      aria-labelledby="about-statement-title"
    >
      <div className="wrap">
        <header className="about-statement__header reveal">
          <p className="about-statement__label">Quiénes somos</p>
          <div>
            <h2 id="about-statement-title">
              Más que encontrar una propiedad.
            </h2>
            <p className="about-statement__definition">
              VALIOR es una comercializadora inmobiliaria y asesoría legal
              especializada en la compra, venta e inversión de bienes raíces.
            </p>
          </div>
        </header>

        <div className="about-statement__image reveal d1">
          <Image
            src="/images/valior-nosotros-concept.png"
            alt="Las asesoras de VALIOR revisando los planos de una propiedad"
            fill
            preload
            sizes="(max-width: 860px) 100vw, 82vw"
          />
        </div>

        <div className="about-statement__body reveal">
          <blockquote>
            Decisiones seguras para proteger y hacer crecer tu patrimonio.
          </blockquote>

          <div className="about-statement__story">
            <p>
              Nacimos para reunir en una misma mesa lo que una operación
              inmobiliaria exige: lectura de mercado, estrategia comercial y
              respaldo legal.
            </p>
            <p>
              Analizamos cada oportunidad y acompañamos la compra, venta o
              inversión con información clara, atención directa y una solución
              ajustada al objetivo de cada cliente.
            </p>
          </div>
        </div>

        <footer className="about-statement__close reveal">
          <p>
            Cada propiedad representa un esfuerzo, un sueño y una decisión
            importante. Nuestro propósito es ayudarte a cuidar, construir y
            hacer crecer tu patrimonio.
          </p>
          <Link href="#equipo" className="about-statement__link">
            Conoce al equipo <span aria-hidden="true">↓</span>
          </Link>
        </footer>
      </div>
    </section>
  );
}
