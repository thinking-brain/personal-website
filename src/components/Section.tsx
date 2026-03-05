import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Props {
  id: string;
  className?: string;
  children: React.ReactNode;
  alternate?: boolean;
}

export function Section({ id, className = '', children, alternate = false }: Props) {
  const { ref, isInView } = useIntersectionObserver();

  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${alternate ? 'bg-slate-100/60 dark:bg-slate-900/40' : ''} ${className}`}
    >
      <div
        ref={ref}
        className={`container-section reveal ${isInView ? 'visible' : ''}`}
      >
        {children}
      </div>
    </section>
  );
}
