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
            sizes="(max-width: 860px) 100vw, 82vw"
          />
        </div>

        <div className="about-statement__body reveal">
          <blockquote>
            Decisiones seguras para proteger y hacer crecer tu patrimonio.
          </blockquote>

          <div className="about-statement__story">
            <p>
              Nacimos porque entendimos que muchas personas necesitan más que
              encontrar una propiedad. Necesitan una asesoría real,
              transparente y profesional que les permita decidir con seguridad.
            </p>
            <p>
              Por eso combinamos conocimiento del mercado inmobiliario,
              estrategias comerciales y respaldo legal. Acompañamos cada etapa
              con información clara, atención personalizada y expertos a tu
              lado.
            </p>
            <p>
              Nuestro enfoque va más allá de ofrecer propiedades. Analizamos
              cada oportunidad, comprendemos cada necesidad y desarrollamos
              soluciones adaptadas a objetivos concretos.
            </p>
            <p>
              Ya sea encontrar un primer hogar, vender una propiedad o invertir
              estratégicamente, cuidamos la decisión detrás de cada operación.
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
