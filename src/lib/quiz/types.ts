export type CommentType =
  | "spam"
  | "scam_dm"
  | "troll"
  | "complaint"
  | "sarcasm"
  | "question";

export type ModAction = "keep" | "hide" | "reply" | "ban";

export type Platform = "instagram" | "youtube" | "facebook";

export type CommentKind = "comment" | "dm";

export interface QuizComment {
  id: string;
  platform: Platform;
  kind: CommentKind;
  type: CommentType;
  author_handle: string;
  body: string;
  best_action: ModAction;
  alt_action: ModAction | null;
  reason: string;
  is_trap: boolean;
  difficulty: number;
}

export interface PublicRound {
  id: string;
  platform: Platform;
  kind: CommentKind;
  authorHandle: string;
  body: string;
}

export interface RankInfo {
  key: string;
  title: string;
}

export interface TypeBreakdownRow {
  type: CommentType;
  correct: number;
  total: number;
}

export interface MissedRoundRow {
  body: string;
  yourAction: ModAction | null;
  bestAction: ModAction;
  reason: string;
}

export interface ScoredAnswer {
  commentId: string;
  action: ModAction | null;
  ms: number;
  correct: boolean;
}

export const ACTION_LABELS: Record<ModAction, string> = {
  keep: "Keep",
  hide: "Hide",
  reply: "Reply",
  ban: "Ban",
};

export const TYPE_LABELS: Record<CommentType, string> = {
  spam: "Spam comments",
  scam_dm: "Scam DMs",
  troll: "Trolls",
  complaint: "Real complaints",
  sarcasm: "Sarcasm",
  question: "Questions",
};