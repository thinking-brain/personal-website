import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { profile } from '../data/profile';

export function Hero() {
  const { t } = useTranslation();

  const initials = 'EC';

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-400/10 dark:bg-sky-500/8 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/8 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-200/30 dark:bg-slate-800/20 rounded-full blur-3xl" />
      </div>

      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text column */}
          <div className="order-2 lg:order-1">
            <div className="animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                {t('profile.location')}
              </span>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <p className="text-lg font-medium text-slate-500 dark:text-slate-400 mb-2">
                {t('hero.greeting')}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
                <span className="gradient-text">{profile.name}</span>
              </h1>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.35s', animationFillMode: 'both' }}>
              <p className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
                {t('profile.title')}
              </p>
              <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed mb-8">
                {t('profile.tagline')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-3 mb-10 animate-fade-in-up"
              style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                <Mail size={16} />
                {t('hero.cta_contact')}
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                {t('hero.cta_projects')}
              </button>
            </div>

            {/* Social links */}
            <div
              className="flex items-center gap-4 animate-fade-in"
              style={{ animationDelay: '0.65s', animationFillMode: 'both' }}
            >
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={`mailto:${profile.social.email}`}
                className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <span className="h-4 w-px bg-slate-300 dark:bg-slate-700" />
              <span className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                <MapPin size={14} />
                {t('profile.location')}
              </span>
            </div>
          </div>

          {/* Avatar column */}
          <div
            className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            <div className="relative animate-float">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 to-indigo-600 blur-xl opacity-30 scale-110" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl">
                {profile.avatarUrl ? (
                  <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center">
                    <span className="text-7xl md:text-8xl font-extrabold text-white select-none">{initials}</span>
                  </div>
                )}
              </div>
              <div className="absolute -inset-4 rounded-full border border-sky-400/20 dark:border-sky-500/15" />
              <div className="absolute -inset-8 rounded-full border border-sky-400/10 dark:border-sky-500/8" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <ArrowDown size={20} className="text-slate-400" />
      </div>
    </section>
  );
}


