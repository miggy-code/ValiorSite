import type { Metadata } from "next";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contacto | Valior",
  description:
    "Solicita una conversación privada con Valior para compra, venta, inversión o asesoría legal inmobiliaria en Lima.",
};

export default async function ContactoPage({
  searchParams,
}: {
  searchParams: Promise<{ summary?: string; intent?: string }>;
}) {
  const { summary, intent } = await searchParams;

  return (
    <>
      <ScrollReveal />
      <Nav tone="dark" />
      <main>
        <Contacto plannerSummary={summary} intent={intent} />
      </main>
      <Footer />
    </>
  );
}
