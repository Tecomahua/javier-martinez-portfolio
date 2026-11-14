import type { Project } from "@/data/projects";

export const projectEnglish: Record<string, Partial<Project>> = {
  "ingles-chido": {
    category: "Educational Data Science & Learning Analytics",
    role: "Founder and developer",
    status: "In development",
    summary:
      "Inglés Chido is an educational data science initiative developing AELP, an adaptive English-learning platform. Its current prototype captures learning attempts, answers, and errors, creating a foundation for future learning analytics, knowledge-gap detection, and personalized learning recommendations.",
    problem:
      "Completing activities does not, by itself, prove that a student has learned. Progress needs to be supported by evidence over time.",
    solution:
      "A progressive mobile experience with a visual learning path, lessons, and local records of answers, mistakes, and review needs.",
    contribution:
      "I lead the product vision, learning experience, and mobile development, and define the strategy for turning learning records into analyzable evidence.",
    method: "Local learning records; cleaning and grouping with Python/pandas in a separate synthetic exercise.",
    finding: "The reproducible example processes 24 synthetic attempts; it does not measure real learners' mastery yet.",
    evidence: "Public code, synthetic data, and tests; app-to-analytics integration is pending.",
    overview: [
      "Inglés Chido is evolving into AELP (Adaptive English Learning Platform), an evidence-based English-learning platform. Completing an activity does not demonstrate mastery; attempts, answers, and errors can provide signals for assessing difficulties and progress.",
      "The mobile prototype already keeps learning records and states locally. Integration with FastAPI and PostgreSQL is in development; processing with Python and pandas, mastery metrics, and personalization belong to later stages.",
    ],
    implemented: [
      "A1 mobile prototype with onboarding, a visual learning path, and introductory lessons.",
      "Local progress tracking and records of attempts, answers, errors, and review needs.",
      "Review, vocabulary, and progress modules based on local state.",
    ],
    planned: [
      "Integrate local records with FastAPI and PostgreSQL to retain evidence across sessions.",
      "Process data with Python and pandas and define mastery and progress metrics by topic.",
      "Identify difficulty patterns, explore predictive models, and recommend adaptive practice; there are no trained models or production recommendations yet.",
    ],
  },
  "finscope-mexico": {
    category: "Data analysis · Financial inclusion",
    role: "Data analysis and dashboard development",
    status: "Functional prototype · private access",
    summary: "A national financial infrastructure explorer combining CNBV data, INEGI boundaries and OpenStreetMap ATM points.",
    problem: "Aggregate infrastructure counts are difficult to explore geographically and do not, by themselves, describe effective access.",
    solution: "A dashboard with municipal filters, a state map, rates per 10,000 adults and methodological context.",
    contribution: "Data preparation, indicator design and interactive experience development.",
    method: "CNBV counts and rates per 10,000 adults; INEGI boundaries and OSM points for geographic exploration.",
    finding: "In the screenshots, Álvaro Obregón has 2.49 branches per 10,000 adults versus 2.12 in Mexico City.",
    evidence: "Screenshots and a public initial prototype; the national dashboard requires private access.",
    overview: ["The project examines financial infrastructure in 2,475 identified municipalities using CNBV data through December 2025."],
    implemented: ["State map and municipal filters.", "Rates per 10,000 adults and OpenStreetMap ATM points."],
    planned: ["Expand and validate ATM location sources and update official data."],
  },
  "tutor-ia-nem": {
    category: "Educational technology · Data integration",
    role: "Teacher frontend · Data integration support",
    status: "Academic team project",
    summary: "A team-built education system using PostgreSQL, Prisma, NestJS, and Next.js; my work combined teacher frontend development with data integration and validation support.",
    problem: "The system needs to connect educational interfaces to consistent relational data and backend services.",
    solution: "A Next.js frontend, NestJS API, and PostgreSQL through Prisma, with integrity checks on an isolated copy.",
    contribution: "I primarily developed teacher screens and supported services, adapters, and the database connection review alongside the team.",
    method: "Interface and API contract integration; relational integrity checks on an isolated copy.",
    finding: "The team log records 52 tables and 99 validated foreign keys; these are not production metrics.",
    evidence: "Project log; no independent public audit yet.",
    overview: ["The project log records 52 tables, 26,805 records audited, and 99 foreign keys validated on an isolated copy; these are not production metrics.", "A team social-service project connected to a master's thesis at Mexico's National Technological Institute."],
    implemented: ["Teacher screens and services with adapters for API contracts.", "Integrity review, authorized Prisma migration, and API availability and route protection checks documented in the log."],
    planned: ["Complete the student tutoring adapter and partial academic data.", "Configure templates and test the generation worker on an isolated copy."],
  },
  "spa-orizaba": {
    category: "Data analysis · Commercial decision",
    role: "Technical data analysis",
    status: "Academic project · 2026",
    summary:
      "Public-data analysis to assess the opportunity for a spa in Orizaba and prioritize a location to investigate.",
    problem:
      "The decision required comparing economic context, demographics, and local competition without presenting indirect signals as proven demand.",
    solution:
      "A regional and neighborhood comparison combining economic, demographic, and business data into indicators and visualizations that guide the next field study.",
    contribution:
      "I led the technical work: sourcing, cleaning, transforming, and integrating datasets; preparing indicators and producing inputs for the team’s storytelling and communication.",
    method: "Cleaned and joined ENIGH, DENUE, and ITER with Python/pandas; compared municipalities and city areas.",
    finding: "The report prioritized downtown Orizaba for fieldwork without inferring proven sales or demand.",
    evidence: "Report visuals are visible; the repository is private. The 77.4/100 score is not reproduced by the project code.",
    overview: [
      "An academic data science project assessing whether Orizaba showed favorable signals for an accessible mixed spa and where to begin looking for a location.",
      "The analysis combines state-level ENIGH 2024 economic context with DENUE business records and municipal demographics from the 2020 Population Census / ITER. The evidence helps prioritize options; it does not replace sales data or a field study.",
    ],
    implemented: [
      "Prepared and analyzed ENIGH, DENUE, and 2020 Census / ITER data.",
      "Classified direct competitors and related services, normalizing business names and validating geographic records.",
      "Built regional and neighborhood indicators, plus visualizations of competition and demographics.",
    ],
    planned: [
      "Validate rent, pedestrian traffic, parking, safety, and property conditions before making an investment decision.",
    ],
  },
};

export function projectText<K extends keyof Project>(project: Project, field: K): Project[K] {
  return (projectEnglish[project.slug]?.[field] ?? project[field]) as Project[K];
}
