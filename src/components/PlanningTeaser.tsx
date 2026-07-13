import Link from "next/link";

export default function PlanningTeaser() {
  return (
    <section className="planning-teaser" aria-labelledby="planning-teaser-title">
      <div className="wrap">
        <div className="planning-teaser__shell">
          <div className="planning-teaser__surface">
            <header className="planning-teaser__header reveal">
              <div className="planning-teaser__heading">
                <span className="planning-teaser__eyebrow">
                  <i aria-hidden="true" /> Planifica tu inversión
                </span>
                <h2 id="planning-teaser-title">
                  Decide con los números <em>sobre la mesa.</em>
                </h2>
              </div>

              <div className="planning-teaser__intro">
                <p>
                  Simula cuánto puedes financiar y descubre cómo un aporte
                  extra puede cambiar los años de tu deuda. Dos lecturas claras
                  antes de tomar una decisión importante.
                </p>
                <Link href="/planifica" className="planning-teaser__cta">
                  <span>Abrir planificador</span>
                  <i aria-hidden="true">↗</i>
                </Link>
              </div>
            </header>

            <div className="planning-teaser__instrument reveal d1">
              <article className="planning-teaser__mortgage">
                <header className="planning-teaser__tool-header">
                  <span>01</span>
                  <p>Crédito hipotecario</p>
                  <small>Compra</small>
                </header>

                <div className="planning-teaser__mortgage-copy">
                  <p>Tu compra, puesta en contexto.</p>
                  <h3>Cuota, inicial<br />y plazo.</h3>
                </div>

                <div className="planning-teaser__range" aria-hidden="true">
                  <div className="planning-teaser__range-labels">
                    <span>Capacidad estimada</span>
                    <strong>Una lectura clara</strong>
                  </div>
                  <div className="planning-teaser__range-track">
                    <i />
                    <b />
                  </div>
                  <div className="planning-teaser__range-meta">
                    <span>Valor</span>
                    <span>Inicial</span>
                    <span>Plazo</span>
                  </div>
                </div>
              </article>

              <div className="planning-teaser__side">
                <article className="planning-teaser__amortization">
                  <header className="planning-teaser__tool-header">
                    <span>02</span>
                    <p>Amortización</p>
                    <small>Deuda</small>
                  </header>

                  <div className="planning-teaser__amortization-copy">
                    <h3>Recupera tiempo,<br /><em>no solo capital.</em></h3>
                    <p>
                      Compara tu plazo original con el efecto de aportar
                      directamente a capital.
                    </p>
                  </div>

                  <div className="planning-teaser__timeline" aria-hidden="true">
                    <span>Plazo original</span>
                    <i><b /></i>
                    <span>Con aporte extra</span>
                    <i><b /></i>
                  </div>
                </article>

                <div className="planning-teaser__note">
                  <span>Perspectiva antes que presión</span>
                  <p>
                    Resultados referenciales para llegar mejor preparado a tu
                    banco y a una conversación con VALIOR.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
