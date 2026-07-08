import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  iconClassName?: string;
  showText?: boolean;
};

/**
 * DETHAR logo — a geometric mark inspired by geological strata and crystal facets.
 * Three stacked layers (sediment) rise into a faceted crystal apex, rendered in
 * the museum's lavender-to-gold gradient.
 */
export function Logo({ className, iconClassName, showText = true }: LogoProps) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <LogoMark className={iconClassName} />
      {showText && <LogoText />}
    </span>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={cn('h-9 w-9', className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dethar-grad" x1="0" y1="40" x2="40" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7B61FF" />
          <stop offset="0.55" stopColor="#A78BFA" />
          <stop offset="1" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      {/* Geological strata layers */}
      <path d="M4 30 L12 30 L12 34 L4 34 Z" fill="url(#dethar-grad)" opacity="0.35" />
      <path d="M14 26 L26 26 L26 34 L14 34 Z" fill="url(#dethar-grad)" opacity="0.55" />
      <path d="M28 22 L36 22 L36 34 L28 34 Z" fill="url(#dethar-grad)" opacity="0.75" />
      {/* Crystal apex rising from the layers */}
      <path
        d="M20 4 L14 22 L20 18 L26 22 Z"
        fill="url(#dethar-grad)"
      />
      <path
        d="M20 4 L20 18 L26 22 Z"
        fill="url(#dethar-grad)"
        opacity="0.7"
      />
    </svg>
  );
}

export function LogoText() {
  return (
    <span className="flex flex-col leading-none">
      <span className="text-base font-bold tracking-tight text-foreground">
        DETHAR
      </span>
      <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        Geological Museum
      </span>
    </span>
  );
}
