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
                <LanguageText es="Estoy en la etapa final de Ingeniería en Sistemas Computacionales en el Instituto Tecnológico de Orizaba. Me interesa convertir datos en información útil para entender problemas, comparar alternativas y comunicar decisiones con sus límites." en="I am in the final stage of my Computer Systems Engineering degree at the Orizaba Institute of Technology. I am interested in turning data into useful information to understand problems, compare options, and communicate decisions with their limits." />
              </p>
              <p>
                <LanguageText es="Busco realizar mis prácticas profesionales como analista de datos. Trabajo con SQL, Python, pandas, Excel y Power BI para limpiar, analizar y visualizar información." en="I seek a data analyst internship. I work with SQL, Python, pandas, Excel, and Power BI to clean, analyze, and visualize information." />
              </p>
            </div>
          </div>
          <div className="principles-grid">
            <article className="principle" data-reveal>
              <div className="principle-top"><Code2 size={23} strokeWidth={1.3} /><span>01</span></div>
              <h3><LanguageText es="Preparación de datos" en="Data preparation" /></h3>
              <p><LanguageText es="Organizar, limpiar y transformar fuentes para responder preguntas concretas." en="Organizing, cleaning, and transforming sources to answer concrete questions." /></p>
            </article>
            <article className="principle" data-reveal>
              <div className="principle-top"><ChartNoAxesCombined size={23} strokeWidth={1.3} /><span>02</span></div>
              <h3><LanguageText es="Análisis e indicadores" en="Analysis and indicators" /></h3>
              <p><LanguageText es="Comparar datos con métricas comprensibles y reconocer los límites de cada fuente." en="Comparing data with clear metrics and recognizing each source's limits." /></p>
            </article>
            <article className="principle" data-reveal>
              <div className="principle-top"><Target size={23} strokeWidth={1.3} /><span>03</span></div>
              <h3><LanguageText es="Comunicación de hallazgos" en="Communicating findings" /></h3>
              <p><LanguageText es="Explicar resultados de forma clara para apoyar decisiones e investigaciones posteriores." en="Explaining results clearly to support decisions and further research." /></p>
            </article>
          </div>
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
                <LanguageText es="Proyectos con" en="Projects with" />
                <br />
                <em><LanguageText es="propósito." en="purpose." /></em>
              </h2>
            </div>
            <p className="section-aside">
              <LanguageText es="Explora el contexto, mi contribución y los detalles técnicos de cada proyecto." en="Explore the context, my contribution, and the technical details of each project." />
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
              <LanguageText es="Herramientas que utilizo para preparar, analizar y visualizar datos." en="Tools I use to prepare, analyze, and visualize data." />
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
              <LanguageText es="Busco prácticas profesionales como analista de datos a partir de enero de 2027. Puedo apoyar la preparación de datos, consultas SQL, análisis con Python y pandas, y visualización con Excel y Power BI." en="I seek a data analyst internship starting in January 2027. I can support data preparation, SQL queries, analysis with Python and pandas, and visualization with Excel and Power BI." />
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
