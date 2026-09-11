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
        <section
          className="planner-intro planner-intro--compact"
          aria-labelledby="planner-intro-title"
        >
          <div className="wrap">
            <div className="planner-intro-grid">
              <div className="reveal">
                <span className="label label--rule">Planifica tu inversión</span>
                <h1 id="planner-intro-title">
                  Una estimación, <em>con tus datos.</em>
                </h1>
                <p>
                  Completa el simulador para explorar tu escenario. Los
                  resultados son referenciales, no una oferta financiera.
                </p>
              </div>
            </div>
          </div>
        </section>
        <InvestmentPlanner />
      </main>
      <Footer />
    </>
  );
}
