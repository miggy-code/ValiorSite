import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="footer-mark">VALIOR</div>
        <div className="footer-cols">
          <div>
            <span className="fm-label">La casa</span>
            <p>
              Inmobiliaria boutique y asesoría legal.
              <br />
              Pocas propiedades, pocos clientes, ninguna concesión.
            </p>
          </div>
          <div>
            <span className="fm-label">Dirección</span>
            <address>
              Miraflores, Lima, Perú
              <br />
              +51 925 033 657
            </address>
          </div>
          <div>
            <span className="fm-label">Contacto</span>
            <Link href="/planifica">Planifica tu inversión</Link>
            <Link href="/contacto">Formulario</Link>
            <a
              href="https://www.instagram.com/valior/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/51925033657"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Valior</span>
          <span>Miraflores — Lima, Perú</span>
        </div>
      </div>
    </footer>
  );
}
