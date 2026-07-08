'use client';

import Image from 'next/image';
import { Building2, Compass, Microscope, History, FlaskConical } from 'lucide-react';
import { useApp } from '@/components/providers/app-provider';
import { PageHero } from '@/components/shared/page-hero';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';

import { HERO_COASTAL_ROCKS, FACULTY_CAMPUS, FACULTY_GALLERY } from '@/lib/data/images';

const HERO_IMAGE = HERO_COASTAL_ROCKS;
const CAMPUS_IMAGE = FACULTY_CAMPUS;
const GALLERY = FACULTY_GALLERY;

export default function FacultyPage() {
  const { t, locale } = useApp();

  return (
    <>
      <PageHero
        eyebrow={t.faculty.eyebrow}
        title={t.faculty.title}
        subtitle={t.faculty.intro}
        image={HERO_IMAGE}
      />

      {/* Intro + campus */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                <span className="h-px w-8 bg-accent/60" />
                {t.faculty.eyebrow}
              </span>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t.faculty.campusTitle}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {t.faculty.campusBody}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={CAMPUS_IMAGE}
                  alt={t.faculty.campusTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.faculty.departmentsTitle} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.faculty.departments.map((dept, i) => (
              <Reveal key={dept.name} delay={(i % 3) * 80}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <FlaskConical className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {dept.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {dept.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / History */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { icon: Compass, title: t.faculty.missionTitle, body: t.faculty.missionBody },
              { icon: Microscope, title: t.faculty.visionTitle, body: t.faculty.visionBody },
              { icon: History, title: t.faculty.historyTitle, body: t.faculty.historyBody },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/15 text-secondary-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.faculty.galleryTitle} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((img, i) => (
              <Reveal key={i} delay={(i % 4) * 80}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border shadow-sm">
                  <Image
                    src={img}
                    alt={`${t.faculty.galleryTitle} ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
