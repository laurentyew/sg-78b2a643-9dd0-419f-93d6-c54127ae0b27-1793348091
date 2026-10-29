interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is the comment moderation quiz?",
    answer:
      "A free 60-second test. You moderate 10 comments and direct messages, get feedback on every call, then see a score and a rank from Rookie Moderator to Ban Hammer Legend.",
  },
  {
    question: "Do I need an account to play?",
    answer:
      "No. Playing and seeing your score are free and need no account. An email is only required if you want the per-category breakdown.",
  },
  {
    question: "How does the quiz decide the right answer?",
    answer:
      "Every comment has one best action and often an accepted alternative. Hiding spam twice is not the same as banning it, so the answer explains the reasoning rather than just telling you that you were wrong.",
  },
  {
    question: "Is this a real moderation tool?",
    answer:
      "No. It is a training game built by Social Kirin to show how hard manual comment moderation is at scale. None of the comments are real, and no real accounts or brands appear.",
  },
  {
    question: "What happens after I submit my email?",
    answer:
      "Your breakdown unlocks immediately and you receive one confirmation email with your result.",
  },
];

export function QuizSeoContent() {
  return (
    <div className="mx-auto mt-16 max-w-3xl space-y-12">
      <section aria-labelledby="how-the-quiz-works">
        <h2
          id="how-the-quiz-works"
          className="font-serif text-2xl font-bold text-foreground sm:text-3xl"
        >
          How the quiz works
        </h2>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground/80">
          <p>
            You get 10 rounds, drawn from a bank of spam, scam DMs, trolls, real
            complaints, sarcasm and genuine questions. Each round gives you four
            actions: Keep, Hide, Reply or Ban. You have 6 seconds per round, then
            the quiz shows the best action and a one-line reason.
          </p>
          <p>
            Your score is out of 10 and your total time is the tie-breaker. Some
            rounds accept a second action, because hiding and banning both handle
            a bot. Others only accept one, because replying to a real complaint is
            the difference between keeping a customer and losing one.
          </p>
          <p>
            At the end you get a rank, from Rookie Moderator through Weekend Mod
            and Comment Cop to Ban Hammer and Ban Hammer Legend.
          </p>
        </div>
      </section>

      <section aria-labelledby="spam-and-scam-dms">
        <h2
          id="spam-and-scam-dms"
          className="font-serif text-2xl font-bold text-foreground sm:text-3xl"
        >
          Spam comments and scam DMs to watch for on Instagram
        </h2>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground/80">
          <p>
            Most Instagram spam comments follow the same few patterns. Look for
            follow-for-follow promises, account-selling bots, "check the bio"
            funnels, and the same emoji-heavy pitch repeated across posts. Those
            are safe to hide, and worth banning when the same handle keeps
            returning.
          </p>
          <p>
            Instagram scam DMs are more dangerous. The usual shape is false
            urgency about your account: a copyright strike, a disabled page, a
            suspended business profile, plus a shortened appeal link. Real
            platforms do not send appeal links over DM, and a support handle that
            asks you to verify through an outside link is the clearest signal
            there is.
          </p>
          <p>
            Fake giveaways, brand ambassador offers that ask for a fee, and
            crypto or investment pitches fall into the same family. Ban them and
            report them; hiding a scam DM leaves the account free to work through
            the rest of your followers.
          </p>
        </div>
      </section>

      <section aria-labelledby="why-keyword-filters-fail">
        <h2
          id="why-keyword-filters-fail"
          className="font-serif text-2xl font-bold text-foreground sm:text-3xl"
        >
          Why keyword filters hide real customers
        </h2>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground/80">
          <p>
            A keyword filter cannot read intent. It sees the word "free" and
            assumes a promotion, so it buries a question about free shipping. It
            sees "scam" and hides an angry customer warning other people about a
            fake seller in your comments. It sees "hate" in a compliment and
            removes a five-star review.
          </p>
          <p>
            At low volume you can review the false positives by hand. At 5,000
            comments a day, a filter with a 5% false positive rate buries 250 real
            comments before lunch, and nobody notices the customer question that
            never got an answer.
          </p>
          <p>
            The quiz deliberately includes trap rounds like these. If a keyword
            filter keeps beating you on them, that is the point.
          </p>
        </div>
      </section>

      <section aria-labelledby="faq">
        <h2
          id="faq"
          className="font-serif text-2xl font-bold text-foreground sm:text-3xl"
        >
          FAQ
        </h2>
        <dl className="mt-4 space-y-6">
          {FAQ_ITEMS.map((item) => (
            <div key={item.question}>
              <dt className="text-base font-semibold text-foreground">
                {item.question}
              </dt>
              <dd className="mt-1.5 text-base leading-relaxed text-foreground/80">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        aria-labelledby="join-updates"
        className="rounded-3xl border border-primary/25 bg-primary/5 p-6 sm:p-8"
      >
        <h2
          id="join-updates"
          className="font-serif text-2xl font-bold text-foreground"
        >
          Automate this without losing the real customers
        </h2>
        <p className="mt-3 text-base leading-relaxed text-foreground/80">
          Social Kirin reads every comment in context, hides the spam, answers the
          questions, and leaves the complaints for a human. Play the quiz, then
          get started free to get early access.
        </p>
      </section>
    </div>
  );
}

export { FAQ_ITEMS };
export type { FaqItem };