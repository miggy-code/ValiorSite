import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import DistincionA from "@/components/DistincionA";
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
      <Proceso />
      <DistincionA />
      <Servicios />
      <Nosotros />
      <div className="section-ornament"><span className="dot" /></div>
      <Contacto />
      <Footer />
    </>
  );
}
