import Image from "next/image";
import Link from "next/link";

export default function Nosotros() {
  return (
    <section className="founders" id="nosotros-original">
      <div className="wrap">
        <div className="founders-grid">
          <div className="founders-body reveal">
            <span className="label label--rule">Nosotros</span>
            <h2>
              Madre e hija. Dos oficios, <em>una sola mesa</em>.
            </h2>
            <p>
              Somos un equipo integral: la estrategia comercial y la asesoría
              jurídica se encuentran para ayudarte a tomar mejores decisiones
              y proteger tu patrimonio. Alessandra y María acompañan cada
              operación, desde la primera conversación hasta la escritura.
            </p>
            <Link href="/nosotros" className="tlink">
              Leer nuestra historia <span className="arr">→</span>
            </Link>
          </div>
          <Link
            href="/nosotros"
            className="founders-portrait reveal d1"
            aria-label="Conoce la historia de Alessandra Moreno y María Pacheco"
          >
            <div className="founders-portrait__image">
              <Image
                src="/images/valior-nosotros-concept.png"
                alt="Alessandra Moreno y María Pacheco revisando los planos de una propiedad"
                fill
                loading="lazy"
                sizes="(max-width: 1080px) 100vw, 56vw"
              />
            </div>
            <div className="founders-portrait__caption">
              <span>Alessandra Moreno · Comercialización</span>
              <span>María Pacheco · Legal</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
