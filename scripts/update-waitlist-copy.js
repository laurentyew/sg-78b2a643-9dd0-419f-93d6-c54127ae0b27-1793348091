const fs = require("fs");
const path = require("path");

const replacements = [
  ["Starter is $25/month for 5 channels and 5,000 interactions. The 3-day trial needs no credit card, and the first 50 waitlist signups receive 3 months free.", "Starter is $25/month for 5 channels and 5,000 interactions. The 3-day trial needs no credit card."],
  ["Yes. After launch, all Social Kirin plans include a 7-day free trial. No credit card required to get started free. The first 50 waitlist signups also receive 3 months free when we launch.", "Yes. All Social Kirin plans include a 3-day free trial. No credit card required to get started."],
  ["<strong>Get Started Free.</strong> Social Kirin is in private beta. The first 50 waitlist signups receive 3 months free when we launch.", "<strong>Get Started Free.</strong> Social Kirin is live today. Create your account and connect your first channel in minutes."],
  ["3-day free trial. First 50 waitlist signups get 3 months free. No credit card required.", "3-day free trial. No credit card required."],
  ["3-day free trial. First 50 waitlist signups get 3 months free.", "3-day free trial. No credit card required."],
  ["Pre-launch (waitlist), no API access yet.", "No API access yet."],
  ["These guides teach manual strategies. For automated AI moderation across Instagram, Facebook, and YouTube\u2014join the Social Kirin waitlist. 3-day free trial.)", "These guides teach manual strategies. For automated AI moderation across Instagram, Facebook, and YouTube, start free with Social Kirin (3-day free trial)."],
  ["No. Playing and seeing your score are free and need no account. An email is only required if you want the per-category breakdown and the waitlist referral link.", "No. Playing and seeing your score are free and need no account. An email is only required if you want the per-category breakdown."],
  ["Your breakdown unlocks immediately and you receive one confirmation email. Only after you confirm does your spot on the Social Kirin waitlist start moving up with each friend who joins.", "Your breakdown unlocks immediately and you receive one confirmation email with your result."],
  ["Confirm your email to unlock your comment moderation breakdown and start moving up the Social Kirin waitlist.", "Confirm your email to unlock your full comment moderation breakdown."],
  ["Move up the waitlist", "Share your result"],
  ["Each friend who confirms moves you up the waitlist.", "Every friend who plays gets their own score to beat."],
  ["join-waitlist", "join-updates"],
  ["pre-launch, and the brands joining the waitlist now are the ones who get to decide what", "and the brands getting started now are the ones who get to decide what"]
];

let updated = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (/\.(tsx|ts)$/.test(entry.name)) {
      let content = fs.readFileSync(full, "utf8");
      const before = content;
      for (const [from, to] of replacements) {
        content = content.split(from).join(to);
      }
      if (content !== before) {
        fs.writeFileSync(full, content);
        updated += 1;
        console.log("updated:", full);
      }
    }
  }
}

walk("src");
console.log("total files updated:", updated);