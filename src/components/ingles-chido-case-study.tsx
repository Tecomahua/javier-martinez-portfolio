import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Code2,
  Database,
  Smartphone,
} from "lucide-react";
import { AelpCaptureGallery } from "@/components/aelp-capture-gallery";
import { captures } from "@/data/ingles-chido/captures";
import { LearningAnalysis } from "@/components/learning-analysis";
import { InglesChidoCover } from "@/components/ingles-chido-cover";
import { InglesChidoProblem } from "@/components/ingles-chido-problem";
import { LanguageText } from "@/components/language-provider";


const mobileStack = [
  ["React Native", "Interfaz donde se realizan las actividades de aprendizaje."],
  ["Expo", "Entorno de ejecución y herramientas del prototipo móvil."],
  ["TypeScript", "Estructura tipada para pantallas, estados y registros locales."],
  ["Expo Router", "Navegación entre onboarding, ruta y lecciones."],
  ["AsyncStorage", "Almacenamiento local del estado de sesión; sin sincronización remota."],
  ["Reanimated · Skia", "Interacción visual de la ruta de aprendizaje."],
];

const mobileStackEnglish: Record<string, string> = {
  "React Native": "The interface where learning activities take place.",
  Expo: "Runtime and tooling for the mobile prototype.",
  TypeScript: "Typed structure for screens, states, and local records.",
  "Expo Router": "Navigation across onboarding, the learning path, and lessons.",
  AsyncStorage: "Local session-state storage without remote synchronization.",
  "Reanimated · Skia": "Visual interaction along the learning path.",
};

export function InglesChidoCaseStudy() {
  return (
    <main className="ingles-case">
      <section className="ingles-case-hero">
        <div className="shell">
          <Link className="back-link" href="/#proyectos">
            <ArrowLeft size={15} /> <LanguageText es="Volver a proyectos" en="Back to projects" />
          </Link>
          <div className="ingles-case-hero-grid">
            <div className="ingles-case-intro">
              <p className="eyebrow">
                <span>01</span> / <LanguageText es="EDUCATIONAL DATA SCIENCE & LEARNING ANALYTICS" en="EDUCATIONAL DATA SCIENCE & LEARNING ANALYTICS" />
              </p>
              <h1>Inglés Chido<span>.</span></h1>
              <p className="ingles-case-subtitle">
                <LanguageText es="Aprendizaje de inglés basado en evidencias" en="Evidence-based English learning" />
              </p>
              <p className="ingles-case-lede"><LanguageText es="Inglés Chido evoluciona hacia AELP, una plataforma de aprendizaje adaptativo. El prototipo registra intentos, respuestas y errores como base para evaluar el progreso y, más adelante, orientar la práctica." en="Inglés Chido is evolving into AELP, an adaptive learning platform. Its prototype records attempts, answers, and errors as a foundation for assessing progress and, later, guiding practice." /></p>
              <div className="ingles-case-tags" aria-label="Tecnologías actuales y previstas / Current and planned technologies">
                {["React Native", "Expo", "TypeScript", "Expo Router", "Python", "FastAPI", "PostgreSQL", "pandas", "SQLAlchemy", "Alembic"].map(
                  (tag) => <span key={tag}>{tag}</span>,
                )}
              </div>
              <div className="ingles-case-actions">
                <a className="ingles-case-secondary" href="#analisis">
                  <LanguageText es="Ver análisis" en="View analysis" /> <ArrowRight size={15} />
                </a>
                <a className="ingles-case-secondary" href="#arquitectura">
                  <LanguageText es="Ver arquitectura" en="View architecture" /> <ArrowRight size={15} />
                </a>
              </div>
              <p className="ingles-case-team">
                <LanguageText es="Proyecto personal · Fundador y desarrollador · En desarrollo" en="Personal project · Founder and developer · In development" />
              </p>
            </div>
            <figure className="ingles-case-hero-visual">
              <InglesChidoCover variant="detail" />
            </figure>
          </div>
        </div>
      </section>

      <InglesChidoProblem />

      <section className="ingles-case-overview">
        <div className="shell ingles-case-overview-grid">
          <div>
            <p className="eyebrow"><span>03</span> / <LanguageText es="PRODUCTO" en="PRODUCT" /></p>
            <h2><LanguageText es="Completar no equivale a dominar." en="Completion is not mastery." /></h2>
          </div>
          <p>
            <LanguageText es="Terminar una actividad no demuestra que se haya comprendido el contenido. El prototipo A1 ya registra intentos, respuestas, errores y necesidades de repaso de forma local. La propuesta de AELP es convertir esas evidencias en indicadores de dificultad y progreso para evaluar el aprendizaje y, en una etapa posterior, ajustar la práctica." en="Finishing an activity does not prove understanding. The A1 prototype already records attempts, answers, errors, and review needs locally. AELP aims to turn that evidence into indicators of difficulty and progress, then use it to adjust practice in a later stage." />
          </p>
        </div>
      </section>

      <section className="ingles-case-architecture" id="arquitectura">
        <div className="shell">
          <p className="eyebrow"><span>04</span> / <LanguageText es="ARQUITECTURA" en="ARCHITECTURE" /></p>
          <div className="ingles-case-section-heading">
            <h2><LanguageText es="Registros locales → API → datos analizables" en="Local records → API → analyzable data" /></h2>
            <p><LanguageText es="La recopilación funciona hoy dentro del prototipo. La integración remota y el procesamiento analítico aún no forman parte del flujo móvil." en="Data collection currently takes place within the prototype. Remote integration and analytical processing are not yet part of the mobile flow." /></p>
          </div>
          <div className="ingles-case-architecture-grid">
            <article>
              <Smartphone size={20} />
              <span><LanguageText es="IMPLEMENTADO" en="IMPLEMENTED" /></span>
              <h3><LanguageText es="Aplicación móvil" en="Mobile app" /></h3>
              <p><LanguageText es="Expo, React Native y TypeScript. Las lecciones y el progreso generan registros locales de intentos, respuestas y errores." en="Expo, React Native, and TypeScript. Lessons and progress generate local records of attempts, answers, and errors." /></p>
            </article>
            <i aria-hidden="true">→</i>
            <article>
              <Code2 size={20} />
              <span><LanguageText es="BASE EN DESARROLLO" en="FOUNDATION IN DEVELOPMENT" /></span>
              <h3><LanguageText es="API del backend" en="Backend API" /></h3>
              <p><LanguageText es="Servicio modular FastAPI con configuración y health checks. Su integración con los registros de aprendizaje sigue en desarrollo." en="A modular FastAPI service with configuration and health checks. Integration with learning records is still in development." /></p>
            </article>
            <i aria-hidden="true">→</i>
            <article>
              <Database size={20} />
              <span><LanguageText es="PREVISTO" en="PLANNED" /></span>
              <h3><LanguageText es="Base de datos" en="Database" /></h3>
              <p><LanguageText es="PostgreSQL y Alembic forman la base prevista para centralizar evidencias. Después podría procesarse esa información con Python y pandas." en="PostgreSQL and Alembic are the planned foundation for centralizing evidence. Python and pandas could process those records later." /></p>
            </article>
          </div>
        </div>
      </section>

      <LearningAnalysis />

      <section className="ingles-case-app" id="app">
        <div className="shell">
          <div className="ingles-case-section-heading">
            <div>
              <p className="eyebrow"><span>06</span> / <LanguageText es="EXPLORAR LA APP" en="EXPLORE THE APP" /></p>
              <h2><LanguageText es="La experiencia, en pantallas." en="The experience, on screen." /></h2>
            </div>
            <p><LanguageText es="Capturas del prototipo móvil actual. Selecciona una para ampliarla." en="Screenshots from the current mobile prototype. Select one to enlarge it." /></p>
          </div>
          <AelpCaptureGallery captures={captures} mobileShowcase />

        </div>
      </section>

      <section className="ingles-case-stack">
        <div className="shell ingles-case-stack-grid">
          <div>
            <p className="eyebrow"><span>07</span> / <LanguageText es="STACK TÉCNICO" en="TECH STACK" /></p>
            <h2><LanguageText es="La experiencia genera evidencias." en="The experience creates evidence." /></h2>
            <p>
              <LanguageText es="La app móvil es la fuente actual de datos de aprendizaje. Su estado y registros son locales; el servicio API y la persistencia centralizada pertenecen a etapas posteriores. El análisis sintético mostrado es independiente de la app." en="The mobile app is the current source of learning data. Its state and records are local; the API and centralized storage belong to later stages. The synthetic analysis shown is independent of the app." />
            </p>
          </div>
          <div className="ingles-case-stack-list">
            {mobileStack.map(([name, role]) => (
              <article key={name}>
                <strong>{name}</strong><span><LanguageText es={role} en={mobileStackEnglish[name] ?? role} /></span>
              </article>
            ))}
            <article className="ingles-case-stack-backend">
              <strong>Python · FastAPI · SQLAlchemy</strong>
              <span><LanguageText es="Base del servicio API en desarrollo; aún no recibe los registros del flujo móvil principal." en="API service foundation in development; it does not yet receive records from the main mobile flow." /></span>
            </article>
            <article className="ingles-case-stack-backend">
              <strong>PostgreSQL · Alembic</strong>
              <span><LanguageText es="Base técnica para la persistencia centralizada prevista; los datos del producto siguen siendo locales." en="Technical foundation for planned centralized storage; product data remains local." /></span>
            </article>
            <article className="ingles-case-stack-backend">
              <strong>Python · pandas</strong>
              <span><LanguageText es="Análisis reproducible con datos sintéticos; todavía no hay una capa analítica integrada con la app." en="Reproducible analysis of synthetic data; no analytics layer is integrated with the app yet." /></span>
            </article>
          </div>
        </div>
      </section>

      <section className="ingles-case-contribution">
        <div className="shell ingles-case-overview-grid">
          <div>
            <p className="eyebrow"><span>08</span> / <LanguageText es="MI PARTICIPACIÓN" en="MY ROLE" /></p>
            <h2><LanguageText es="Producto, desarrollo y estrategia de datos." en="Product, development, and data strategy." /></h2>
          </div>
          <div>
            <p>
              <LanguageText es="Lidero la visión de producto, la experiencia y el desarrollo móvil de Inglés Chido. También defino cómo los intentos, respuestas y errores pueden convertirse en evidencias útiles para analizar el aprendizaje. La integración de la API y la persistencia centralizada siguen en desarrollo." en="I lead Inglés Chido's product vision, learning experience, and mobile development. I also define how attempts, answers, and errors could become useful evidence for learning analysis. API integration and centralized storage remain in development." />
            </p>
          </div>
        </div>
      </section>

      <nav className="shell project-pagination" aria-label="Más proyectos / More projects">
        <Link href="/#proyectos"><ArrowLeft size={16} /> <LanguageText es="Todos los proyectos" en="All projects" /></Link>
        <Link href="/proyectos/tutor-ia-nem/">
          <div><small><LanguageText es="SIGUIENTE PROYECTO" en="NEXT PROJECT" /></small><strong>STI-NEM</strong></div>
          <ArrowRight size={23} />
        </Link>
      </nav>
    </main>
  );
}
