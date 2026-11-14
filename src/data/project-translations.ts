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
    overview: ["The project examines financial infrastructure in 2,475 identified municipalities using CNBV data through December 2025."],
    implemented: ["State map and municipal filters.", "Rates per 10,000 adults and OpenStreetMap ATM points."],
    planned: ["Expand and validate ATM location sources and update official data."],
  },
  "tutor-ia-nem": {
    category: "Educational Technology · AI Tutoring",
    role: "Frontend developer · teacher module",
    status: "Academic team project",
    summary:
      "An AI tutor for fourth-grade students, aligned with Mexico’s New Mexican School curriculum and designed to generate exercises that support learning.",
    problem:
      "Fourth-grade students need guided practice with curriculum content. STI-NEM proposes an intelligent tutor that offers exercises and supports their learning.",
    solution:
      "A web system with teacher, student, and administrator modules. Its initial goal is to generate AI-assisted exercises aligned with the New Mexican School curriculum.",
    contribution:
      "I developed the teacher-module screens, including the dashboard, class-management, and exercise views. My contribution focused on the teacher interface within the team building the broader system.",
    overview: [
      "STI-NEM is an AI-assisted intelligent tutoring system designed for fourth-grade students. Its initial goal is to generate exercises aligned with Mexico’s New Mexican School curriculum and help students learn as they solve them. The technical documentation describes student, teacher, director, and administrator roles, each with specific functions.",
      "The work was completed as a team as part of a master's thesis project at Mexico's National Institute of Technology.",
      "Available screenshots document the views. The frontend and backend repositories are not public or accessible from this environment, so I could not verify dependencies, routes, services, or a live API connection.",
    ],
    implemented: [
      "Teacher-module screens: dashboard, class management, and views related to students and exercises.",
      "An exercise criteria interface aligned with the curriculum. Screenshots show the UI but do not by themselves verify AI generation.",
    ],
    planned: [
      "Verify contracts, routes, and technologies against the sti-nem-front repository when the code is accessible.",
      "Confirm which workflows use an API, mocks, or services from the sti-nem-back backend.",
      "Validate exercise generation, authentication, and administrative profiles.",
    ],
  },
  "spa-orizaba": {
    category: "Data Science · Commercial analysis",
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
