export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand">
              <span className="brand-name">Valior</span>
              <span className="brand-sub">Boutique Inmobiliaria &amp; Consultoría Legal</span>
            </div>
            <p className="fb-tagline">Construimos patrimonio con visión.</p>
            <p>Estrategia, confianza y resultados.</p>
          </div>
          <div className="footer-mid">
            <span className="fm-label">Boutique</span>
            Inmobiliaria &amp; Consultoría Legal
            <br />
            Miraflores, Lima, Perú
            <br />
            +51 999 999 999
          </div>
          <div className="footer-social">
            <span className="fm-label">Síguenos</span>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
              Instagram
            </a>
            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4c1.4.7 2.9 1.1 4.7 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3C4 15 3.6 13.5 3.6 12 3.6 7.4 7.4 3.6 12 3.6S20.4 7.4 20.4 12 16.6 20.2 12 20.2z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Valior. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
