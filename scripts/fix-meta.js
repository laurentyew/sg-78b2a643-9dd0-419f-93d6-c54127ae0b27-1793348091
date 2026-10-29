/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const fixes = {
  "/": {
    title: "AI Comment Moderation & DM Automation | Social Kirin",
    description:
      "Social Kirin auto-hides spam comments, replies in your brand voice, and automates DMs across Instagram, Facebook and YouTube. Start free today.",
  },
  "/social-media-moderation-software": {
    title: "Social Media Moderation Software | AI Comment Filter",
    description:
      "AI moderation software for Instagram, Facebook and YouTube. Auto-hide spam, reply in your brand voice, and automate DMs. Start free in minutes.",
  },
  "/ai-comment-moderation": {
    description:
      "AI comment moderation that hides spam and scams, replies in your brand voice, and flags toxic threads across Instagram, Facebook and YouTube.",
  },
  "/ad-comment-moderation": {
    description:
      "Protect paid campaigns from spam, trolls and competitor links. AI moderates Facebook and Instagram ad comments in real time so budgets stay safe.",
  },
  "/comment-moderation": {
    title: "Comment Moderation Tool | Auto-Hide Spam Comments",
    description:
      "Comment moderation that auto-hides spam, scams and abuse on Instagram, Facebook and YouTube, with a full review log your team stays in control of.",
  },
  "/facebook-comment-moderation": {
    title: "Facebook Comment Moderation | Auto-Hide Spam on Pages",
    description:
      "Facebook comment moderation for pages and ads. Auto-hide spam, filter trolls, and reply in your brand voice without babysitting the inbox.",
  },
  "/instagram-comment-moderation": {
    title: "Instagram Comment Moderation | Hide Spam & Scams Fast",
    description:
      "Instagram comment moderation that hides spam and scam comments automatically, filters abuse, and keeps your Reels threads clean and on-brand.",
  },
  "/instagram-auto-comments": {
    title: "Instagram Auto Comments | AI Replies for Posts & Reels",
    description:
      "Instagram auto comments that answer questions and turn comment keywords into instant DMs, in your brand voice. Set up in minutes, no code needed.",
  },
  "/facebook-auto-reply": {
    description:
      "Facebook auto reply that answers common questions, sends pricing and links by DM, and escalates complaints to your team in real time.",
  },
  "/instagram-auto-reply": {
    description:
      "Instagram auto reply that answers DMs and comments in your brand voice, sends links on request, and hands sensitive chats to a human.",
  },
  "/facebook-auto-comments": {
    description:
      "Facebook auto comments that reply to post comments in your brand voice, answer common questions, and hide spam before customers ever see it.",
  },
  "/guides": {
    title: "Social Media Moderation Guides | Learn Best Practices",
  },
  "/guides/instagram": {
    title: "Instagram Comment Moderation Guides & Auto-Reply Tips",
  },
  "/guides/facebook": {
    title: "Facebook Comment Moderation Guides for Page Owners",
  },
  "/guides/youtube": {
    title: "YouTube Comment Moderation Guides | Live Chat & Trolls",
  },
  "/guides/facebook/protect-ad-comments": {
    title: "How to Protect Facebook Ad Comments from Trolls",
    description:
      "How to protect Facebook ad comments from trolls, scam links and competitor spam using native settings plus AI moderation that works 24/7.",
  },
  "/vs/commentguard": {
    title: "Social Kirin vs CommentGuard (2026): Honest Comparison",
    description:
      "Social Kirin vs CommentGuard compared on platforms, AI reply quality, DM automation, pricing and reporting so you can pick the right moderation tool.",
  },
  "/vs/feedguardians": {
    description:
      "Social Kirin vs FeedGuardians, compared on platforms, AI replies, DM automation, pricing and setup time. See which moderation tool fits your team.",
  },
  "/alternatives/commentguard": {
    description:
      "Looking for a CommentGuard alternative? Compare platforms, pricing, AI replies and DM automation to find the right moderation tool for your team.",
  },
  "/alternatives/feedguardians": {
    title: "Best FeedGuardians Alternative (2026) | Social Kirin",
    description:
      "FeedGuardians alternative with multi-platform moderation, AI replies and DM automation. Compare features, pricing and setup side by side.",
  },
  "/best/instagram-comment-moderation-tools": {
    description:
      "An honest breakdown of the best Instagram comment moderation tools in 2026: spam filtering, AI replies, pricing, and which fits your account size.",
  },
  "/best/facebook-comment-moderation-tools": {
    description:
      "The best Facebook comment moderation tools compared for 2026, ranked by spam filtering, AI replies, page and ad support, pricing and ease of setup.",
  },
  "/for": {
    description:
      "See how eCommerce brands, creators, agencies and support teams use Social Kirin to moderate comments and automate replies at scale.",
  },
};

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.tsx$/.test(entry.name)) out.push(full);
  }
  return out;
}

function routeOf(file) {
  let r = file.slice("src/pages".length).replace(/\.tsx$/, "");
  if (r.endsWith("/index")) r = r.slice(0, -6);
  return r === "" || r === "/" ? "/" : r;
}

let changed = 0;
const report = [];

for (const file of walk("src/pages", [])) {
  if (file.includes("/api/") || file.includes("/_")) continue;
  const route = routeOf(file);
  const fix = fixes[route];
  if (!fix) continue;

  let src = fs.readFileSync(file, "utf8");
  const start = src.indexOf("<SEO");
  if (start === -1) {
    report.push("NO SEO BLOCK: " + route);
    continue;
  }
  const end = src.indexOf("/>", start);
  if (end === -1) {
    report.push("NO SEO CLOSE: " + route);
    continue;
  }

  const before = src.slice(start, end);
  let block = before;

  if (fix.title) {
    if (!/title="[^"]*"/.test(block)) {
      report.push("NO TITLE ATTR: " + route);
    } else {
      block = block.replace(/title="[^"]*"/, 'title="' + fix.title + '"');
    }
  }
  if (fix.description) {
    if (!/description="[^"]*"/.test(block)) {
      report.push("NO DESC ATTR: " + route);
    } else {
      block = block.replace(/description="[^"]*"/, 'description="' + fix.description + '"');
    }
  }

  if (block === before) {
    report.push("UNCHANGED: " + route);
    continue;
  }

  src = src.slice(0, start) + block + src.slice(end);
  fs.writeFileSync(file, src);
  changed++;
  report.push(
    "OK  " + route + "  title:" + (fix.title ? fix.title.length : "-") +
    "  desc:" + (fix.description ? fix.description.length : "-")
  );
}

console.log(report.join("\n"));
console.log("\nfiles changed: " + changed);