import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Nosotros | Valior",
  description:
    "Conoce el criterio local, la asesoría legal y el servicio boutique detrás de Valior.",
};

const principles = [
  {
    num: "01",
    title: "Selección antes que volumen",
    text: "No mostramos todo lo disponible. Filtramos por ubicación, arquitectura, documentación y potencial patrimonial — y descartamos casi todo.",
  },
  {
    num: "02",
    title: "Legal desde el inicio",
    text: "La revisión jurídica no llega al final. Acompaña cada decisión, para que las sorpresas aparezcan antes de negociar, no después de firmar.",
  },
  {
    num: "03",
    title: "Discreción como método",
    text: "Trabajamos con pocos clientes a la vez, para proteger el tiempo, la información y la intención de cada operación.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <ScrollReveal />
      <Nav tone="dark" />
      <main>
        <section className="np-hero">
          <div className="wrap">
            <span className="label label--rule reveal">Nosotros</span>
            <h1 className="reveal d1">
              Detrás de cada firma hay un <em>criterio</em>.
            </h1>
            <div className="np-hero-sub reveal d2">
              <p>
                Valior es una casa boutique de madre e hija: una abogada con
                años de práctica y una agente que vive el mercado de lujo
                limeño todos los días. Pocos clientes, acceso privado y el
                derecho sentado a la mesa — no al final de ella.
              </p>
              <Link href="/contacto" className="btn btn-ink">
                Solicitar una conversación
              </Link>
            </div>
            <div className="np-hero-media reveal d2">
              <div className="img-box">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2200&auto=format&fit=crop"
                  alt="Sala luminosa de una residencia seleccionada por Valior"
                  fill
                  preload
                  sizes="(max-width: 1080px) 100vw, 1400px"
                />
              </div>
              <p className="caption">Lima — residencia seleccionada</p>
            </div>
          </div>
        </section>

        <section className="np-quote">
          <div className="wrap">
            <blockquote className="reveal">
              Nuestro trabajo empieza antes de la primera visita: la calle, el
              edificio, los títulos, la historia del precio — y la vida que esa
              decisión tendrá <em>después de la firma</em>.
            </blockquote>
            <div className="quote-attr reveal d1">
              <span className="label label--rule">Alessandra &amp; María — Valior</span>
            </div>
          </div>
        </section>

        <section className="team">
          <div className="wrap">
            <div className="team-head reveal">
              <span className="label label--rule">El equipo</span>
              <h2>
                Madre e hija. Dos oficios, <em>una sola mesa</em>.
              </h2>
              <p>
                Valior existe porque nuestras dos disciplinas se necesitan.
                Alessandra encuentra la propiedad; María la protege. Cada
                cliente trabaja con ambas, en la misma conversación, del primer
                café a la escritura.
              </p>
            </div>
            <div className="team-grid">
              <div className="profile reveal">
                <div className="img-box">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
                    alt="Alessandra, agente inmobiliaria de Valior"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1080px) 90vw, 44vw"
                  />
                </div>
                <span className="prof-role">Agente inmobiliaria</span>
                <h3>Alessandra</h3>
                <p>
                  Alessandra dirige la búsqueda y la negociación. Conoce el
                  mercado de lujo limeño en el terreno — qué edificio se pide
                  en voz baja, qué calle está por cambiar — y lo trabaja con
                  la energía de quien creció entre estas cuadras. Es la primera
                  llamada del cliente y la última voz en cada negociación.
                </p>
              </div>
              <div className="profile reveal d1">
                <div className="img-box">
                  <Image
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop"
                    alt="María, abogada de Valior"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1080px) 90vw, 44vw"
                  />
                </div>
                <span className="prof-role">Abogada</span>
                <h3>María</h3>
                <p>
                  María es la razón por la que en Valior nadie firma con dudas.
                  Abogada con una larga trayectoria en derecho inmobiliario y
                  patrimonial, revisa títulos, cargas y contratos antes de que
                  la negociación empiece. Su regla es simple: las sorpresas se
                  encuentran en la mesa, nunca en la notaría.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="np-principles">
          <div className="wrap">
            <span className="label label--rule reveal">Principios</span>
            {principles.map((item, index) => (
              <article key={item.num} className={`prin reveal d${index + 1}`}>
                <span className="num">{item.num}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="np-close">
          <div className="wrap">
            <div className="np-close-grid">
              <div className="np-close-media reveal">
                <div className="img-box">
                  <Image
                    src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1400&auto=format&fit=crop"
                    alt="Interior sereno de una residencia asesorada por Valior"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1080px) 90vw, 42vw"
                  />
                </div>
                <p className="caption">Residencia asesorada — 2026</p>
              </div>
              <div className="np-close-body reveal d1">
                <h2>
                  El mercado ofrece ruido. Nosotros, <em>señal</em>.
                </h2>
                <p>
                  Listados repetidos, precios sin sustento, documentación
                  incompleta y oportunidades que nunca se anuncian: así es el
                  mercado limeño visto de cerca. Valior existe para ordenarlo
                  con criterio.
                </p>
                <p>
                  Cada cliente recibe una lectura clara del mercado y una ruta
                  legal desde el primer contacto. Menos improvisación, más
                  certeza.
                </p>
                <Link href="/contacto" className="btn btn-ink">
                  Solicitar una conversación
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
