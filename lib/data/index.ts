import { rocks } from './rocks';
import { minerals } from './minerals';
import type { Specimen } from './rocks';

export type { Specimen } from './rocks';

export const allRocks = rocks;
export const allMinerals = minerals;

export type SpecimenKind = 'rock' | 'mineral';

export function getSpecimenById(
  id: string,
): { kind: SpecimenKind; specimen: Specimen } | null {
  const rock = rocks.find((r) => r.id === id);
  if (rock) return { kind: 'rock', specimen: rock };
  const mineral = minerals.find((m) => m.id === id);
  if (mineral) return { kind: 'mineral', specimen: mineral };
  return null;
}

export function searchSpecimens(
  list: Specimen[],
  query: string,
): Specimen[] {
  const q = query.trim().toLowerCase();
  if (!q) return list;
  return list.filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      s.arabicName.includes(q) ||
      s.subtitle.toLowerCase().includes(q) ||
      s.arabicSubtitle.includes(q) ||
      s.type.toLowerCase().includes(q) ||
      s.location.toLowerCase().includes(q),
  );
}

export function featuredByTag(tag: string): Specimen[] {
  return [...rocks, ...minerals].filter((s) => s.tags?.includes(tag));
}

export function allFeatured(): Specimen[] {
  return [...rocks, ...minerals].filter((s) =>
    s.tags?.some((t) =>
      ['highlights', 'rare', 'saudi', 'newest', 'picks'].includes(t),
    ),
  );
}

export function getAdjacentSpecimens(
  id: string,
  kind: SpecimenKind,
): { prev: Specimen | null; next: Specimen | null } {
  const list = kind === 'rock' ? rocks : minerals;
  const index = list.findIndex((s) => s.id === id);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? list[index - 1] : null,
    next: index < list.length - 1 ? list[index + 1] : null,
  };
}
