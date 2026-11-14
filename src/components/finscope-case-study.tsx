import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BarChart3, Database, Map, ShieldCheck } from "lucide-react";
import { LanguageText as T } from "@/components/language-provider";
import { getPublicAssetPath } from "@/lib/site-url";
import styles from "./finscope-case-study.module.css";

function Capture({ file, width, height, label, alt, captionEs, captionEn }: {
  file: string;
  width: number;
  height: number;
  label: string;
  alt: string;
  captionEs: string;
  captionEn: string;
}) {
  return <figure className={styles.screenshot}>
    <div className={styles.browser} aria-hidden="true"><i/><i/><i/><span>{label}</span></div>
    <a className={styles.captureLink} href={getPublicAssetPath(`/images/finscope/${file}`)} target="_blank" rel="noreferrer">
      <Image src={getPublicAssetPath(`/images/finscope/${file}`)} alt={alt} width={width} height={height} sizes="(max-width: 700px) 90vw, 1120px" unoptimized />
      <span><T es="Abrir captura a tamaño completo" en="Open full-size capture"/> <ArrowUpRight size={15}/></span>
    </a>
    <figcaption><T es={captionEs} en={captionEn}/></figcaption>
  </figure>;
}

export function FinScopeCaseStudy() {
  return <main className={styles.page} id="contenido">
    <div className={styles.shell}>
      <Link className={styles.back} href="/#proyectos"><ArrowLeft size={16}/><T es="Volver a proyectos" en="Back to projects"/></Link>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>02 / DATA ANALYTICS · FINANCIAL INCLUSION</p>
        <h1>FinScope México<span>.</span></h1>
        <p className={styles.lead}><T es="Un observatorio para explorar dónde se reporta infraestructura financiera en México, comparar territorios con una misma escala y formular mejores preguntas." en="An observatory to explore where financial infrastructure is reported in Mexico, compare places on a common scale and ask better questions."/></p>
        <div className={styles.pills}><span>CNBV</span><span>INEGI</span><span>OpenStreetMap</span><span>Leaflet</span><span>Python</span><span>SQL</span></div>
        <div className={styles.actions}><a href="https://finscope-mexico.happy-horse-5137.chatgpt.site" target="_blank" rel="noreferrer"><T es="Abrir dashboard privado" en="Open private dashboard"/> <ArrowUpRight size={16}/></a><a className={styles.secondary} href="https://github.com/Tecomahua/finscope-veracruz" target="_blank" rel="noreferrer"><T es="Repositorio inicial: Veracruz" en="Initial Veracruz repository"/> <ArrowUpRight size={16}/></a></div>
        <p className={styles.note}><T es="El dashboard nacional requiere iniciar sesión. El repositorio público corresponde al prototipo analítico inicial de Veracruz; todavía no contiene el código completo de la versión nacional." en="The national dashboard requires sign-in. The public repository contains the initial Veracruz analytics prototype; it does not yet contain the full national dashboard source."/></p>
      </header>

      <div className={styles.grid} aria-label="Alcance del proyecto">
        <div><small>ALCANCE / SCOPE</small><strong>32</strong><span><T es="entidades" en="states"/></span></div>
        <div><small>REGISTROS / RECORDS</small><strong>2,475</strong><span><T es="municipios identificados" en="identified municipalities"/></span></div>
        <div><small>CNBV / DATA CUT</small><strong>2025</strong><span><T es="diciembre" en="December"/></span></div>
        <div><small>MAPA / MAP</small><strong>1,703</strong><span><T es="puntos OSM · noviembre 2026" en="OSM points · November 2026"/></span></div>
      </div>

      <section className={styles.section}>
        <p className={styles.eyebrow}>01 / <T es="IDEACIÓN DEL PRODUCTO" en="PRODUCT CONCEPT"/></p>
        <div className={styles.columns}>
          <h2><T es="Convertir una tabla nacional en una conversación sobre el territorio." en="Turn a national table into a conversation about place."/></h2>
          <div>
            <p><T es="FinScope responde una pregunta concreta: ¿cómo cambia la infraestructura financiera cuando pasamos del país a un estado y después a un municipio? Los conteos muestran tamaño; las tasas por cada 10,000 adultos permiten comparar con más contexto." en="FinScope answers one concrete question: how does financial infrastructure change as we move from the country to a state and then a municipality? Counts show scale; rates per 10,000 adults add context for comparison."/></p>
            <p><T es="El proyecto evolucionó de un análisis municipal en Veracruz a un observatorio nacional. Su objetivo es ayudar a formular hipótesis de investigación, no emitir un diagnóstico automático de inclusión financiera." en="The project evolved from a municipal analysis in Veracruz into a national observatory. Its purpose is to help frame research hypotheses, not issue an automatic diagnosis of financial inclusion."/></p>
          </div>
        </div>
        <div className={styles.features}>
          <details><summary><Map/><span><strong><T es="Explorar" en="Explore"/></strong><small><T es="Filtros y territorio" en="Filters and territory"/></small></span></summary><p><T es="Filtros enlazados por entidad, municipio e indicador, con búsqueda por nombre o clave." en="Linked filters for state, municipality and indicator, with search by name or code."/></p></details>
          <details><summary><BarChart3/><span><strong><T es="Comparar" en="Compare"/></strong><small><T es="Una escala común" en="One common scale"/></small></span></summary><p><T es="Conteos y tasas con la misma unidad para la selección, la entidad y México." en="Counts and rates on the same scale for the selection, state and Mexico."/></p></details>
          <details><summary><ShieldCheck/><span><strong><T es="Interpretar" en="Interpret"/></strong><small><T es="Lectura responsable" en="Responsible reading"/></small></span></summary><p><T es="Conclusiones descriptivas acompañadas de advertencias sobre cobertura y alcance." en="Descriptive conclusions accompanied by coverage and scope caveats."/></p></details>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.eyebrow}>02 / <T es="RECORRIDO POR EL PRODUCTO" en="PRODUCT WALKTHROUGH"/></p>
        <h2><T es="De los indicadores al lugar concreto." en="From indicators to a specific place."/></h2>
        <p><T es="Estas tres capturas son vistas reales del dashboard. Proceden de selecciones distintas y se presentan como ejemplos de uso, no como un único corte de pantalla." en="These three captures are real dashboard views. They come from different selections and are shown as usage examples, not as one continuous screenshot."/></p>
        <Capture file="panorama-leon.webp" width={1872} height={505} label="01 / León · Guanajuato" alt="Dashboard real de FinScope con León, Guanajuato, seleccionado y cuatro tarjetas de indicadores." captionEs="Vista de León, Guanajuato: 281 sucursales, 1,064 corresponsales, 905 cajeros y 20,214 terminales. Son conteos CNBV del corte de diciembre de 2025; cada tarjeta muestra también la tasa por 10,000 adultos." captionEn="León, Guanajuato view: 281 branches, 1,064 agents, 905 ATMs and 20,214 payment terminals. These are CNBV counts for December 2025; each card also shows the rate per 10,000 adults."/>
        <p><T es="La primera capa responde qué infraestructura se reporta y en qué magnitud. Al elegir un municipio, las cuatro tarjetas se actualizan juntas; así se evita comparar indicadores de ámbitos geográficos distintos por accidente." en="The first layer answers what infrastructure is reported and in what volume. Selecting a municipality updates all four cards together, reducing accidental comparisons across different geographic scopes."/></p>
        <Capture file="mapa-alvaro-obregon.webp" width={1887} height={921} label="02 / Álvaro Obregón · Ciudad de México" alt="Mapa real de Álvaro Obregón con contorno municipal azul, puntos de cajeros OpenStreetMap y tabla de municipios de Ciudad de México." captionEs="Álvaro Obregón: el borde azul distingue el municipio y los puntos magenta muestran 12 cajeros registrados en el extracto de OpenStreetMap. La tabla vecina ordena los 16 municipios de Ciudad de México para el indicador seleccionado." captionEn="Álvaro Obregón: the blue outline distinguishes the municipality, while magenta dots show 12 ATMs recorded in the OpenStreetMap extract. The adjacent table ranks Mexico City's 16 municipalities by the selected indicator."/>
        <p><T es="El contorno evita confundir la vista municipal con el estado circundante. Los puntos se muestran únicamente al ampliar un municipio y representan ubicaciones disponibles en OpenStreetMap; no deben confundirse con los cajeros contados por CNBV." en="The outline prevents the municipal view from being confused with the surrounding state. Dots appear only when a municipality is selected and represent locations available in OpenStreetMap; they should not be confused with CNBV's ATM count."/></p>
        <Capture file="comparacion-alvaro-obregon.webp" width={1796} height={504} label="03 / Comparación · sucursales" alt="Comparación real de tasas de sucursales por 10,000 adultos: selección 2.49, entidad 2.12 y México 1.76." captionEs="Para la selección de Álvaro Obregón, la tasa de sucursales es 2.49 por cada 10,000 adultos, frente a 2.12 en Ciudad de México y 1.76 en el agregado nacional del dashboard." captionEn="For the Álvaro Obregón selection, the branch rate is 2.49 per 10,000 adults, compared with 2.12 for Mexico City and 1.76 for the dashboard's national aggregate."/>
      </section>

      <section className={styles.section}>
        <p className={styles.eyebrow}>03 / <T es="DATOS, HERRAMIENTAS Y MÉTODO" en="DATA, TOOLS AND METHOD"/></p>
        <div className={styles.columns}>
          <h2><T es="Una cadena de datos con funciones distintas." en="A data chain with distinct roles."/></h2>
          <details className={styles.methodNarrative}><summary><T es="Ver resumen de fuentes y método" en="View source and method summary"/></summary><div>
            <p><T es="CNBV aporta los conteos municipales de canales financieros y la población adulta usada como denominador, todos para diciembre de 2025. Se conservaron las claves geográficas para vincular registros con estados y municipios. La tasa se calcula como conteo dividido entre adultos y multiplicado por 10,000; para entidades y país, primero se suman conteos y adultos de los municipios identificados y luego se calcula la tasa." en="CNBV supplies municipal financial-channel counts and the adult population used as the denominator, all for December 2025. Geographic codes link records to states and municipalities. The rate is count divided by adults times 10,000; for states and the country, counts and adults are first summed across identified municipalities and then the rate is calculated."/></p>
            <p><T es="INEGI aporta las geometrías: un GeoJSON estatal para el panorama nacional y el servicio de contornos municipales consultado al seleccionar un municipio. Leaflet dibuja el mapa, encuadra la selección y destaca el límite. OpenStreetMap, a través del extracto de Geofabrik del 13 de noviembre de 2026, aporta puntos de cajeros que se filtran por el polígono municipal. Su fecha y cobertura son diferentes de las de CNBV." en="INEGI supplies the geometry: a state GeoJSON for the national overview and the municipal boundary service queried when a municipality is selected. Leaflet draws the map, frames the selection and highlights its boundary. OpenStreetMap, through the November 13, 2026 Geofabrik extract, supplies ATM points filtered by the municipal polygon. Its date and coverage differ from CNBV's."/></p>
            <p><T es="El dashboard nacional funciona en el navegador con HTML, CSS y JavaScript y carga archivos de datos preparados en JSON y GeoJSON. Python y SQL pertenecen al trabajo analítico y al repositorio inicial de Veracruz; la versión nacional publicada no se presenta como una aplicación conectada en vivo a PostgreSQL. Esta distinción permite entender qué herramientas respaldan el análisis y cuáles operan la interfaz actual." en="The national dashboard runs in the browser with HTML, CSS and JavaScript and loads prepared JSON and GeoJSON data files. Python and SQL belong to the analytical work and the initial Veracruz repository; the published national version is not presented as a live PostgreSQL-backed application. This distinction clarifies which tools support analysis and which power the current interface."/></p>
          </div></details>
        </div>
        <div className={styles.methodFlow} aria-label="Fuentes y flujo de trabajo">
          <details><summary><span>01</span><strong><T es="CNBV · indicadores" en="CNBV · indicators"/></strong></summary><p><T es="Conteos municipales y población adulta, con corte de diciembre de 2025. La tasa es conteo / adultos × 10,000." en="Municipal counts and adult population, December 2025. Rate = count / adults × 10,000."/></p></details>
          <details><summary><span>02</span><strong><T es="INEGI · geometrías" en="INEGI · geometry"/></strong></summary><p><T es="GeoJSON estatal y contornos municipales para delimitar la selección y encuadrar el mapa." en="State GeoJSON and municipal boundaries to frame the selection and map."/></p></details>
          <details><summary><span>03</span><strong><T es="OSM · puntos" en="OSM · points"/></strong></summary><p><T es="Puntos de cajeros del extracto Geofabrik del 13 de noviembre de 2026, filtrados dentro del polígono municipal." en="ATM points from the November 13, 2026 Geofabrik extract, filtered inside the municipal polygon."/></p></details>
          <details><summary><span>04</span><strong><T es="Interfaz · lectura" en="Interface · reading"/></strong></summary><p><T es="HTML, CSS, JavaScript y Leaflet presentan JSON y GeoJSON preparados. Python y SQL respaldan el trabajo analítico inicial de Veracruz." en="HTML, CSS, JavaScript and Leaflet present prepared JSON and GeoJSON. Python and SQL support the initial Veracruz analytical work."/></p></details>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.eyebrow}>04 / <T es="RESULTADOS Y LECTURA" en="RESULTS AND INTERPRETATION"/></p>
        <h2><T es="Qué se obtuvo y para qué sirve." en="What the work produced and why it matters."/></h2>
        <div className={styles.findings}>
          <article><span>01</span><div><h3><T es="Una lectura nacional que conserva el detalle local" en="A national view with local detail"/></h3><p><T es="El explorador reúne las 32 entidades y 2,475 municipios identificados en el archivo CNBV utilizado. La navegación permite pasar de un patrón estatal a la ficha de un municipio sin cambiar de indicador ni de corte." en="The explorer covers 32 states and 2,475 identified municipalities in the CNBV file used. Navigation moves from a state pattern to a municipality without changing indicator or data cut."/></p></div></article>
          <article><span>02</span><div><h3><T es="Una comparación que distingue tamaño y disponibilidad relativa" en="A comparison that separates size from relative availability"/></h3><p><T es="León registra 281 sucursales, equivalentes a 1.99 por cada 10,000 adultos. En la vista de Álvaro Obregón, 161 sucursales equivalen a 2.49 por cada 10,000 adultos. Los conteos por sí solos ordenarían estos municipios de otra forma; la tasa permite una pregunta comparativa más útil, aunque no resume la experiencia de sus habitantes." en="León records 281 branches, or 1.99 per 10,000 adults. In the Álvaro Obregón view, 161 branches correspond to 2.49 per 10,000 adults. Counts alone would order these municipalities differently; the rate supports a more useful comparison, although it does not summarize residents' experience."/></p></div></article>
          <article><span>03</span><div><h3><T es="Una pista para investigar, no un diagnóstico automático" en="A lead for investigation, not an automatic diagnosis"/></h3><p><T es="La selección de Álvaro Obregón supera la tasa estatal de sucursales por 0.37 y la nacional por 0.73 puntos por cada 10,000 adultos. Este contraste ayuda a decidir dónde profundizar con datos de uso, demanda, accesibilidad y trabajo de campo. No establece causalidad ni identifica colonias desatendidas." en="Álvaro Obregón's branch rate exceeds the state rate by 0.37 and the national rate by 0.73 per 10,000 adults. This contrast helps prioritize follow-up using usage, demand, accessibility and fieldwork evidence. It establishes neither causality nor underserved neighborhoods."/></p></div></article>
        </div>
      </section>

      <footer className={styles.footer}><Link href="/#proyectos"><ArrowLeft size={16}/> <T es="Todos los proyectos" en="All projects"/></Link><Link href="/proyectos/tutor-ia-nem/"><T es="Siguiente proyecto" en="Next project"/> <ArrowUpRight size={16}/></Link></footer>
    </div>
  </main>;
}
