'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { useApp } from '@/components/providers/app-provider';
import { allRocks, allMinerals } from '@/lib/data';
import { cn } from '@/lib/utils';

type Result = {
  id: string;
  name: string;
  arabicName: string;
  subtitle: string;
  arabicSubtitle: string;
  href: string;
  kind: 'rock' | 'mineral';
};

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const { locale, t } = useApp();
  const [query, setQuery] = useState('');

  const results = useMemo<Result[]>(() => {
    const all: Result[] = [
      ...allRocks.map((r) => ({
        id: r.id,
        name: r.name,
        arabicName: r.arabicName,
        subtitle: r.subtitle,
        arabicSubtitle: r.arabicSubtitle,
        href: `/rocks/${r.id}`,
        kind: 'rock' as const,
      })),
      ...allMinerals.map((m) => ({
        id: m.id,
        name: m.name,
        arabicName: m.arabicName,
        subtitle: m.subtitle,
        arabicSubtitle: m.arabicSubtitle,
        href: `/minerals/${m.id}`,
        kind: 'mineral' as const,
      })),
    ];
    const q = query.trim().toLowerCase();
    if (!q) return all.slice(0, 6);
    return all
      .filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.arabicName.includes(q) ||
          r.subtitle.toLowerCase().includes(q) ||
          r.arabicSubtitle.includes(q),
      )
      .slice(0, 8);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onOpenChange(false);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-24"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-background/60 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      <div className="relative w-full max-w-xl animate-scale-in rounded-2xl border border-border bg-card shadow-2xl">
        <div className="flex items-center gap-3 border-b border-border px-4 py-3.5">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              locale === 'ar' ? 'ابحث عن صخور ومعادن…' : 'Search rocks & minerals…'
            }
            className="flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
          />
          <button
            type="button"
            aria-label={t.common.close}
            onClick={() => onOpenChange(false)}
            className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <p className="px-3 py-8 text-center text-sm text-muted-foreground">
              {locale === 'ar' ? 'لا توجد نتائج.' : 'No results found.'}
            </p>
          ) : (
            <ul className="flex flex-col gap-1">
              {results.map((r) => (
                <li key={`${r.kind}-${r.id}`}>
                  <Link
                    href={r.href}
                    onClick={() => onOpenChange(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors hover:bg-muted"
                  >
                    <span className="flex flex-col">
                      <span className="text-sm font-medium text-foreground">
                        {locale === 'ar' ? r.arabicName : r.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {locale === 'ar' ? r.arabicSubtitle : r.subtitle}
                      </span>
                    </span>
                    <span
                      className={cn(
                        'rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide',
                        r.kind === 'rock'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-secondary/15 text-secondary-foreground',
                      )}
                    >
                      {r.kind === 'rock'
                        ? locale === 'ar'
                          ? 'صخر'
                          : 'Rock'
                        : locale === 'ar'
                          ? 'معدن'
                          : 'Mineral'}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
