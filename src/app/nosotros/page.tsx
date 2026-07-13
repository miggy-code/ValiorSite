import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";
import Statement from "@/components/Statement";

export const metadata: Metadata = {
  title: "Nosotros | Valior",
  description:
    "Conoce a Alessandra Moreno y María Pacheco, las especialistas en estrategia comercial, derecho y gestión inmobiliaria detrás de Valior.",
};

const profiles = [
  {
    number: "01",
    name: "Alessandra Moreno",
    role: "Fundadora | Especialista en Comercialización Inmobiliaria y Marketing Estratégico",
    imageClassName: "bios-profile__image--alessandra",
    alt: "Alessandra Moreno, fundadora de Valior",
    paragraphs: [
      "Alessandra Moreno es fundadora de VALIOR y agente inmobiliaria inscrita en el Ministerio de Vivienda, Construcción y Saneamiento del Perú.",
      "Estudió la licenciatura en Comercialización con orientación en Marketing y Publicidad en la Universidad de Palermo, Argentina, formación que le permitió desarrollar una visión estratégica enfocada en ventas, posicionamiento y crecimiento comercial.",
      "Desde temprana edad emprendió en el rubro de la indumentaria, desarrollando una fuerte pasión por las ventas, la negociación y la atención al cliente. Posteriormente, llevó su experiencia comercial al sector inmobiliario, donde cuenta con más de 6 años de trayectoria asesorando en la compra, venta e inversión de propiedades.",
      "Su experiencia viviendo y viajando por distintos países le permitió ampliar su perspectiva sobre el mercado inmobiliario, los diferentes estilos de vida y las necesidades de las personas al momento de elegir un hogar o una inversión, incorporando una visión más global y orientada al cliente.",
      "En VALIOR lidera la estrategia comercial y el acompañamiento a clientes, combinando conocimiento del mercado, marketing y una visión enfocada en brindar decisiones inmobiliarias seguras y transparentes.",
    ],
    stat: "+6 años",
    statLabel: "en el sector inmobiliario",
  },
  {
    number: "02",
    name: "María Pacheco",
    role: "Cofundadora | Abogada y Especialista en Gestión Inmobiliaria",
    imageClassName: "bios-profile__image--maria",
    alt: "María Pacheco, cofundadora de Valior",
    paragraphs: [
      "María Pacheco es abogada, miembro del Colegio de Abogados de Lima y agente inmobiliaria inscrita en el Ministerio de Vivienda, Construcción y Saneamiento del Perú, con más de 30 años de experiencia profesional en asesoría legal y gestión inmobiliaria.",
      "Cuenta con especialización en Derecho Patrimonial, Derecho Notarial y Registral, Derecho Inmobiliario, Estudios de Títulos, Gestión Pública, Arbitraje, Derecho Civil y Derecho Procesal, áreas desde las cuales brinda seguridad jurídica, análisis estratégico y prevención de riesgos en cada operación.",
      "Como líder del área legal de VALIOR, supervisa y verifica minuciosamente cada proceso relacionado con los inmuebles, asegurando una correcta revisión documental y legal antes de cada operación, con el objetivo de brindar tranquilidad y respaldo a nuestros clientes.",
      "Su experiencia integra la visión jurídica con la estrategia comercial. Además, su Maestría en Negocios le permite liderar negociaciones, procesos de comercialización inmobiliaria y búsqueda personalizada de oportunidades de inversión.",
      "En VALIOR, María aporta conocimiento, experiencia y respaldo legal para que cada cliente pueda tomar decisiones inmobiliarias seguras, transparentes y orientadas a proteger su patrimonio.",
    ],
    stat: "+30 años",
    statLabel: "de experiencia profesional",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <ScrollReveal />
      <Nav tone="dark" />
      <main>
        <Statement />

        <section className="bios" id="equipo" aria-labelledby="bios-title">
          <div className="wrap">
            <header className="bios__header reveal">
              <p className="bios__eyebrow">Las personas detrás de VALIOR</p>
              <h2 id="bios-title">
                Dos trayectorias.<br />
                <em>Una visión compartida.</em>
              </h2>
              <p className="bios__intro">
                Estrategia comercial y respaldo legal trabajando desde la
                misma mesa, para acompañar cada decisión con una mirada
                completa.
              </p>
            </header>

            <div className="bios__list">
              {profiles.map((profile, index) => (
                <article
                  className={`bios-profile reveal d${index + 1}`}
                  key={profile.name}
                >
                  <div className="bios-profile__portrait-shell">
                    <div className="bios-profile__portrait">
                      <Image
                        src="/images/valior-nosotros-concept.png"
                        alt={profile.alt}
                        fill
                        sizes="(max-width: 860px) 100vw, 38vw"
                        className={profile.imageClassName}
                      />
                      <span className="bios-profile__number" aria-hidden="true">
                        {profile.number}
                      </span>
                    </div>
                  </div>

                  <div className="bios-profile__content">
                    <header>
                      <p className="bios-profile__role">{profile.role}</p>
                      <h3>{profile.name}</h3>
                    </header>

                    <div className="bios-profile__copy">
                      {profile.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="bios-profile__stat" aria-label={`${profile.stat} ${profile.statLabel}`}>
                      <strong>{profile.stat}</strong>
                      <span>{profile.statLabel}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
