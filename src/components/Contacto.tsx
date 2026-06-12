"use client";

import { useRef, useState } from "react";
import Link from "next/link";

export default function Contacto() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

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
    <section className="contact section-pad" id="contacto">
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-intro reveal">
            <span className="eyebrow">Contacto</span>
            <h2>
              <em>Hablemos.</em>
            </h2>
            <p>Tu próxima propiedad comienza con una conversación.</p>
            <div className="contact-detail">
              <a
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4c1.4.7 2.9 1.1 4.7 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3C4 15 3.6 13.5 3.6 12 3.6 7.4 7.4 3.6 12 3.6S20.4 7.4 20.4 12 16.6 20.2 12 20.2zm5.5-5.8c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.2.2 2.1 3.2 5 4.5.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z" />
                </svg>
                +51 999 999 999
              </a>
              <span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <path d="M12 21s-7-5.2-7-11a7 7 0 0114 0c0 5.8-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                Av. principal, Miraflores · Lima, Perú
              </span>
            </div>
          </div>

          <form
            className="lead reveal d1"
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
          >
            {!submitted ? (
              <>
                <span className="form-eyebrow">Solicita una conversación</span>
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
                  <label htmlFor="f-contact">WhatsApp o Email</label>
                  <input
                    type="text"
                    id="f-contact"
                    name="contact"
                    placeholder="+51 999 999 999 · tú@email.com"
                    required
                    onChange={() => clearError("contact")}
                  />
                  <span className="err-msg">Déjanos cómo contactarte.</span>
                </div>
                <div className="field-row">
                  <div className={`field${errors.looking ? " error" : ""}`}>
                    <label htmlFor="f-looking">¿Qué estás buscando?</label>
                    <select
                      id="f-looking"
                      name="looking"
                      required
                      defaultValue=""
                      onChange={() => clearError("looking")}
                    >
                      <option value="" disabled>
                        Selecciona
                      </option>
                      <option>Apartamento</option>
                      <option>Casa</option>
                      <option>Inversión</option>
                      <option>Asesoría</option>
                    </select>
                    <span className="err-msg">Elige una opción.</span>
                  </div>
                  <div className={`field${errors.budget ? " error" : ""}`}>
                    <label htmlFor="f-budget">Presupuesto aproximado</label>
                    <select
                      id="f-budget"
                      name="budget"
                      required
                      defaultValue=""
                      onChange={() => clearError("budget")}
                    >
                      <option value="" disabled>
                        Selecciona
                      </option>
                      <option>&lt; $200k</option>
                      <option>$200k – $500k</option>
                      <option>$500k – $1M</option>
                      <option>+$1M</option>
                    </select>
                    <span className="err-msg">Elige un rango.</span>
                  </div>
                </div>
                <button type="submit" className="btn btn-gold">
                  Enviar consulta
                </button>
              </>
            ) : (
              <div className="form-success show">
                <div className="check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    <path d="M5 12l4.5 4.5L19 7" />
                  </svg>
                </div>
                <h3>Gracias.</h3>
                <p>
                  Hemos recibido tu consulta. Te escribiremos en breve para
                  iniciar la conversación.
                </p>
              </div>
            )}
          </form>
        </div>

        <div className="contact-cta reveal">
          <a
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost-dark"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ color: "var(--gold-deep)" }}
            >
              <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4c1.4.7 2.9 1.1 4.7 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3C4 15 3.6 13.5 3.6 12 3.6 7.4 7.4 3.6 12 3.6S20.4 7.4 20.4 12 16.6 20.2 12 20.2z" />
            </svg>
            O escríbenos directamente
          </a>
        </div>
      </div>
    </section>
  );
}
