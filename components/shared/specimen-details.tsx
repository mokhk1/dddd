'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, MapPin, Layers, Sparkles, Hash } from 'lucide-react';
import { useApp } from '@/components/providers/app-provider';
import { Reveal } from '@/components/shared/reveal';
import { getSpecimenById, getAdjacentSpecimens, type SpecimenKind } from '@/lib/data';

export function SpecimenDetails({
  id,
  kind,
}: {
  id: string;
  kind: SpecimenKind;
}) {
  const result = getSpecimenById(id);
  const { locale, t } = useApp();

  if (!result) notFound();
  const { specimen } = result;
  const backHref = kind === 'rock' ? '/rocks' : '/minerals';

  const name = locale === 'ar' ? specimen.arabicName : specimen.name;
  const description =
    locale === 'ar' ? specimen.arabicDescription : specimen.description;
  const geologicalDescription =
    locale === 'ar'
      ? (specimen.arabicGeologicalDescription ?? specimen.geologicalDescription)
      : specimen.geologicalDescription;
  const gallery = specimen.gallery?.length ? specimen.gallery : [specimen.image];

  const fields: { label: string; value?: string; arabicValue?: string }[] = [
    { label: t.details.fields.type, value: specimen.type, arabicValue: specimen.arabicType },
    { label: t.details.fields.texture, value: specimen.texture, arabicValue: specimen.arabicTexture },
    { label: t.details.fields.mineralogy, value: specimen.mineralogy, arabicValue: specimen.arabicMineralogy },
    { label: t.details.fields.formation, value: specimen.formation, arabicValue: specimen.arabicFormation },
    { label: t.details.fields.color, value: specimen.color, arabicValue: specimen.arabicColor },
    { label: t.details.fields.environment, value: specimen.environment, arabicValue: specimen.arabicEnvironment },
    { label: t.details.fields.uses, value: specimen.uses, arabicValue: specimen.arabicUses },
    { label: t.details.fields.location, value: specimen.location, arabicValue: specimen.arabicLocation },
    { label: t.details.fields.hardness, value: specimen.hardness },
    { label: t.details.fields.luster, value: specimen.luster, arabicValue: specimen.arabicLuster },
    { label: t.details.fields.crystalSystem, value: specimen.crystalSystem, arabicValue: specimen.arabicCrystalSystem },
    { label: t.details.fields.streak, value: specimen.streak, arabicValue: specimen.arabicStreak },
  ].filter((f) => f.value || f.arabicValue);

  return (
    <article className="bg-background pt-20">
      {/* Breadcrumb */}
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Link
          href={backHref}
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5 rtl:rotate-180 rtl:group-hover:translate-x-0.5" />
          {t.details.back}
        </Link>
      </section>

      {/* Hero specimen image */}
      <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-xl sm:aspect-[16/8]">
            <Image
              src={specimen.image}
              alt={name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 start-0 end-0 p-6 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur-md">
                  <Hash className="h-3 w-3" />
                  {specimen.museumNumber}
                </span>
                <span className="inline-flex items-center rounded-full bg-secondary/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-foreground backdrop-blur-md">
                  {kind === 'rock' ? (locale === 'ar' ? 'صخر' : 'Rock') : locale === 'ar' ? 'معدن' : 'Mineral'}
                </span>
              </div>
              <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {name}
              </h1>
              <p
                className="mt-1.5 text-lg font-medium text-white/70"
                dir={locale === 'ar' ? 'ltr' : 'rtl'}
              >
                {locale === 'ar' ? specimen.name : specimen.arabicName}
              </p>
              <p className="mt-2 text-base text-white/80">
                {locale === 'ar' ? specimen.arabicSubtitle : specimen.subtitle}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Description + geological context */}
          <Reveal className="lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {locale === 'ar' ? 'الوصف' : 'Description'}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {description}
            </p>

            {geologicalDescription && (
              <>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-foreground">
                  {locale === 'ar' ? 'السياق الجيولوجي' : 'Geological Context'}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {geologicalDescription}
                </p>
              </>
            )}

            {/* Location & Formation cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {t.details.fields.location}
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {locale === 'ar' ? specimen.arabicLocation : specimen.location}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
                <Layers className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {t.details.fields.formation}
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {locale === 'ar' ? specimen.arabicFormation : specimen.formation}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Scientific data table — museum archive style */}
          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent" />
                <h2 className="text-base font-semibold text-foreground">
                  {t.details.information}
                </h2>
              </div>
              <dl className="mt-5 flex flex-col divide-y divide-border">
                {fields.map((f) => (
                  <div key={f.label} className="flex flex-col gap-0.5 py-3">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {f.label}
                    </dt>
                    <dd className="text-sm font-medium text-foreground">
                      {locale === 'ar' ? f.arabicValue ?? f.value : f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        {/* Gallery */}
        {gallery.length > 1 && (
          <Reveal className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {t.details.gallery}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((img, i) => (
                <div
                  key={i}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-sm"
                >
                  <Image
                    src={img}
                    alt={`${name} ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </section>

      {/* Previous / Next specimen navigation */}
      {(() => {
        const { prev, next } = getAdjacentSpecimens(id, kind);
        if (!prev && !next) return null;
        const prevHref = prev
          ? `${kind === 'rock' ? '/rocks' : '/minerals'}/${prev.id}`
          : null;
        const nextHref = next
          ? `${kind === 'rock' ? '/rocks' : '/minerals'}/${next.id}`
          : null;
        const prevName = prev
          ? locale === 'ar'
            ? prev.arabicName
            : prev.name
          : '';
        const nextName = next
          ? locale === 'ar'
            ? next.arabicName
            : next.name
          : '';

        return (
          <section className="border-t border-border bg-card/50">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {prev ? (
                  <Link
                    href={prevHref!}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md"
                  >
                    <ArrowLeft className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary rtl:rotate-180" />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {t.details.previous}
                      </p>
                      <p className="mt-0.5 truncate text-sm font-medium text-foreground">
                        {prevName}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link
                    href={nextHref!}
                    className="group flex items-center justify-end gap-4 rounded-2xl border border-border bg-card p-5 text-right transition-all hover:border-primary/40 hover:shadow-md"
                  >
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {t.details.next}
                      </p>
                      <p className="mt-0.5 truncate text-sm font-medium text-foreground">
                        {nextName}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary rtl:-rotate-180" />
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </section>
        );
      })()}
    </article>
  );
}
