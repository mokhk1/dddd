'use client';

import { useState } from 'react';
import { useApp } from '@/components/providers/app-provider';
import { PageHero } from '@/components/shared/page-hero';
import { SpecimenCard } from '@/components/shared/specimen-card';
import { Reveal } from '@/components/shared/reveal';
import { allRocks, allMinerals, featuredByTag } from '@/lib/data';
import { HERO_MOUNTAIN_ALT } from '@/lib/data/images';
import { cn } from '@/lib/utils';

const HERO_IMAGE = HERO_MOUNTAIN_ALT;

export default function FeaturedPage() {
  const { t } = useApp();
  const [tab, setTab] = useState<
    'highlights' | 'rare' | 'saudi' | 'newest' | 'picks'
  >('highlights');

  const tabs = [
    { id: 'highlights', label: t.featured.tabs.highlights },
    { id: 'rare', label: t.featured.tabs.rare },
    { id: 'saudi', label: t.featured.tabs.saudi },
    { id: 'newest', label: t.featured.tabs.newest },
    { id: 'picks', label: t.featured.tabs.picks },
  ] as const;

  const specimens = featuredByTag(tab);

  return (
    <>
      <PageHero
        eyebrow={t.featured.eyebrow}
        title={t.featured.title}
        subtitle={t.featured.subtitle}
        image={HERO_IMAGE}
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2">
            {tabs.map((tb) => (
              <button
                key={tb.id}
                type="button"
                onClick={() => setTab(tb.id)}
                className={cn(
                  'shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all',
                  tab === tb.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'border border-border bg-card text-foreground/70 hover:border-primary/40 hover:text-foreground',
                )}
              >
                {tb.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specimens.map((s, i) => {
              const isRock = allRocks.some((r) => r.id === s.id);
              const href = isRock ? `/rocks/${s.id}` : `/minerals/${s.id}`;
              return (
                <Reveal key={`${tab}-${s.id}`} delay={(i % 3) * 80}>
                  <SpecimenCard
                    specimen={s}
                    href={href}
                    kind={isRock ? 'rock' : 'mineral'}
                    priority={i < 3}
                  />
                </Reveal>
              );
            })}
          </div>

          {specimens.length === 0 && (
            <p className="py-24 text-center text-muted-foreground">
              {t.rocks.empty}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
