import Image from "next/image";
import Link from "next/link";

const founders = [
  {
    name: "Alessandra",
    role: "Agente inmobiliaria",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    alt: "Alessandra, agente inmobiliaria de Valior",
  },
  {
    name: "María",
    role: "Abogada",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop",
    alt: "María, abogada de Valior",
  },
];

export default function Nosotros() {
  return (
    <section className="founders" id="nosotros">
      <div className="wrap">
        <div className="founders-grid">
          <div className="founders-body reveal">
            <span className="label label--rule">Nosotros</span>
            <h2>
              Madre e hija. Dos oficios, <em>una sola mesa</em>.
            </h2>
            <p>
              Somos Alessandra y María — agente y abogada. Una encuentra la
              propiedad; la otra la protege. Cada cliente trabaja con ambas,
              en la misma conversación, del primer café a la escritura.
            </p>
            <p>
              Conocemos Miraflores y los distritos que la rodean como solo
              quien vive y trabaja aquí puede conocerlos:{" "}
              <strong>
                la cuadra exacta, el edificio correcto, el momento oportuno.
              </strong>
            </p>
            <Link href="/nosotros" className="tlink">
              Leer nuestra historia <span className="arr">→</span>
            </Link>
          </div>
          <div className="founders-pair">
            {founders.map((f, i) => (
              <Link
                key={f.name}
                href="/nosotros"
                className={`fp reveal d${i + 1}`}
                aria-label={`Conoce la historia de ${f.name} y María en Valior`}
              >
                <div className="img-box">
                  <span className="fp-index" aria-hidden="true">0{i + 1}</span>
                  <Image
                    src={f.img}
                    alt={f.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1080px) 45vw, 24vw"
                  />
                </div>
                <h3>{f.name}</h3>
                <span className="fp-role">{f.role}</span>
                <span className="fp-link">
                  Conocer su historia <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
