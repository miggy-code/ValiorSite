import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Servicios from "@/components/Servicios";
import Nosotros from "@/components/Nosotros";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main className="home-main">
        <Hero />
        <Statement />
        <Servicios />
        <Nosotros />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
