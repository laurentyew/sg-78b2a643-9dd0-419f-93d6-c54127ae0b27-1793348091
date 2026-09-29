import { describe, expect, it } from "vitest";
import {
  buildBreakdown,
  clampMs,
  isCorrect,
  rankFor,
  scorePlay,
  MIN_MS,
  TIME_LIMIT_MS,
} from "../src/lib/quiz/scoring";
import type { ScoredAnswer } from "../src/lib/quiz/types";

describe("isCorrect", () => {
  it("accepts the best action", () => {
    expect(isCorrect("hide", "hide", "ban")).toBe(true);
  });

  it("accepts the alternate action", () => {
    expect(isCorrect("ban", "hide", "ban")).toBe(true);
  });

  it("rejects a wrong action", () => {
    expect(isCorrect("keep", "hide", "ban")).toBe(false);
  });

  it("treats a timeout as wrong", () => {
    expect(isCorrect(null, "hide", "ban")).toBe(false);
  });

  it("rejects the alternate when none is defined", () => {
    expect(isCorrect("ban", "reply", null)).toBe(false);
  });
});

describe("clampMs", () => {
  it("clamps below the 200ms floor", () => {
    expect(clampMs(12)).toBe(MIN_MS);
  });

  it("clamps above the 6000ms ceiling", () => {
    expect(clampMs(90000)).toBe(TIME_LIMIT_MS);
  });

  it("passes through an in-range value", () => {
    expect(clampMs(3120)).toBe(3120);
  });

  it("treats a non-finite value as a timeout", () => {
    expect(clampMs(Number.NaN)).toBe(TIME_LIMIT_MS);
  });
});

describe("scorePlay", () => {
  it("counts correct answers and sums clamped time", () => {
    const answers: ScoredAnswer[] = [
      { commentId: "a", action: "hide", ms: 100, correct: true },
      { commentId: "b", action: null, ms: 6000, correct: false },
      { commentId: "c", action: "reply", ms: 9000, correct: true },
    ];
    expect(scorePlay(answers)).toEqual({
      score: 2,
      totalMs: 200 + 6000 + 6000,
    });
  });

  it("returns zero for an empty play", () => {
    expect(scorePlay([])).toEqual({ score: 0, totalMs: 0 });
  });
});

describe("rankFor", () => {
  it("maps each score band to the spec title", () => {
    expect(rankFor(0)).toEqual({ key: "rookie", title: "Rookie Moderator" });
    expect(rankFor(3)).toEqual({ key: "rookie", title: "Rookie Moderator" });
    expect(rankFor(4)).toEqual({ key: "weekend", title: "Weekend Mod" });
    expect(rankFor(5)).toEqual({ key: "weekend", title: "Weekend Mod" });
    expect(rankFor(6)).toEqual({ key: "cop", title: "Comment Cop" });
    expect(rankFor(7)).toEqual({ key: "cop", title: "Comment Cop" });
    expect(rankFor(8)).toEqual({ key: "hammer", title: "Ban Hammer" });
    expect(rankFor(9)).toEqual({ key: "hammer", title: "Ban Hammer" });
    expect(rankFor(10)).toEqual({ key: "legend", title: "Ban Hammer Legend" });
  });
});

describe("buildBreakdown", () => {
  it("groups answers per type and sorts them", () => {
    const rows = buildBreakdown([
      { commentId: "a", action: "hide", ms: 1000, correct: true, type: "spam" },
      { commentId: "b", action: "keep", ms: 1000, correct: false, type: "spam" },
      { commentId: "c", action: "reply", ms: 1000, correct: true, type: "question" },
    ]);
    expect(rows).toEqual([
      { type: "question", correct: 1, total: 1 },
      { type: "spam", correct: 1, total: 2 },
    ]);
  });
});