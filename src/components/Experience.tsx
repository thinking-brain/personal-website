import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { profile } from '../data/profile';
import { Section } from './Section';

export function Experience() {
  const { t } = useTranslation();

  return (
    <Section id="experience">
      <p className="text-sm font-semibold tracking-widest text-sky-600 dark:text-sky-400 uppercase mb-3">
        {t('experience.title')}
      </p>
      <h2 className="section-heading mb-12">{t('experience.heading')}</h2>

      <div className="relative space-y-0">
        {profile.experience.map((item, idx) => {
          const isLast = idx === profile.experience.length - 1;
          const bullets = t(`profile.experience.${item.id}.description`, { returnObjects: true }) as string[];
          return (
            <div key={item.id} className="relative flex gap-6">
              {/* Timeline dot + line */}
              <div className="flex flex-col items-center flex-shrink-0 pt-1">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/25 z-10">
                  <Briefcase size={16} className="text-white" />
                </div>
                {!isLast && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-sky-400/50 to-transparent mt-2 min-h-[2rem]" />
                )}
              </div>

              {/* Content card */}
              <div className="card-base p-6 mb-8 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {t(`profile.experience.${item.id}.role`)}
                    </h3>
                    <p className="text-sky-600 dark:text-sky-400 font-semibold text-sm mt-0.5">{item.company}</p>
                  </div>
                  <div className="flex flex-col gap-1 sm:items-end text-xs text-slate-500 dark:text-slate-400 flex-shrink-0">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {item.period.start} – {item.period.end ?? t('experience.present')}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {t(`profile.experience.${item.id}.location`)}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-5">
                  {bullets.map((bullet, bi) => (
                    <li key={bi} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      <span className="text-sky-500 font-bold mt-0.5 flex-shrink-0">›</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}



