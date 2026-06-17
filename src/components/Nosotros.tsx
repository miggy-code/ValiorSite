import Image from "next/image";
import Link from "next/link";

const people = [
  {
    name: "Alessandra",
    role: "Asesora Inmobiliaria",
    img: "https://images.unsplash.com/photo-1767362828069-3a8c5324be53?q=80&w=1200&auto=format&fit=crop",
    alt: "Alessandra, asesora inmobiliaria de Valior",
  },
  {
    name: "María Gertrudis",
    role: "Abogada · Respaldo Legal",
    img: "https://images.unsplash.com/photo-1745962978493-26922b426899?q=80&w=1200&auto=format&fit=crop",
    alt: "María Gertrudis, abogada y respaldo legal de Valior",
  },
];

export default function Nosotros() {
  return (
    <section className="team-teaser section-pad" id="nosotros">
      <div className="wrap">
        <div className="tt-head reveal">
          <span className="eyebrow eyebrow-center">Nosotros</span>
          <h2>
            Una boutique <em>de dos generaciones</em>.
          </h2>
          <p>
            Madre e hija, derecho e inmobiliaria, bajo un mismo techo. Conoce a
            quienes están detrás de cada decisión en Valior.
          </p>
        </div>

        <div className="tt-people">
          {people.map((p, i) => (
            <Link
              href="/nosotros"
              key={p.name}
              className={`tt-person reveal d${i + 1}`}
            >
              <div className="tt-photo">
                <Image src={p.img} alt={p.alt} fill loading="lazy" style={{ objectFit: "cover" }} />
              </div>
              <span className="tt-name">{p.name}</span>
              <span className="tt-role">{p.role}</span>
            </Link>
          ))}
        </div>

        <div className="tt-cta reveal">
          <Link href="/nosotros" className="btn btn-ghost-dark">
            Conoce al equipo <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
