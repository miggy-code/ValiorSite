import Link from "next/link";

export default function PlanningTeaser() {
  return (
    <section className="planning-teaser" aria-labelledby="planning-teaser-title">
      <div className="wrap">
        <div className="planning-teaser__simple reveal">
          <div>
            <span className="label label--rule">Planifica tu inversión</span>
            <h2 id="planning-teaser-title">Una decisión importante merece números claros.</h2>
          </div>
          <div className="planning-teaser__simple-copy">
            <p>
              Estima tu cuota hipotecaria y entiende cómo un aporte a capital
              puede reducir el plazo de tu crédito.
            </p>
            <Link href="/planifica" className="btn btn-ink">
              Abrir planificador
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
