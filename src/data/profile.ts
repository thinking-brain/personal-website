/**
 * Structural / non-translatable profile data.
 * All translatable text lives in src/locales/en.json and src/locales/es.json
 * Translatable fields are accessed via react-i18next: t('profile.experience.1.role')
 */
import type { ExperienceItem, EducationItem, ProjectItem, SkillGroup } from '../types';

export const profile = {
  name: 'Elvis Junior Crego Perez',
  avatarUrl: '', // optional: URL to your photo (LinkedIn CDN, GitHub, etc.)

  social: {
    linkedin: 'https://www.linkedin.com/in/elvis-jr-crego/',
    github:   'https://github.com/thinking-brain',
    email:    'elvis.crego@gmail.com',
  },

  // Translatable text for each entry is in the locale JSON under profile.experience.{id}
  experience: [
    { id: 1, company: 'Hitachi Vantara',                    period: { start: 'Sep 2023', end: null       }, tech: ['.NET Core', 'C#', 'Microservices', 'Docker', 'Azure'] },
    { id: 2, company: 'ISU Corp',                           period: { start: 'Feb 2022', end: 'Sep 2023' }, tech: ['.NET Core', 'C#', 'SQL Server', 'REST APIs'] },
    { id: 3, company: 'PARODIT Consultancy Services',       period: { start: 'Aug 2021', end: 'Sep 2023' }, tech: ['ASP.NET Core', 'React', 'C#', 'TypeScript', 'WordPress'] },
    { id: 4, company: 'TheCriptCloud',                      period: { start: 'Apr 2020', end: 'Aug 2022' }, tech: ['Ionic', 'Angular', 'TypeScript', 'Python', 'AWS'] },
    { id: 5, company: 'Desoft',                             period: { start: 'Feb 2020', end: 'Jan 2022' }, tech: ['.NET Core', 'C#', 'Angular', 'SQL Server'] },
    { id: 6, company: 'C.T. Antonio Guiteras',              period: { start: 'Nov 2015', end: 'Jan 2020' }, tech: ['.NET', 'C#', 'ASP.NET', 'SQL Server', 'JavaScript'] },
    { id: 7, company: 'Freelance · Self-employed',          period: { start: 'Jan 2014', end: 'Jan 2021' }, tech: ['ASP.NET Core', 'C#', 'Angular', 'React', 'SQL Server', 'NuGet'] },
    { id: 8, company: 'ONAT',                               period: { start: '2013',     end: '2015'     }, tech: ['Networking', 'IT Security', 'Windows Server'] },
  ] as ExperienceItem[],

  // Translatable text for each entry is in the locale JSON under profile.education.{id}
  education: [
    { id: 1, institution: 'Universidad de Matanzas', period: { start: '2009', end: '2015' } },
    { id: 2, institution: 'Online Certifications',   period: { start: '2018', end: '2022' } },
  ] as EducationItem[],

  // Translatable text for each entry is in the locale JSON under profile.projects.{id}
  projects: [
    { id: 1, name: 'ModularApp Platform',          tech: ['ASP.NET Core', 'C#', 'NuGet', 'SQL Server', 'JavaScript'],  link: '#', github: 'https://github.com/thinking-brain', featured: true  },
    { id: 2, name: 'LIMS Integration & Automation', tech: ['.NET Core', 'C#', 'SQL Server', 'REST APIs'],               link: '#', github: 'https://github.com/thinking-brain', featured: true  },
    { id: 3, name: 'Mobile Fiscal Sales App',       tech: ['Ionic', 'Angular', 'TypeScript', 'Python', 'AWS'],          link: '#', github: 'https://github.com/thinking-brain', featured: false },
    { id: 4, name: 'Enterprise Modular Platform',   tech: ['ASP.NET', 'C#', 'SQL Server', 'JavaScript'],                link: '#', github: 'https://github.com/thinking-brain', featured: false },
  ] as ProjectItem[],

  skills: {
    languages:  ['C#', 'JavaScript', 'TypeScript', 'Python', 'Java', 'HTML', 'CSS', 'SQL'],
    frameworks: ['.NET Core', 'ASP.NET Core', 'Angular', 'React', 'Ionic', 'Entity Framework', 'Node.js'],
    tools:      ['Git', 'Docker', 'Azure', 'AWS', 'Microservices', 'REST APIs', 'GitHub Actions'],
    databases:  ['SQL Server', 'PostgreSQL', 'MongoDB', 'Firebase', 'Redis'],
  } as SkillGroup,
};
