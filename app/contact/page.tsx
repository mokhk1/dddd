'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useApp } from '@/components/providers/app-provider';
import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';

import { CONTACT_COAST } from '@/lib/data/images';

const HERO_IMAGE = CONTACT_COAST;

export default function ContactPage() {
  const { t } = useApp();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  const info = [
    { icon: Mail, label: t.contact.emailLabel, value: 'museum@dethar.kau.edu.sa', dir: 'ltr' },
    { icon: Phone, label: t.contact.phoneLabel, value: '+966 12 695 2000', dir: 'ltr' },
    { icon: MapPin, label: t.contact.locationLabel, value: t.contact.location, dir: undefined },
    { icon: Clock, label: t.contact.hoursLabel, value: t.contact.hours, dir: undefined },
  ];

  return (
    <>
      <PageHero
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        image={HERO_IMAGE}
      />

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Form */}
            <Reveal>
              <form
                onSubmit={onSubmit}
                className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      {t.contact.name}
                    </label>
                    <input
                      id="name"
                      required
                      className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      {t.contact.email}
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      dir="ltr"
                      className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    {t.contact.subject}
                  </label>
                  <input
                    id="subject"
                    required
                    className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="resize-none rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className="ripple group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-110 disabled:opacity-70"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" />
                      {t.contact.sending}
                    </>
                  ) : status === 'sent' ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      {t.contact.success}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {t.contact.send}
                    </>
                  )}
                </button>
              </form>
            </Reveal>

            {/* Info + map */}
            <Reveal delay={120}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {info.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </p>
                      <p
                        className="mt-1 text-sm font-medium text-foreground"
                        dir={item.dir as 'ltr' | 'rtl' | undefined}
                      >
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-muted/40">
                    <MapPin className="h-10 w-10 text-primary" />
                    <p className="text-sm font-medium text-foreground">
                      {t.contact.location}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      21.4881° N, 39.1861° E
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {t.contact.follow}
                  </h3>
                  <div className="mt-3 flex gap-2">
                    {['Twitter', 'Instagram', 'Facebook', 'YouTube'].map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground/70 transition-all hover:border-primary/40 hover:text-primary"
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
