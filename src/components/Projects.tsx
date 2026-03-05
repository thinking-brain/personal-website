import { ExternalLink, Github, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { profile } from '../data/profile';
import { Section } from './Section';

export function Projects() {
  const { t } = useTranslation();

  const featured = profile.projects.filter((p) => p.featured);
  const rest = profile.projects.filter((p) => !p.featured);

  return (
    <Section id="projects">
      <p className="text-sm font-semibold tracking-widest text-sky-600 dark:text-sky-400 uppercase mb-3">
        {t('projects.title')}
      </p>
      <h2 className="section-heading mb-12">{t('projects.heading')}</h2>

      {featured.length > 0 && (
        <>
          <p className="text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-4">
            {t('projects.featured')}
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {featured.map((project) => (
              <div key={project.id} className="card-base p-6 group flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-500/10">
                    <Star size={20} className="text-sky-500" />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noreferrer noopener"
                        className="p-2 rounded-lg text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                        aria-label={t('projects.view_code')}>
                        <Github size={16} />
                      </a>
                    )}
                    {project.link !== '#' && (
                      <a href={project.link} target="_blank" rel="noreferrer noopener"
                        className="p-2 rounded-lg text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                        aria-label={t('projects.view_project')}>
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-1">
                  {t(`profile.projects.${project.id}.description`)}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {rest.length > 0 && (
        <>
          <p className="text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-4">
            {t('projects.all')}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {rest.map((project) => (
              <div key={project.id} className="card-base p-5 group flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-1 ml-2 flex-shrink-0">
                    {project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noreferrer noopener"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-all"
                        aria-label={t('projects.view_code')}>
                        <Github size={14} />
                      </a>
                    )}
                    {project.link !== '#' && (
                      <a href={project.link} target="_blank" rel="noreferrer noopener"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-all"
                        aria-label={t('projects.view_project')}>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3 flex-1">
                  {t(`profile.projects.${project.id}.description`)}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </Section>
  );
}


