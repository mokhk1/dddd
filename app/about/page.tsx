'use client';

import Image from 'next/image';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { useApp } from '@/components/providers/app-provider';
import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';
import { HERO_MOUNTAIN, ABOUT_FIELDWORK, TEAM_IMAGES } from '@/lib/data/images';

const HERO_IMAGE = HERO_MOUNTAIN;
const STORY_IMAGE = ABOUT_FIELDWORK;

export default function AboutPage() {
  const { t, locale } = useApp();

  const team = [
    {
      name: t.about.teamMember1,
      role: t.about.teamMember1Role,
      linkedin: '#',
      twitter: '#',
      email: 'm.khubrani@dethar.kau.edu.sa',
      image: TEAM_IMAGES.mohammed,
    },
    {
      name: t.about.teamMember2,
      role: t.about.teamMember2Role,
      linkedin: '#',
      twitter: '#',
      email: 'l.hakmi@dethar.kau.edu.sa',
      image: TEAM_IMAGES.layan,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        image={HERO_IMAGE}
      />

      {/* ───────────────────────── Our Story ───────────────────────── */}
      <section className="bg-background py-32 sm:py-40">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative aspect-[5/6] overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src={STORY_IMAGE}
                  alt={t.about.storyTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                <span className="h-px w-8 bg-accent/60" />
                {t.about.eyebrow}
              </span>
              <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {t.about.storyTitle}
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                {t.about.storyBody}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Project Team ───────────────────────── */}
      <section className="bg-muted/30 py-32 sm:py-40">
        <div className="mx-auto max-w-5xl px-6 sm:px-6 lg:px-8">
          {/* Section header */}
          <Reveal className="flex flex-col items-center gap-5 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              <span className="h-px w-8 bg-primary/50" />
              {t.about.teamEyebrow}
              <span className="h-px w-8 bg-primary/50" />
            </span>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {t.about.teamTitle}
            </h2>
            <p className="text-base font-medium text-muted-foreground">
              {t.about.teamSubtitle}
            </p>
          </Reveal>

          {/* Two identical cards — equal weight, no hierarchy */}
          <div className="mt-20 grid gap-8 sm:grid-cols-2 sm:gap-10">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 100}>
                <div className="card-luxury group flex h-full flex-col items-center rounded-[2rem] border border-border bg-card p-9 text-center shadow-sm">
                  {/* Profile image — replace placeholder via TEAM_IMAGES in lib/data/images.ts */}
                  <div className="relative flex h-20 w-20 items-center justify-center">
                    <div
                      className="absolute inset-0 rounded-full opacity-15 blur-2xl transition-opacity duration-700 group-hover:opacity-30"
                      style={{
                        background:
                          i === 0
                            ? 'hsl(var(--primary))'
                            : 'hsl(var(--secondary))',
                      }}
                    />
                    <div
                      className="relative h-20 w-20 overflow-hidden rounded-full border-2 shadow-lg"
                      style={{
                        borderColor:
                          i === 0
                            ? 'hsl(var(--primary) / 0.4)'
                            : 'hsl(var(--secondary) / 0.4)',
                      }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3 className="mt-7 text-xl font-bold tracking-tight text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-muted-foreground">
                    {member.role}
                  </p>

                  {/* Social links — glass cards */}
                  <div className="mt-7 flex items-center gap-3">
                    {[
                      { Icon: Linkedin, href: member.linkedin, label: t.about.teamLinkedIn },
                      { Icon: Twitter, href: member.twitter, label: t.about.teamTwitter },
                      { Icon: Mail, href: `mailto:${member.email}`, label: t.about.teamEmail },
                    ].map(({ Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={`${member.name} — ${label}`}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/50 text-muted-foreground backdrop-blur-md transition-all hover:border-primary/40 hover:text-primary hover:shadow-md"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Collaboration statement */}
          <Reveal delay={200}>
            <div className="mx-auto mt-16 max-w-3xl">
              <div className="rounded-[1.5rem] border border-border bg-card/50 px-8 py-8 text-center shadow-sm sm:px-10 sm:py-10">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {t.about.teamStatement}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
