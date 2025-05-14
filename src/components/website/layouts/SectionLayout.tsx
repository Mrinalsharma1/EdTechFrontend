import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionLayoutProps {
  children: ReactNode;
  className?: string;
  background?: string;
}

const SectionLayout = ({
  children,
  className,
  background = 'bg-white',
}: SectionLayoutProps) => {
  return (
    <section className={cn('w-full py-8', background, className)}>
      <div className='px-2 xl:container mx-auto'>{children}</div>
    </section>
  );
};

export default SectionLayout;
