import summary from "@/data/ingles-chido/summary.json";
import { LanguageText } from "@/components/language-provider";

const labels: Record<string, [string, string]> = {
  grammar: ["Gramática", "Grammar"],
  listening: ["Escucha", "Listening"],
  vocabulary: ["Vocabulario", "Vocabulary"],
};

export function LearningAnalysis() {
  return (
    <section className="ingles-case-analysis" id="analisis" aria-labelledby="analysis-title">
      <div className="shell">
        <p className="eyebrow"><span>05</span> / <LanguageText es="ANÁLISIS REPRODUCIBLE" en="REPRODUCIBLE ANALYSIS" /></p>
        <div className="ingles-case-section-heading">
          <h2 id="analysis-title"><LanguageText es="De intentos a preguntas." en="From attempts to questions." /></h2>
          <p><LanguageText es="Ejemplo independiente con datos sintéticos: 24 intentos de cuatro escenarios ficticios, no estudiantes reales ni datos de la app." en="Independent example using synthetic data: 24 attempts from four fictional scenarios, not real learners or app data." /></p>
        </div>
        <div className="analysis-grid">
          <div>
            <h3><LanguageText es="Aciertos por habilidad" en="Correct attempts by skill" /></h3>
            <p><LanguageText es="Aciertos ÷ intentos; cada intento cuenta por separado." en="Correct attempts ÷ attempts; each attempt counts separately." /></p>
            <ul className="analysis-chart">
              {summary.skills.map((item) => <li key={item.skill}>
                <div><strong><LanguageText es={labels[item.skill][0]} en={labels[item.skill][1]} /></strong><span>{item.correct}/{item.attempts} · {item.percent}%</span></div>
                <div className="analysis-track" aria-hidden="true"><span style={{ width: `${item.percent}%` }} /></div>
              </li>)}
            </ul>
          </div>
          <div className="analysis-method">
            <h3><LanguageText es="Qué muestra y qué no" en="What this shows—and does not" /></h3>
            <p><LanguageText es="En este ejemplo construido, escucha tiene 3 aciertos de 8 intentos. Sirve para formular una pregunta de seguimiento, no para inferir dificultades reales, dominio ni retención." en="In this constructed example, listening has 3 correct answers in 8 attempts. This suggests a follow-up question; it does not establish real difficulties, mastery, or retention." /></p>
            <p><LanguageText es="Python y pandas validan y agrupan el CSV; el gráfico usa los resultados generados. La integración con datos de la app y la analítica de producción siguen pendientes." en="Python and pandas validate and group the CSV; the chart uses the generated results. Integration with app data and production analytics remain future work." /></p>
            <a href="https://github.com/Tecomahua/javier-martinez-portfolio/tree/main/analysis/ingles-chido"><LanguageText es="Ver datos, método y pruebas ↗" en="See data, method and tests ↗" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
