import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Valior | Boutique Inmobiliaria & Consultoría Legal",
  description:
    "Construimos patrimonio con visión, estrategia y confianza. Especialistas en el mercado limeño de lujo.",
  openGraph: {
    title: "Valior | Boutique Inmobiliaria & Consultoría Legal",
    description:
      "Propiedades seleccionadas en Lima con estrategia inmobiliaria y respaldo legal integrado.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
