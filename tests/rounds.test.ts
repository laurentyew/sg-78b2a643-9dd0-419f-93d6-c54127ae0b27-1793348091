import { describe, expect, it } from "vitest";
import {
  MIN_TRAPS,
  pickRounds,
  ROUND_COMPOSITION,
  type Rng,
} from "../src/lib/quiz/rounds";
import { TOTAL_ROUNDS } from "../src/lib/quiz/scoring";
import type {
  CommentType,
  ModAction,
  QuizComment,
} from "../src/lib/quiz/types";

const COUNTS: Record<CommentType, number> = {
  spam: 8,
  scam_dm: 8,
  troll: 5,
  complaint: 8,
  sarcasm: 5,
  question: 6,
};

const BEST: Record<CommentType, ModAction> = {
  spam: "hide",
  scam_dm: "ban",
  troll: "hide",
  complaint: "reply",
  sarcasm: "keep",
  question: "reply",
};

const TRAP_TYPES = new Set<CommentType>(["complaint", "sarcasm"]);

function makePool(): QuizComment[] {
  const pool: QuizComment[] = [];
  (Object.keys(COUNTS) as CommentType[]).forEach((type) => {
    for (let i = 0; i < COUNTS[type]; i += 1) {
      pool.push({
        id: type + "-" + i,
        platform: "instagram",
        kind: type === "scam_dm" ? "dm" : "comment",
        type,
        author_handle: "@" + type + ".user" + i,
        body: "Sample body for " + type + " number " + i,
        best_action: BEST[type],
        alt_action: type === "spam" ? "ban" : null,
        reason: "Because the spec says so.",
        is_trap: TRAP_TYPES.has(type) || (type === "question" && i === 0),
        difficulty: 1,
      });
    }
  });
  return pool;
}

function rngFrom(seed: number): Rng {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

describe("pickRounds", () => {
  it("returns exactly ten rounds", () => {
    expect(pickRounds(makePool(), [], rngFrom(7))).toHaveLength(TOTAL_ROUNDS);
  });

  it("matches the spec composition", () => {
    const rounds = pickRounds(makePool(), [], rngFrom(42));
    for (const slot of ROUND_COMPOSITION) {
      const count = rounds.filter((r) => r.type === slot.type).length;
      expect(count).toBe(slot.count);
    }
  });

  it("includes at least three trap rounds", () => {
    const rounds = pickRounds(makePool(), [], rngFrom(99));
    expect(rounds.filter((r) => r.is_trap).length).toBeGreaterThanOrEqual(
      MIN_TRAPS,
    );
  });

  it("never repeats a comment within a game", () => {
    const rounds = pickRounds(makePool(), [], rngFrom(1234));
    expect(new Set(rounds.map((r) => r.id)).size).toBe(TOTAL_ROUNDS);
  });

  it("holds the composition across many seeds", () => {
    for (let seed = 1; seed <= 50; seed += 1) {
      const rounds = pickRounds(makePool(), [], rngFrom(seed));
      expect(rounds).toHaveLength(TOTAL_ROUNDS);
      for (const slot of ROUND_COMPOSITION) {
        const count = rounds.filter((r) => r.type === slot.type).length;
        expect(count, "seed " + seed + " type " + slot.type).toBe(slot.count);
      }
    }
  });
});