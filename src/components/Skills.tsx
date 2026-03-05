import { useTranslation } from 'react-i18next';
import { profile } from '../data/profile';
import { Section } from './Section';

interface PillGroupProps {
  title: string;
  items: string[];
  color: 'sky' | 'indigo' | 'emerald' | 'amber';
}

const colorMap: Record<PillGroupProps['color'], string> = {
  sky:     'bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-500/20 hover:bg-sky-100 dark:hover:bg-sky-500/20',
  indigo:  'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/20 hover:bg-indigo-100 dark:hover:bg-indigo-500/20',
  emerald: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/20 hover:bg-emerald-100 dark:hover:bg-emerald-500/20',
  amber:   'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-500/20 hover:bg-amber-100 dark:hover:bg-amber-500/20',
};

function PillGroup({ title, items, color }: PillGroupProps) {
  return (
    <div className="card-base p-6">
      <h3 className="text-xs font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className={`px-3.5 py-1.5 rounded-xl text-sm font-medium border transition-all duration-200 cursor-default ${colorMap[color]}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const { t } = useTranslation();

  return (
    <Section id="skills" alternate>
      <p className="text-sm font-semibold tracking-widest text-sky-600 dark:text-sky-400 uppercase mb-3">
        {t('skills.title')}
      </p>
      <h2 className="section-heading mb-12">{t('skills.heading')}</h2>

      <div className="grid sm:grid-cols-2 gap-5">
        <PillGroup title={t('skills.languages')}  items={profile.skills.languages}  color="sky" />
        <PillGroup title={t('skills.frameworks')} items={profile.skills.frameworks} color="indigo" />
        <PillGroup title={t('skills.tools')}      items={profile.skills.tools}      color="emerald" />
        <PillGroup title={t('skills.databases')}  items={profile.skills.databases}  color="amber" />
      </div>
    </Section>
  );
}


