import Image from "next/image";

const servicePillars = [
  {
    title: "Encontrar con criterio",
    description:
      "Definimos la propiedad correcta y traducimos tus objetivos en una búsqueda concreta, bien sustentada.",
    items: [
      "Consultoría para la búsqueda de propiedades según el rubro",
      "Estudio de títulos de propiedad",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop",
    alt: "Arquitectura contemporánea para inversión inmobiliaria",
  },
  {
    title: "Ordenar y proteger",
    description:
      "Revisamos antecedentes y resolvemos la situación legal para que el inmueble avance sobre una base jurídica clara.",
    items: [
      "Levantamiento de hipotecas, anotaciones preventivas y otros gravámenes",
      "División y partición de bienes heredados",
      "Regularización de predios",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop",
    alt: "Residencia privada de arquitectura contemporánea",
  },
  {
    title: "Llevar al mercado",
    description:
      "Diseñamos el posicionamiento, la presentación y la gestión comercial según el inmueble y su audiencia.",
    items: [
      "Comercialización de proyectos inmobiliarios",
      "Comercialización de inmuebles de segundo uso",
      "Arriendos de corta y larga estancia",
    ],
    image:
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2400&auto=format&fit=crop",
    alt: "Interior residencial con luz natural",
  },
];

export default function Servicios() {
  return (
    <section className="services" id="servicios">
      <div className="wrap">
        <header className="services-intro reveal">
          <p>Servicios inmobiliarios</p>
          <h2>Una mirada completa sobre cada propiedad.</h2>
          <div className="services-intro-copy">
            <p>
              Integramos búsqueda, seguridad jurídica y comercialización para
              acompañar la operación de principio a fin.
            </p>
          </div>
        </header>

        <div className="services-flow">
          {servicePillars.map((pillar, index) => (
            <article className="service-chapter reveal" key={pillar.title}>
              <div className="service-chapter-media">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  sizes="(max-width: 860px) 100vw, 52vw"
                  loading="lazy"
                  className="service-chapter-image"
                />
              </div>

              <div className="service-chapter-body">
                <span className="service-chapter-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{pillar.title}</h3>
                <p className="service-chapter-description">
                  {pillar.description}
                </p>
                <ul>
                  {pillar.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
