export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  role: string;
  status: string;
  summary: string;
  problem: string;
  solution: string;
  contribution: string;
  tags: string[];
  techStack?: string[];
  featured?: boolean;
  conceptual?: boolean;
  overview: string[];
  implemented: string[];
  planned: string[];
};

export const projects: Project[] = [
  {
    slug: "ingles-chido",
    number: "01",
    name: "Inglés Chido",
    category: "Educational Data Science & Learning Analytics",
    role: "Fundador y desarrollador",
    status: "En desarrollo",
    summary:
      "Iniciativa de analítica educativa que desarrolla AELP: el prototipo de Inglés Chido registra intentos, respuestas y errores para sentar las bases de futuros indicadores de aprendizaje y práctica personalizada.",
    problem:
      "Completar actividades no demuestra, por sí solo, que un estudiante haya aprendido. El progreso necesita apoyarse en evidencias a lo largo del tiempo.",
    solution:
      "Una experiencia móvil progresiva con ruta visual, lecciones y registro local de respuestas, errores y repasos.",
    contribution:
      "Lidero la visión de producto, la experiencia y el desarrollo móvil, y defino la estrategia para convertir registros de aprendizaje en evidencias analizables.",
    tags: ["React Native", "TypeScript", "Expo"],
    overview: [
      "Inglés Chido evoluciona hacia AELP (Adaptive English Learning Platform), una plataforma de inglés basada en evidencias. Completar una actividad no demuestra dominio; intentos, respuestas y errores pueden aportar señales para evaluar dificultades y progreso.",
      "El prototipo móvil ya reúne registros y estados de aprendizaje localmente. La integración con FastAPI y PostgreSQL está en desarrollo; el procesamiento con Python y pandas, las métricas de dominio y la personalización pertenecen a etapas posteriores.",
    ],
    implemented: [
      "Prototipo móvil A1 con onboarding, ruta visual y lecciones iniciales.",
      "Seguimiento local del avance y registro de intentos, respuestas, errores y necesidades de repaso.",
      "Módulos de repaso, vocabulario y progreso basados en estado local.",
    ],
    planned: [
      "Integrar los registros locales con FastAPI y PostgreSQL para persistir evidencias entre sesiones.",
      "Procesar datos con Python y pandas y definir métricas de dominio y progreso por tema.",
      "Identificar patrones de dificultad, explorar modelos predictivos y recomendar práctica adaptativa; aún no hay modelos entrenados ni recomendaciones en producción.",
    ],
  },
  {
    slug: "finscope-mexico",
    number: "02",
    name: "FinScope México",
    category: "Análisis de datos · Inclusión financiera",
    role: "Análisis de datos y desarrollo del dashboard",
    status: "Prototipo funcional · acceso privado",
    summary: "Explorador nacional de infraestructura financiera que combina datos de CNBV, límites de INEGI y puntos de cajeros de OpenStreetMap.",
    problem: "Los conteos agregados de infraestructura son difíciles de explorar territorialmente y no describen por sí solos el acceso efectivo.",
    solution: "Un dashboard con filtros municipales, mapa por entidad, tasas por cada 10,000 adultos y contexto metodológico.",
    contribution: "Preparación de datos, diseño de indicadores y desarrollo de la experiencia interactiva.",
    tags: ["Python", "SQL", "CNBV", "INEGI", "OpenStreetMap"],
    overview: ["El proyecto analiza infraestructura financiera en 2,475 municipios identificados, con corte CNBV a diciembre de 2025."],
    implemented: ["Mapa estatal y filtros municipales.", "Indicadores por cada 10,000 adultos y puntos de cajeros de OpenStreetMap."],
    planned: ["Ampliar y validar las fuentes de puntos de cajeros y actualizar los cortes oficiales."],
  },
  {
    slug: "tutor-ia-nem",
    number: "03",
    name: "STI-NEM",
    category: "Tecnología Educativa · Tutoría con IA",
    role: "Frontend Developer · Módulo docente",
    status: "Proyecto académico · equipo",
    summary:
      "Tutor inteligente con IA para estudiantes de cuarto de primaria, alineado con la Nueva Escuela Mexicana y diseñado para generar ejercicios que acompañen su aprendizaje.",
    problem:
      "Los alumnos de cuarto de primaria necesitan practicar contenidos curriculares con orientación. STI-NEM plantea un tutor inteligente que les propone ejercicios y acompaña su aprendizaje.",
    solution:
      "Un sistema web con módulos para estudiante, docente, dirección y administración, cuyo objetivo inicial es generar ejercicios con IA alineados con la Nueva Escuela Mexicana.",
    contribution:
      "Desarrollé las pantallas del módulo docente, incluidas las vistas de dashboard, grupos y ejercicios. Mi aporte fue la interfaz docente dentro del equipo que desarrolla el sistema completo.",
    tags: ["Tutoría con IA", "Nueva Escuela Mexicana", "4.º de primaria", "Módulo docente", "Frontend"],
    techStack: ["Next.js 16.3.1", "React 19.2", "TypeScript estricto", "Tailwind CSS 4", "shadcn/ui · Base Nova"],
    overview: [
      "STI-NEM es un sistema inteligente de tutoría asistida con IA, pensado para alumnos de cuarto de primaria. Su objetivo inicial es generar ejercicios alineados con la Nueva Escuela Mexicana y ayudar al alumno a aprender mientras los resuelve. La documentación describe perfiles de estudiante, docente, dirección y administración, con funciones específicas para cada rol.",
      "El trabajo se realizó en equipo como parte de un proyecto de tesis de maestría del Tecnológico Nacional de México.",
      "Las capturas disponibles documentan las vistas. Los repositorios del frontend y backend no son públicos ni accesibles desde este entorno, por lo que no pude verificar dependencias, rutas, servicios o conexión real con la API.",
    ],
    implemented: [
      "Pantallas del módulo docente: dashboard, gestión de grupos y vistas relacionadas con estudiantes y ejercicios.",
      "Interfaz de criterios curriculares para ejercicios. Las capturas muestran las pantallas, pero no comprueban por sí solas la generación mediante IA.",
    ],
    planned: [
      "Verificar contratos, rutas y tecnologías contra el repositorio sti-nem-front cuando el código esté accesible.",
      "Confirmar qué flujos consumen API, usan mocks o requieren servicios del backend sti-nem-back.",
      "Validar la operación de generación de ejercicios, autenticación y perfiles administrativos.",
    ],
  },
  {
    slug: "spa-orizaba",
    number: "04",
    name: "SPA Orizaba",
    category: "Ciencia de Datos · Análisis comercial",
    role: "Análisis técnico · Ciencia de Datos",
    status: "Proyecto académico · 2026",
    summary:
      "Análisis de datos públicos para evaluar la oportunidad de instalar un SPA en Orizaba y priorizar una zona de búsqueda.",
    problem:
      "La decisión requería contrastar capacidad económica, perfil demográfico y competencia local sin presentar señales indirectas como demanda comprobada.",
    solution:
      "Una comparación regional y por zonas que integra datos económicos, demográficos y de establecimientos en indicadores y visualizaciones para orientar la siguiente investigación de campo.",
    contribution:
      "Lideré el trabajo técnico: localicé, limpié, transformé e integré las fuentes de datos; preparé indicadores y generé los insumos para el storytelling y la comunicación del equipo.",
    tags: ["Python", "Pandas", "NumPy", "ENIGH 2024", "DENUE", "INEGI"],
    overview: [
      "Proyecto académico de ciencia de datos para evaluar si Orizaba ofrecía señales favorables para un SPA mixto y accesible, y para decidir dónde iniciar la búsqueda de un local.",
      "El análisis combina contexto económico estatal de ENIGH 2024 con registros de DENUE y perfil demográfico municipal de CPV 2020 / ITER. La evidencia permite priorizar opciones; no sustituye una medición de ventas ni un estudio comercial de campo.",
    ],
    implemented: [
      "Preparación y análisis de ENIGH, DENUE e ITER / CPV 2020.",
      "Clasificación de competencia directa y servicios afines con normalización de nombres y validación geográfica.",
      "Indicadores regionales y por zona, más visualizaciones de competencia y perfil demográfico.",
    ],
    planned: [
      "Validar renta, flujo peatonal, estacionamiento, seguridad y condiciones del local antes de tomar una decisión de inversión.",
    ],
  },
];

export const detailedProjects = projects;
