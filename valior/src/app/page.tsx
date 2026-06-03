import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import Distincion from "@/components/Distincion";
import Proceso from "@/components/Proceso";
import Nosotros from "@/components/Nosotros";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <Hero />
      <Servicios />
      <Distincion />
      <Proceso />
      <Nosotros />
      <Contacto />
      <Footer />
    </>
  );
}
