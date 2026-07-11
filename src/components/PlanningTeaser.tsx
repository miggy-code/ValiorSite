import Link from "next/link";

export default function PlanningTeaser() {
  return (
    <section className="planning-teaser" aria-labelledby="planning-teaser-title">
      <div className="wrap">
        <div className="planning-teaser-grid reveal">
          <div className="planning-teaser-copy">
            <span className="label label--rule">Planifica</span>
            <h2 id="planning-teaser-title">
              Antes de elegir una propiedad, mira lo que tu dinero puede
              <em> hacer.</em>
            </h2>
            <p>
              Dos calculadoras claras para estimar tu crédito y entender cómo
              cada aporte extra cambia el tiempo de tu deuda.
            </p>
            <Link href="/planifica" className="tlink">
              Abrir planificador <span className="arr" aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="planning-teaser-tools" aria-hidden="true">
            <div className="planning-teaser-tool planning-teaser-tool--mortgage">
              <span>Compra</span>
              <strong>Tu cuota, en contexto.</strong>
              <div className="planning-teaser-line"><i /></div>
              <small>Crédito hipotecario</small>
            </div>
            <div className="planning-teaser-tool planning-teaser-tool--debt">
              <span>Deuda</span>
              <strong>El tiempo que puedes recuperar.</strong>
              <div className="planning-teaser-bars">
                <i />
                <i />
                <i />
              </div>
              <small>Amortización de capital</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
