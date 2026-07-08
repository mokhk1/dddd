'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, Search, X } from 'lucide-react';
import { useApp } from '@/components/providers/app-provider';
import { ThemeToggle } from './theme-toggle';
import { LangSwitch } from './lang-switch';
import { Logo, LogoMark } from './logo';
import { cn } from '@/lib/utils';
import { SearchDialog } from './search-dialog';

export function Header() {
  const { t, locale } = useApp();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/rocks', label: t.nav.rocks },
    { href: '/minerals', label: t.nav.minerals },
    { href: '/featured', label: t.nav.featured },
    { href: '/faculty', label: t.nav.faculty },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'border-b border-border/60 bg-background/80 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.12)] backdrop-blur-xl'
            : 'border-b border-white/10 bg-black/20 backdrop-blur-md',
        )}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="DETHAR"
          >
            <LogoMark className="h-10 w-10 transition-transform duration-300 group-hover:scale-105" />
            <span className="flex flex-col leading-none">
              <span
                className={cn(
                  'text-base font-bold tracking-tight transition-colors',
                  scrolled ? 'text-foreground' : 'text-white',
                )}
              >
                DETHAR
              </span>
              <span
                className={cn(
                  'mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] transition-colors',
                  scrolled ? 'text-muted-foreground' : 'text-white/60',
                )}
              >
                {locale === 'ar' ? 'متحف جيولوجي رقمي' : 'Geological Museum'}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    scrolled
                      ? active
                        ? 'text-primary'
                        : 'text-foreground/70 hover:text-foreground'
                      : active
                        ? 'text-accent'
                        : 'text-white/70 hover:text-white',
                  )}
                >
                  {l.label}
                  {active && (
                    <span
                      className={cn(
                        'absolute inset-x-4 -bottom-0.5 h-px',
                        scrolled ? 'bg-primary/60' : 'bg-accent/70',
                      )}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={t.nav.search}
              onClick={() => setSearchOpen(true)}
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all',
                scrolled
                  ? 'border-border/70 bg-card/60 text-foreground hover:border-primary/40 hover:text-primary'
                  : 'border-white/20 bg-white/5 text-white/80 hover:border-white/40 hover:text-white',
              )}
            >
              <Search className="h-4 w-4" />
            </button>
            <LangSwitch
              className="hidden sm:inline-flex"
              variant={scrolled ? 'solid' : 'glass'}
            />
            <ThemeToggle variant={scrolled ? 'solid' : 'glass'} />
            <button
              type="button"
              aria-label={t.common.menu}
              onClick={() => setOpen((p) => !p)}
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all lg:hidden',
                scrolled
                  ? 'border-border/70 bg-card/60 text-foreground hover:border-primary/40 hover:text-primary'
                  : 'border-white/20 bg-white/5 text-white/80 hover:border-white/40 hover:text-white',
              )}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            'overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden',
            open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0',
          )}
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    'rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                    active
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/80 hover:bg-muted',
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
            <div className="mt-2 px-2">
              <LangSwitch className="w-full justify-center" variant="solid" />
            </div>
          </nav>
        </div>
      </header>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
