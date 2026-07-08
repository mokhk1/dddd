'use client';

import Image from 'next/image';
import { useApp } from '@/components/providers/app-provider';
import { Reveal } from './reveal';
import { cn } from '@/lib/utils';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  align?: 'start' | 'center';
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  align = 'center',
}: PageHeroProps) {
  const { locale } = useApp();
  return (
    <section className="relative flex min-h-[58vh] items-end overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark cinematic gradient — keeps photography visible, ensures text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </div>
      <div
        className={cn(
          'relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-6 lg:px-8',
          align === 'center' && 'text-center',
        )}
      >
        <Reveal
          className={cn(
            'flex flex-col gap-5',
            align === 'center' && 'items-center',
          )}
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              <span className="h-px w-8 bg-accent/60" />
              {eyebrow}
            </span>
          )}
          <h1
            className={cn(
              'text-balance text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl',
              locale === 'ar' && 'leading-snug',
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={cn(
                'max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl',
                align === 'center' && 'mx-auto',
              )}
            >
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
      {/* Soft fade into page content */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
