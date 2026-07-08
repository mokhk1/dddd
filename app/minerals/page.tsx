'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Search, X } from 'lucide-react';
import { useApp } from '@/components/providers/app-provider';
import { Reveal } from '@/components/shared/reveal';
import { MascotIntro } from '@/components/shared/mascot-intro';
import { allMinerals, searchSpecimens } from '@/lib/data';
import { HERO_SANDSTONE } from '@/lib/data/images';
import { cn } from '@/lib/utils';

const HERO_IMAGE = HERO_SANDSTONE;

export default function MineralsPage() {
  const { t, locale } = useApp();
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () => searchSpecimens(allMinerals, query),
    [query],
  );

  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 sm:px-6 lg:px-8 lg:pb-20">
          <Reveal className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              <span className="h-px w-8 bg-accent/60" />
              {t.minerals.eyebrow}
            </span>
            <h1
              className={cn(
                'text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl',
                locale === 'ar' && 'leading-snug',
              )}
            >
              {t.minerals.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/80">
              {t.minerals.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────── Gallery ───────────────────────── */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
          {/* Yaqoot — Museum Guide Introduction Panel */}
          <MascotIntro mascot="yaqoot" />

          {/* Search bar — centered, museum-style */}
          <Reveal className="mx-auto mb-24 flex max-w-2xl flex-col items-center gap-4">
            <p className="text-sm font-medium text-muted-foreground">
              {t.minerals.count(filtered.length)}
            </p>
            <div className="group relative flex w-full items-center gap-3 rounded-full border border-border bg-card px-6 py-4 shadow-sm transition-all focus-within:border-primary/50 focus-within:shadow-md">
              <Search className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-focus-within:text-primary" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.minerals.searchPlaceholder}
                className="w-full bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
                aria-label={t.nav.search}
              />
              {query && (
                <button
                  type="button"
                  aria-label={t.common.close}
                  onClick={() => setQuery('')}
                  className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </Reveal>

          {/* Empty state */}
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4 py-32 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <Search className="h-7 w-7 text-muted-foreground" />
              </div>
              <p className="text-lg text-muted-foreground">{t.minerals.empty}</p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((mineral, i) => (
                <Reveal key={mineral.id} delay={(i % 4) * 70}>
                  <MineralCard mineral={mineral} priority={i < 4} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════ Mineral Card ═══════════════════════════ */

function MineralCard({
  mineral,
  priority,
}: {
  mineral: (typeof allMinerals)[number];
  priority: boolean;
}) {
  const { locale, t } = useApp();
  const name = locale === 'ar' ? mineral.arabicName : mineral.name;
  const arabicName = locale === 'ar' ? mineral.name : mineral.arabicName;

  return (
    <Link
      href={`/minerals/${mineral.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={mineral.image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
        {/* Museum number badge */}
        <span className="absolute start-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur-md">
          {mineral.museumNumber}
        </span>
        {/* Specimen kind badge */}
        <span className="absolute end-3 top-3 rounded-full bg-secondary/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-secondary-foreground backdrop-blur-md">
          {locale === 'ar' ? 'معدن' : 'Mineral'}
        </span>
      </div>

      {/* Museum display label */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {name}
        </h3>
        <p
          className="mt-1 text-sm font-medium leading-relaxed text-muted-foreground"
          dir={locale === 'ar' ? 'ltr' : 'rtl'}
        >
          {arabicName}
        </p>

        <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5">
          {t.home.viewDetails}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100" />
        </span>
      </div>
    </Link>
  );
}
