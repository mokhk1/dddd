'use client';

import { useMemo } from 'react';

/**
 * Floating geological particles — tiny crystal/dust shapes that drift upward
 * with subtle horizontal drift and rotation. Purely decorative.
 */
export function GeoParticles({ count = 18 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 3 + Math.random() * 6,
        duration: 12 + Math.random() * 18,
        delay: Math.random() * 12,
        drift: `${(Math.random() - 0.5) * 80}px`,
        opacity: 0.2 + Math.random() * 0.3,
        shape: Math.random() > 0.5 ? 'diamond' : 'circle',
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            bottom: `-20px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            ['--particle-drift' as string]: p.drift,
            ['--particle-opacity' as string]: p.opacity,
            borderRadius: p.shape === 'circle' ? '50%' : '0',
            transform: p.shape === 'diamond' ? 'rotate(45deg)' : undefined,
            background:
              p.shape === 'diamond'
                ? 'rgba(212, 175, 55, 0.6)'
                : 'rgba(167, 139, 250, 0.4)',
          }}
        />
      ))}
    </div>
  );
}
