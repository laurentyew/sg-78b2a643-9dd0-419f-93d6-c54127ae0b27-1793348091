import Link from "next/link";
import { ArrowRight, Clock, Trophy } from "lucide-react";

const PERKS = [
  { icon: Clock, text: "10 rounds, 6 seconds each" },
  { icon: Trophy, text: "Ranked Rookie to Ban Hammer Legend" },
];

export function FreeTools() {
  return (
    <section id="free-tools" className="bg-muted/40 py-16 sm:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
            Free tools
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Spot the Spam: a 60-second comment moderation test
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/80">
            Ten real-looking comments and scam DMs. Decide Keep, Hide, Reply or
            Ban before the timer runs out, then see how your instincts compare to
            AI moderation.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {PERKS.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground/75"
              >
                <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>

          <Link
            href="/tools/spot-the-spam-comment-quiz"
            className="mt-6 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Take the quiz
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            No signup needed to play or see your score.
          </p>
        </div>
      </div>
    </section>
  );
}