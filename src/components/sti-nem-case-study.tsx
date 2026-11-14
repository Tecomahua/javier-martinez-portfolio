import Link from "next/link";
import { ArrowLeft, ArrowRight, Database, Layers3, Server, ShieldCheck } from "lucide-react";
import { AelpCaptureGallery, type AelpCapture } from "@/components/aelp-capture-gallery";
import { StiNemBrowserFrame } from "@/components/sti-nem-browser-frame";
import { LanguageText } from "@/components/language-provider";
import { getPublicAssetPath } from "@/lib/site-url";

const captures: AelpCapture[] = [
  {
    file: "dashboard-docente.png",
    title: "Dashboard docente",
    description:
      "Panel de inicio con accesos del módulo docente, actividad reciente e indicadores académicos.",
    alt: "Dashboard docente de STI-NEM; los nombres y cifras personales están anonimizados.",
    category: "Docente",
  },
  {
    file: "grupos.png",
    title: "Gestión de grupos",
    description:
      "Consulta visual de grupos con filtros por grado y ciclo escolar.",
    alt: "Vista de grupos escolares con filtros y tarjetas; se ocultaron cifras de estudiantes.",
    category: "Docente",
  },
  {
    file: "detalle-grupo.png",
    title: "Detalle y configuración del grupo",
    description:
      "Pantalla de configuración de retos y listado de participantes, con nombres y alias anonimizados.",
    alt: "Detalle de grupo con configuración y tabla; los nombres y alias fueron anonimizados.",
    category: "Docente",
  },
  {
    file: "perfil-estudiante.png",
    title: "Perfil del estudiante",
    description:
      "Interfaz con pestañas para organizar información formativa, progreso y actividad; se anonimizaron los datos del perfil.",
    alt: "Perfil de estudiante con datos personales y valores de progreso anonimizados.",
    category: "Estudiantes",
  },
  {
    file: "generacion-ejercicios.png",
    title: "Criterios para ejercicios",
    description:
      "Interfaz para elegir criterios curriculares y consultar el área donde aparecerían los resultados. La captura no confirma que la generación esté conectada.",
    alt: "Pantalla de selección de criterios para generación de ejercicios; la vista de resultados está vacía.",
    category: "Ejercicios",
  },
  {
    file: "ejercicios.png",
    title: "Consulta de ejercicios",
    description:
      "Listado visual con filtros curriculares, dificultades y acciones para consultar ejercicios.",
    alt: "Tabla de ejercicios con filtros por grado, campo formativo y contenido.",
    category: "Ejercicios",
  },
];

export function StiNemCaseStudy() {
  return (
    <main className="sti-case">
      <section className="sti-case-hero"><div className="shell">
        <Link className="back-link" href="/#proyectos"><ArrowLeft size={15} /> <LanguageText es="Volver a proyectos" en="Back to projects" /></Link>
        <div className="sti-case-hero-grid"><div className="sti-case-intro">
          <p className="eyebrow"><span>04</span> / <LanguageText es="PROYECTO COMPLEMENTARIO · INTEGRACIÓN DE DATOS" en="COMPLEMENTARY PROJECT · DATA INTEGRATION" /></p>
          <h1>STI-NEM<span>.</span></h1>
          <p className="sti-case-subtitle">SQL &amp; Database Integration</p>
          <p className="sti-case-lede"><LanguageText es="Sistema educativo en equipo con PostgreSQL, NestJS, Prisma y Next.js. Desarrollé principalmente el módulo docente y apoyé la integración y validación de datos entre la interfaz, la API y la base de datos." en="A team-built education system using PostgreSQL, NestJS, Prisma, and Next.js. I primarily developed the teacher module and supported data integration and validation across the interface, API, and database." /></p>
          <div className="sti-case-tags"><span>SQL</span><span>PostgreSQL 18</span><span>Prisma</span><span>NestJS</span><span>Next.js</span></div>
          <div className="sti-case-actions"><a className="sti-case-secondary" href="#data-quality"><LanguageText es="Ver evidencia de datos" en="Explore data evidence" /> <ArrowRight size={15} /></a></div>
          <p className="sti-case-academic"><LanguageText es="Servicio social en un proyecto de tesis de maestría del Tecnológico Nacional de México, dirigido por la MCE Beatriz Zepahua." en="Social service work on a master's thesis project at Mexico's National Technological Institute, supervised by MCE Beatriz Zepahua." /></p>
        </div><StiNemBrowserFrame className="sti-case-hero-frame" priority /></div>
      </div></section>

      <section className="sti-case-stack" id="data-quality"><div className="shell">
        <div className="sti-case-section-heading"><div><p className="eyebrow"><span>01</span> / <LanguageText es="AUDITORÍA DOCUMENTADA" en="DOCUMENTED AUDIT" /></p><h2><LanguageText es="Integridad de datos, con alcance definido." en="Data integrity, with a defined scope." /></h2></div><p><LanguageText es="El manual registra una auditoría de estructura y datos sobre una copia restaurada y aislada. Son cifras de esa revisión puntual, no métricas de producción ni resultados de aprendizaje." en="The manual records a structure and data audit on an isolated restored copy. These figures describe that specific review, not production metrics or learning outcomes." /></p></div>
        <div className="sti-case-stack-grid sti-audit-grid">
          <article><Database size={20} /><strong>52</strong><p><LanguageText es="tablas de aplicación" en="application tables" /></p></article>
          <article><Database size={20} /><strong>26,805</strong><p><LanguageText es="registros auditados" en="records audited" /></p></article>
          <article><ShieldCheck size={20} /><strong>99</strong><p><LanguageText es="claves foráneas validadas" en="foreign keys validated" /></p></article>
        </div>
      </div></section>

      <section className="sti-case-architecture" id="architecture"><div className="shell">
        <p className="eyebrow"><span>02</span> / <LanguageText es="ARQUITECTURA" en="ARCHITECTURE" /></p>
        <div className="sti-case-section-heading"><h2><LanguageText es="De la interfaz a los datos." en="From interface to data." /></h2><p><LanguageText es="Flujo documentado en el entorno local: las vistas consumen servicios de la API y Prisma conecta el backend con PostgreSQL. Algunos flujos siguen parciales o simulados." en="Documented local flow: views consume API services and Prisma connects the backend to PostgreSQL. Some workflows remain partial or mocked." /></p></div>
        <div className="sti-case-flow" aria-label="Flujo de arquitectura / Architecture flow">
          <article><Layers3 size={20} /><span>FRONTEND</span><h3>Next.js</h3><p><LanguageText es="Pantallas docentes, servicios y adaptadores de datos; opción de datos simulados." en="Teacher screens, services, and data adapters; mock data remains available." /></p></article><i aria-hidden="true">⇢</i>
          <article><Server size={20} /><span>API</span><h3>NestJS</h3><p><LanguageText es="Contratos y rutas para autenticación, grupos, ejercicios y tutoría." en="Contracts and routes for authentication, classes, exercises, and tutoring." /></p></article><i aria-hidden="true">⇢</i>
          <article><Database size={20} /><span>DATA</span><h3>Prisma · PostgreSQL 18</h3><p><LanguageText es="Acceso a datos, esquema relacional y migraciones controladas." en="Data access, relational schema, and controlled migrations." /></p></article>
        </div>
      </div></section>

      <section className="sti-case-engineering"><div className="shell">
        <p className="eyebrow"><span>03</span> / SQL &amp; DATA QUALITY</p><div className="sti-case-section-heading"><h2><LanguageText es="Validación e integración." en="Validation and integration." /></h2><p><LanguageText es="La bitácora describe trabajo de equipo; estas comprobaciones no acreditan análisis exploratorio ni consultas SQL avanzadas." en="The log describes team work; these checks do not establish exploratory analysis or advanced SQL queries." /></p></div>
        <div className="sti-case-engineering-list">
          <article><span>01</span><div><h3><LanguageText es="Integridad relacional" en="Relational integrity" /></h3><p><LanguageText es="Revisión de claves foráneas, del índice único parcial para titular de grupo y de restricciones PDA, incluida la validación de decimales no negativos." en="Review of foreign keys, the partial unique index for the group lead, and PDA constraints, including nonnegative decimal limits." /></p></div><small>POSTGRESQL</small></article>
          <article><span>02</span><div><h3><LanguageText es="Migración controlada" en="Controlled migration" /></h3><p><LanguageText es="Se preservó el historial de Prisma y se aplicó una migración incremental a la base activa con autorización; Prisma registró tres migraciones aplicadas." en="The Prisma history was preserved and an incremental migration was applied to the active database with authorization; Prisma reported three applied migrations." /></p></div><small>PRISMA</small></article>
          <article><span>03</span><div><h3><LanguageText es="Contratos y API" en="Contracts and API" /></h3><p><LanguageText es="Adaptadores transforman respuestas de NestJS para las vistas. La bitácora registra Swagger 200 y una ruta protegida 401 sin token; el inicio de sesión se probó en una copia aislada." en="Adapters transform NestJS responses for the views. The log records Swagger 200 and a protected route returning 401 without a token; login was tested on an isolated copy." /></p></div><small>API</small></article>
        </div>
      </div></section>

      <section className="sti-case-contribution"><div className="shell sti-case-context-grid"><div><p className="eyebrow"><span>04</span> / <LanguageText es="MI CONTRIBUCIÓN" en="MY CONTRIBUTION" /></p><h2><LanguageText es="Frontend docente y apoyo a integración." en="Teacher frontend and integration support." /></h2></div><div><p><LanguageText es="Desarrollé principalmente pantallas del módulo docente y preparé servicios y adaptadores para consumir los contratos de NestJS. Apoyé la revisión de la conexión PostgreSQL y la integración de Prisma, dentro del trabajo compartido del equipo." en="I primarily developed teacher-module screens and prepared services and adapters to consume NestJS contracts. I supported the PostgreSQL connection review and Prisma integration as part of the team's shared work." /></p><p><LanguageText es="El backend y el sistema completo son trabajo del equipo. El proyecto busca apoyar a estudiantes de cuarto de primaria con un tutor alineado a la Nueva Escuela Mexicana." en="The backend and broader system are team work. The project aims to support fourth-grade students with a tutor aligned with Mexico's New Mexican School curriculum." /></p><div className="sti-case-tech-inline"><span>Next.js</span><span>React</span><span>TypeScript</span><span>Tailwind CSS</span></div></div></div></section>

      <section className="sti-case-experience" id="experience"><div className="shell"><div className="sti-case-section-heading"><div><p className="eyebrow"><span>05</span> / <LanguageText es="INTERFAZ DOCENTE" en="TEACHER INTERFACE" /></p><h2><LanguageText es="Explorar la plataforma." en="Explore the platform." /></h2></div><p><LanguageText es="Capturas con datos personales anonimizados. Documentan la interfaz mostrada, no la operación de cada servicio ni resultados de aprendizaje." en="Screenshots with personal data anonymized. They document the displayed interface, not the operation of every service or learning outcomes." /></p></div><AelpCaptureGallery captures={captures} variant="desktop" imageBasePath={getPublicAssetPath("/images/sti-nem")} /></div></section>

      <section className="sti-case-status"><div className="shell"><p className="eyebrow"><span>06</span> / <LanguageText es="ESTADO Y LÍMITES" en="STATUS & LIMITATIONS" /></p><h2><LanguageText es="Lo comprobado y lo pendiente." en="What was checked and what remains." /></h2><div className="sti-case-status-grid">
        <article><ShieldCheck size={18} /><h3><LanguageText es="Pruebas documentadas" en="Documented checks" /></h3><p><LanguageText es="El manual registra compilaciones, disponibilidad de API y una comprobación de protección de ruta. No sustituye una prueba integral autenticada." en="The manual records builds, API availability, and a route-protection check. These do not replace a full authenticated end-to-end test." /></p></article>
        <article><Layers3 size={18} /><h3><LanguageText es="Datos parciales" en="Partial data" /></h3><p><LanguageText es="Los datos de desempeño y actividad siguen parciales donde faltan contratos o historial; algunas vistas administrativas aún son placeholders." en="Performance and activity data remain partial where contracts or history are missing; some administrative views remain placeholders." /></p></article>
        <article><Server size={18} /><h3><LanguageText es="Tutoría y generación" en="Tutoring and generation" /></h3><p><LanguageText es="La interfaz estudiantil requiere completar su adaptador. La generación devolvió 409 por falta de plantillas activas y requiere configurar y probar el worker." en="The student interface still needs its adapter completed. Generation returned 409 because active templates were missing and requires worker configuration and testing." /></p></article>
        <article><Database size={18} /><h3><LanguageText es="Alcance de la evidencia" en="Evidence scope" /></h3><p><LanguageText es="Cifras y comprobaciones proceden de la bitácora del proyecto, no de una auditoría independiente publicada. Las capturas no demuestran por sí solas integración o resultados." en="Figures and checks come from the project log, not a published independent audit. Screenshots alone do not demonstrate integration or outcomes." /></p></article>
      </div></div></section>
      <nav className="shell project-pagination" aria-label="Más proyectos / More projects"><Link href="/#proyectos"><ArrowLeft size={16} /> <LanguageText es="Todos los proyectos" en="All projects" /></Link><Link href="/proyectos/spa-orizaba/"><div><small><LanguageText es="PROYECTO DESTACADO" en="FEATURED PROJECT" /></small><strong>SPA Orizaba</strong></div><ArrowRight size={23} /></Link></nav>
    </main>
  );
}
