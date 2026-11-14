import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Code2,
  Database,
  Layers3,
  Smartphone,
} from "lucide-react";
import {
  AelpCaptureGallery,
  type AelpCapture,
} from "@/components/aelp-capture-gallery";
import { InglesChidoCover } from "@/components/ingles-chido-cover";
import { LanguageText } from "@/components/language-provider";

const captures: AelpCapture[] = [
  {
    "file": "pantalla-carga-claro.jpeg",
    "title": "Pantalla de carga · tema claro",
    "description": "La app prepara sus recursos al iniciar.",
    "alt": "Pantalla de carga · tema claro.",
    "category": "Inicio",
    "titleEn": "Opening screen · light theme",
    "descriptionEn": "The app prepares its resources at startup.",
    "altEn": "Opening screen · light theme.",
    "categoryEn": "Getting started",
    "width": 592,
    "height": 1280
  },
  {
    "file": "pantalla-principal-claro.jpeg",
    "title": "Bienvenida · tema claro",
    "description": "Pantalla principal con opciones para comenzar o iniciar sesión.",
    "alt": "Bienvenida · tema claro.",
    "category": "Inicio",
    "titleEn": "Welcome · light theme",
    "descriptionEn": "Welcome screen with options to get started or sign in.",
    "altEn": "Welcome · light theme.",
    "categoryEn": "Getting started",
    "width": 592,
    "height": 1280
  },
  {
    "file": "pantalla-principal-oscuro.jpeg",
    "title": "Bienvenida · tema oscuro",
    "description": "Pantalla principal con opciones para comenzar o iniciar sesión.",
    "alt": "Bienvenida · tema oscuro.",
    "category": "Inicio",
    "titleEn": "Welcome · dark theme",
    "descriptionEn": "Welcome screen with options to get started or sign in.",
    "altEn": "Welcome · dark theme.",
    "categoryEn": "Getting started",
    "width": 592,
    "height": 1280
  },
  {
    "file": "login-claro.jpeg",
    "title": "Inicio de sesión · tema claro",
    "description": "Acceso a la cuenta con correo electrónico y contraseña.",
    "alt": "Inicio de sesión · tema claro.",
    "category": "Inicio",
    "titleEn": "Sign in · light theme",
    "descriptionEn": "Account access with email and password.",
    "altEn": "Sign in · light theme.",
    "categoryEn": "Getting started",
    "width": 592,
    "height": 1280
  },
  {
    "file": "login-oscuro.jpeg",
    "title": "Inicio de sesión · tema oscuro",
    "description": "Acceso a la cuenta con correo electrónico y contraseña.",
    "alt": "Inicio de sesión · tema oscuro.",
    "category": "Inicio",
    "titleEn": "Sign in · dark theme",
    "descriptionEn": "Account access with email and password.",
    "altEn": "Sign in · dark theme.",
    "categoryEn": "Getting started",
    "width": 592,
    "height": 1280
  },
  {
    "file": "onboarding1-claro.jpeg",
    "title": "Cómo nos conociste · tema claro",
    "description": "Selección del medio por el que el estudiante conoció la app.",
    "alt": "Cómo nos conociste · tema claro.",
    "category": "Onboarding",
    "titleEn": "How did you hear about us? · light theme",
    "descriptionEn": "Choose how the learner heard about the app.",
    "altEn": "How did you hear about us? · light theme.",
    "categoryEn": "Onboarding",
    "width": 592,
    "height": 1280
  },
  {
    "file": "onboarding1-oscuro.jpeg",
    "title": "Cómo nos conociste · tema oscuro",
    "description": "Selección del medio por el que el estudiante conoció la app.",
    "alt": "Cómo nos conociste · tema oscuro.",
    "category": "Onboarding",
    "titleEn": "How did you hear about us? · dark theme",
    "descriptionEn": "Choose how the learner heard about the app.",
    "altEn": "How did you hear about us? · dark theme.",
    "categoryEn": "Onboarding",
    "width": 592,
    "height": 1280
  },
  {
    "file": "onboarding2-claro.jpeg",
    "title": "Objetivo de aprendizaje · tema claro",
    "description": "Selección del motivo principal para aprender inglés.",
    "alt": "Objetivo de aprendizaje · tema claro.",
    "category": "Onboarding",
    "titleEn": "Learning goal · light theme",
    "descriptionEn": "Choose the main reason for learning English.",
    "altEn": "Learning goal · light theme.",
    "categoryEn": "Onboarding",
    "width": 592,
    "height": 1280
  },
  {
    "file": "onboarding2-oscuro.jpeg",
    "title": "Objetivo de aprendizaje · tema oscuro",
    "description": "Selección del motivo principal para aprender inglés.",
    "alt": "Objetivo de aprendizaje · tema oscuro.",
    "category": "Onboarding",
    "titleEn": "Learning goal · dark theme",
    "descriptionEn": "Choose the main reason for learning English.",
    "altEn": "Learning goal · dark theme.",
    "categoryEn": "Onboarding",
    "width": 592,
    "height": 1280
  },
  {
    "file": "onboarding3-claro.jpeg",
    "title": "Tiempo de práctica · tema claro",
    "description": "Selección del tiempo que se dedicará al inglés cada día.",
    "alt": "Tiempo de práctica · tema claro.",
    "category": "Onboarding",
    "titleEn": "Practice time · light theme",
    "descriptionEn": "Choose how much time to spend practicing English each day.",
    "altEn": "Practice time · light theme.",
    "categoryEn": "Onboarding",
    "width": 592,
    "height": 1280
  },
  {
    "file": "onboarding3-oscuro.jpeg",
    "title": "Tiempo de práctica · tema oscuro",
    "description": "Selección del tiempo que se dedicará al inglés cada día.",
    "alt": "Tiempo de práctica · tema oscuro.",
    "category": "Onboarding",
    "titleEn": "Practice time · dark theme",
    "descriptionEn": "Choose how much time to spend practicing English each day.",
    "altEn": "Practice time · dark theme.",
    "categoryEn": "Onboarding",
    "width": 592,
    "height": 1280
  },
  {
    "file": "onboarding4-claro.jpeg",
    "title": "Preferencias de comunicación · tema claro",
    "description": "Selección del estilo de comunicación preferido.",
    "alt": "Preferencias de comunicación · tema claro.",
    "category": "Onboarding",
    "titleEn": "Communication preferences · light theme",
    "descriptionEn": "Choose a preferred communication style.",
    "altEn": "Communication preferences · light theme.",
    "categoryEn": "Onboarding",
    "width": 592,
    "height": 1280
  },
  {
    "file": "onboarding4-oscuro.jpeg",
    "title": "Preferencias de comunicación · tema oscuro",
    "description": "Selección del estilo de comunicación preferido.",
    "alt": "Preferencias de comunicación · tema oscuro.",
    "category": "Onboarding",
    "titleEn": "Communication preferences · dark theme",
    "descriptionEn": "Choose a preferred communication style.",
    "altEn": "Communication preferences · dark theme.",
    "categoryEn": "Onboarding",
    "width": 592,
    "height": 1280
  },
  {
    "file": "onboarding5-claro.jpeg",
    "title": "Nivel de inglés · tema claro",
    "description": "Autoevaluación inicial del nivel de inglés.",
    "alt": "Nivel de inglés · tema claro.",
    "category": "Onboarding",
    "titleEn": "English level · light theme",
    "descriptionEn": "An initial self-assessment of English proficiency.",
    "altEn": "English level · light theme.",
    "categoryEn": "Onboarding",
    "width": 592,
    "height": 1280
  },
  {
    "file": "onboarding5-oscuro.jpeg",
    "title": "Nivel de inglés · tema oscuro",
    "description": "Autoevaluación inicial del nivel de inglés.",
    "alt": "Nivel de inglés · tema oscuro.",
    "category": "Onboarding",
    "titleEn": "English level · dark theme",
    "descriptionEn": "An initial self-assessment of English proficiency.",
    "altEn": "English level · dark theme.",
    "categoryEn": "Onboarding",
    "width": 592,
    "height": 1280
  },
  {
    "file": "micamino-claro.jpeg",
    "title": "Mi camino · Valle Natural · tema claro",
    "description": "Ruta visual A1 con nodos y lecciones de aprendizaje.",
    "alt": "Mi camino · Valle Natural · tema claro.",
    "category": "Ruta de aprendizaje",
    "titleEn": "My path · Natural Valley · light theme",
    "descriptionEn": "A visual A1 path with learning nodes and lessons.",
    "altEn": "My path · Natural Valley · light theme.",
    "categoryEn": "Learning path",
    "width": 592,
    "height": 1280
  },
  {
    "file": "micamino-oscuro.jpeg",
    "title": "Mi camino · Valle Natural · tema oscuro",
    "description": "Ruta visual A1 con nodos y lecciones de aprendizaje.",
    "alt": "Mi camino · Valle Natural · tema oscuro.",
    "category": "Ruta de aprendizaje",
    "titleEn": "My path · Natural Valley · dark theme",
    "descriptionEn": "A visual A1 path with learning nodes and lessons.",
    "altEn": "My path · Natural Valley · dark theme.",
    "categoryEn": "Learning path",
    "width": 592,
    "height": 1280
  }
];

const mobileStack = [
  ["React Native", "Interfaces móviles multiplataforma."],
  ["Expo", "Runtime, herramientas y empaquetado de la app."],
  ["TypeScript", "Tipos para pantallas, navegación y lógica."],
  ["Expo Router", "Rutas y navegación organizadas por archivos."],
  ["AsyncStorage", "Almacenamiento local del estado de sesión."],
  ["Reanimated · Skia", "Movimiento de interfaz y gráficos de la ruta."],
];

const mobileStackEnglish: Record<string, string> = {
  "React Native": "Cross-platform mobile interfaces.",
  Expo: "Runtime, tools, and app packaging.",
  TypeScript: "Types for screens, navigation, and logic.",
  "Expo Router": "File-based routes and navigation.",
  AsyncStorage: "Local storage for session state.",
  "Reanimated · Skia": "Interface motion and learning-path graphics.",
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
                <span>01</span> / <LanguageText es="CASO DE ESTUDIO · APP MÓVIL" en="MOBILE PRODUCT CASE STUDY" />
              </p>
              <h1>Inglés Chido<span>.</span></h1>
              <p className="ingles-case-subtitle">
                <LanguageText es="App interactiva para aprender inglés" en="Interactive English learning app" />
              </p>
              <p className="ingles-case-lede"><LanguageText es="Una app móvil para aprender inglés desde A1 con onboarding, ruta visual y lecciones que registran evidencia de práctica." en="A mobile app for learning English from A1, with onboarding, a visual learning path, and lessons that record practice evidence." /></p>
              <div className="ingles-case-tags" aria-label="Tecnologías móviles / Mobile technologies">
                {["React Native", "Expo", "TypeScript", "Expo Router"].map(
                  (tag) => <span key={tag}>{tag}</span>,
                )}
              </div>
              <div className="ingles-case-actions">
                <a className="ingles-case-secondary" href="#app">
                  <LanguageText es="Explorar la app" en="Explore the app" /> <ArrowRight size={15} />
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

      <section className="ingles-case-overview">
        <div className="shell ingles-case-overview-grid">
          <div>
            <p className="eyebrow"><span>02</span> / <LanguageText es="PRODUCTO" en="PRODUCT" /></p>
            <h2><LanguageText es="De la práctica a una ruta de aprendizaje." en="From practice to a learning path." /></h2>
          </div>
          <p>
            <LanguageText es="Inglés Chido organiza un primer recorrido A1 en una app móvil. Parte de una idea de producto: completar una actividad no basta para evidenciar aprendizaje. El prototipo permite personalizar el inicio, recorrer lecciones y consultar el progreso local; la adaptación automática todavía está planeada." en="Inglés Chido organizes an initial A1 learning journey in a mobile app. Its product premise is that completing an activity alone is not evidence of learning. The prototype lets learners personalize onboarding, move through lessons, and review local progress; automatic adaptation is still planned." />
          </p>
        </div>
      </section>

      <section className="ingles-case-app" id="app">
        <div className="shell">
          <div className="ingles-case-section-heading">
            <div>
              <p className="eyebrow"><span>03</span> / <LanguageText es="EXPLORAR LA APP" en="EXPLORE THE APP" /></p>
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
            <p className="eyebrow"><span>04</span> / <LanguageText es="STACK MÓVIL" en="MOBILE STACK" /></p>
            <h2><LanguageText es="Una base nativa y modular." en="A native, modular foundation." /></h2>
            <p>
              <LanguageText es="Estas herramientas están declaradas y se usan en la aplicación móvil para navegación, estado local e interacción visual." en="These tools are declared and used in the mobile app for navigation, local state, and visual interaction." />
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
              <span><LanguageText es="Base del servicio API; el flujo móvil principal aún no está integrado." en="API service foundation; it is not yet integrated with the main mobile flow." /></span>
            </article>
            <article className="ingles-case-stack-backend">
              <strong>PostgreSQL · Alembic</strong>
              <span><LanguageText es="Persistencia y migraciones previstas para la evolución del backend." en="Persistence and migrations planned for the backend's future development." /></span>
            </article>
          </div>
        </div>
      </section>

      <section className="ingles-case-architecture" id="arquitectura">
        <div className="shell">
          <p className="eyebrow"><span>05</span> / <LanguageText es="ARQUITECTURA" en="ARCHITECTURE" /></p>
          <div className="ingles-case-section-heading">
            <h2><LanguageText es="Aplicación móvil → API → base de datos" en="Mobile app → API → database" /></h2>
            <p><LanguageText es="La app funciona con estado y datos locales; la conexión remota sigue en desarrollo." en="The app currently uses local state and data; remote connectivity is still under development." /></p>
          </div>
          <div className="ingles-case-architecture-grid">
            <article>
              <Smartphone size={20} />
              <span><LanguageText es="IMPLEMENTADO" en="IMPLEMENTED" /></span>
              <h3><LanguageText es="Aplicación móvil" en="Mobile app" /></h3>
              <p><LanguageText es="Expo, React Native y TypeScript. La app agrupa onboarding, ruta A1, lecciones y módulos de progreso." en="Expo, React Native, and TypeScript. The app brings together onboarding, the A1 path, lessons, and progress modules." /></p>
            </article>
            <i aria-hidden="true">→</i>
            <article>
              <Code2 size={20} />
              <span><LanguageText es="BASE EN DESARROLLO" en="FOUNDATION IN DEVELOPMENT" /></span>
              <h3><LanguageText es="API del backend" en="Backend API" /></h3>
              <p><LanguageText es="Servicio modular FastAPI con configuración y health checks. No respalda aún el flujo principal de la app." en="A modular FastAPI service with configuration and health checks. It does not yet support the app's main flow." /></p>
            </article>
            <i aria-hidden="true">→</i>
            <article>
              <Database size={20} />
              <span><LanguageText es="PREVISTO" en="PLANNED" /></span>
              <h3><LanguageText es="Base de datos" en="Database" /></h3>
              <p><LanguageText es="PostgreSQL y Alembic están en la base técnica; la persistencia del producto todavía es local." en="PostgreSQL and Alembic are part of the technical foundation; product data is still stored locally." /></p>
            </article>
          </div>
        </div>
      </section>

      <section className="ingles-case-highlights">
        <div className="shell">
          <p className="eyebrow"><span>06</span> / <LanguageText es="INGENIERÍA" en="ENGINEERING" /></p>
          <h2><LanguageText es="Decisiones que estructuran la experiencia." en="Decisions that shape the experience." /></h2>
          <div className="ingles-case-highlight-grid">
            <article><Layers3 size={19} /><h3><LanguageText es="Ruta por estado y presentación" en="State and presentation" /></h3><p><LanguageText es="Los datos curriculares, el estado de avance y la escena visual viven en módulos separados." en="Curriculum data, progress state, and the visual scene live in separate modules." /></p></article>
            <article><Code2 size={19} /><h3><LanguageText es="Motor de lecciones" en="Lesson engine" /></h3><p><LanguageText es="Pasos y actividades se componen en un flujo reutilizable para las primeras lecciones A1." en="Steps and activities are composed into a reusable flow for the first A1 lessons." /></p></article>
            <article><Database size={19} /><h3><LanguageText es="Evidencia local" en="Local evidence" /></h3><p><LanguageText es="El modelo distingue intentos, respuestas y necesidades de repaso; no implica analítica remota." en="The model distinguishes attempts, answers, and review needs; it does not imply remote analytics." /></p></article>
            <article><Check size={19} /><h3><LanguageText es="Temas y accesibilidad" en="Themes and accessibility" /></h3><p><LanguageText es="La app incluye modos claro y oscuro, y contempla movimiento reducido en sus animaciones." en="The app includes light and dark themes and respects reduced-motion preferences in its animations." /></p></article>
          </div>
        </div>
      </section>

      <section className="ingles-case-contribution">
        <div className="shell ingles-case-overview-grid">
          <div>
            <p className="eyebrow"><span>07</span> / <LanguageText es="MI PARTICIPACIÓN" en="MY ROLE" /></p>
            <h2><LanguageText es="Producto y desarrollo móvil." en="Product and mobile development." /></h2>
          </div>
          <div>
            <p>
              <LanguageText es="Desarrollo Inglés Chido de forma individual y me encargo del proyecto de principio a fin: producto, experiencia móvil y desarrollo de la aplicación. La base de backend también forma parte del trabajo; la API y la persistencia siguen en desarrollo y aún no están integradas al flujo principal de la app." en="I develop Inglés Chido independently and lead the project end to end: product, mobile experience, and app development. The backend foundation is also part of the work; the API and persistence are still in development and are not yet integrated into the app's main flow." />
            </p>
          </div>
        </div>
      </section>

      <section className="ingles-case-status">
        <div className="shell">
          <p className="eyebrow"><span>08</span> / <LanguageText es="ESTADO ACTUAL" en="CURRENT STATUS" /></p>
          <h2><LanguageText es="Un producto en evolución." en="A product in progress." /></h2>
          <div className="ingles-case-status-grid">
            <article><span>01</span><h3><LanguageText es="Implementado" en="Implemented" /></h3><p><LanguageText es="Bienvenida, onboarding local, ruta A1, lecciones iniciales, repaso, vocabulario y progreso." en="Welcome flow, local onboarding, A1 path, introductory lessons, review, vocabulary, and progress." /></p></article>
            <article><span>02</span><h3><LanguageText es="En desarrollo" en="In development" /></h3><p><LanguageText es="Backend modular y evolución de los flujos locales hacia servicios compartidos." en="A modular backend and the gradual move from local flows to shared services." /></p></article>
            <article><span>03</span><h3><LanguageText es="Planeado" en="Planned" /></h3><p><LanguageText es="Sincronización remota y adaptación de sesiones a partir de evidencias de aprendizaje." en="Remote synchronization and practice-session adaptation based on learning evidence." /></p></article>
          </div>
          <aside className="ingles-case-data-note" aria-labelledby="ingles-case-data-note-title">
            <div className="ingles-case-data-note-heading">
              <span className="ingles-case-data-note-status"><LanguageText es="Planificado" en="Planned" /></span>
              <h3 id="ingles-case-data-note-title">
                <LanguageText es="Próxima evolución: analítica del aprendizaje y personalización basada en datos" en="Next evolution: learning analytics and data-informed personalization" />
              </h3>
            </div>
            <div className="ingles-case-data-note-copy">
              <p>
                <LanguageText
                  es="Inglés Chido contempla incorporar un módulo de análisis de datos orientado a comprender cómo aprende cada usuario. A través de la recopilación de datos de interacción y desempeño —como progreso, respuestas correctas e incorrectas, tiempos de respuesta y dificultades por tema— se buscará identificar patrones de aprendizaje y generar recomendaciones personalizadas."
                  en="Inglés Chido plans to add a data-analysis module to better understand how each learner learns. Once implemented, it would use interaction and performance data—such as progress, correct and incorrect answers, response times, and topic-level difficulties—to identify learning patterns and provide personalized recommendations."
                />
              </p>
              <p>
                <LanguageText
                  es="El objetivo es evolucionar hacia una experiencia educativa adaptativa, en la que contenidos, ejercicios y rutas de estudio puedan ajustarse a las necesidades y al progreso individual de cada estudiante. Esta funcionalidad forma parte de la planificación futura del proyecto."
                  en="The goal is an adaptive learning experience in which content, exercises, and study paths can respond to each student’s needs and progress. This functionality is part of the project’s future plans."
                />
              </p>
            </div>
          </aside>
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
