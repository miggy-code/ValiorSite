import type { Metadata } from "next";
import Footer from "@/components/Footer";
import InvestmentPlanner from "@/components/InvestmentPlanner";
import Nav from "@/components/Nav";
import styles from "./planifica.module.css";

export const metadata: Metadata = {
  title: "Planifica tu inversión | Valior",
  description:
    "Estima tu crédito hipotecario y evalúa cuánto tiempo puedes ahorrar al amortizar capital.",
};

export default function PlanificaPage() {
  return (
    <div className={styles.page}>
      <Nav tone="dark" />
      <main className="planner-page">
        <section className={styles.intro} aria-labelledby="planner-intro-title">
          <div className="wrap">
            <p className={styles.eyebrow}>Planifica tu inversión</p>
            <h1 id="planner-intro-title">Tu crédito, en números.</h1>
            <p className={styles.description}>
              Completa el simulador para explorar tu escenario. Los resultados
              son referenciales, no una oferta financiera.
            </p>
          </div>
        </section>
        <InvestmentPlanner />
      </main>
      <Footer />
    </div>
  );
}
