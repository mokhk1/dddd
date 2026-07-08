'use client';

import { Search, X } from 'lucide-react';
import { useApp } from '@/components/providers/app-provider';
import { cn } from '@/lib/utils';

type SearchBarProps = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
};

export function SearchBar({
  value,
  onChange,
  placeholder,
  className,
}: SearchBarProps) {
  const { t } = useApp();
  return (
    <div
      className={cn(
        'group relative flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2.5 shadow-sm transition-all focus-within:border-primary/50 focus-within:shadow-md',
        className,
      )}
    >
      <Search className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-focus-within:text-primary" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? t.rocks.searchPlaceholder}
        className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
        aria-label={t.nav.search}
      />
      {value && (
        <button
          type="button"
          aria-label={t.common.close}
          onClick={() => onChange('')}
          className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}
