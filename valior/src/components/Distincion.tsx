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

export default function Distincion() {
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
            <span className="sub-en">The Valior Difference</span>
          </div>
        </div>
        <div className="dist-strips">
          {items.map((item) => (
            <div key={item.num} className={`dist-strip reveal ${item.delay}`}>
              <div className="dist-strip-inner">
                <span className="dist-big-num">{item.num}</span>
                <div className="dist-vline" />
                <div className="dist-body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
