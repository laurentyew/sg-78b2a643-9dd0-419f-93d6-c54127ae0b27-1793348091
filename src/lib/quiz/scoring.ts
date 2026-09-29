import type {
  ModAction,
  RankInfo,
  ScoredAnswer,
  TypeBreakdownRow,
} from "./types";

export const TIME_LIMIT_MS = 6000;
export const TIMEOUT_MS = 6000;
export const MIN_MS = 200;
export const TOTAL_ROUNDS = 10;

export const RANKS: { max: number; key: string; title: string }[] = [
  { max: 3, key: "rookie", title: "Rookie Moderator" },
  { max: 5, key: "weekend", title: "Weekend Mod" },
  { max: 7, key: "cop", title: "Comment Cop" },
  { max: 9, key: "hammer", title: "Ban Hammer" },
  { max: 10, key: "legend", title: "Ban Hammer Legend" },
];

export function clampMs(ms: number): number {
  if (!Number.isFinite(ms)) return TIMEOUT_MS;
  const rounded = Math.round(ms);
  if (rounded < MIN_MS) return MIN_MS;
  if (rounded > TIME_LIMIT_MS) return TIME_LIMIT_MS;
  return rounded;
}

export function isCorrect(
  action: ModAction | null,
  bestAction: ModAction,
  altAction: ModAction | null,
): boolean {
  if (action === null) return false;
  return action === bestAction || (altAction !== null && action === altAction);
}

export function rankFor(score: number): RankInfo {
  const safe = Math.max(0, Math.min(TOTAL_ROUNDS, Math.round(score)));
  const row = RANKS.find((r) => safe <= r.max) ?? RANKS[RANKS.length - 1];
  return { key: row.key, title: row.title };
}

export function scorePlay(answers: ScoredAnswer[]): {
  score: number;
  totalMs: number;
} {
  let score = 0;
  let totalMs = 0;
  for (const answer of answers) {
    if (answer.correct) score += 1;
    totalMs += clampMs(answer.ms);
  }
  return { score, totalMs };
}

export function buildBreakdown(
  answers: (ScoredAnswer & { type: TypeBreakdownRow["type"] })[],
): TypeBreakdownRow[] {
  const map = new Map<TypeBreakdownRow["type"], TypeBreakdownRow>();
  for (const answer of answers) {
    const row = map.get(answer.type) ?? {
      type: answer.type,
      correct: 0,
      total: 0,
    };
    row.total += 1;
    if (answer.correct) row.correct += 1;
    map.set(answer.type, row);
  }
  return Array.from(map.values()).sort((a, b) => a.type.localeCompare(b.type));
}

export function formatSeconds(totalMs: number): string {
  return (totalMs / 1000).toFixed(0) + "s";
}