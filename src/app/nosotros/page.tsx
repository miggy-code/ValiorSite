import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import "./team.css";

export const metadata: Metadata = {
  title: "Nosotros — El equipo de Valior",
  description:
    "Una boutique inmobiliaria con respaldo legal propio. Conoce a Alessandra y María Gertrudis, el equipo detrás de Valior.",
};

export default function NosotrosPage() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main className="team-page">
        {/* HERO */}
        <header className="team-hero">
          <Image
            className="team-hero-img"
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop"
            alt="Interior refinado — Valior Miraflores"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div className="team-hero-ov" />
          <div className="wrap team-hero-inner">
            <span className="eyebrow">Nosotros</span>
            <h1>
              El equipo detrás de <em>Valior</em>.
            </h1>
            <p>
              Una boutique inmobiliaria con respaldo legal propio — fundada por
              una hija y su madre.
            </p>
          </div>
        </header>

        {/* ALESSANDRA */}
        <section className="bio section-pad">
          <div className="wrap bio-grid">
            <div className="bio-photo reveal">
              <Image
                src="https://images.unsplash.com/photo-1767362828069-3a8c5324be53?q=80&w=1400&auto=format&fit=crop"
                alt="Alessandra, asesora inmobiliaria y fundadora de Valior"
                fill
                loading="lazy"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
              <span className="bio-tag">Alessandra</span>
            </div>
            <div className="bio-body reveal d1">
              <span className="eyebrow">Asesora Inmobiliaria · Fundadora</span>
              <h2>Alessandra</h2>
              <p className="bio-lede">
                Fundó Valior con una convicción simple: comprar una propiedad
                debería sentirse como una decisión acompañada, nunca como una
                transacción apresurada.
              </p>
              <p>
                [Texto de muestra] Con más de una década en el mercado inmobiliario
                limeño, Alessandra ha hecho de Miraflores y los distritos que la
                rodean su especialidad — la cuadra exacta, el edificio correcto,
                el momento oportuno. Su lectura del mercado combina criterio de
                inversión con un trato cercano y sin guiones.
              </p>
              <p>
                [Texto de muestra] Su enfoque es deliberadamente boutique: pocos
                clientes a la vez, total dedicación y una opinión honesta sobre
                cada oportunidad. Atiende en español e inglés a compradores
                locales e inversores internacionales.
              </p>
              <ul className="bio-points">
                <li>Propiedades de lujo y residencias privadas</li>
                <li>Inversión, rentabilidad y plusvalía</li>
                <li>Acompañamiento a clientes internacionales</li>
              </ul>
            </div>
          </div>
        </section>

        {/* MARÍA GERTRUDIS */}
        <section className="bio bio-alt section-pad">
          <div className="wrap bio-grid reverse">
            <div className="bio-photo reveal">
              <Image
                src="https://images.unsplash.com/photo-1745962978493-26922b426899?q=80&w=1400&auto=format&fit=crop"
                alt="María Gertrudis, abogada y respaldo legal de Valior"
                fill
                loading="lazy"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
              <span className="bio-tag">María Gertrudis</span>
            </div>
            <div className="bio-body reveal d1">
              <span className="eyebrow">Abogada · Respaldo Legal</span>
              <h2>María Gertrudis</h2>
              <p className="bio-lede">
                El respaldo legal de Valior no es un servicio que se contrata
                aparte: es la madre de su fundadora.
              </p>
              <p>
                [Texto de muestra] María Gertrudis es abogada con una larga
                trayectoria en derecho inmobiliario y notarial. Revisa cada
                operación de principio a fin — títulos, cargas, contratos y
                firma — con el rigor de quien entiende que una sola línea mal
                redactada puede costar un patrimonio.
              </p>
              <p>
                [Texto de muestra] Su rol garantiza que cada compra llegue
                blindada antes de que el cliente tenga que preocuparse por ella.
                Es, además, la razón por la que en Valior el derecho y la
                inmobiliaria hablan el mismo idioma.
              </p>
              <ul className="bio-points">
                <li>Due diligence y estudio de títulos</li>
                <li>Contratos, minutas y saneamiento</li>
                <li>Acompañamiento notarial y de firma</li>
              </ul>
            </div>
          </div>
        </section>

        {/* RESPALDO / UN GRAN EQUIPO */}
        <section className="respaldo section-pad">
          <div className="wrap">
            <div className="respaldo-head reveal">
              <span className="eyebrow eyebrow-center">Un gran equipo</span>
              <h2>
                Derecho e inmobiliaria, <em>sin costuras</em>.
              </h2>
              <p>
                Lo que para otros son dos trámites separados, en Valior es una
                sola conversación. Alessandra encuentra la oportunidad; María
                Gertrudis la asegura. Juntas convierten una compra compleja en
                una decisión tranquila.
              </p>
            </div>
            <div className="respaldo-points">
              <div className="rp reveal d1">
                <span className="rp-num">01</span>
                <h3>Una sola interlocución</h3>
                <p>Inmobiliaria y legal bajo un mismo techo, sin reenvíos.</p>
              </div>
              <div className="rp reveal d2">
                <span className="rp-num">02</span>
                <h3>Sin costos ocultos</h3>
                <p>El respaldo jurídico va incluido en cada operación.</p>
              </div>
              <div className="rp reveal d3">
                <span className="rp-num">03</span>
                <h3>Confianza familiar</h3>
                <p>Dos generaciones que responden por su propio nombre.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="team-cta-band">
          <div className="wrap">
            <span className="eyebrow eyebrow-center">Contacto</span>
            <h2>
              Hablemos de tu <em>próximo paso</em>.
            </h2>
            <Link href="/#contacto" className="btn btn-gold">
              Conversemos
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
