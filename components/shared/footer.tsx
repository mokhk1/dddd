'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { useApp } from '@/components/providers/app-provider';
import { LangSwitch } from './lang-switch';
import { LogoMark } from './logo';

export function Footer() {
  const { t, locale } = useApp();
  const year = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/faculty', label: t.nav.faculty },
    { href: '/contact', label: t.nav.contact },
  ];
  const collectionLinks = [
    { href: '/rocks', label: t.nav.rocks },
    { href: '/minerals', label: t.nav.minerals },
    { href: '/features', label: t.nav.features },
  ];

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="group flex items-center gap-2.5">
              <LogoMark className="h-10 w-10 transition-transform group-hover:scale-105" />
              <span className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-tight text-foreground">
                  DETHAR
                </span>
                <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {locale === 'ar' ? 'متحف جيولوجي رقمي' : 'Geological Museum'}
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-all hover:border-accent/40 hover:text-accent hover:shadow-sm"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {t.footer.quickLinks}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-foreground/75 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collection */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {t.footer.collection}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {collectionLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-foreground/75 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {t.contact.info}
            </h3>
            <ul className="mt-5 flex flex-col gap-3.5 text-sm text-foreground/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{t.contact.location}</span>
              </li>
              <li className="flex items-center gap-2.5" dir="ltr">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <span>museum@dethar.kau.edu.sa</span>
              </li>
              <li className="flex items-center gap-2.5" dir="ltr">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <span>+966 12 695 2000</span>
              </li>
            </ul>
            <div className="mt-6">
              <LangSwitch />
            </div>
          </div>
        </div>

        {/* Team credits — equal weight, no hierarchy */}
        <div className="mt-16 border-t border-border pt-10">
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {locale === 'ar' ? 'صُمم وطُوّر بواسطة' : 'Designed & Developed by'}
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-5">
            <span className="text-sm font-semibold text-foreground">
              {locale === 'ar' ? 'محمد خبراني' : 'Mohammed Khubrani'}
            </span>
            <span className="hidden text-accent sm:inline">&middot;</span>
            <span className="text-sm font-semibold text-foreground">
              {locale === 'ar' ? 'ليان حكمي' : 'Layan Hakmi'}
            </span>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            {locale === 'ar'
              ? 'كلية علوم الأرض · جامعة الملك عبدالعزيز'
              : 'Faculty of Earth Sciences · King Abdulaziz University'}
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center sm:flex-row sm:text-start">
          <p className="text-xs text-muted-foreground">
            © {year} {t.footer.madeWith}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
