"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight, Lightbulb, Search } from "lucide-react";
import { LanguageText } from "@/components/language-provider";

type Focus = "problem" | "rationale";

const details = {
  problem: {
    label: <LanguageText key="problem-label" es="EL PROBLEMA" en="THE PROBLEM" />,
    title: <LanguageText key="problem-title" es="Una respuesta correcta no explica el aprendizaje." en="A correct answer does not explain learning." />,
    copy: <LanguageText key="problem-copy" es="Las aplicaciones suelen mostrar rachas, puntos o actividades completadas. Esas señales describen uso, pero no revelan qué habilidad presenta dificultad, cuántos intentos necesitó una persona ni qué error se repite." en="Learning apps often show streaks, points, or completed activities. Those signals describe usage, but they do not reveal which skill is difficult, how many attempts were needed, or which error keeps recurring." />,
    question: <LanguageText key="problem-question" es="Pregunta guía: ¿qué evidencia necesito para distinguir avance de dominio?" en="Guiding question: what evidence is needed to distinguish progress from mastery?" />,
  },
  rationale: {
    label: <LanguageText key="rationale-label" es="MI JUSTIFICACIÓN" en="MY RATIONALE" />,
    title: <LanguageText key="rationale-title" es="Diseñar primero la evidencia, después la adaptación." en="Design the evidence first, then adaptation." />,
    copy: <LanguageText key="rationale-copy" es="Elegí registrar intentos, respuestas y errores desde el prototipo porque una futura recomendación solo será defendible si parte de datos con contexto. Antes de plantear modelos o personalización, necesito una base que permita medir y auditar lo ocurrido." en="I chose to capture attempts, answers, and errors from the prototype because a future recommendation is only defensible when it starts with contextual data. Before proposing models or personalization, I need a foundation that makes events measurable and auditable." />,
    question: <LanguageText key="rationale-question" es="Decisión de diseño: convertir cada actividad en una fuente de evidencia trazable." en="Design decision: turn each activity into a source of traceable evidence." />,
  },
};

export function InglesChidoProblem() {
  const [focus, setFocus] = useState<Focus>("problem");
  const problemTab = useRef<HTMLButtonElement>(null);
  const rationaleTab = useRef<HTMLButtonElement>(null);
  const active = details[focus];

  function select(next: Focus) {
    setFocus(next);
    (next === "problem" ? problemTab : rationaleTab).current?.focus();
  }

  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    if (event.key === "Home" || event.key === "ArrowLeft") select("problem");
    else select("rationale");
  }

  return (
    <section className="ingles-case-problem" id="problema" aria-labelledby="problem-heading">
      <div className="shell">
        <p className="eyebrow"><span>02</span> / <LanguageText es="PROBLEMA Y JUSTIFICACIÓN" en="PROBLEM AND RATIONALE" /></p>
        <div className="ingles-problem-heading">
          <h2 id="problem-heading"><LanguageText es="Medir actividad no basta." en="Activity is not enough." /></h2>
          <p><LanguageText es="Explora la pregunta que originó el proyecto y la decisión que orienta su estrategia de datos." en="Explore the question behind the project and the decision guiding its data strategy." /></p>
        </div>

        <div className="ingles-problem-options" role="tablist" aria-label="Problema y justificación / Problem and rationale">
          <button ref={problemTab} type="button" role="tab" id="problem-tab" aria-selected={focus === "problem"} aria-controls="problem-panel" tabIndex={focus === "problem" ? 0 : -1} onClick={() => setFocus("problem")} onKeyDown={handleTabKey}>
            <Search size={19} aria-hidden="true" />
            <span><LanguageText es="Problema" en="Problem" /></span>
            <small><LanguageText es="Lo que las métricas habituales no explican" en="What common metrics fail to explain" /></small>
          </button>
          <ArrowRight className="ingles-problem-arrow" size={18} aria-hidden="true" />
          <button ref={rationaleTab} type="button" role="tab" id="rationale-tab" aria-selected={focus === "rationale"} aria-controls="problem-panel" tabIndex={focus === "rationale" ? 0 : -1} onClick={() => setFocus("rationale")} onKeyDown={handleTabKey}>
            <Lightbulb size={19} aria-hidden="true" />
            <span><LanguageText es="Mi justificación" en="My rationale" /></span>
            <small><LanguageText es="Por qué el proyecto empieza por la evidencia" en="Why the project begins with evidence" /></small>
          </button>
        </div>

        <article className="ingles-problem-panel" id="problem-panel" role="tabpanel" aria-labelledby={focus === "problem" ? "problem-tab" : "rationale-tab"} aria-live="polite">
          <div>
            <span>{active.label}</span>
            <h3>{active.title}</h3>
          </div>
          <div>
            <p>{active.copy}</p>
            <strong>{active.question}</strong>
          </div>
        </article>

        <div className="ingles-problem-print" aria-hidden="true">
          {(["problem", "rationale"] as const).map((item) => (
            <article key={item}>
              <div>
                <span>{details[item].label}</span>
                <h3>{details[item].title}</h3>
              </div>
              <div>
                <p>{details[item].copy}</p>
                <strong>{details[item].question}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
