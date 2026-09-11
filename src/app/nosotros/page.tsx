import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import styles from "./nosotros.module.css";

export const metadata: Metadata = {
  title: "Nosotros | Valior",
  description:
    "Conoce a las fundadoras de Valior y al equipo especializado que acompaña cada operación inmobiliaria.",
};

const profiles = [
  {
    slug: "maria",
    name: "María Pacheco",
    role: "Fundadora | Abogada y Especialista en Gestión Inmobiliaria",
    specialty: "Derecho y gestión inmobiliaria",
    image: "/images/maria-pacheco.jpeg",
    alt: "María Pacheco de pie en su oficina",
    paragraphs: [
      "María Pacheco es abogada, miembro del Colegio de Abogados de Lima y agente inmobiliaria inscrita en el Ministerio de Vivienda, Construcción y Saneamiento del Perú, con más de 30 años de experiencia profesional en asesoría legal y gestión inmobiliaria.",
      "Cuenta con especialización en Derecho Patrimonial, Derecho Notarial y Registral, Derecho Inmobiliario, Estudios de Títulos, Gestión Pública, Arbitraje, Derecho Civil y Derecho Procesal, áreas desde las cuales brinda seguridad jurídica, análisis estratégico y prevención de riesgos en cada operación.",
      "Como líder del área legal de VALIOR, supervisa y verifica minuciosamente cada proceso relacionado con los inmuebles, asegurando una correcta revisión documental y legal antes de cada operación, con el objetivo de brindar tranquilidad y respaldo a nuestros clientes.",
      "Su experiencia integra la visión jurídica con la estrategia comercial. Además, su Maestría en Negocios le permite liderar negociaciones, procesos de comercialización inmobiliaria y búsqueda personalizada de oportunidades de inversión.",
      "En VALIOR, María aporta conocimiento, experiencia y respaldo legal para que cada cliente pueda tomar decisiones inmobiliarias seguras, transparentes y orientadas a proteger su patrimonio.",
    ],
    credentials: [
      "Abogada colegiada en Lima",
      "Derecho inmobiliario y patrimonial",
      "Estudio de títulos y gestión registral",
    ],
    stat: "+30 años",
    statLabel: "de experiencia profesional",
  },
  {
    slug: "alessandra",
    name: "Alessandra Moreno",
    role: "Fundadora | Especialista en Comercialización Inmobiliaria y Marketing Estratégico",
    specialty: "Estrategia comercial y marketing",
    image: "/images/alessandra-moreno.png",
    alt: "Alessandra Moreno sentada con su computadora portátil",
    paragraphs: [
      "Alessandra Moreno es fundadora de VALIOR y agente inmobiliaria inscrita en el Ministerio de Vivienda, Construcción y Saneamiento del Perú.",
      "Estudió la licenciatura en Comercialización con orientación en Marketing y Publicidad en la Universidad de Palermo, Argentina, formación que le permitió desarrollar una visión estratégica enfocada en ventas, posicionamiento y crecimiento comercial.",
      "Desde temprana edad emprendió en el rubro de la indumentaria, desarrollando una fuerte pasión por las ventas, la negociación y la atención al cliente. Posteriormente, llevó su experiencia comercial al sector inmobiliario, donde cuenta con más de 6 años de trayectoria asesorando en la compra, venta e inversión de propiedades.",
      "Su experiencia viviendo y viajando por distintos países le permitió ampliar su perspectiva sobre el mercado inmobiliario, los diferentes estilos de vida y las necesidades de las personas al momento de elegir un hogar o una inversión, incorporando una visión más global y orientada al cliente.",
      "En VALIOR lidera la estrategia comercial y el acompañamiento a clientes, combinando conocimiento del mercado, marketing y una visión enfocada en brindar decisiones inmobiliarias seguras y transparentes.",
    ],
    credentials: [
      "Agente inmobiliaria registrada",
      "Comercialización y marketing",
      "Estrategia de venta y negociación",
    ],
    stat: "+6 años",
    statLabel: "en el sector inmobiliario",
  },
] as const;

const capabilities = [
  {
    title: "Comercialización inmobiliaria",
    detail: "Compra · Venta · Alquiler · Proyectos · Inversiones",
  },
  {
    title: "Asesoría legal",
    detail: "Abogados inmobiliarios · Contratos · Saneamiento y más.",
  },
  {
    title: "Financiamiento",
    detail: "Créditos hipotecarios · Evaluación · Opciones bancarias.",
  },
  {
    title: "Contabilidad & tributación",
    detail: "Impuestos · Rentas · Alcabala · Asesoría tributaria.",
  },
  {
    title: "Administración de propiedades",
    detail:
      "Gestión integral por plataformas digitales y mantenimiento del inmueble.",
  },
  {
    title: "Inversión inmobiliaria",
    detail: "Rentabilidad · ROI · Plusvalía · Estrategias de inversión.",
  },
  {
    title: "Relocation & extranjeros",
    detail:
      "Compra de propiedades · Gestión de financiamiento para extranjeros que quieran invertir en Perú · Red de especialistas.",
  },
  {
    title: "Proyectos inmobiliarios",
    detail: "Comercialización · Preventa · Lanzamientos · Marketing y publicidad.",
  },
  {
    title: "Real estate corporativo",
    detail: "Oficinas · Locales comerciales · Terrenos · Espacios empresariales.",
  },
] as const;

type Profile = (typeof profiles)[number];

function FounderProfile({ profile }: { profile: Profile }) {
  return (
    <article
      className={styles.profile}
      id={profile.slug}
      aria-labelledby={`${profile.slug}-name`}
    >
      <figure className={styles.profileVisual}>
        <div className={`${styles.profilePhoto} ${styles[profile.slug]}`}>
          <Image
            src={profile.image}
            alt={profile.alt}
            fill
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1400px) 40vw, 530px"
            className={styles.portrait}
          />
        </div>
        <figcaption className={styles.experience}>
          <strong>{profile.stat}</strong>
          <span>{profile.statLabel}</span>
        </figcaption>
      </figure>

      <div className={styles.profileContent}>
        <header>
          <h2 id={`${profile.slug}-name`}>{profile.name}</h2>
          <p className={styles.role}>{profile.role}</p>
        </header>

        <div className={styles.biography}>
          {profile.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <ul className={styles.credentials} aria-label="Especialidades">
          {profile.credentials.map((credential) => (
            <li key={credential}>{credential}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function CapabilityDirectory() {
  const groups = [
    { title: "Comprar, vender e invertir", items: [0, 5, 7] },
    { title: "Proteger tu patrimonio", items: [1, 2, 3] },
    { title: "Acompañarte más allá", items: [4, 6, 8] },
  ];

  return (
    <section
      className={styles.capabilities}
      aria-labelledby="nosotros-capabilities-title"
    >
      <header>
        <h2 id="nosotros-capabilities-title">
          Un equipo completo, a tu lado.
        </h2>
        <p>
          A nuestra experiencia se suma una red de especialistas, coordinada por
          Valior para acompañar cada etapa de tu operación inmobiliaria.
        </p>
      </header>

      <div className={styles.directory}>
        {groups.map((group) => (
          <details key={group.title} className={styles.capabilityGroup}>
            <summary>
              <h3>{group.title}</h3>
              <span className={styles.disclosureIcon} aria-hidden="true" />
            </summary>
            <ul>
              {group.items.map((index) => (
                <li key={capabilities[index].title}>
                  <h4>{capabilities[index].title}</h4>
                  <p>{capabilities[index].detail.replaceAll(" · ", ", ")}</p>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </section>
  );
}

export default function NosotrosPage() {
  return (
    <div className={styles.page}>
      <a href="#equipo" className={styles.skipLink}>Ir a las biografías</a>
      <Nav tone="dark" />
      <main>
        <section className={styles.hero} aria-labelledby="nosotros-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Las personas detrás de Valior</p>
            <h1 id="nosotros-title">Dos miradas.<br />Una misma visión.</h1>
            <p className={styles.introduction}>
              Somos María y Alessandra. Madre e hija, fundadoras de Valior.
              Estrategia inmobiliaria y respaldo legal, contigo.
            </p>
            <a href="#equipo" className={styles.textLink}>
              Conócenos <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className={styles.heroPortraits}>
            {profiles.map((profile) => (
              <a
                href={`#${profile.slug}`}
                className={styles.portraitLink}
                key={profile.slug}
              >
                <div className={`${styles.heroPhoto} ${styles[profile.slug]}`}>
                  <Image
                    src={profile.image}
                    alt={profile.alt}
                    fill
                    loading="eager"
                    fetchPriority="high"
                    sizes="(max-width: 767px) calc(50vw - 28px), (max-width: 1023px) 35vw, (max-width: 1400px) 24vw, 325px"
                    className={styles.portrait}
                  />
                </div>
                <div className={styles.portraitCaption}>
                  <span>
                    <strong>{profile.name}</strong>
                    <span>{profile.specialty}</span>
                  </span>
                  <span className={styles.portraitArrow} aria-hidden="true">↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section
          className={styles.profiles}
          id="equipo"
          aria-label="Fundadoras y equipo Valior"
        >
          {profiles.map((profile) => (
            <FounderProfile profile={profile} key={profile.slug} />
          ))}
        </section>

        <CapabilityDirectory />

        <section className={styles.closing} aria-labelledby="nosotros-closing-title">
          <p>Tu próxima decisión merece una conversación.</p>
          <h2 id="nosotros-closing-title">Hablemos de lo que viene.</h2>
          <Link href="/contacto?intent=asesoria" className={styles.contactLink}>
            Contacto <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
