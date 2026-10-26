'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

type RevealProps = {
  as?: 'div' | 'li';
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

export default function Reveal({ as: Tag = 'div', delay = 0, className, children }: RevealProps) {
  const [shown, setShown] = useState(false);

  return (
    <Tag
      ref={(el: HTMLElement | null) => {
        if (!el) return;
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setShown(true);
              observer.disconnect();
            }
          },
          { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
      }}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition duration-700 ease-out motion-reduce:transition-none',
        shown
          ? 'translate-y-0 opacity-100'
          : 'translate-y-4 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
        className
      )}
    >
      {children}
    </Tag>
  );
}
