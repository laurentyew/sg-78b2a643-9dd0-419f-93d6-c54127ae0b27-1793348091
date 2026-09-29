import type { CommentType, QuizComment } from "./types";
import { TOTAL_ROUNDS } from "./scoring";

export const ROUND_COMPOSITION: { type: CommentType; count: number }[] = [
  { type: "spam", count: 2 },
  { type: "scam_dm", count: 2 },
  { type: "troll", count: 1 },
  { type: "complaint", count: 2 },
  { type: "sarcasm", count: 1 },
  { type: "question", count: 2 },
];

export const MIN_TRAPS = 3;

export type Rng = () => number;

export function shuffle<T>(items: T[], rng: Rng = Math.random): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function ordered(candidates: QuizComment[], seen: Set<string>, rng: Rng) {
  const fresh = shuffle(
    candidates.filter((c) => !seen.has(c.id)),
    rng,
  );
  const already = shuffle(
    candidates.filter((c) => seen.has(c.id)),
    rng,
  );
  return [...fresh, ...already];
}

export function pickRounds(
  pool: QuizComment[],
  seenIds: string[] = [],
  rng: Rng = Math.random,
): QuizComment[] {
  const seen = new Set(seenIds);
  const active = pool.filter((c) => c.body && c.best_action);
  const selected: QuizComment[] = [];
  const usedIds = new Set<string>();

  for (const slot of ROUND_COMPOSITION) {
    const candidates = active.filter((c) => c.type === slot.type);
    const picked = ordered(candidates, seen, rng)
      .filter((c) => !usedIds.has(c.id))
      .slice(0, slot.count);
    for (const item of picked) {
      selected.push(item);
      usedIds.add(item.id);
    }
  }

  if (selected.length < TOTAL_ROUNDS) {
    const filler = ordered(active, seen, rng).filter(
      (c) => !usedIds.has(c.id),
    );
    for (const item of filler) {
      if (selected.length >= TOTAL_ROUNDS) break;
      selected.push(item);
      usedIds.add(item.id);
    }
  }

  const traps = () => selected.filter((c) => c.is_trap);
  if (traps().length < MIN_TRAPS) {
    const spareTraps = ordered(
      active.filter((c) => c.is_trap),
      seen,
      rng,
    ).filter((c) => !usedIds.has(c.id));

    for (const trap of spareTraps) {
      if (traps().length >= MIN_TRAPS) break;
      const replaceable = selected.findIndex(
        (c) => !c.is_trap && c.type === "spam",
      );
      const index =
        replaceable >= 0
          ? replaceable
          : selected.findIndex((c) => !c.is_trap);
      if (index < 0) break;
      usedIds.delete(selected[index].id);
      selected[index] = trap;
      usedIds.add(trap.id);
    }
  }

  return shuffle(selected.slice(0, TOTAL_ROUNDS), rng);
}