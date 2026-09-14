'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export function SectionHeading({ title, subtitle, align = 'center', light = false, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className={cn(
        'mb-10 lg:mb-14',
        align === 'center' && 'text-center',
        className
      )}
    >
      <h2
        className={cn(
          'font-[family-name:var(--font-display)]',
          light ? 'text-[var(--color-ivory)]' : 'text-[var(--color-obsidian)]'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-sm lg:text-base max-w-xl leading-relaxed',
            align === 'center' && 'mx-auto',
            light ? 'text-[var(--color-neutral)]' : 'text-[var(--color-muted)]'
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
