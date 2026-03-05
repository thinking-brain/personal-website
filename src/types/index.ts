// Bilingual fields have been moved to src/locales/en.json and src/locales/es.json
// and are accessed via react-i18next's t() function.

export interface ExperienceItem {
  id: number;
  company: string;
  period: { start: string; end: string | null };
  tech: string[];
}

export interface EducationItem {
  id: number;
  institution: string;
  period: { start: string; end: string };
}

export interface ProjectItem {
  id: number;
  name: string;
  tech: string[];
  link: string;
  github: string;
  featured: boolean;
}

export interface SkillGroup {
  languages: string[];
  frameworks: string[];
  tools: string[];
  databases: string[];
}
