import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="home-cta" id="contacto">
      <div className="home-cta-surface">
        <div className="wrap">
          <div className="home-cta-box reveal">
            <div>
              <span className="label label--rule">Contacto</span>
              <h2>¿Evaluando una propiedad importante?</h2>
            </div>
            <div className="home-cta-action">
              <p>
                Una conversación privada basta para ordenar criterio,
                oportunidad y revisión legal.
              </p>
              <Link href="/contacto" className="btn btn-cream">
                Abrir formulario privado
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
