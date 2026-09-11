import Link from "next/link";

export default function HomeCTA() {
  return (
    <section
      className="home-contact"
      id="contacto"
      aria-labelledby="home-contact-title"
    >
      <div className="home-contact__panel">
        <div className="home-contact__copy">
          <div className="home-contact__topline">
            <span className="label">Contacto</span>
            <span>Valior · Lima</span>
          </div>

          <h2 id="home-contact-title">
            <span>Una decisión</span>
            <strong>importante</strong>
            <span>empieza con una</span>
            <em>conversación.</em>
          </h2>

          <p>
            Cuéntanos qué estás evaluando. Te ayudaremos a ordenar la
            propiedad, la oportunidad y su revisión legal.
          </p>
        </div>

        <Link href="/contacto" className="home-contact__cta">
          <span>Una conversación privada</span>
          <strong>Conversemos.</strong>
          <span className="home-contact__arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
