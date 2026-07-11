import type { Metadata } from "next";
import Footer from "@/components/Footer";
import InvestmentPlanner from "@/components/InvestmentPlanner";
import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Planifica tu inversión | Valior",
  description:
    "Estima tu crédito hipotecario y evalúa cuánto tiempo puedes ahorrar al amortizar capital.",
};

export default function PlanificaPage() {
  return (
    <>
      <ScrollReveal />
      <Nav tone="dark" />
      <main className="planner-page">
        <section className="planner-intro">
          <div className="wrap">
            <span className="label label--rule reveal">Planifica tu inversión</span>
            <div className="planner-intro-grid">
              <h1 className="reveal d1">
                Números claros para decidir con <em>perspectiva.</em>
              </h1>
              <p className="reveal d2">
                Simula tu compra y explora el efecto de amortizar capital. Una
                primera lectura para llegar mejor preparado a una conversación
                con tu banco y con Valior.
              </p>
            </div>
          </div>
        </section>
        <InvestmentPlanner />
      </main>
      <Footer />
    </>
  );
}
