'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useApp } from '@/components/providers/app-provider';
import { cn } from '@/lib/utils';

export function ThemeToggle({
  className,
  variant = 'solid',
}: {
  className?: string;
  variant?: 'solid' | 'glass';
}) {
  const { theme, setTheme } = useTheme();
  const { t } = useApp();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && theme === 'dark';

  return (
    <button
      type="button"
      aria-label={t.common.theme}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'relative inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all',
        variant === 'glass'
          ? 'border-white/20 bg-white/5 text-white/80 hover:border-white/40 hover:text-white'
          : 'border-border/70 bg-card/60 text-foreground hover:border-primary/40 hover:text-primary',
        className,
      )}
    >
      <Sun
        className={cn(
          'h-4 w-4 transition-all duration-500',
          isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100',
        )}
      />
      <Moon
        className={cn(
          'absolute h-4 w-4 transition-all duration-500',
          isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0',
        )}
      />
    </button>
  );
}
