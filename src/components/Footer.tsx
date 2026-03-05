import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { profile } from '../data/profile';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
      <div className="container-section flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-400 dark:text-slate-500">
        <p>
          © {year} {profile.name} — {t('footer.rights')}
        </p>
        <p className="flex items-center gap-1.5">
          {t('footer.made_with')}
          <Heart size={13} className="text-rose-500 fill-rose-500" />
          <span>&amp; React</span>
        </p>
      </div>
    </footer>
  );
}
