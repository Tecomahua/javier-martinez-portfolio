import type { AelpCapture } from "@/components/aelp-capture-gallery";

type CaptureEnglish = Pick<AelpCapture, "titleEn" | "descriptionEn" | "altEn" | "categoryEn">;

export const captureEnglish: Record<string, CaptureEnglish> = {
  "17.webp": { titleEn: "Lesson: The alphabet", descriptionEn: "An audiovisual A1 lesson cover with controls and step navigation.", altEn: "Alphabet lesson in the Inglés Chido app.", categoryEn: "Learning path & lessons" },
  "17_1.webp": { titleEn: "Spelling and writing practice", descriptionEn: "A visual activity connecting words, animals, and written practice.", altEn: "Learning activity with the words dog and cat and a notebook for writing practice.", categoryEn: "Learning path & lessons" },
  "18.webp": { titleEn: "Vowel practice", descriptionEn: "A guided activity for listening, repeating, and practicing pronunciation.", altEn: "Vowel activity with audio, pronunciation guidance, and a repeat control.", categoryEn: "Listening & practice" },
  "19.webp": { titleEn: "Listening recognition", descriptionEn: "Listen to a vowel and choose the letter that matches the sound.", altEn: "Activity for identifying a vowel by its pronunciation.", categoryEn: "Listening & practice" },
  "20.webp": { titleEn: "Consonant practice", descriptionEn: "A consonant lesson with controls to listen and repeat.", altEn: "Consonant lesson with audio, pronunciation, and practice options.", categoryEn: "Listening & practice" },
  "10.webp": { titleEn: "Review", descriptionEn: "A summary of areas that may need more practice.", altEn: "Review screen with sections for patterns, vocabulary, and skills.", categoryEn: "Review & vocabulary" },
  "11.webp": { titleEn: "Vocabulary", descriptionEn: "Browse saved words and add new vocabulary.", altEn: "Vocabulary screen with search, filters, and an option to add words.", categoryEn: "Review & vocabulary" },
  "22.webp": { titleEn: "Review · dark theme", descriptionEn: "The review module displayed in dark theme.", altEn: "Inglés Chido review module in dark theme.", categoryEn: "Review & vocabulary" },
  "22_1.webp": { titleEn: "Review areas · dark theme", descriptionEn: "Practice sections and content to revisit in dark theme.", altEn: "List of review areas in the dark Inglés Chido interface.", categoryEn: "Review & vocabulary" },
  "22_2.webp": { titleEn: "Vocabulary · dark theme", descriptionEn: "Browse and practice vocabulary in dark theme.", altEn: "Vocabulary screen with a saved word in dark theme.", categoryEn: "Review & vocabulary" },
  "dashboard-docente.png": { titleEn: "Teacher dashboard", descriptionEn: "Home panel with teacher-module shortcuts, recent activity, and academic indicators.", altEn: "STI-NEM teacher dashboard; personal names and figures have been anonymized.", categoryEn: "Teachers" },
  "grupos.png": { titleEn: "Class management", descriptionEn: "Browse classes with filters for grade and school year.", altEn: "Class list with filters and cards; student counts have been hidden.", categoryEn: "Teachers" },
  "detalle-grupo.png": { titleEn: "Class details and settings", descriptionEn: "Challenge settings and participant list, with names and aliases anonymized.", altEn: "Class details, settings, and table; names and aliases have been anonymized.", categoryEn: "Teachers" },
  "perfil-estudiante.png": { titleEn: "Student profile", descriptionEn: "Tabs organize learning information, progress, and activity; profile data has been anonymized.", altEn: "Student profile with anonymized personal data and progress values.", categoryEn: "Students" },
  "generacion-ejercicios.png": { titleEn: "Exercise criteria", descriptionEn: "Choose curriculum criteria and view where results would appear. The screenshot does not confirm that generation is connected.", altEn: "Exercise-generation criteria screen; the results view is empty.", categoryEn: "Exercises" },
  "ejercicios.png": { titleEn: "Browse exercises", descriptionEn: "A visual list with curriculum filters, difficulty levels, and exercise actions.", altEn: "Exercise table with filters for grade, subject area, and content.", categoryEn: "Exercises" },
};
