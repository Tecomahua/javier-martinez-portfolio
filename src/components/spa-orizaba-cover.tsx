import Image from "next/image";
import { LanguageText } from "@/components/language-provider";
import { getPublicAssetPath } from "@/lib/site-url";
import styles from "./spa-orizaba-case-study.module.css";

export function SpaOrizabaCover() {
  return (
    <figure className={`sti-browser-frame ${styles.coverFrame}`}>
      <div className="sti-browser-toolbar" aria-hidden="true">
        <i /><i /><i />
        <span>OPORTUNIDAD · ORIZABA</span>
      </div>
      <div className={styles.coverImage}>
        <Image
          src={getPublicAssetPath("/images/spa-orizaba/portada-orientacion-regional.webp")}
          alt="Índice regional de oportunidad para instalar un SPA: Orizaba obtiene 78.8 puntos y supera a los municipios comparados."
          width={1619}
          height={971}
          sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 520px"
          unoptimized
        />
      </div>
      <figcaption className={styles.coverCaption}>
        <span><LanguageText es="ÍNDICE REGIONAL · 0–100" en="REGIONAL INDEX · 0–100" /></span>
        <strong>78.8 <LanguageText es="oportunidad" en="opportunity" /></strong>
      </figcaption>
    </figure>
  );
}
