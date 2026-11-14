import type { AelpCapture } from "@/components/aelp-capture-gallery";

type CaptureEnglish = Pick<AelpCapture, "titleEn" | "descriptionEn" | "altEn" | "categoryEn">;

export const captureEnglish: Record<string, CaptureEnglish> = {
  "dashboard-docente.png": { titleEn: "Teacher dashboard", descriptionEn: "Home panel with teacher-module shortcuts, recent activity, and academic indicators.", altEn: "STI-NEM teacher dashboard; personal names and figures have been anonymized.", categoryEn: "Teachers" },
  "grupos.png": { titleEn: "Class management", descriptionEn: "Browse classes with filters for grade and school year.", altEn: "Class list with filters and cards; student counts have been hidden.", categoryEn: "Teachers" },
  "detalle-grupo.png": { titleEn: "Class details and settings", descriptionEn: "Challenge settings and participant list, with names and aliases anonymized.", altEn: "Class details, settings, and table; names and aliases have been anonymized.", categoryEn: "Teachers" },
  "perfil-estudiante.png": { titleEn: "Student profile", descriptionEn: "Tabs organize learning information, progress, and activity; profile data has been anonymized.", altEn: "Student profile with anonymized personal data and progress values.", categoryEn: "Students" },
  "generacion-ejercicios.png": { titleEn: "Exercise criteria", descriptionEn: "Choose curriculum criteria and view where results would appear. The screenshot does not confirm that generation is connected.", altEn: "Exercise-generation criteria screen; the results view is empty.", categoryEn: "Exercises" },
  "ejercicios.png": { titleEn: "Browse exercises", descriptionEn: "A visual list with curriculum filters, difficulty levels, and exercise actions.", altEn: "Exercise table with filters for grade, subject area, and content.", categoryEn: "Exercises" },
};
