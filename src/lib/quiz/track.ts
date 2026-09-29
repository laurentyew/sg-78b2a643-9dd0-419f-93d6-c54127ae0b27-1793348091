export type QuizEventName =
  | "quiz_view"
  | "game_start"
  | "round_answered"
  | "game_complete"
  | "gate_view"
  | "lead_submit"
  | "lead_confirm"
  | "share_click";

type EventProps = Record<string, string | number | boolean | undefined>;

export function track(event: QuizEventName, props: EventProps = {}): void {
  if (typeof window === "undefined") return;

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  let sessionId = "";
  try {
    sessionId = window.localStorage.getItem("socialKirinQuizSessionId") ?? "";
  } catch {
    sessionId = "";
  }

  const payload = {
    event,
    properties: {
      ...props,
      sessionId,
      utmSource: window.localStorage.getItem("socialKirinQuizUtm") ?? "",
      path: window.location.pathname,
    },
  };

  if (!key) {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[track]", payload.event, payload.properties);
    }
    return;
  }

  try {
    fetch("https://us.i.posthog.com/capture/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        api_key: key,
        event,
        properties: {
          ...payload.properties,
          distinct_id: sessionId || "anonymous",
        },
      }),
    }).catch(() => undefined);
  } catch {
    // analytics must never break the game
  }
}