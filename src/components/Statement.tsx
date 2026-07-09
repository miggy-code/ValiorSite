import Image from "next/image";
import Link from "next/link";

const principles = [
  {
    num: "01",
    title: "Selección privada",
    text: "Acceso curado a propiedades excepcionales fuera del mercado masivo.",
  },
  {
    num: "02",
    title: "Negociación precisa",
    text: "Estrategia a medida para proteger valor y optimizar cada decisión.",
  },
  {
    num: "03",
    title: "Respaldo legal",
    text: "Revisión integral y acompañamiento jurídico en cada etapa.",
  },
];

export default function Statement() {
  return (
    <section className="stmt">
      <div className="wrap stmt-shell">
        <div className="stmt-mark reveal">
          <span>Valior</span>
          <span>Real estate &amp; legal advisory</span>
        </div>
        <div className="stmt-grid">
          <div className="stmt-copy reveal d1">
            <h2>
              <span>Pocas propiedades.</span>
              <span>Pocos clientes.</span>
              <em>Ninguna concesión.</em>
            </h2>
            <p>
              Valior acompaña un número limitado de operaciones al año, con
              criterio inmobiliario y revisión legal desde la primera visita
              hasta la firma.
            </p>
          </div>

          <div className="stmt-media reveal d1">
            <div className="stmt-photo">
              <Image
                src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1600&auto=format&fit=crop"
                alt="Residencia contemporánea con vista costera en Lima"
                fill
                sizes="(max-width: 900px) 92vw, 50vw"
              />
            </div>
          </div>
        </div>

        <div className="stmt-principles reveal d2">
          {principles.map((principle) => (
            <article key={principle.title} className="stmt-principle">
              <span className="stmt-num">{principle.num}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
            </article>
          ))}
        </div>

        <Link href="/#servicios" className="stmt-link reveal d3">
          Ver servicios <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
