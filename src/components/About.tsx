import { Code2, Rocket, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Section } from './Section';

export function About() {
  const { t } = useTranslation();

  const highlights = [
    { icon: <Code2 size={22} className="text-sky-500" />,     label: t('about.clean_code') },
    { icon: <Rocket size={22} className="text-indigo-500" />, label: t('about.scalable') },
    { icon: <Users size={22} className="text-emerald-500" />, label: t('about.team_player') },
  ];

  const aboutParagraphs = t('profile.about', { returnObjects: true }) as string[];

  return (
    <Section id="about" alternate>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: headline + highlights */}
        <div>
          <p className="text-sm font-semibold tracking-widest text-sky-600 dark:text-sky-400 uppercase mb-3">
            {t('about.title')}
          </p>
          <h2 className="section-heading mb-6">{t('about.heading')}</h2>

          <div className="flex flex-wrap gap-3 mt-8">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm"
              >
                {h.icon}
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{h.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: bio text */}
        <div>
          {aboutParagraphs.map((paragraph, i) => (
            <p key={i} className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}


