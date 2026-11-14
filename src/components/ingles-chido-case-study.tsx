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
  },
  {"file": "micamino-abecedario-claro.webp", "title": "Mi camino · Abecedario", "description": "Tarjeta de la lección Abecedario abierta sobre la ruta A1.", "alt": "Mi camino · Abecedario en tema claro.", "category": "Ruta de aprendizaje", "titleEn": "My path · Alphabet", "descriptionEn": "Alphabet lesson card opened on the A1 path.", "altEn": "My path · Alphabet in light theme.", "categoryEn": "Learning path", "width": 592, "height": 1280},
  {"file": "micamino-abecedario-oscuro.webp", "title": "Mi camino · Abecedario", "description": "Tarjeta de la lección Abecedario abierta sobre la ruta A1.", "alt": "Mi camino · Abecedario en tema oscuro.", "category": "Ruta de aprendizaje", "titleEn": "My path · Alphabet", "descriptionEn": "Alphabet lesson card opened on the A1 path.", "altEn": "My path · Alphabet in dark theme.", "categoryEn": "Learning path", "width": 592, "height": 1280},
  {"file": "micamino-gustos-claro.webp", "title": "Mi camino · Gustos y hábitos", "description": "Vista de una lección futura en el mapa de aprendizaje.", "alt": "Mi camino · Gustos y hábitos en tema claro.", "category": "Ruta de aprendizaje", "titleEn": "My path · Likes and habits", "descriptionEn": "A future lesson shown on the learning map.", "altEn": "My path · Likes and habits in light theme.", "categoryEn": "Learning path", "width": 592, "height": 1280},
  {"file": "micamino-gustos-oscuro.webp", "title": "Mi camino · Gustos y hábitos", "description": "Vista de una lección futura en el mapa de aprendizaje.", "alt": "Mi camino · Gustos y hábitos en tema oscuro.", "category": "Ruta de aprendizaje", "titleEn": "My path · Likes and habits", "descriptionEn": "A future lesson shown on the learning map.", "altEn": "My path · Likes and habits in dark theme.", "categoryEn": "Learning path", "width": 592, "height": 1280},
  {
    file: "17.webp",
    title: "Lección: el abecedario",
    description:
      "Portada audiovisual de una lección A1 con controles y avance por pasos.",
    alt: "Lección del abecedario en la aplicación Inglés Chido.",
    reference: "Lessons · lesson-screen.tsx",
    category: "Ruta y lecciones",
  },
  {
    file: "17_1.webp",
    title: "Práctica de deletreo y escritura",
    description: "Ejemplo visual para relacionar palabras, animales y su escritura.",
    alt: "Actividad de aprendizaje con las palabras dog y cat y una libreta para practicar escritura.",
    category: "Ruta y lecciones",
  },
  {
    file: "18.webp",
    title: "Práctica de vocales",
    description:
      "Actividad guiada para escuchar, repetir y practicar pronunciación.",
    alt: "Actividad de vocales con audio, guía de pronunciación y control de repetición.",
    reference: "Lessons · vowels-step.tsx",
    category: "Escucha y práctica",
  },
  {
    file: "19.webp",
    title: "Reconocimiento auditivo",
    description: "Escucha una vocal y elige la letra que corresponde al sonido.",
    alt: "Actividad para identificar una vocal a partir de su pronunciación.",
    category: "Escucha y práctica",
  },
  {
    file: "20.webp",
    title: "Práctica de consonantes",
    description: "Presentación de una consonante con controles para escuchar y repetir.",
    alt: "Lección de consonantes con audio, pronunciación y opciones de práctica.",
    category: "Escucha y práctica",
  },
  {
    file: "10.webp",
    screenKey: "repaso",
    themeVariant: "claro",
    title: "Repaso",
    description: "Resumen de áreas que pueden requerir práctica adicional.",
    alt: "Pantalla de repaso con apartados de patrones, vocabulario y habilidades.",
    category: "Repaso y vocabulario",
  },
  {
    file: "11.webp",
    screenKey: "vocabulario",
    themeVariant: "claro",
    title: "Vocabulario",
    description: "Consulta de palabras guardadas y formulario para añadir vocabulario.",
    alt: "Pantalla de vocabulario con búsqueda, filtros y opción para agregar palabras.",
    category: "Repaso y vocabulario",
  },
  {
    file: "22.webp",
    screenKey: "repaso",
    themeVariant: "oscuro",
    title: "Repaso · tema oscuro",
    description: "Vista del módulo de repaso con el tema oscuro activo.",
    alt: "Módulo de repaso de Inglés Chido en tema oscuro.",
    category: "Repaso y vocabulario",
  },
  {
    file: "22_1.webp",
    screenKey: "areas-repaso",
    themeVariant: "oscuro",
    title: "Áreas de repaso · tema oscuro",
    description: "Apartados de práctica y contenido por reforzar en tema oscuro.",
    alt: "Lista de áreas de repaso en la interfaz oscura de Inglés Chido.",
    category: "Repaso y vocabulario",
  },
  {
    file: "22_2.webp",
    screenKey: "vocabulario",
    themeVariant: "oscuro",
    title: "Vocabulario · tema oscuro",
    description: "Consulta y práctica de vocabulario con el tema oscuro activo.",
    alt: "Pantalla de vocabulario en tema oscuro con una palabra guardada.",
    category: "Repaso y vocabulario",
  },
];

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
            <h2><LanguageText es="Completar no equivale a dominar." en="Completion is not mastery." /></h2>
          </div>
          <p>
            <LanguageText es="Terminar una actividad no demuestra que se haya comprendido el contenido. El prototipo A1 ya registra intentos, respuestas, errores y necesidades de repaso de forma local. La propuesta de AELP es convertir esas evidencias en indicadores de dificultad y progreso para evaluar el aprendizaje y, en una etapa posterior, ajustar la práctica." en="Finishing an activity does not prove understanding. The A1 prototype already records attempts, answers, errors, and review needs locally. AELP aims to turn that evidence into indicators of difficulty and progress, then use it to adjust practice in a later stage." />
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
            <p className="eyebrow"><span>04</span> / <LanguageText es="STACK TÉCNICO" en="TECH STACK" /></p>
            <h2><LanguageText es="La experiencia genera evidencias." en="The experience creates evidence." /></h2>
            <p>
              <LanguageText es="La app móvil es la fuente actual de datos de aprendizaje. Su estado y registros son locales; el servicio API, la persistencia centralizada y el análisis con pandas pertenecen a etapas posteriores." en="The mobile app is the current source of learning data. Its state and records are local; the API, centralized storage, and pandas analysis belong to later stages." />
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
              <span><LanguageText es="Procesamiento e indicadores de aprendizaje previstos; todavía no hay una capa analítica integrada." en="Planned processing and learning indicators; no analytics layer is integrated yet." /></span>
            </article>
          </div>
        </div>
      </section>

      <section className="ingles-case-architecture" id="arquitectura">
        <div className="shell">
          <p className="eyebrow"><span>05</span> / <LanguageText es="ARQUITECTURA" en="ARCHITECTURE" /></p>
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

      <section className="ingles-case-highlights">
        <div className="shell">
          <p className="eyebrow"><span>06</span> / <LanguageText es="INGENIERÍA" en="ENGINEERING" /></p>
          <h2><LanguageText es="Evidencias con contexto y trazabilidad." en="Evidence with context and traceability." /></h2>
          <div className="ingles-case-highlight-grid">
            <article><Layers3 size={19} /><h3><LanguageText es="Datos y presentación separados" en="Data and presentation separated" /></h3><p><LanguageText es="Los datos curriculares, los estados de avance y la escena visual se organizan en módulos distintos." en="Curriculum data, progress states, and the visual scene are organized in separate modules." /></p></article>
            <article><Code2 size={19} /><h3><LanguageText es="Lecciones estructuradas" en="Structured lessons" /></h3><p><LanguageText es="Los pasos y actividades A1 comparten un flujo reutilizable que sitúa cada respuesta en una lección." en="A1 steps and activities share a reusable flow that places each answer within a lesson." /></p></article>
            <article><Database size={19} /><h3><LanguageText es="Registros de aprendizaje" en="Learning records" /></h3><p><LanguageText es="El estado local distingue intentos, respuestas, errores y necesidades de repaso; aún no existe procesamiento analítico remoto." en="Local state distinguishes attempts, answers, errors, and review needs; remote analytical processing is not in place yet." /></p></article>
            <article><Check size={19} /><h3><LanguageText es="Temas y accesibilidad" en="Themes and accessibility" /></h3><p><LanguageText es="La app incluye modos claro y oscuro, y contempla movimiento reducido en sus animaciones." en="The app includes light and dark themes and respects reduced-motion preferences in its animations." /></p></article>
          </div>
        </div>
      </section>

      <section className="ingles-case-contribution">
        <div className="shell ingles-case-overview-grid">
          <div>
            <p className="eyebrow"><span>07</span> / <LanguageText es="MI PARTICIPACIÓN" en="MY ROLE" /></p>
            <h2><LanguageText es="Producto, desarrollo y estrategia de datos." en="Product, development, and data strategy." /></h2>
          </div>
          <div>
            <p>
              <LanguageText es="Lidero la visión de producto, la experiencia y el desarrollo móvil de Inglés Chido. También defino cómo los intentos, respuestas y errores pueden convertirse en evidencias útiles para analizar el aprendizaje. La integración de la API y la persistencia centralizada siguen en desarrollo." en="I lead Inglés Chido's product vision, learning experience, and mobile development. I also define how attempts, answers, and errors could become useful evidence for learning analysis. API integration and centralized storage remain in development." />
            </p>
          </div>
        </div>
      </section>

      <section className="ingles-case-status">
        <div className="shell">
          <p className="eyebrow"><span>08</span> / <LanguageText es="ESTADO ACTUAL" en="CURRENT STATUS" /></p>
          <h2><LanguageText es="De registros locales a decisiones educativas." en="From local records to learning decisions." /></h2>
          <div className="ingles-case-status-grid">
            <article><span>01</span><h3><LanguageText es="Implementado" en="Implemented" /></h3><p><LanguageText es="Prototipo móvil A1 con lecciones, progreso y registro local de intentos, respuestas, errores y repaso." en="A1 mobile prototype with lessons, progress, and local records of attempts, answers, errors, and review needs." /></p></article>
            <article><span>02</span><h3><LanguageText es="En desarrollo" en="In development" /></h3><p><LanguageText es="Base FastAPI y preparación de la integración para llevar evidencias a una persistencia centralizada." en="FastAPI foundation and integration work to move learning evidence into centralized storage." /></p></article>
            <article><span>03</span><h3><LanguageText es="Planeado" en="Planned" /></h3><p><LanguageText es="Indicadores de dominio, detección de patrones y recomendaciones para adaptar la práctica." en="Mastery indicators, pattern detection, and recommendations to adapt practice." /></p></article>
          </div>
          <aside className="ingles-case-data-note" aria-labelledby="ingles-case-data-note-title">
            <div className="ingles-case-data-note-heading">
              <span className="ingles-case-data-note-status"><LanguageText es="HOJA DE RUTA" en="ROADMAP" /></span>
              <h3 id="ingles-case-data-note-title">
                <LanguageText es="Learning Analytics: tres etapas de evolución" en="Learning analytics: three stages of development" />
              </h3>
            </div>
            <div className="ingles-case-data-note-copy">
              <p>
                <LanguageText
                  es="1. Captura local implementada: el prototipo conserva intentos, respuestas, errores y necesidades de repaso dentro de la app. Estos registros describen la práctica, pero todavía no producen indicadores analíticos de dominio."
                  en="1. Implemented local capture: the prototype keeps attempts, answers, errors, and review needs within the app. These records describe practice but do not yet produce analytical mastery indicators."
                />
              </p>
              <p>
                <LanguageText
                  es="2. Integración de datos en desarrollo: la base FastAPI y PostgreSQL busca reunir evidencias entre sesiones. El procesamiento con Python y pandas todavía está previsto, no integrado al flujo móvil."
                  en="2. Data integration in development: the FastAPI and PostgreSQL foundation aims to bring evidence together across sessions. Processing with Python and pandas is still planned and is not integrated into the mobile flow."
                />
              </p>
              <p>
                <LanguageText
                  es="3. Analítica adaptativa planificada: calcular métricas de dominio, identificar dificultades y patrones, explorar modelos predictivos y recomendar práctica según el progreso. Aún no hay modelos entrenados ni recomendaciones automáticas en producción."
                  en="3. Planned adaptive analytics: calculate mastery metrics, identify difficulties and patterns, explore predictive models, and recommend practice based on progress. There are no trained models or production recommendations yet."
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
