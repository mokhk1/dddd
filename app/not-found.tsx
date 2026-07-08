'use client';

import Link from 'next/link';
import { Mountain, ArrowLeft } from 'lucide-react';
import { useApp } from '@/components/providers/app-provider';

export default function NotFound() {
  const { t, locale } = useApp();
  return (
    <section className="flex min-h-screen items-center justify-center bg-background px-4 pt-16">
      <div className="flex flex-col items-center gap-6 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <Mountain className="h-7 w-7" />
        </span>
        <p className="text-6xl font-bold tracking-tight text-primary">404</p>
        <h1 className="text-2xl font-semibold text-foreground">
          {t.details.specimenNotFound}
        </h1>
        <p className="max-w-md text-muted-foreground">
          {t.details.specimenNotFoundDesc}
        </p>
        <Link
          href="/rocks"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-110"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5 rtl:rotate-180 rtl:group-hover:translate-x-0.5" />
          {t.details.browseCollection}
        </Link>
      </div>
    </section>
  );
}
