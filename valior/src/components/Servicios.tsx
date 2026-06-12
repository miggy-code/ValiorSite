"use client";

import Image from "next/image";

const WA_URL = "https://wa.me/51999999999";

const handleContact = () => {
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  window.open(WA_URL, "_blank", "noopener,noreferrer");
};

const services = [
  {
    num: "01",
    cat: "Residencias",
    title: "Apartamentos de Lujo",
    desc: "Selección exclusiva en Miraflores, San Isidro y Barranco — propiedades que rara vez llegan al mercado abierto.",
    img: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2400&auto=format&fit=crop",
    alt: "Apartamento de lujo moderno, luz natural",
    align: "left",
  },
  {
    num: "02",
    cat: "Inversión",
    title: "Propiedades de Inversión",
    desc: "Rentabilidad y plusvalía con asesoría estratégica, respaldada por un análisis profundo del mercado limeño.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop",
    alt: "Torres de vidrio — inversión en Lima",
    align: "right",
  },
  {
    num: "03",
    cat: "Privado",
    title: "Casas y Villas",
    desc: "Residencias privadas para vivir y preservar patrimonio, con la discreción que cada familia merece.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop",
    alt: "Villa privada de lujo con piscina",
    align: "left",
  },
];

export default function Servicios() {
  return (
    <section className="services" id="servicios">
      <div className="wrap">
        <div className="ed-head reveal">
          <span className="ed-index">III</span>
          <div className="ed-htext">
            <span className="eyebrow">Servicios</span>
            <h2>
              Una selección,
              <br />
              no un <em>catálogo</em>.
            </h2>
            <span className="sub-en">What We Do — A Curated Selection</span>
          </div>
        </div>
      </div>
      <div className="srv-panels">
        {services.map((s, i) => (
          <article
            key={s.num}
            className={`srv-panel reveal${s.align === "right" ? " srv-right" : ""}`}
          >
            <Image
              className="srv-img"
              src={s.img}
              alt={s.alt}
              fill
              loading={i === 0 ? "eager" : "lazy"}
              style={{ objectFit: "cover" }}
            />
            <div className="srv-overlay" />
            <div className="srv-content">
              <div className="srv-text">
                <div className="srv-meta">
                  <span className="srv-num">{s.num}</span>
                  <span className="srv-cat">{s.cat}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <button onClick={handleContact} className="srv-link">
                  Conversemos <span className="arr">→</span>
                </button>
              </div>
              <div className="srv-watermark" aria-hidden="true">{s.num}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
