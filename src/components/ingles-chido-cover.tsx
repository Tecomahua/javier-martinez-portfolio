"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, BookOpen, Check, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { getPublicAssetPath } from "@/lib/site-url";

const detailScreens = [
  { key: "welcome", file: "pantalla-principal", title: "Bienvenida", titleEn: "Welcome", alt: "Pantalla principal de Inglés Chido", altEn: "Inglés Chido welcome screen" },
  { key: "onboarding", file: "onboarding2", title: "Tu objetivo", titleEn: "Your goal", alt: "Selección del objetivo de aprendizaje", altEn: "Learning goal selection" },
  { key: "path", file: "micamino", title: "Mi camino", titleEn: "My path", alt: "Ruta de aprendizaje Mi camino", altEn: "My path learning map" },
];

export function InglesChidoCover({ variant = "home" }: { variant?: "home" | "detail" }) {
  const isDetail = variant === "detail";
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const [activeScreen, setActiveScreen] = useState(0);
  const [previewTheme, setPreviewTheme] = useState<"claro" | "oscuro">("claro");
  const active = detailScreens[activeScreen];

  return (
    <div className={`ingles-chido-home-visual${isDetail ? " ingles-chido-cover-detail" : ""}`}>
      <span className="ingles-home-orbit" aria-hidden="true" />
      <span className="ingles-home-orbit ingles-home-orbit-inner" aria-hidden="true" />
      <span className="ingles-home-orbit-dot ingles-home-orbit-dot-top" aria-hidden="true" />
      <span className="ingles-home-orbit-dot ingles-home-orbit-dot-bottom" aria-hidden="true" />
      {!isDetail && (
        <>
          <div className="ingles-home-float ingles-home-route" aria-hidden="true">
            <BookOpen size={22} />
            <span><strong>{isEnglish ? "Learning path" : "Ruta de aprendizaje"}</strong><small>{isEnglish ? "VISUAL PROGRESS" : "PROGRESO VISUAL"}</small></span>
          </div>
          <div className="ingles-home-float ingles-home-follow" aria-hidden="true">
            <span className="ingles-home-check"><Check size={20} /></span>
            <span><strong>{isEnglish ? "Progress tracking" : "Seguimiento"}</strong><small>{isEnglish ? "LEARNING EVIDENCE" : "EVIDENCIA DE APRENDIZAJE"}</small></span>
          </div>
          <div className="ingles-chido-card-media" data-interactive>
            <div className="ingles-chido-card-screen">
              <Image
                src={getPublicAssetPath("/images/ingles-chido/pantalla-principal-claro.jpeg")}
                alt={isEnglish ? "Inglés Chido welcome screen with options to get started or sign in" : "Pantalla de bienvenida de Inglés Chido con opciones para empezar o iniciar sesión"}
                fill
                sizes="(max-width: 700px) 42vw, (max-width: 1100px) 23vw, 250px"
                unoptimized
                priority
              />
            </div>
            <span className="ingles-chido-card-notch" aria-hidden="true" />
          </div>
        </>
      )}
      {isDetail && (
        <div className="ingles-product-preview">
          <div className="ingles-product-preview-head">
            <span>{isEnglish ? "Explore the product" : "Explora el producto"}</span>
            <div className="ingles-product-theme" role="group" aria-label={isEnglish ? "Preview theme" : "Tema de la vista previa"}>
              <button type="button" aria-pressed={previewTheme === "claro"} onClick={() => setPreviewTheme("claro")} aria-label={isEnglish ? "Light theme" : "Tema claro"}><Sun size={16} /></button>
              <button type="button" aria-pressed={previewTheme === "oscuro"} onClick={() => setPreviewTheme("oscuro")} aria-label={isEnglish ? "Dark theme" : "Tema oscuro"}><Moon size={16} /></button>
            </div>
          </div>
          <div className="ingles-product-stage" aria-label={isEnglish ? "Interactive Inglés Chido screen preview" : "Vista interactiva de Inglés Chido"}>
            {[-1, 0, 1].map((offset) => {
              const index = (activeScreen + offset + detailScreens.length) % detailScreens.length;
              const screen = detailScreens[index];
              return (
                <button type="button" className={`ingles-product-phone ingles-product-phone-${offset === 0 ? "active" : offset < 0 ? "left" : "right"}`} key={offset} onClick={() => setActiveScreen(index)} aria-label={`${isEnglish ? screen.titleEn : screen.title}${offset === 0 ? "" : isEnglish ? ", view screen" : ", ver pantalla"}`} aria-pressed={offset === 0}>
                  <span className="ingles-product-phone-display">
                    <Image src={getPublicAssetPath(`/images/ingles-chido/${screen.file}-${previewTheme}.jpeg`)} alt={isEnglish ? screen.altEn : screen.alt} fill sizes="(max-width: 650px) 40vw, 230px" unoptimized priority={offset === 0} />
                  </span>
                </button>
              );
            })}
          </div>
          <div className="ingles-product-preview-foot">
            <button type="button" onClick={() => setActiveScreen((activeScreen + detailScreens.length - 1) % detailScreens.length)} aria-label={isEnglish ? "Previous screen" : "Pantalla anterior"}><ArrowLeft size={16} /></button>
            <div className="ingles-product-preview-label"><strong>{isEnglish ? active.titleEn : active.title}</strong><span>{String(activeScreen + 1).padStart(2, "0")} / 03</span></div>
            <button type="button" onClick={() => setActiveScreen((activeScreen + 1) % detailScreens.length)} aria-label={isEnglish ? "Next screen" : "Pantalla siguiente"}><ArrowRight size={16} /></button>
          </div>
        </div>
      )}
    </div>
  );
}
