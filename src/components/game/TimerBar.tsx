import { useEffect, useRef, useState } from "react";

interface TimerBarProps {
  durationMs: number;
  runKey: number;
  active: boolean;
  onTimeout: () => void;
}

export function TimerBar({
  durationMs,
  runKey,
  active,
  onTimeout,
}: TimerBarProps) {
  const [remaining, setRemaining] = useState(durationMs);
  const firedRef = useRef(false);
  const timeoutRef = useRef(onTimeout);
  timeoutRef.current = onTimeout;

  useEffect(() => {
    firedRef.current = false;
    setRemaining(durationMs);
  }, [runKey, durationMs]);

  useEffect(() => {
    if (!active) return undefined;

    const startedAt = performance.now();
    let frame = 0;

    const tick = () => {
      const left = Math.max(0, durationMs - (performance.now() - startedAt));
      setRemaining(left);

      if (left <= 0) {
        if (!firedRef.current) {
          firedRef.current = true;
          timeoutRef.current();
        }
        return;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, runKey, durationMs]);

  const pct = Math.max(0, Math.min(100, (remaining / durationMs) * 100));
  const urgent = remaining <= 2000;

  return (
    <div className="space-y-1.5">
      <div
        role="progressbar"
        aria-label="Time remaining"
        aria-valuemin={0}
        aria-valuemax={durationMs}
        aria-valuenow={Math.round(remaining)}
        className="h-2 w-full overflow-hidden rounded-full bg-secondary"
      >
        <div
          className={
            "h-full rounded-full transition-[background-color] duration-300 " +
            (urgent ? "bg-destructive" : "bg-primary")
          }
          style={{ width: pct + "%" }}
        />
      </div>
      <p className="text-right text-xs tabular-nums text-muted-foreground">
        {Math.ceil(remaining / 1000)}s left
      </p>
    </div>
  );
}