import Image from "next/image";

export default function Nosotros() {
  return (
    <section className="about section-pad" id="nosotros">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-photo reveal">
            <Image
              className="about-photo-img"
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop"
              alt="Interior refinado — Valior Miraflores"
              width={700}
              height={600}
              loading="lazy"
              style={{ width: "100%", height: "600px", objectFit: "cover" }}
            />
            <div className="frame-tag">Valior · Miraflores</div>
          </div>
          <div className="about-body reveal d1">
            <span className="eyebrow">Nosotros</span>
            <h2>
              Expertas en el Lima <em>que pocos conocen</em>.
            </h2>
            <p>
              Conocemos Miraflores y los distritos que la rodean como solo quien
              vive y trabaja aquí puede conocerlos:{" "}
              <strong>
                la cuadra exacta, el edificio correcto, el momento oportuno.
              </strong>
            </p>
            <p>
              Trabajamos como una verdadera boutique — pocos clientes, total
              dedicación. Atendemos en español e inglés, con la cercanía de un
              asesor de confianza y la precisión de un equipo legal propio.
            </p>
            <p>
              Porque cada operación lleva asesoría jurídica integrada, tú solo
              te concentras en lo importante:{" "}
              <strong>decidir con tranquilidad.</strong>
            </p>
            <div className="about-sign">
              <span className="sig">Valior</span>
              <span className="role">Inmobiliaria &amp; Consultoría Legal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
