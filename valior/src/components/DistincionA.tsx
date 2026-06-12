import Image from "next/image";

const items = [
  {
    num: "I",
    title: "Conocimiento local profundo",
    desc: "Especialistas en el mercado limeño de lujo, distrito por distrito.",
    delay: "d1",
  },
  {
    num: "II",
    title: "Asesoría legal incluida",
    desc: "Respaldo jurídico en cada operación, sin costos ni sorpresas.",
    delay: "d2",
  },
  {
    num: "III",
    title: "Servicio boutique",
    desc: "Atención personalizada y directa, sin intermediarios.",
    delay: "d3",
  },
  {
    num: "IV",
    title: "Alcance internacional",
    desc: "Experiencia con clientes extranjeros e inversores globales.",
    delay: "d4",
  },
];

export default function DistincionA() {
  return (
    <section className="distinction section-pad" id="distincion">
      <div className="wrap">
        <div className="ed-head reveal">
          <span className="ed-index">II</span>
          <div className="ed-htext">
            <span className="eyebrow">Nuestra distinción</span>
            <h2>
              La diferencia está <em>en el detalle</em>.
            </h2>
            <span className="sub-en">La diferencia Valior</span>
          </div>
        </div>
      </div>
      <div className="da-split reveal">
        <div className="da-photo">
          <Image
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop"
            alt="Arquitectura de lujo — Valior"
            fill
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
          <div className="da-photo-overlay" />
        </div>
        <div className="da-items">
          {items.map((item) => (
            <div key={item.num} className={`da-item reveal ${item.delay}`}>
              <span className="da-num">{item.num}</span>
              <div className="da-rule" />
              <div className="da-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
