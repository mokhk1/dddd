'use client';

import { useApp } from '@/components/providers/app-provider';
import { SakhrMascot, YaqootMascot } from '@/components/shared/mascot';
import { Reveal } from '@/components/shared/reveal';
import { cn } from '@/lib/utils';

type MascotIntroProps = {
  mascot: 'sakhr' | 'yaqoot';
  className?: string;
};

export function MascotIntro({ mascot, className }: MascotIntroProps) {
  const { t, locale } = useApp();
  const isSakhr = mascot === 'sakhr';
  const Mascot = isSakhr ? SakhrMascot : YaqootMascot;
  const name = isSakhr ? t.home.sakhrName : t.home.yaqootName;
  const role = isSakhr ? t.home.sakhrRole : t.home.yaqootRole;
  const welcome = isSakhr ? t.home.sakhrWelcome : t.home.yaqootWelcome;

  return (
    <Reveal className={cn('mb-20 sm:mb-24', className)}>
      <div
        className={cn(
          'relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-sm sm:p-10',
        )}
      >
        {/* Subtle brand glow */}
        <div
          className={cn(
            'pointer-events-none absolute -top-20 h-48 w-48 rounded-full blur-3xl',
            isSakhr
              ? 'left-6 bg-primary/8'
              : 'right-6 bg-secondary/10',
          )}
        />

        <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
          {/* Mascot */}
          <div className="flex shrink-0 flex-col items-center gap-3">
            <Mascot size={120} />
            <div className="text-center">
              <p className="text-base font-bold tracking-tight text-foreground">
                {name}
              </p>
              <p
                className={cn(
                  'text-xs font-semibold uppercase tracking-[0.15em]',
                  isSakhr ? 'text-primary' : 'text-secondary-foreground',
                )}
              >
                {role}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden h-20 w-px bg-border sm:block" />

          {/* Speech bubble / welcome message */}
          <div className="relative flex-1">
            <div
              className={cn(
                'speech-bubble-side rounded-2xl border border-border bg-background/50 px-7 py-5 text-base leading-relaxed text-foreground backdrop-blur-sm',
              )}
            >
              {welcome}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
