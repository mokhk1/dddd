'use client';

import { cn } from '@/lib/utils';

/* ═══════════════════════════ Sakhr — Rock Guide ═══════════════════════════
 * A friendly geological rock character inspired by natural rock formations.
 * Rounded stone body, layered texture, warm expression. Not childish.
 */

export function SakhrMascot({
  className,
  size = 120,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={cn('mascot-float', className)}
      width={size}
      height={size}
      aria-label="Sakhr — rock guide mascot"
      role="img"
    >
      <defs>
        <linearGradient id="sakhr-body" x1="100" y1="40" x2="100" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A78BFA" />
          <stop offset="1" stopColor="#7B61FF" />
        </linearGradient>
        <linearGradient id="sakhr-shine" x1="70" y1="50" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" stopOpacity="0.3" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="sakhr-glow" cx="100" cy="100" r="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7B61FF" stopOpacity="0.12" />
          <stop offset="1" stopColor="#7B61FF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft glow */}
      <circle cx="100" cy="105" r="80" fill="url(#sakhr-glow)" />

      {/* Rock body — organic, rounded shape */}
      <path
        d="M100 38 C130 38 152 55 158 82 C162 100 155 120 145 135 C135 150 120 165 100 168 C80 165 65 150 55 135 C45 120 38 100 42 82 C48 55 70 38 100 38 Z"
        fill="url(#sakhr-body)"
      />

      {/* Rock layer lines */}
      <path d="M52 100 Q100 92 148 100" stroke="#7B61FF" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M58 118 Q100 112 142 118" stroke="#7B61FF" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      <path d="M66 135 Q100 130 134 135" stroke="#7B61FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />

      {/* Shine highlight */}
      <ellipse cx="78" cy="72" rx="22" ry="28" fill="url(#sakhr-shine)" />

      {/* Eyes — friendly, smart */}
      <ellipse cx="82" cy="95" rx="6" ry="7" fill="#1F2937" />
      <ellipse cx="118" cy="95" rx="6" ry="7" fill="#1F2937" />
      <circle cx="84" cy="93" r="2" fill="#FFFFFF" />
      <circle cx="120" cy="93" r="2" fill="#FFFFFF" />

      {/* Smile — subtle, warm */}
      <path d="M88 112 Q100 120 112 112" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Small crystal on top — geological accent */}
      <path d="M100 28 L94 40 L100 38 L106 40 Z" fill="#D4AF37" opacity="0.9" />
      <path d="M100 28 L100 38 L106 40 Z" fill="#D4AF37" />
    </svg>
  );
}

/* ═══════════════════════════ Yaqoot — Crystal Guide ═══════════════════════════
 * An elegant amethyst crystal character. Faceted gem body, lavender gradient,
 * welcoming expression. Not childish.
 */

export function YaqootMascot({
  className,
  size = 120,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={cn('mascot-float-slow', className)}
      width={size}
      height={size}
      aria-label="Yaqoot — crystal guide mascot"
      role="img"
    >
      <defs>
        <linearGradient id="yaqoot-body" x1="100" y1="30" x2="100" y2="175" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C4B5FD" />
          <stop offset="0.5" stopColor="#A78BFA" />
          <stop offset="1" stopColor="#7B61FF" />
        </linearGradient>
        <linearGradient id="yaqoot-facet-l" x1="60" y1="80" x2="100" y2="170" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7B61FF" />
          <stop offset="1" stopColor="#5B3FD6" />
        </linearGradient>
        <linearGradient id="yaqoot-facet-r" x1="140" y1="80" x2="100" y2="170" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A78BFA" />
          <stop offset="1" stopColor="#7B61FF" />
        </linearGradient>
        <linearGradient id="yaqoot-shine" x1="75" y1="45" x2="110" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="yaqoot-glow" cx="100" cy="100" r="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A78BFA" stopOpacity="0.15" />
          <stop offset="1" stopColor="#A78BFA" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft glow */}
      <circle cx="100" cy="105" r="80" fill="url(#yaqoot-glow)" />

      {/* Crystal body — faceted gem shape */}
      {/* Top point */}
      <path d="M100 28 L72 58 L100 50 L128 58 Z" fill="url(#yaqoot-body)" />
      {/* Left facet */}
      <path d="M72 58 L60 100 L80 160 L100 50 Z" fill="url(#yaqoot-facet-l)" />
      {/* Right facet */}
      <path d="M128 58 L140 100 L120 160 L100 50 Z" fill="url(#yaqoot-facet-r)" />
      {/* Center front facet */}
      <path d="M100 50 L80 160 L120 160 Z" fill="url(#yaqoot-body)" />
      {/* Bottom */}
      <path d="M80 160 L100 175 L120 160 Z" fill="#5B3FD6" opacity="0.6" />

      {/* Shine highlight */}
      <path d="M100 50 L80 160 L90 160 L100 50 Z" fill="url(#yaqoot-shine)" />

      {/* Eyes — elegant, welcoming */}
      <ellipse cx="88" cy="100" rx="5.5" ry="6.5" fill="#1F2937" />
      <ellipse cx="112" cy="100" rx="5.5" ry="6.5" fill="#1F2937" />
      <circle cx="89.5" cy="98" r="1.8" fill="#FFFFFF" />
      <circle cx="113.5" cy="98" r="1.8" fill="#FFFFFF" />

      {/* Smile — gentle, warm */}
      <path d="M90 116 Q100 123 110 116" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Gold sparkle accent */}
      <path d="M135 70 L138 76 L144 79 L138 82 L135 88 L132 82 L126 79 L132 76 Z" fill="#D4AF37" opacity="0.8" />
      <path d="M60 130 L62 134 L66 136 L62 138 L60 142 L58 138 L54 136 L58 134 Z" fill="#D4AF37" opacity="0.5" />
    </svg>
  );
}

/* ═══════════════════════════ Mascot with speech bubble ═══════════════════════════ */

export function MascotWithBubble({
  mascot,
  message,
  side = 'right',
  className,
  size = 120,
}: {
  mascot: 'sakhr' | 'yaqoot';
  message: string;
  side?: 'left' | 'right';
  className?: string;
  size?: number;
}) {
  const Mascot = mascot === 'sakhr' ? SakhrMascot : YaqootMascot;
  return (
    <div className={cn('flex items-end gap-3', side === 'left' && 'flex-row-reverse', className)}>
      <Mascot size={size} />
      <div className="speech-bubble max-w-xs rounded-2xl border border-border bg-card px-5 py-3.5 text-sm font-medium text-foreground shadow-sm">
        {message}
      </div>
    </div>
  );
}
