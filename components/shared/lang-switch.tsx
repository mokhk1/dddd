'use client';

import { Languages } from 'lucide-react';
import { useApp } from '@/components/providers/app-provider';
import { cn } from '@/lib/utils';

export function LangSwitch({
  className,
  variant = 'solid',
}: {
  className?: string;
  variant?: 'solid' | 'glass';
}) {
  const { toggleLocale, t } = useApp();
  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label="Switch language"
      className={cn(
        'inline-flex h-9 items-center gap-1.5 rounded-full border px-3 text-sm font-medium transition-all',
        variant === 'glass'
          ? 'border-white/20 bg-white/5 text-white/80 hover:border-white/40 hover:text-white'
          : 'border-border/70 bg-card/60 text-foreground hover:border-primary/40 hover:text-primary',
        className,
      )}
    >
      <Languages className="h-4 w-4" />
      <span>{t.common.language}</span>
    </button>
  );
}
