import { Linkedin, Github, Mail, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { profile } from '../data/profile';
import { Section } from './Section';

interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  color: string;
}

function ContactCard({ icon, label, value, href, color }: ContactCardProps) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noreferrer noopener"
      className="card-base p-6 flex items-center gap-4 group"
    >
      <div className={`p-3 rounded-xl ${color} flex-shrink-0`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">
          {label}
        </p>
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 truncate group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
          {value}
        </p>
      </div>
      <ArrowUpRight
        size={16}
        className="text-slate-300 dark:text-slate-600 group-hover:text-sky-500 transition-colors flex-shrink-0"
      />
    </a>
  );
}

export function Contact() {
  const { t } = useTranslation();

  const linkedinHandle = profile.social.linkedin.replace('https://www.linkedin.com/in/', '').replace('/', '');

  return (
    <Section id="contact">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold tracking-widest text-sky-600 dark:text-sky-400 uppercase mb-3">
          {t('contact.title')}
        </p>
        <h2 className="section-heading mb-4">
          {t('contact.heading')}
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
        <ContactCard
          icon={<Linkedin size={22} className="text-[#0077B5]" />}
          label={t('contact.linkedin')}
          value={`in/${linkedinHandle}`}
          href={profile.social.linkedin}
          color="bg-[#0077B5]/10"
        />
        <ContactCard
          icon={<Github size={22} className="text-slate-700 dark:text-slate-300" />}
          label={t('contact.github')}
          value={profile.social.github.replace('https://github.com/', '') || 'GitHub'}
          href={profile.social.github}
          color="bg-slate-100 dark:bg-slate-700"
        />
        <ContactCard
          icon={<Mail size={22} className="text-sky-500" />}
          label={t('contact.email')}
          value={profile.social.email}
          href={`mailto:${profile.social.email}`}
          color="bg-sky-50 dark:bg-sky-500/10"
        />
      </div>
    </Section>
  );
}
