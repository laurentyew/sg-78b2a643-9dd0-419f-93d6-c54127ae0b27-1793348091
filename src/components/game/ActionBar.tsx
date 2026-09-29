import { Ban, EyeOff, MessageCircle, ThumbsUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ModAction } from "@/lib/quiz/types";

export interface ActionOption {
  key: ModAction;
  label: string;
  shortcut: string;
  Icon: LucideIcon;
}

export const ACTION_OPTIONS: ActionOption[] = [
  { key: "keep", label: "Keep", shortcut: "K", Icon: ThumbsUp },
  { key: "hide", label: "Hide", shortcut: "H", Icon: EyeOff },
  { key: "reply", label: "Reply", shortcut: "R", Icon: MessageCircle },
  { key: "ban", label: "Ban", shortcut: "B", Icon: Ban },
];

export const ACTION_SHORTCUTS: Record<string, ModAction> = {
  k: "keep",
  h: "hide",
  r: "reply",
  b: "ban",
};

interface ActionBarProps {
  onAction: (action: ModAction) => void;
  disabled: boolean;
}

export function ActionBar({ onAction, disabled }: ActionBarProps) {
  return (
    <div
      role="group"
      aria-label="Moderation actions"
      className="grid grid-cols-2 gap-2.5 sm:grid-cols-4"
    >
      {ACTION_OPTIONS.map(({ key, label, shortcut, Icon }) => (
        <button
          key={key}
          type="button"
          onClick={() => onAction(key)}
          disabled={disabled}
          aria-keyshortcuts={shortcut}
          className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-xl border border-border bg-card px-3 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
          {label}
          <span className="hidden text-xs font-normal text-muted-foreground sm:inline">
            {shortcut}
          </span>
        </button>
      ))}
    </div>
  );
}