"use client";

import { useState } from "react";

const intentCopy = {
  vender: {
    title: "Hablemos de tu propiedad.",
    formTitle: "Vende tu propiedad",
    description:
      "Cuéntanos sobre tu propiedad. Revisaremos su posición en el mercado y te propondremos una ruta clara para venderla.",
  },
  comprar: {
    title: "Encuentra tu primer departamento.",
    formTitle: "Compra tu primer departamento",
    description:
      "Comparte tu punto de partida. Te ayudaremos a ordenar opciones, presupuesto y los pasos para comprar con seguridad.",
  },
  asesoria: {
    title: "Una asesoría a tu medida.",
    formTitle: "Agenda una asesoría",
    description:
      "Cuéntanos qué decisión estás evaluando. Te responderemos con una primera orientación y el siguiente paso más conveniente.",
  },
  default: {
    title: "Una conversación privada.",
    formTitle: "Solicita una conversación",
    description:
      "Cuéntanos qué estás evaluando. Te responderemos con una ruta clara: propiedad, estrategia y revisión legal desde el primer contacto.",
  },
} as const;

type ContactIntent = keyof typeof intentCopy;

export default function Contacto({
  plannerSummary = "",
  intent = "default",
}: {
  plannerSummary?: string;
  intent?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const copy = intentCopy[
    (intent in intentCopy ? intent : "default") as ContactIntent
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const newErrors: Record<string, boolean> = {};
    let ok = true;

    form.querySelectorAll<HTMLInputElement | HTMLSelectElement>("[required]").forEach((input) => {
      if (!input.value.trim()) {
        newErrors[input.name] = true;
        ok = false;
      }
    });

    setErrors(newErrors);
    if (ok) setSubmitted(true);
  };

  const clearError = (name: string) => {
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: false }));
  };

  return (
    <section className="contact" id="contacto">
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-intro reveal">
            <div className="contact-head">
              <span className="label label--rule">Contacto</span>
              <h1>{copy.title}</h1>
              <p>{copy.description}</p>
            </div>
            <div className="contact-detail">
              <a
                href="https://wa.me/51925033657"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4c1.4.7 2.9 1.1 4.7 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3C4 15 3.6 13.5 3.6 12 3.6 7.4 7.4 3.6 12 3.6S20.4 7.4 20.4 12 16.6 20.2 12 20.2zm5.5-5.8c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.2.2 2.1 3.2 5 4.5.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z" />
                </svg>
                +51 925 033 657
              </a>
              <a href="mailto:hola@valior.pe">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  aria-hidden="true"
                >
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
                hola@valior.pe
              </a>
              <span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  aria-hidden="true"
                >
                  <path d="M12 21s-7-5.2-7-11a7 7 0 0114 0c0 5.8-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                Miraflores, Lima, Perú
              </span>
            </div>
            <p className="contact-note">
              Atendemos pocas operaciones a la vez para proteger el criterio,
              la discreción y el tiempo de cada cliente.
            </p>
          </div>

          <div className="contact-side">
            {intent === "vender" ? (
              <details className="contact-benefits reveal d1" open>
                <summary>
                  <span className="contact-benefits-kicker">Para vendedores</span>
                  <span className="contact-benefits-title">
                    Beneficios de vender con Valior
                  </span>
                </summary>
                <p>
                  En VALIOR desarrollamos una estrategia integral 360° para
                  vender tu propiedad: analizamos el mercado actual, brindamos
                  respaldo legal y aplicamos marketing inmobiliario enfocado
                  en atraer compradores calificados. Nuestros honorarios se
                  pagan únicamente cuando la venta se concreta con éxito.
                </p>
              </details>
            ) : null}
            {intent === "comprar" ? (
              <details className="contact-benefits reveal d1" open>
                <summary>
                  <span className="contact-benefits-kicker">Para compradores</span>
                  <span className="contact-benefits-title">
                    Tu primer departamento es una gran decisión
                  </span>
                </summary>
                <div className="contact-benefits-copy">
                  <p>
                    En VALIOR te acompañamos en todo el proceso de compra para
                    que encuentres la propiedad ideal de acuerdo a tus
                    necesidades, presupuesto y objetivos.
                  </p>
                  <p>
                    Trabajamos con las principales inmobiliarias y
                    desarrolladoras de Lima Top y Lima Moderna, brindándote
                    acceso a un amplio portafolio de departamentos, proyectos
                    en planos y oportunidades de inversión.
                  </p>
                  <p>
                    Nuestro equipo te ayuda a evaluar tus opciones de
                    financiamiento, conocer los mejores proyectos disponibles
                    y tomar una decisión segura con asesoría inmobiliaria y
                    respaldo legal.
                  </p>
                </div>
              </details>
            ) : null}
            {intent === "asesoria" ? (
              <details className="contact-benefits reveal d1" open>
                <summary>
                  <span className="contact-benefits-kicker">Para decisiones inmobiliarias</span>
                  <span className="contact-benefits-title">
                    Toma mejores decisiones inmobiliarias con la asesoría adecuada
                  </span>
                </summary>
                <div className="contact-benefits-copy">
                  <p>
                    En VALIOR te brindamos una asesoría personalizada para
                    ayudarte a resolver tus dudas sobre compra, venta e
                    inversión inmobiliaria.
                  </p>
                  <p>
                    Analizamos tu situación, objetivos y necesidades para
                    orientarte con información clara, estrategia comercial y
                    respaldo legal, acompañándote en cada etapa del proceso.
                  </p>
                  <p>
                    Ya sea que estés buscando tu primer departamento, quieras
                    vender una propiedad o estés evaluando una oportunidad de
                    inversión, nuestro equipo está preparado para ayudarte.
                  </p>
                </div>
              </details>
            ) : null}
            <form className="lead reveal d1" onSubmit={handleSubmit} noValidate>
            {!submitted ? (
              <>
                <span className="form-title">{copy.formTitle}</span>
                {plannerSummary ? (
                  <div className="planner-contact-summary">
                    <span>Tu simulación</span>
                    <p>{plannerSummary}</p>
                  </div>
                ) : null}
                <input type="hidden" name="plannerSummary" value={plannerSummary} />
                <input type="hidden" name="intent" value={intent} />
                <div className={`field${errors.name ? " error" : ""}`}>
                  <label htmlFor="f-name">Nombre completo</label>
                  <input
                    type="text"
                    id="f-name"
                    name="name"
                    placeholder="Tu nombre"
                    required
                    onChange={() => clearError("name")}
                  />
                  <span className="err-msg">Por favor ingresa tu nombre.</span>
                </div>
                <div className={`field${errors.contact ? " error" : ""}`}>
                  <label htmlFor="f-contact">WhatsApp o email</label>
                  <input
                    type="text"
                    id="f-contact"
                    name="contact"
                    placeholder="Ej. +51 900 000 000"
                    required
                    onChange={() => clearError("contact")}
                  />
                  <span className="err-msg">Déjanos cómo contactarte.</span>
                </div>
                <button type="submit" className="btn btn-ink">
                  Enviar consulta
                </button>
              </>
            ) : (
              <div className="form-success show">
                <h3>Gracias.</h3>
                <p>
                  Hemos recibido tu consulta. Te escribiremos en breve para
                  iniciar la conversación.
                </p>
              </div>
            )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
