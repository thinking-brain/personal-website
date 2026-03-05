import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { profile } from '../data/profile';
import { Section } from './Section';

export function Education() {
  const { t } = useTranslation();

  return (
    <Section id="education" alternate>
      <p className="text-sm font-semibold tracking-widest text-sky-600 dark:text-sky-400 uppercase mb-3">
        {t('education.title')}
      </p>
      <h2 className="section-heading mb-12">{t('education.heading')}</h2>

      <div className="relative space-y-0">
        {profile.education.map((item, idx) => {
          const isLast = idx === profile.education.length - 1;
          return (
            <div key={item.id} className="relative flex gap-6">
              <div className="flex flex-col items-center flex-shrink-0 pt-1">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 z-10">
                  <GraduationCap size={16} className="text-white" />
                </div>
                {!isLast && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-indigo-400/50 to-transparent mt-2 min-h-[2rem]" />
                )}
              </div>

              <div className="card-base p-6 mb-8 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {t(`profile.education.${item.id}.degree`)}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm mt-0.5">
                      {item.institution}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 sm:items-end text-xs text-slate-500 dark:text-slate-400 flex-shrink-0">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {item.period.start} – {item.period.end}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {t(`profile.education.${item.id}.location`)}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t(`profile.education.${item.id}.description`)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}



