import Image from "next/image";
import {
  ArrowUpRight,
  ChartNoAxesCombined,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Target,
} from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { HomeHero } from "@/components/home-hero";
import { ProjectCard } from "@/components/project-card";
import { SkillsExplorer } from "@/components/skills-explorer";
import { CopyEmail } from "@/components/copy-email";
import { LanguageText } from "@/components/language-provider";
import { getPublicAssetPath } from "@/lib/site-url";

export function PortfolioPage() {
  return (
    <main>
      <HomeHero />

      <section className="about-section section-anchor" id="sobre-mi">
        <div className="shell">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">
              <span>01</span> / <LanguageText es="PERFIL" en="PROFILE" />
            </p>
            <h2>
              <LanguageText es="Datos para decidir" en="Data for better" />
              <br /><em><LanguageText es="con evidencia." en="decisions." /></em>
            </h2>
          </div>
          <div className="about-content" data-reveal>
            <div className="about-statement">
              <span className="statement-symbol" aria-hidden="true">
                ↳
              </span>
              <p className="about-lede">
                <LanguageText es="Transformo preguntas de negocio y aprendizaje en fuentes, indicadores y conclusiones con límites explícitos." en="I turn business and learning questions into data sources, indicators, and conclusions with explicit limits." />
              </p>
            </div>
            <div className="about-facts">
              <p>
                <LanguageText es="Soy estudiante de Ingeniería en Sistemas Computacionales en el Instituto Tecnológico de Orizaba. En SPA Orizaba preparé datos de ENIGH, DENUE e ITER con Python y pandas para comparar municipios y zonas; en STI-NEM apoyé la revisión de datos relacionales y su integración con interfaces docentes." en="I study Computer Systems Engineering at the Orizaba Institute of Technology. In SPA Orizaba, I prepared ENIGH, DENUE, and ITER data with Python and pandas to compare municipalities and areas; in STI-NEM, I supported relational data checks and integration with teacher interfaces." />
              </p>
              <p>
                <LanguageText es="Busco una residencia como Data Analyst Intern para trabajar en limpieza, análisis y comunicación de datos. Utilizo SQL en proyectos de integración; estudio Excel y Power BI y todavía no publico casos que demuestren su uso." en="I seek a Data Analyst Intern placement focused on data cleaning, analysis, and communication. I use SQL in integration projects; I am learning Excel and Power BI and have not yet published cases demonstrating them." />
              </p>
            </div>
          </div>
          <section className="applied-experience" aria-labelledby="applied-experience-title">
            <p className="eyebrow" id="applied-experience-title"><LanguageText es="EXPERIENCIA APLICADA · PROYECTOS ACADÉMICOS Y PERSONALES" en="APPLIED EXPERIENCE · ACADEMIC AND PERSONAL PROJECTS" /></p>
            <div className="principles-grid">
            <article className="principle" data-reveal>
              <div className="principle-top">
                <Code2 size={23} strokeWidth={1.3} />
                <span>01</span>
              </div>
              <h3><LanguageText es="Análisis comercial" en="Commercial analysis" /></h3>
              <p>
                <LanguageText es="SPA Orizaba: limpieza de fuentes públicas, comparación territorial y recomendación para trabajo de campo." en="SPA Orizaba: public data cleaning, geographic comparison, and a recommendation for fieldwork." />
              </p>
            </article>
            <article className="principle" data-reveal>
              <div className="principle-top">
                <ChartNoAxesCombined size={23} strokeWidth={1.3} />
                <span>02</span>
              </div>
              <h3><LanguageText es="Analítica educativa" en="Learning analytics" /></h3>
              <p>
                <LanguageText es="Inglés Chido: registros locales y un análisis reproducible de datos sintéticos, aún sin integración entre ambos." en="Inglés Chido: local records and a reproducible synthetic-data analysis, not yet integrated." />
              </p>
            </article>
            <article className="principle" data-reveal>
              <div className="principle-top">
                <Target size={23} strokeWidth={1.3} />
                <span>03</span>
              </div>
              <h3><LanguageText es="Integración en equipo" en="Team integration" /></h3>
              <p>
                <LanguageText es="STI-NEM: frontend docente y apoyo en contratos API y validación relacional sobre una copia aislada." en="STI-NEM: teacher frontend and support with API contracts and relational checks on an isolated copy." />
              </p>
            </article>
            </div>
          </section>
        </div>
      </section>

      <section className="projects-section section-anchor" id="proyectos">
        <div className="shell">
          <div className="section-heading section-heading-row" data-reveal>
            <div>
              <p className="eyebrow">
                <span>02</span> / <LanguageText es="TRABAJO SELECCIONADO" en="SELECTED WORK" />
              </p>
              <h2>
                <LanguageText es="Casos con" en="Cases with" />
                <br />
                <em><LanguageText es="evidencia." en="evidence." /></em>
              </h2>
            </div>
            <p className="section-aside">
              <LanguageText es="Cada caso resume el problema, el método, las herramientas, el hallazgo y qué evidencia permite comprobarlo." en="Each case summarizes the problem, method, tools, finding, and evidence available to check it." />
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="education-section">
        <div className="shell education-layout">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">
              <span>03</span> / <LanguageText es="FORMACIÓN" en="EDUCATION" />
            </p>
            <h2>
              <LanguageText es="Base técnica." en="Technical foundation." />
              <br />
              <em><LanguageText es="Mirada analítica." en="Analytical perspective." /></em>
            </h2>
          </div>
          <div className="education-card" data-reveal data-interactive>
            <div className="education-top">
              <span><LanguageText es="FORMACIÓN ACADÉMICA" en="EDUCATION" /></span>
              <span>2026</span>
            </div>
            <div className="education-logo">
              <Image
                src={getPublicAssetPath("/images/ito-logo.png")}
                alt="Instituto Tecnológico de Orizaba logo / Logotipo del Instituto Tecnológico de Orizaba"
                width={88}
                height={88}
                unoptimized
              />
            </div>
            <div className="education-rule" />
            <h3><LanguageText es={profile.degree} en="Computer Systems Engineering" /></h3>
            <p><LanguageText es={profile.institution} en="National Technological Institute of Mexico — Orizaba Institute of Technology" /></p>
            <div className="education-bottom">
              <span>
                <LanguageText es={profile.semester} en="Eighth semester · final stage of my degree" />
                <br />
                <LanguageText es={profile.languages} en="Spanish (native) · English B2" />
              </span>
              <span>FORTÍN, VER.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section section-anchor" id="skills">
        <div className="shell">
          <div className="section-heading section-heading-row" data-reveal>
            <div>
              <p className="eyebrow">
              <span>04</span> / <LanguageText es="HERRAMIENTAS" en="SKILLS" />
              </p>
              <h2>
                <LanguageText es="Habilidades" en="Technical" /> <em><LanguageText es="técnicas." en="skills." /></em>
              </h2>
            </div>
            <p className="section-aside">
              <LanguageText es="Separo herramientas aplicadas en proyectos de Excel y Power BI, que siguen en formación y aún requieren un caso publicado." en="I separate tools used in projects from Excel and Power BI, which I am still learning and have yet to demonstrate in a published case." />
            </p>
          </div>
          <SkillsExplorer />
        </div>
      </section>

      <section className="contact-section section-anchor" id="contacto">
        <div className="contact-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="shell contact-layout">
          <div className="contact-copy" data-reveal>
            <p className="eyebrow">
              <span>05</span> / <LanguageText es="SIGUIENTE PASO" en="NEXT STEP" />
            </p>
            <h2>
              <LanguageText es="¿Construimos algo" en="Shall we build something" />
              <br />
              <em><LanguageText es="con impacto?" en="impactful?" /></em>
              <span className="contact-heading-arrow" aria-hidden="true">
                ↗
              </span>
            </h2>
            <p>
              <LanguageText es="Busco una residencia profesional como Data Analyst Intern desde enero de 2027. Puedo apoyar la preparación de datos, consultas SQL, análisis con Python/pandas y comunicación clara de hallazgos y límites." en="I am seeking a Data Analyst Intern placement starting in January 2027. I can support data preparation, SQL queries, Python/pandas analysis, and clear communication of findings and limitations." />
            </p>
            <div className="contact-actions">
              <a
                className="button button-primary contact-cta"
                href={`mailto:${profile.email}?subject=Residencia%20profesional%20%E2%80%94%20Javier%20Mart%C3%ADnez`}
              >
                <LanguageText es="Contactar por correo" en="Email me" /> <ArrowUpRight size={17} />
              </a>
              <CopyEmail />
            </div>
          </div>
          <div className="contact-details" data-reveal>
            <a href={`mailto:${profile.email}`}>
              <span>
                <Mail size={18} />
              </span>
              <div>
                <small><LanguageText es="ESCRÍBEME" en="EMAIL" /></small>
                <strong>{profile.email}</strong>
              </div>
              <ArrowUpRight size={17} />
            </a>
            <a href={`tel:${profile.phoneUri}`}>
              <span>
                <Phone size={18} />
              </span>
              <div>
                <small><LanguageText es="LLÁMAME" en="CALL ME" /></small>
                <strong>{profile.phone}</strong>
              </div>
              <ArrowUpRight size={17} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <span>
                <Github size={18} />
              </span>
              <div>
                <small><LanguageText es="CÓDIGO Y PROYECTOS" en="CODE & PROJECTS" /></small>
                <strong>github.com/Tecomahua</strong>
              </div>
              <ArrowUpRight size={17} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <span>
                <Linkedin size={18} />
              </span>
              <div>
                <small><LanguageText es="PERFIL PROFESIONAL" en="PROFESSIONAL PROFILE" /></small>
                <strong>LinkedIn · Francisco Javier Martínez</strong>
              </div>
              <ArrowUpRight size={17} />
            </a>
            <div className="contact-location">
              <span>
                <MapPin size={18} />
              </span>
              <div>
                <small><LanguageText es="UBICACIÓN" en="LOCATION" /></small>
                <strong>{profile.contactLocation}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
