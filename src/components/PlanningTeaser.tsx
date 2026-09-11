import Image from "next/image";
import Link from "next/link";

export default function PlanningTeaser() {
  return (
    <section
      className="planning-options planning-option--editorial"
      aria-labelledby="planning-editorial-title"
    >
      <div className="planning-options__editorial-media">
        <Image
          className="planning-options__editorial-image"
          src="/images/valior-planifica-editorial-v1.png"
          alt="Plano residencial, llave y muestras de piedra sobre una mesa"
          fill
          sizes="100vw"
        />
        <span
          className="planning-options__editorial-scrim"
          aria-hidden="true"
        />

        <div className="planning-options__editorial-copy">
          <h2 id="planning-editorial-title">
            Haz que tu crédito trabaje a tu favor.
          </h2>
          <p>
            Simula tu cuota, plazo y capacidad de financiamiento. Luego,
            descubre cómo los pagos anticipados pueden ayudarte a reducir
            intereses y acortar los años de tu deuda.
          </p>
          <p className="planning-options__editorial-closing">
            Proyecta hoy la propiedad que quieres alcanzar mañana.
          </p>

          <div
            className="planning-options__editorial-actions"
            aria-label="Herramientas de planificación"
          >
            <Link
              href="/planifica"
              className="planning-options__editorial-button"
            >
              <span>Planifica</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/planifica#amortizacion"
              className="planning-options__editorial-button"
            >
              <span>Amortización</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
