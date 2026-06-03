const steps = [
  {
    num: "01",
    en: "Consulta",
    title: "Entendemos tu perfil",
    desc: "Escuchamos tus objetivos y el horizonte que imaginas. Sin guiones, sin prisa — solo una conversación honesta sobre lo que buscas.",
  },
  {
    num: "02",
    en: "Estrategia",
    title: "Identificamos la oportunidad",
    desc: "Trazamos el camino hacia la propiedad ideal, con criterio de inversión y el respaldo legal integrado desde el primer día.",
  },
  {
    num: "03",
    en: "Cierre",
    title: "Te acompañamos hasta la firma",
    desc: "Y mucho más allá de ella. Cada detalle jurídico y financiero, resuelto — para que tú solo te concentres en disfrutar.",
  },
];

export default function Proceso() {
  return (
    <section className="process section-pad" id="proceso">
      <div className="wrap">
        <div className="ed-head reveal">
          <span className="ed-index">I</span>
          <div className="ed-htext">
            <span className="eyebrow">Cómo trabajamos</span>
            <h2>
              Tres pasos hacia <em>tu patrimonio</em>.
            </h2>
            <span className="sub-en">
              How We Work — Three Steps to Your Legacy
            </span>
          </div>
        </div>
        <div className="proc-cols">
          {steps.map((step, i) => (
            <div key={step.num} className={`proc-col reveal d${i + 1}`}>
              <div className="proc-col-num">{step.num}</div>
              <span className="proc-col-en">{step.en}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
