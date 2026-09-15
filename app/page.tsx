'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Mountain,
  Gem,
  Compass,
  Microscope,
} from 'lucide-react';
import { useApp } from '@/components/providers/app-provider';
import { Reveal } from '@/components/shared/reveal';
import { Counter } from '@/components/shared/counter';
import { GeoParticles } from '@/components/shared/geo-particles';
import { allFeatured, allRocks, allMinerals } from '@/lib/data';
import { MASCOT_IMAGES } from '@/lib/data/images';
import type { Specimen } from '@/lib/data';
import {
  HERO_MOUNTAIN,
  ABOUT_STORY,
  HERO_VOLCANIC,
  HERO_STRATA,
} from '@/lib/data/images';
import { cn } from '@/lib/utils';

export default function HomePage() {
  const { t, locale } = useApp();
  const featured = allFeatured().slice(0, 4);
  const heroSpecimen = featured[0];
  const rest = featured.slice(1);
  const isHeroRock = heroSpecimen
    ? allRocks.some((r) => r.id === heroSpecimen.id)
    : true;
  const heroHref = heroSpecimen
    ? isHeroRock
      ? `/rocks/${heroSpecimen.id}`
      : `/minerals/${heroSpecimen.id}`
    : '/rocks';

  return (
    <>
      {/* ───────────────────────── Cinematic Hero ───────────────────────── */}
      <Hero />

      {/* ───────────────────────── Storytelling ───────────────────────── */}
      <section className="relative bg-background">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
            {/* Text column */}
            <Reveal className="lg:col-span-5 lg:pt-8">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                {t.home.storyEyebrow}
              </span>
              <h2
                className={cn(
                  'mt-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl',
                  locale === 'ar' && 'leading-[1.25]',
                )}
              >
                {t.home.storyTitle}
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
                {t.home.storyBody}
              </p>

              <div className="mt-12 flex flex-col gap-6">
                {[
                  { icon: Compass, label: t.home.missionTitle, body: t.home.missionBody },
                  { icon: Microscope, label: t.home.visionTitle, body: t.home.visionBody },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {item.label}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Image column with overlaid stats */}
            <Reveal className="lg:col-span-7" delay={150}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl sm:aspect-[5/5]">
                <Image
                  src={ABOUT_STORY}
                  alt={t.home.storyTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Floating stat cards */}
                <div className="absolute bottom-0 start-0 end-0 p-6 sm:p-8">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: allRocks.length + allMinerals.length, label: t.home.storyStat1, suffix: '' },
                      { value: 12, label: t.home.storyStat2, suffix: '+' },
                      { value: 50, label: t.home.storyStat3, suffix: '+' },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl"
                      >
                        <div className="text-3xl font-bold tracking-tight text-white">
                          <Counter value={stat.value} suffix={stat.suffix} />
                        </div>
                        <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/70">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Meet the Museum Guides ───────────────────────── */}
      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              {t.home.mascotsEyebrow}
            </span>
            <h2
              className={cn(
                'mt-5 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl',
                locale === 'ar' && 'leading-[1.25]',
              )}
            >
              {t.home.mascotsTitle}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t.home.mascotsSubtitle}
            </p>
          </Reveal>

          <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:gap-14">
            {/* Sakhr */}
            <Reveal>
              <div className="card-luxury group relative flex flex-col items-center overflow-hidden rounded-[2rem] border border-border bg-card p-12 text-center shadow-sm">
                <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/8 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
                {/* Character image — replace via MASCOT_IMAGES.sakhr in lib/data/images.ts */}
                <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-border/60 shadow-sm">
                  <Image
                    src={MASCOT_IMAGES.sakhr}
                    alt={t.home.sakhrName}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-8 text-2xl font-bold tracking-tight text-foreground">
                  {t.home.sakhrName}
                </h3>
                <span className="mt-2 inline-flex w-fit items-center rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {t.home.sakhrRole}
                </span>
                <p className="mt-5 max-w-xs text-base leading-relaxed text-muted-foreground">
                  {t.home.sakhrQuote}
                </p>
              </div>
            </Reveal>

            {/* Yaqoot */}
            <Reveal delay={120}>
              <div className="card-luxury group relative flex flex-col items-center overflow-hidden rounded-[2rem] border border-border bg-card p-12 text-center shadow-sm">
                <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/8 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
                {/* Character image — replace via MASCOT_IMAGES.yaqoot in lib/data/images.ts */}
                <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-border/60 shadow-sm">
                  <Image
                    src={MASCOT_IMAGES.yaqoot}
                    alt={t.home.yaqootName}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-8 text-2xl font-bold tracking-tight text-foreground">
                  {t.home.yaqootName}
                </h3>
                <span className="mt-2 inline-flex w-fit items-center rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {t.home.yaqootRole}
                </span>
                <p className="mt-5 max-w-xs text-base leading-relaxed text-muted-foreground">
                  {t.home.yaqootQuote}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Featured Specimens ───────────────────────── */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          {/* Editorial header */}
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                {t.home.featuredKicker}
              </span>
              <h2
                className={cn(
                  'mt-4 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl',
                  locale === 'ar' && 'leading-[1.25]',
                )}
              >
                {t.home.featuredTitle}
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              {t.home.featuredSubtitle}
            </p>
          </Reveal>

          {/* Editorial grid: 1 large + 3 small */}
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {/* Hero specimen card */}
            {heroSpecimen && (
              <Reveal className="lg:row-span-2">
                <FeaturedHeroCard
                  specimen={heroSpecimen}
                  href={heroHref}
                  kind={isHeroRock ? 'rock' : 'mineral'}
                />
              </Reveal>
            )}

            {/* Smaller cards */}
            {rest.map((s, i) => {
              const isRock = allRocks.some((r) => r.id === s.id);
              const href = isRock ? `/rocks/${s.id}` : `/minerals/${s.id}`;
              return (
                <Reveal key={s.id} delay={i * 100}>
                  <FeaturedRowCard
                    specimen={s}
                    href={href}
                    kind={isRock ? 'rock' : 'mineral'}
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Pull Quote ───────────────────────── */}
      <section className="relative overflow-hidden bg-foreground py-32 sm:py-44">
        <div className="absolute inset-0">
          <Image
            src={HERO_STRATA}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground via-foreground/85 to-foreground" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal className="flex flex-col items-center gap-8">
            <span className="text-7xl font-serif leading-none text-accent/50">
              &ldquo;
            </span>
            <blockquote
              className={cn(
                'text-balance text-3xl font-medium leading-[1.3] tracking-tight text-background sm:text-4xl lg:text-[2.75rem]',
                locale === 'ar' && 'leading-[1.4]',
              )}
            >
              {t.home.quoteText}
            </blockquote>
            <cite className="text-sm font-medium uppercase tracking-[0.25em] text-accent/70">
              {t.home.quoteAttribution}
            </cite>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────── Stats ───────────────────────── */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              {t.home.statsEyebrow}
            </span>
            <h2
              className={cn(
                'mt-4 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl',
                locale === 'ar' && 'leading-[1.25]',
              )}
            >
              {t.home.statsTitle}
            </h2>
          </Reveal>

          <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            {[
              { value: allRocks.length, label: t.home.stats.rocks, suffix: '' },
              { value: allMinerals.length, label: t.home.stats.minerals, suffix: '' },
              { value: allRocks.length + allMinerals.length, label: t.home.stats.total, suffix: '' },
              { value: 100, label: t.home.stats.facts, suffix: '+' },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg sm:p-10">
                  <div className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Cinematic CTA ───────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HERO_VOLCANIC}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-36 text-center sm:py-48 lg:px-8">
          <Reveal className="flex flex-col items-center gap-9">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              {t.home.ctaKicker}
            </span>
            <h2
              className={cn(
                'text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl',
                locale === 'ar' && 'leading-[1.25]',
              )}
            >
              {t.home.ctaTitle}
            </h2>
            <p className="max-w-2xl text-balance text-lg leading-relaxed text-white/75">
              {t.home.ctaBody}
            </p>
            <div className="mt-2 flex flex-col gap-3.5 sm:flex-row">
              <Link
                href="/rocks"
                className="btn-premium group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-9 py-4 text-sm font-semibold text-primary shadow-xl transition-all hover:shadow-2xl hover:bg-white/90"
              >
                <Mountain className="h-4 w-4" />
                {t.home.ctaRocks}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
              </Link>
              <Link
                href="/minerals"
                className="btn-premium group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/25 bg-white/5 px-9 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/15 hover:border-white/40"
              >
                <Gem className="h-4 w-4" />
                {t.home.ctaMinerals}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════ Sub-components ═══════════════════════════ */

function Hero() {
  const { t, locale } = useApp();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative flex h-[100svh] min-h-[640px] items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={HERO_MOUNTAIN}
          alt=""
          fill
          priority
          sizes="100vw"
          className={cn(
            'object-cover transition-transform duration-[4000ms] ease-out',
            mounted ? 'scale-100' : 'scale-110',
          )}
        />
        {/* Cinematic dark gradient — photography stays the focus */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 90% 70% at 50% 35%, transparent 20%, rgba(0,0,0,0.55) 100%)',
          }}
        />
      </div>

      {/* Floating geological particles */}
      <GeoParticles count={16} />

      {/* Content — centered, museum-quality spacing */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal className="flex flex-col items-center gap-9">
            {/* Kicker badge */}
            <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-black/20 px-5 py-2 text-[11px] font-medium uppercase tracking-[0.3em] text-white/90 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {t.home.heroKicker}
            </span>

            {/* Main title — large premium typography */}
            <h1
              className={cn(
                'text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_40px_rgba(0,0,0,0.6)] sm:text-6xl lg:text-7xl xl:text-[5.5rem]',
                locale === 'ar' && 'leading-[1.2]',
              )}
              dir={locale === 'ar' ? 'rtl' : 'ltr'}
            >
              {t.home.heroTitle}
            </h1>

            {/* Golden subtitle */}
            <p className="max-w-xl text-balance text-lg font-medium leading-relaxed text-accent sm:text-xl">
              {t.home.heroSubtitle}
            </p>

            {/* Premium CTA buttons */}
            <div className="mt-2 flex flex-col gap-3.5 sm:flex-row">
              <Link
                href="/rocks"
                className="btn-premium group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-9 py-4 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/40 hover:brightness-110"
              >
                {t.home.exploreRocks}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
              </Link>
              <Link
                href="/minerals"
                className="btn-premium group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-black/20 px-9 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-black/30 hover:border-white/30"
              >
                {t.home.exploreMinerals}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3 text-white/40">
          <span className="text-[10px] font-medium uppercase tracking-[0.4em]">
            {t.home.scroll}
          </span>
          <span className="flex h-11 w-5 items-start justify-center rounded-full border border-white/20 p-1.5">
            <span className="scroll-indicator-dot h-1.5 w-1.5 rounded-full bg-accent/70" />
          </span>
        </div>
      </div>

      {/* Soft cinematic fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-black/30 to-background" />
    </section>
  );
}

function FeaturedHeroCard({
  specimen,
  href,
  kind,
}: {
  specimen: Specimen;
  href: string;
  kind: 'rock' | 'mineral';
}) {
  const { locale, t } = useApp();
  const name = locale === 'ar' ? specimen.arabicName : specimen.name;
  const subtitle = locale === 'ar' ? specimen.arabicSubtitle : specimen.subtitle;
  const description =
    locale === 'ar' ? specimen.arabicDescription : specimen.description;

  return (
    <Link
      href={href}
      className="group relative flex h-full min-h-[28rem] flex-col justify-end overflow-hidden rounded-[2rem] shadow-lg transition-all duration-500 hover:shadow-2xl"
    >
      <div className="absolute inset-0">
        <Image
          src={specimen.image}
          alt={name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      </div>

      <div className="relative p-8 sm:p-10">
        <span
          className={cn(
            'inline-flex w-fit items-center rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide backdrop-blur-md',
            kind === 'rock'
              ? 'bg-primary/80 text-primary-foreground'
              : 'bg-secondary/80 text-secondary-foreground',
          )}
        >
          {kind === 'rock'
            ? locale === 'ar'
              ? 'صخر'
              : 'Rock'
            : locale === 'ar'
              ? 'معدن'
              : 'Mineral'}
        </span>
        <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {name}
        </h3>
        <p className="mt-2 text-sm text-white/70">{subtitle}</p>
        <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">
          {description}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
          {t.home.viewDetails}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100" />
        </span>
      </div>
    </Link>
  );
}

function FeaturedRowCard({
  specimen,
  href,
  kind,
}: {
  specimen: Specimen;
  href: string;
  kind: 'rock' | 'mineral';
}) {
  const { locale, t } = useApp();
  const name = locale === 'ar' ? specimen.arabicName : specimen.name;
  const subtitle = locale === 'ar' ? specimen.arabicSubtitle : specimen.subtitle;

  return (
    <Link
      href={href}
      className="group flex items-center gap-5 overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-sm transition-all duration-500 hover:shadow-lg"
    >
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-28">
        <Image
          src={specimen.image}
          alt={name}
          fill
          sizes="120px"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 py-1">
        <span
          className={cn(
            'inline-flex w-fit rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide',
            kind === 'rock'
              ? 'bg-primary/10 text-primary'
              : 'bg-secondary/15 text-secondary-foreground',
          )}
        >
          {kind === 'rock'
            ? locale === 'ar'
              ? 'صخر'
              : 'Rock'
            : locale === 'ar'
              ? 'معدن'
              : 'Mineral'}
        </span>
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <ArrowUpRight className="me-4 h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100" />
    </Link>
  );
}
