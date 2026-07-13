"use client";

import { useState } from "react";
import Link from "next/link";

type Currency = "PEN" | "USD";
type Calculator = "mortgage" | "amortization";

const symbols: Record<Currency, string> = { PEN: "S/", USD: "US$" };
const numberFormat = new Intl.NumberFormat("es-PE", {
  maximumFractionDigits: 0,
});

function numberFrom(value: string) {
  return Number(value.replace(/[^0-9.]/g, "")) || 0;
}

function formatInput(value: string) {
  const number = value.replace(/\D/g, "");
  return number ? numberFormat.format(Number(number)) : "";
}

function formatMoney(value: number, currency: Currency) {
  return `${symbols[currency]} ${numberFormat.format(Math.max(0, value))}`;
}

function formatDuration(months: number) {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) return `${remainingMonths} ${remainingMonths === 1 ? "mes" : "meses"}`;
  if (remainingMonths === 0) return `${years} ${years === 1 ? "año" : "años"}`;
  return `${years} ${years === 1 ? "año" : "años"} y ${remainingMonths} ${remainingMonths === 1 ? "mes" : "meses"}`;
}

function monthlyRate(tea: number) {
  return Math.pow(1 + tea / 100, 1 / 12) - 1;
}

function monthlyPayment(principal: number, rate: number, months: number) {
  if (!months) return 0;
  return rate > 0
    ? (principal * rate) / (1 - Math.pow(1 + rate, -months))
    : principal / months;
}

function payoffMonths(principal: number, rate: number, payment: number, extra: number) {
  let balance = principal;
  let months = 0;

  while (balance > 0.005 && months < 1000) {
    const capitalPayment = payment - balance * rate + extra;
    if (capitalPayment <= 0) return Infinity;
    balance -= capitalPayment;
    months += 1;
  }

  return months;
}

function paymentWithCosts({
  propertyValue,
  downPayment,
  tea,
  years,
  lifeInsurance,
  propertyInsurance,
  monthlyFees,
}: {
  propertyValue: number;
  downPayment: number;
  tea: number;
  years: number;
  lifeInsurance: number;
  propertyInsurance: number;
  monthlyFees: number;
}) {
  const principal = propertyValue * (1 - downPayment / 100);
  const rate = monthlyRate(tea);

  return (
    monthlyPayment(principal, rate, years * 12) +
    principal * (lifeInsurance / 100) +
    propertyValue * (propertyInsurance / 100) / 12 +
    monthlyFees
  );
}

function balanceTimeline(principal: number, rate: number, payment: number, extra: number) {
  const points = [{ month: 0, balance: principal }];
  let balance = principal;
  let month = 0;

  while (balance > 0.005 && month < 1000) {
    const capitalPayment = payment - balance * rate + extra;
    if (capitalPayment <= 0) break;

    balance = Math.max(0, balance - capitalPayment);
    month += 1;

    if (month % 12 === 0 || balance === 0) {
      points.push({ month, balance });
    }
  }

  const visiblePoints = 6;
  if (points.length <= visiblePoints) return points;

  return Array.from({ length: visiblePoints }, (_, index) => {
    const pointIndex = Math.round(index * (points.length - 1) / (visiblePoints - 1));
    return points[pointIndex];
  });
}

export default function InvestmentPlanner() {
  const [activeCalculator, setActiveCalculator] = useState<Calculator>("mortgage");
  const [currency, setCurrency] = useState<Currency>("PEN");
  const [propertyValue, setPropertyValue] = useState("450,000");
  const [downPayment, setDownPayment] = useState(20);
  const [mortgageYears, setMortgageYears] = useState(20);
  const [mortgageTea, setMortgageTea] = useState("10.5");
  const [lifeInsurance, setLifeInsurance] = useState(0.03);
  const [propertyInsurance, setPropertyInsurance] = useState(0.3);
  const [monthlyFees, setMonthlyFees] = useState("11");
  const [balance, setBalance] = useState("360,000");
  const [remainingYears, setRemainingYears] = useState(20);
  const [amortizationTea, setAmortizationTea] = useState("10.5");
  const [extraPayment, setExtraPayment] = useState(600);

  const propertyAmount = numberFrom(propertyValue);
  const mortgageRate = monthlyRate(numberFrom(mortgageTea));
  const financedAmount = propertyAmount * (1 - downPayment / 100);
  const mortgageMonths = mortgageYears * 12;
  const baseMortgagePayment = monthlyPayment(financedAmount, mortgageRate, mortgageMonths);
  const firstLifeInsurance = financedAmount * (lifeInsurance / 100);
  const monthlyPropertyInsurance = propertyAmount * (propertyInsurance / 100) / 12;
  const firstMonthlyPayment =
    baseMortgagePayment +
    firstLifeInsurance +
    monthlyPropertyInsurance +
    numberFrom(monthlyFees);
  const mortgageTeaValue = numberFrom(mortgageTea);
  const scenarioInputs = [
    {
      label: "Más cauteloso",
      description: `TEA ${numberFormat.format(mortgageTeaValue + 1.5)}%`,
      payment: paymentWithCosts({
        propertyValue: propertyAmount,
        downPayment,
        tea: mortgageTeaValue + 1.5,
        years: mortgageYears,
        lifeInsurance,
        propertyInsurance,
        monthlyFees: numberFrom(monthlyFees),
      }),
    },
    {
      label: "Tu escenario",
      description: `${downPayment}% de inicial`,
      payment: firstMonthlyPayment,
    },
    {
      label: "Más inicial",
      description: `${Math.min(downPayment + 10, 60)}% de inicial`,
      payment: paymentWithCosts({
        propertyValue: propertyAmount,
        downPayment: Math.min(downPayment + 10, 60),
        tea: mortgageTeaValue,
        years: mortgageYears,
        lifeInsurance,
        propertyInsurance,
        monthlyFees: numberFrom(monthlyFees),
      }),
    },
  ];

  const debtBalance = numberFrom(balance);
  const amortizationMonths = remainingYears * 12;
  const amortizationRate = monthlyRate(numberFrom(amortizationTea));
  const normalPayment = monthlyPayment(debtBalance, amortizationRate, amortizationMonths);
  const newTerm = extraPayment
    ? payoffMonths(debtBalance, amortizationRate, normalPayment, extraPayment)
    : amortizationMonths;
  const actualNewTerm = Number.isFinite(newTerm) && newTerm <= amortizationMonths
    ? newTerm
    : amortizationMonths;
  const savedMonths = Math.max(0, amortizationMonths - actualNewTerm);
  const remainingPercent = amortizationMonths
    ? Math.max((actualNewTerm / amortizationMonths) * 100, 2)
    : 100;
  const debtTimeline = balanceTimeline(
    debtBalance,
    amortizationRate,
    normalPayment,
    extraPayment,
  );
  const mortgageSummary = `Crédito hipotecario: inmueble de ${formatMoney(propertyAmount, currency)}, ${downPayment}% de inicial, ${mortgageYears} años, TEA ${mortgageTea}%, cuota estimada ${formatMoney(firstMonthlyPayment, currency)}.`;
  const amortizationSummary = `Amortización: saldo de ${formatMoney(debtBalance, currency)}, ${remainingYears} años restantes, TEA ${amortizationTea}%, aporte extra mensual de ${formatMoney(extraPayment, currency)}, ahorro estimado de ${formatDuration(savedMonths)}.`;
  const contactSummary = activeCalculator === "mortgage" ? mortgageSummary : amortizationSummary;

  const changeCurrency = (nextCurrency: Currency) => {
    setCurrency(nextCurrency);
    setMonthlyFees(nextCurrency === "USD" ? "3" : "11");
  };

  const continueToAmortization = () => {
    setBalance(numberFormat.format(Math.round(financedAmount)));
    setRemainingYears(mortgageYears);
    setAmortizationTea(mortgageTea);
    setActiveCalculator("amortization");
  };

  return (
    <section className="planner" aria-label="Calculadoras de planificación financiera">
      <div className="wrap">
        <div className="planner-tabs reveal" role="tablist" aria-label="Elige una calculadora">
          <button
            type="button"
            role="tab"
            aria-selected={activeCalculator === "mortgage"}
            className={activeCalculator === "mortgage" ? "active" : ""}
            onClick={() => setActiveCalculator("mortgage")}
          >
            <span>01</span> Crédito hipotecario
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeCalculator === "amortization"}
            className={activeCalculator === "amortization" ? "active" : ""}
            onClick={() => setActiveCalculator("amortization")}
          >
            <span>02</span> Amortización
          </button>
        </div>

        <div className="planner-currency reveal d1" role="group" aria-label="Moneda de cálculo">
          <span>Moneda</span>
          <button
            type="button"
            className={currency === "PEN" ? "active" : ""}
            aria-pressed={currency === "PEN"}
            onClick={() => changeCurrency("PEN")}
          >
            Soles
          </button>
          <button
            type="button"
            className={currency === "USD" ? "active" : ""}
            aria-pressed={currency === "USD"}
            onClick={() => changeCurrency("USD")}
          >
            Dólares
          </button>
        </div>

        {activeCalculator === "mortgage" ? (
          <div className="planner-layout" role="tabpanel">
            <section className="planner-panel reveal d1" aria-labelledby="mortgage-inputs-title">
              <div className="planner-panel-heading">
                <span className="planner-index">01</span>
                <div>
                  <span className="planner-kicker">Tu compra</span>
                  <h2 id="mortgage-inputs-title">Define el punto de partida.</h2>
                </div>
              </div>

              <div className="planner-field">
                <label htmlFor="property-value">Valor del inmueble</label>
                <div className="planner-input-money">
                  <span>{symbols[currency]}</span>
                  <input
                    id="property-value"
                    type="text"
                    inputMode="numeric"
                    value={propertyValue}
                    onChange={(event) => setPropertyValue(formatInput(event.target.value))}
                  />
                </div>
              </div>

              <div className="planner-field">
                <div className="planner-field-line">
                  <label htmlFor="down-payment">Cuota inicial</label>
                  <output>{downPayment}% · {formatMoney(propertyAmount * downPayment / 100, currency)}</output>
                </div>
                <input
                  id="down-payment"
                  className="planner-range"
                  type="range"
                  min="10"
                  max="60"
                  value={downPayment}
                  onChange={(event) => setDownPayment(Number(event.target.value))}
                />
                <div className="planner-scale"><span>10%</span><span>60%</span></div>
                <p>Financiarías {formatMoney(financedAmount, currency)} con el banco.</p>
              </div>

              <div className="planner-field">
                <div className="planner-field-line">
                  <label htmlFor="mortgage-years">Plazo del crédito</label>
                  <output>{mortgageYears} años</output>
                </div>
                <input
                  id="mortgage-years"
                  className="planner-range"
                  type="range"
                  min="5"
                  max="30"
                  value={mortgageYears}
                  onChange={(event) => setMortgageYears(Number(event.target.value))}
                />
                <div className="planner-scale"><span>5 años</span><span>30 años</span></div>
              </div>

              <div className="planner-field">
                <label htmlFor="mortgage-tea">Tasa de interés, TEA</label>
                <div className="planner-input-suffix">
                  <input
                    id="mortgage-tea"
                    type="text"
                    inputMode="decimal"
                    value={mortgageTea}
                    onChange={(event) => setMortgageTea(event.target.value.replace(/[^0-9.]/g, ""))}
                  />
                  <span>% anual</span>
                </div>
                <p>Usa la tasa referencial de tu banco. La TEA se convierte a tasa efectiva mensual.</p>
              </div>

              <details className="planner-details">
                <summary>Seguros y costos adicionales <span>+</span></summary>
                <div className="planner-details-grid">
                  <label>
                    Desgravamen mensual
                    <input
                      type="number"
                      min="0"
                      max="0.06"
                      step="0.005"
                      value={lifeInsurance}
                      onChange={(event) => setLifeInsurance(Number(event.target.value))}
                    />
                    <small>% del saldo</small>
                  </label>
                  <label>
                    Seguro del inmueble
                    <input
                      type="number"
                      min="0"
                      max="0.6"
                      step="0.05"
                      value={propertyInsurance}
                      onChange={(event) => setPropertyInsurance(Number(event.target.value))}
                    />
                    <small>% anual</small>
                  </label>
                  <label>
                    Portes mensuales
                    <input
                      type="text"
                      inputMode="numeric"
                      value={monthlyFees}
                      onChange={(event) => setMonthlyFees(formatInput(event.target.value))}
                    />
                    <small>{symbols[currency]}</small>
                  </label>
                </div>
              </details>
            </section>

            <aside className="planner-results reveal d2" aria-live="polite">
              <div className="planner-result-hero">
                <span>Tu primera cuota estimada</span>
                <strong>{formatMoney(firstMonthlyPayment, currency)}</strong>
                <p>Incluye capital, interés, seguros y portes. El desgravamen baja conforme disminuye el saldo.</p>
              </div>
              <div className="planner-result-grid">
                <div>
                  <span>Cuota base</span>
                  <strong>{formatMoney(baseMortgagePayment, currency)}</strong>
                  <small>capital e interés</small>
                </div>
                <div>
                  <span>Inicial</span>
                  <strong>{formatMoney(propertyAmount * downPayment / 100, currency)}</strong>
                  <small>{downPayment}% del inmueble</small>
                </div>
                <div>
                  <span>Monto financiado</span>
                  <strong>{formatMoney(financedAmount, currency)}</strong>
                  <small>{mortgageYears * 12} cuotas mensuales</small>
                </div>
                <div>
                  <span>Seguros y portes</span>
                  <strong>{formatMoney(firstLifeInsurance + monthlyPropertyInsurance + numberFrom(monthlyFees), currency)}</strong>
                  <small>estimación del primer mes</small>
                </div>
              </div>
              <div className="planner-result-note">
                <span>Lectura útil</span>
                <p>Una inicial mayor reduce tanto la cuota como el interés que pagarás durante toda la vida del crédito.</p>
              </div>
              <div className="planner-scenarios">
                <div className="planner-section-heading">
                  <span>Comparación rápida</span>
                  <p>Una cuota cambia mucho con una pequeña variación en tu tasa o inicial.</p>
                </div>
                <div className="planner-scenario-list">
                  {scenarioInputs.map((scenario) => (
                    <div key={scenario.label} className={scenario.label === "Tu escenario" ? "current" : ""}>
                      <span>{scenario.label}</span>
                      <strong>{formatMoney(scenario.payment, currency)}</strong>
                      <small>{scenario.description}</small>
                    </div>
                  ))}
                </div>
              </div>
              <button type="button" className="planner-flow-button" onClick={continueToAmortization}>
                Ver este monto en amortización <span aria-hidden="true">→</span>
              </button>
            </aside>
          </div>
        ) : (
          <div className="planner-layout" role="tabpanel">
            <section className="planner-panel reveal d1" aria-labelledby="amortization-inputs-title">
              <div className="planner-panel-heading">
                <span className="planner-index">02</span>
                <div>
                  <span className="planner-kicker">Tu deuda hoy</span>
                  <h2 id="amortization-inputs-title">Haz que cada aporte cuente.</h2>
                </div>
              </div>

              <div className="planner-field">
                <label htmlFor="debt-balance">Saldo actual de tu deuda</label>
                <div className="planner-input-money">
                  <span>{symbols[currency]}</span>
                  <input
                    id="debt-balance"
                    type="text"
                    inputMode="numeric"
                    value={balance}
                    onChange={(event) => setBalance(formatInput(event.target.value))}
                  />
                </div>
              </div>

              <div className="planner-field">
                <div className="planner-field-line">
                  <label htmlFor="remaining-years">Años que faltan pagar</label>
                  <output>{remainingYears} años</output>
                </div>
                <input
                  id="remaining-years"
                  className="planner-range"
                  type="range"
                  min="2"
                  max="30"
                  value={remainingYears}
                  onChange={(event) => setRemainingYears(Number(event.target.value))}
                />
                <div className="planner-scale"><span>2 años</span><span>30 años</span></div>
              </div>

              <div className="planner-field">
                <label htmlFor="amortization-tea">Tasa de interés, TEA</label>
                <div className="planner-input-suffix">
                  <input
                    id="amortization-tea"
                    type="text"
                    inputMode="decimal"
                    value={amortizationTea}
                    onChange={(event) => setAmortizationTea(event.target.value.replace(/[^0-9.]/g, ""))}
                  />
                  <span>% anual</span>
                </div>
              </div>

              <div className="planner-field planner-field--highlight">
                <div className="planner-field-line">
                  <label htmlFor="extra-payment">Aporte extra al capital</label>
                  <output>{formatMoney(extraPayment, currency)}</output>
                </div>
                <input
                  id="extra-payment"
                  className="planner-range"
                  type="range"
                  min="0"
                  max="5000"
                  step="50"
                  value={extraPayment}
                  onChange={(event) => setExtraPayment(Number(event.target.value))}
                />
                <div className="planner-scale"><span>{symbols[currency]} 0</span><span>{symbols[currency]} 5,000</span></div>
                <p>Este monto se suma a tu cuota normal y se aplica directo a capital.</p>
              </div>
            </section>

            <aside className="planner-results reveal d2" aria-live="polite">
              <div className="planner-result-hero">
                <span>Te liberas de tu deuda</span>
                <strong>{savedMonths ? `${formatDuration(savedMonths)} antes` : "en el plazo original"}</strong>
                <p>
                  {savedMonths
                    ? `Aportando ${formatMoney(extraPayment, currency)} extra cada mes, terminas en ${formatDuration(actualNewTerm)}.`
                    : "Sube tu aporte extra para ver cuánto tiempo podrías ahorrar."}
                </p>
              </div>
              <div className="planner-timeline">
                <div className="planner-timeline-label"><span>Plazo original</span><strong>{formatDuration(amortizationMonths)}</strong></div>
                <div className="planner-timeline-bar"><i className="original" /></div>
                <div className="planner-timeline-label"><span>Con aporte extra</span><strong>{formatDuration(actualNewTerm)}</strong></div>
                <div className="planner-timeline-bar"><i className="reduced" style={{ width: `${remainingPercent}%` }} /><i className="saved" style={{ width: `${100 - remainingPercent}%` }} /></div>
                <p><i /> Nuevo plazo <b /> Tiempo que recuperas</p>
              </div>
              <div className="planner-result-grid">
                <div>
                  <span>Cuota normal</span>
                  <strong>{formatMoney(normalPayment, currency)}</strong>
                  <small>sin aporte extra</small>
                </div>
                <div>
                  <span>Desembolso mensual</span>
                  <strong>{formatMoney(normalPayment + extraPayment, currency)}</strong>
                  <small>cuota más aporte</small>
                </div>
                <div>
                  <span>Nueva duración</span>
                  <strong>{formatDuration(actualNewTerm)}</strong>
                  <small>{actualNewTerm} cuotas en total</small>
                </div>
                <div>
                  <span>Cuotas que evitas</span>
                  <strong>{savedMonths}</strong>
                  <small>meses menos de deuda</small>
                </div>
              </div>
              <div className="planner-balance-path">
                <div className="planner-section-heading">
                  <span>Ruta de tu deuda</span>
                  <p>Saldo estimado si mantienes este aporte extra directo a capital.</p>
                </div>
                <div className="planner-balance-bars" role="img" aria-label="Evolución estimada del saldo de la deuda">
                  {debtTimeline.map((point) => (
                    <div key={point.month}>
                      <span>{point.month === 0 ? "Hoy" : `Año ${Math.ceil(point.month / 12)}`}</span>
                      <i style={{ height: `${debtBalance ? Math.max((point.balance / debtBalance) * 100, 3) : 3}%` }} />
                      <strong>{formatMoney(point.balance, currency)}</strong>
                    </div>
                  ))}
                </div>
              </div>
              <div className="planner-result-note">
                <span>Importante</span>
                <p>Pide a tu banco una amortización con reducción de plazo. Adelantar cuotas tiene un efecto distinto.</p>
              </div>
            </aside>
          </div>
        )}

        <div className="planner-close reveal d3">
          <div>
            <span className="label label--rule">Siguiente paso</span>
            <h2>Convierte la estimación en una decisión bien respaldada.</h2>
          </div>
          <div>
            <p>Validamos condiciones reales de financiamiento, revisamos la documentación de la propiedad y trazamos la ruta de tu compra.</p>
            <Link href={`/contacto?summary=${encodeURIComponent(contactSummary)}`} className="btn btn-cream">
              Revisar esta simulación
            </Link>
          </div>
        </div>

        <p className="planner-disclaimer">
          Resultados referenciales con fines educativos. Las tasas, seguros, costos y condiciones definitivas dependen de la evaluación de cada entidad financiera y de tu contrato. Esta herramienta no constituye una oferta ni asesoría financiera formal.
        </p>
      </div>
    </section>
  );
}
