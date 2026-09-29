import { useCallback, useEffect, useReducer, useRef } from "react";
import { Loader2, Play, RotateCcw } from "lucide-react";
import { CommentCard } from "./CommentCard";
import { ActionBar, ACTION_SHORTCUTS } from "./ActionBar";
import { TimerBar } from "./TimerBar";
import { FeedbackPanel } from "./FeedbackPanel";
import { ResultCard, type GameResult } from "./ResultCard";
import { EmailGate } from "./EmailGate";
import { BreakdownTable, type BreakdownResponse } from "./BreakdownTable";
import { ReferralBox } from "./ReferralBox";
import { track } from "@/lib/quiz/track";
import type { ModAction, PublicRound } from "@/lib/quiz/types";

const SESSION_KEY = "socialKirinQuizSessionId";
const REF_KEY = "socialKirinQuizRef";
const UTM_KEY = "socialKirinQuizUtm";
const TIMEOUT_MS = 6000;
const REVEAL_MS = 1500;

interface Feedback {
  correct: boolean;
  bestAction: ModAction;
  reason: string;
  isTrap: boolean;
}

type Phase =
  | "idle"
  | "loading"
  | "playing"
  | "revealing"
  | "finishing"
  | "result"
  | "error";

interface State {
  phase: Phase;
  playId: string | null;
  rounds: PublicRound[];
  timeLimitMs: number;
  index: number;
  feedback: Feedback | null;
  result: GameResult | null;
  breakdown: BreakdownResponse | null;
  referralUrl: string | null;
  unlocked: boolean;
  error: string | null;
}

type Action =
  | { type: "loading" }
  | { type: "started"; playId: string; rounds: PublicRound[]; timeLimitMs: number }
  | { type: "answered"; feedback: Feedback }
  | { type: "advance" }
  | { type: "finishing" }
  | { type: "finished"; result: GameResult }
  | { type: "unlocked"; referralUrl: string }
  | { type: "breakdown"; breakdown: BreakdownResponse }
  | { type: "error"; error: string };

const initialState: State = {
  phase: "idle",
  playId: null,
  rounds: [],
  timeLimitMs: TIMEOUT_MS,
  index: 0,
  feedback: null,
  result: null,
  breakdown: null,
  referralUrl: null,
  unlocked: false,
  error: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "loading":
      return { ...state, phase: "loading", error: null };
    case "started":
      return {
        ...initialState,
        phase: "playing",
        playId: action.playId,
        rounds: action.rounds,
        timeLimitMs: action.timeLimitMs,
      };
    case "answered":
      return { ...state, phase: "revealing", feedback: action.feedback };
    case "advance":
      return {
        ...state,
        phase: "playing",
        index: state.index + 1,
        feedback: null,
      };
    case "finishing":
      return { ...state, phase: "finishing", feedback: null };
    case "finished":
      return { ...state, phase: "result", result: action.result };
    case "unlocked":
      return { ...state, unlocked: true, referralUrl: action.referralUrl };
    case "breakdown":
      return { ...state, breakdown: action.breakdown };
    case "error":
      return { ...state, phase: "error", error: action.error };
    default:
      return state;
  }
}

function sessionId(): string {
  try {
    const existing = window.localStorage.getItem(SESSION_KEY);
    if (existing) return existing;
    const created =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : "00000000-0000-4000-8000-" + Date.now().toString(16).slice(-12);
    window.localStorage.setItem(SESSION_KEY, created);
    return created;
  } catch {
    return "00000000-0000-4000-8000-000000000000";
  }
}

export function Game() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const stateRef = useRef(state);
  stateRef.current = state;

  const roundStartRef = useRef(0);
  const sessionRef = useRef("");
  const refCodeRef = useRef<string | null>(null);
  const gateTrackedRef = useRef(false);

  useEffect(() => {
    sessionRef.current = sessionId();
    try {
      const params = new URLSearchParams(window.location.search);
      const ref = params.get("ref");
      const storedRef = window.localStorage.getItem(REF_KEY);
      if (ref) {
        window.localStorage.setItem(REF_KEY, ref);
        refCodeRef.current = ref;
      } else {
        refCodeRef.current = storedRef;
      }
      const utm = params.get("utm_source");
      if (utm) window.localStorage.setItem(UTM_KEY, utm);
    } catch {
      refCodeRef.current = null;
    }
    track("quiz_view", { referrer: document.referrer || "direct" });
  }, []);

  const startGame = useCallback(async () => {
    dispatch({ type: "loading" });
    try {
      const response = await fetch("/api/game/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: sessionRef.current }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error ?? "start_failed");

      roundStartRef.current = Date.now();
      dispatch({
        type: "started",
        playId: data.playId,
        rounds: data.rounds,
        timeLimitMs: data.timeLimitMs ?? TIMEOUT_MS,
      });
      track("game_start", { playId: data.playId });
    } catch {
      dispatch({ type: "error", error: "Could not start the game. Try again." });
    }
  }, []);

  const finishPlay = useCallback(async () => {
    const current = stateRef.current;
    if (!current.playId) return;
    dispatch({ type: "finishing" });
    try {
      const response = await fetch("/api/game/finish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ playId: current.playId }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error ?? "finish_failed");
      dispatch({ type: "finished", result: data });
      track("game_complete", {
        score: data.score,
        totalMs: data.totalMs,
        rankKey: data.rank?.key,
      });
    } catch {
      dispatch({ type: "error", error: "Could not score that game. Try again." });
    }
  }, []);

  const handleAction = useCallback(async (action: ModAction | null) => {
    const current = stateRef.current;
    if (current.phase !== "playing" || !current.playId) return;
    const round = current.rounds[current.index];
    if (!round) return;

    const ms = action === null ? TIMEOUT_MS : Date.now() - roundStartRef.current;

    try {
      const response = await fetch("/api/game/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          playId: current.playId,
          roundId: round.id,
          action,
          ms,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error ?? "answer_failed");

      track("round_answered", {
        roundIndex: current.index,
        correct: Boolean(data.correct),
        ms,
      });

      dispatch({
        type: "answered",
        feedback: {
          correct: Boolean(data.correct),
          bestAction: data.bestAction,
          reason: data.reason,
          isTrap: Boolean(data.isTrap),
        },
      });
    } catch {
      dispatch({ type: "error", error: "Lost connection mid-round. Try again." });
    }
  }, []);

  const next = useCallback(() => {
    const current = stateRef.current;
    if (current.phase !== "revealing") return;
    if (current.index + 1 >= current.rounds.length) {
      void finishPlay();
      return;
    }
    roundStartRef.current = Date.now();
    dispatch({ type: "advance" });
  }, [finishPlay]);

  useEffect(() => {
    if (state.phase !== "revealing") return undefined;
    const timer = window.setTimeout(next, REVEAL_MS);
    return () => window.clearTimeout(timer);
  }, [state.phase, next]);

  useEffect(() => {
    if (state.phase !== "result" || gateTrackedRef.current) return;
    if (state.unlocked) return;
    gateTrackedRef.current = true;
    track("gate_view", { score: state.result?.score ?? 0 });
  }, [state.phase, state.unlocked, state.result]);

  useEffect(() => {
    if (state.phase !== "playing" && state.phase !== "revealing") return undefined;
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const key = event.key.toLowerCase();
      if (stateRef.current.phase === "revealing") {
        if (key === "enter" || key === " ") {
          event.preventDefault();
          next();
        }
        return;
      }
      const mapped = ACTION_SHORTCUTS[key];
      if (mapped) {
        event.preventDefault();
        void handleAction(mapped);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state.phase, handleAction, next]);

  const onUnlocked = useCallback(async (referralUrl: string) => {
    dispatch({ type: "unlocked", referralUrl });
    const playId = stateRef.current.playId;
    if (!playId) return;
    try {
      const response = await fetch("/api/game/" + playId + "/breakdown");
      if (!response.ok) return;
      const data = await response.json();
      dispatch({ type: "breakdown", breakdown: data });
    } catch {
      // the unlocked state already renders the referral box
    }
  }, []);

  if (state.phase === "idle" || state.phase === "loading") {
    return (
      <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft sm:p-10">
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Ready to moderate?
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-foreground/80">
          10 comments and DMs. 6 seconds each. Pick Keep, Hide, Reply or Ban and
          see how you compare.
        </p>
        <button
          type="button"
          onClick={startGame}
          disabled={state.phase === "loading"}
          className="mt-6 inline-flex min-h-[56px] items-center gap-2 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
        >
          {state.phase === "loading" ? (
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
          ) : (
            <Play className="h-5 w-5" aria-hidden="true" />
          )}
          {state.phase === "loading" ? "Loading rounds..." : "Start the test"}
        </button>
        <p className="mt-3 text-xs text-muted-foreground">
          Keyboard: K keep, H hide, R reply, B ban.
        </p>
      </div>
    );
  }

  if (state.phase === "error") {
    return (
      <div role="alert" className="rounded-3xl border border-destructive/40 bg-destructive/5 p-6 text-center sm:p-10">
        <p className="font-serif text-xl font-bold text-foreground">
          {state.error}
        </p>
        <button
          type="button"
          onClick={startGame}
          className="mt-5 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Restart
        </button>
      </div>
    );
  }

  if (state.phase === "finishing") {
    return (
      <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-soft">
        <Loader2 className="mx-auto h-6 w-6 animate-spin text-primary" aria-hidden="true" />
        <p className="mt-3 text-sm font-medium text-foreground">Scoring your game...</p>
      </div>
    );
  }

  if (state.phase === "result" && state.result) {
    return (
      <div className="space-y-6">
        <ResultCard result={state.result} />
        {state.unlocked && state.breakdown ? (
          <BreakdownTable breakdown={state.breakdown} />
        ) : null}
        {state.unlocked && state.referralUrl ? (
          <ReferralBox referralUrl={state.referralUrl} />
        ) : null}
        {!state.unlocked && state.playId ? (
          <EmailGate
            playId={state.playId}
            score={state.result.score}
            refCode={refCodeRef.current}
            onUnlocked={onUnlocked}
          />
        ) : null}
        <p className="text-center text-sm text-muted-foreground">
          Now imagine this on 5,000 comments a day.
        </p>
      </div>
    );
  }

  const round = state.rounds[state.index];

  return (
    <div className="space-y-5">
      <TimerBar
        durationMs={state.timeLimitMs}
        runKey={state.index}
        active={state.phase === "playing"}
        onTimeout={() => void handleAction(null)}
      />

      {round ? (
        <CommentCard round={round} index={state.index} total={state.rounds.length} />
      ) : null}

      <ActionBar
        onAction={(action) => void handleAction(action)}
        disabled={state.phase !== "playing"}
      />

      <div aria-live="polite" aria-atomic="true">
        {state.feedback ? (
          <FeedbackPanel
            correct={state.feedback.correct}
            bestAction={state.feedback.bestAction}
            reason={state.feedback.reason}
            isTrap={state.feedback.isTrap}
            isLast={state.index + 1 >= state.rounds.length}
            onNext={next}
          />
        ) : null}
      </div>
    </div>
  );
}