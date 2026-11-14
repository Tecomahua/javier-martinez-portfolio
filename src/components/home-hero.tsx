"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { LanguageText, useLanguage } from "@/components/language-provider";
import { getPublicAssetPath } from "@/lib/site-url";
import styles from "./home-hero.module.css";

export function HomeHero() {
  const { language } = useLanguage();
  return (
    <section
      className={`${styles.hero} section-anchor`}
      id="inicio"
      aria-labelledby="hero-name"
    >
      <div className={`shell ${styles.layout}`}>
        <div className={styles.copy}>
          <p className={styles.availability}>
            <span aria-hidden="true" />
            <span>
              <LanguageText es="Disponible para residencia profesional ·" en="Available for a professional internship ·" />{" "}
              <strong><LanguageText es="Enero 2027" en="January 2027" /></strong>
            </span>
          </p>

          <h1 id="hero-name" className={styles.name}>
            Javier <span>Martínez</span>
          </h1>

          <p className={styles.specialization}>
            Data Analyst Intern
          </p>

          <p className={styles.description}>
            <LanguageText
              es="Estudiante de Ingeniería en Sistemas Computacionales orientado al análisis de datos. En SPA Orizaba limpié y combiné fuentes públicas con Python y pandas para apoyar una decisión; también trabajo con SQL en proyectos de integración. Busco una residencia como Data Analyst Intern desde enero de 2027. Excel y Power BI forman parte de mi aprendizaje actual."
              en="Computer Systems Engineering student focused on data analysis. In SPA Orizaba, I cleaned and combined public data with Python and pandas to support a decision; I also work with SQL in integration projects. I seek a Data Analyst Intern placement from January 2027. Excel and Power BI are part of my current learning path."
            />
          </p>

          <div className={styles.actions}>
            <a className={`button ${styles.primary}`} href="#proyectos">
              <LanguageText es="Ver proyectos" en="View projects" /> <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className={`button ${styles.secondary}`} href="#contacto">
              <LanguageText es="Contactarme" en="Contact me" />
            </a>
          </div>

          <nav className={styles.socialLinks} aria-label={language === "es" ? "Perfiles profesionales" : "Professional profiles"}>
            <a
              className={styles.github}
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} aria-hidden="true" />
              GitHub
              <ArrowUpRight size={14} aria-hidden="true" />
              <span className="sr-only"> (<LanguageText es="abre en otra pestaña" en="opens in a new tab" />)</span>
            </a>
            <a
              className={styles.github}
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={17} aria-hidden="true" />
              LinkedIn
              <ArrowUpRight size={14} aria-hidden="true" />
              <span className="sr-only"> (<LanguageText es="abre en otra pestaña" en="opens in a new tab" />)</span>
            </a>
          </nav>
        </div>

        <figure className={styles.portrait}>
          <div className={styles.photoFrame}>
            <Image
              className={styles.photo}
              src={getPublicAssetPath("/images/javier-martinez.png")}
              alt="Javier Martínez"
              fill
              sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1050px) 430px, 38vw"
              preload
              unoptimized
            />
            <span className={styles.photoAccent} aria-hidden="true" />
          </div>
          <figcaption className={styles.photoCaption}>
            <span><LanguageText es="Objetivo profesional · 2027" en="Career goal · 2027" /></span>
            <strong><LanguageText es="Residencia profesional" en="Professional internship" /></strong>
            <small>Data Analyst Intern · SQL · Python · pandas</small>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
