'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useApp } from '@/components/providers/app-provider';
import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';
import { FEATURE_IMAGES, HERO_VOLCANIC } from '@/lib/data/images';

const HERO_IMAGE = HERO_VOLCANIC;

const featureImageMap = [
  FEATURE_IMAGES.guides,
  FEATURE_IMAGES.documentation,
  FEATURE_IMAGES.bilingual,
  FEATURE_IMAGES.curated,
  FEATURE_IMAGES.archive,
  FEATURE_IMAGES.navigation,
];

export default function FeaturesPage() {
  const { t, locale } = useApp();
  const cards = t.features.cards;

  return (
    <>
      <PageHero
        eyebrow={t.features.eyebrow}
        title={t.features.title}
        subtitle={t.features.subtitle}
        image={HERO_IMAGE}
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, i) => (
              <Reveal key={i} delay={(i % 3) * 80}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl">
                  {/* Feature image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={featureImageMap[i]}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      priority={i < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    {/* Feature number badge */}
                    <span className="absolute start-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur-md">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {/* Feature kind badge */}
                    <span className="absolute end-3 top-3 rounded-full bg-accent/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground backdrop-blur-md">
                      {locale === 'ar' ? 'ميزة' : 'Feature'}
                    </span>
                  </div>

                  {/* Feature content */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
