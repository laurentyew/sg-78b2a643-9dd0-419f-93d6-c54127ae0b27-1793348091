# SEO Content Management Guide

> How to add new pages, update content, and maintain SEO standards for Social Kirin

## Quick Start

All SEO content follows these conventions:

- **One URL per search intent** (no duplicate thin pages)
- **Answer-first structure** (satisfy query in first 40 words)
- **Verified facts only** (check PRODUCT_FACTS.md before claiming features)
- **Schema markup required** (see templates below)
- **Internal links** (3-6 per page, descriptive anchor text)

## Adding a New Money Page

Money pages target commercial keywords with high CPC or clear buyer intent.

### 1. Check KEYWORD_MAP.csv

Ensure the keyword is mapped and not already covered by another page.

### 2. Create Page File

Location: `src/pages/[slug].tsx`

```typescript
import { SEO } from "@/components/SEO";
import { MoneyPageLayout } from "@/components/layouts/MoneyPageLayout";

export default function FacebookCommentModeration() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Social Kirin - Facebook Comment Moderation",
    applicationCategory: "BusinessApplication",
    description: "AI-powered Facebook comment moderation. Auto-hide spam, reply in your brand voice, automate DMs.",
    offers: {
      "@type": "Offer",
      price: "19",
      priceCurrency": "USD"
    }
  };

  return (
    <>
      <SEO 
        title="Facebook Comment Moderation | Social Kirin"
        description="Auto-hide spam on Facebook posts and ads. AI replies in your brand voice. Setup in 10 minutes."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MoneyPageLayout>
        {/* Content here */}
      </MoneyPageLayout>
    </>
  );
}
```

### 3. Money Page Content Structure

Every money page must include:

1. **H1** with primary keyword + value prop (1 sentence)
2. **Primary CTA** above fold (repeated 2-3 times down page)
3. **Product screenshot or demo video**
4. **3-6 benefit blocks** (tied to real features from PRODUCT_FACTS.md)
5. **"How it works"** (3 steps max)
6. **Feature comparison table** (only true features, no fabrication)
7. **Pricing teaser** linking to /pricing
8. **FAQ block** with `FAQPage` schema (5-8 real questions)
9. **Internal links** to related guides, tools, /vs pages
10. **Trust section** (only real data — no invented logos/reviews)

Target length: 900-1,500 words of useful content (not padding).

### 4. Update Sitemap

Add the new URL to `public/sitemap.xml`:

```xml
<url>
  <loc>https://socialkirin.com/facebook-comment-moderation</loc>
  <lastmod>2026-10-29</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
```

## Adding a How-To Guide

Guides target informational keywords (how-to, what is, why can't I).

### 1. Check Existing Guides

Location: `src/pages/guides/[platform]/[slug].tsx`

Ensure you're not duplicating an existing guide. Variants become H2s on one page.

### 2. Create Guide File

```typescript
import { SEO } from "@/components/SEO";
import { GuideLayout } from "@/components/layouts/GuideLayout";

export default function FacebookBlockedListGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to See Your Facebook Blocked List",
    step: [
      {
        "@type": "HowToStep",
        name: "Open Settings",
        text: "Click the menu icon in the top right of Facebook, then click Settings & Privacy > Settings."
      },
      // More steps...
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can blocked users see my posts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. When you block someone on Facebook, they cannot see your posts, profile, or any content you share."
        }
      },
      // More questions...
    ]
  };

  return (
    <>
      <SEO 
        title="How to See Your Facebook Blocked List (2026 Guide)"
        description="Step-by-step: View and manage your Facebook blocked users list. Includes unblock steps and privacy settings."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <GuideLayout>
        {/* Content here */}
      </GuideLayout>
    </>
  );
}
```

### 3. Guide Content Structure

Every guide must include:

1. **Answer in first 40 words** (satisfy query immediately)
2. **Numbered steps** with exact current UI paths
3. **"Last tested: YYYY-MM-DD"** date visible on page
4. **Screenshots with alt text** (or `[SCREENSHOT NEEDED: description]` placeholder)
5. **FAQ block** with `FAQPage` schema (5-8 real questions)
6. **`HowTo` schema** (if step-by-step)
7. **One CTA:** "Automate this with Social Kirin" linking to relevant money page
8. **Related guides:** Links to 3 similar guides
9. **Breadcrumb:** Links back to hub (e.g., /guides/facebook/)

### 4. Add to Hub Page

Update the platform hub page to link to the new guide.

## Adding a Comparison Page

Comparison pages target "[Competitor] alternative" and "X vs Y" keywords.

### 1. Verify Competitor Facts

Before writing:
- Visit competitor's live pricing page
- Verify features from their actual app/docs
- Note "Last checked: YYYY-MM-DD" date
- Be fair — don't disparage

### 2. Create Comparison File

Location: `src/pages/alternatives/[competitor].tsx` or `src/pages/vs/[competitor].tsx`

```typescript
export default function CommentGuardAlternative() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the main difference between Social Kirin and CommentGuard?",
        acceptedAnswer: {
          "@type": "Answer",
          text": "CommentGuard supports Facebook and Instagram only, while Social Kirin adds YouTube comment moderation and DM automation features."
        }
      },
      // More questions...
    ]
  };

  return (
    <>
      <SEO 
        title="CommentGuard Alternative | Social Kirin Comparison"
        description="Compare CommentGuard vs Social Kirin: pricing, platforms, features. YouTube support, DM automation, and more."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ComparisonLayout competitor="CommentGuard">
        {/* Content here */}
      </ComparisonLayout>
    </>
  );
}
```

### 3. Comparison Content Structure

Every comparison page must include:

1. **Short verdict** in first 60 words (who each tool is best for)
2. **Comparison table** (price, platforms, features, API, languages, support)
   - Each row verified from live sources
   - Include "Last checked: YYYY-MM-DD" date on page
3. **Where competitor is better** (be honest — builds trust)
4. **Where Social Kirin is better** (only true differentiators)
5. **Pricing comparison** at 2-3 usage levels
6. **Migration steps** from competitor to Social Kirin
7. **FAQ with schema** (5-8 real questions)
8. **CTA** (try Social Kirin, join waitlist)

**Never:**
- Add fake `AggregateRating` schema
- Fabricate user reviews
- Disparage competitors unfairly
- Claim features Social Kirin doesn't have

## Adding a Free Tool

Free tools are link magnets and showcase product value.

### 1. Choose Tool Type

See OFFSITE_TASKS.md section 8 for planned tools. Examples:
- Comment mockup generator
- Spam keyword checker
- Engagement rate calculator

### 2. Create Tool Page

Location: `src/pages/tools/[tool-name]/index.tsx`

```typescript
import { SEO } from "@/components/SEO";

export default function CommentSpamChecker() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Comment Spam Checker",
    applicationCategory: "UtilityApplication",
    description: "Paste a comment, get a spam score and category. Free tool by Social Kirin."
  };

  return (
    <>
      <SEO 
        title="Comment Spam Checker — Free Tool by Social Kirin"
        description="Is this comment spam? Paste any Instagram or Facebook comment and get an AI spam score in seconds."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container">
        {/* Tool interface */}
        {/* 400+ words of explanation text */}
        {/* FAQ block */}
        {/* CTA to Social Kirin */}
      </div>
    </>
  );
}
```

### 3. Tool Page Requirements

- **No signup required** to use basic function
- **Instant results** (client-side or fast API)
- **Explanation text** (400+ words: what it is, how it works, why it matters)
- **FAQ block** with schema
- **CTA** to full product (not pushy)
- **Schema:** `WebApplication` or `SoftwareApplication`
- **Shareable** results (consider unique URL per result)

### 4. Add to Tools Hub

Update `src/pages/tools/index.tsx` to link to new tool.

## Adding a Glossary Term

Glossary terms target "what is X" keywords and build topical authority.

### 1. Create Term Page

Location: `src/pages/glossary/[term].tsx`

```typescript
export default function Astroturfing() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Astroturfing",
    description: "The practice of masking sponsored content or fake grassroots campaigns as authentic user-generated content."
  };

  return (
    <>
      <SEO 
        title="What is Astroturfing? Definition & Examples"
        description="Astroturfing explained: fake grassroots campaigns posing as real users. How to spot it, examples, and how to protect your brand."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container">
        <h1>Astroturfing</h1>
        {/* Definition-first (first 40 words) */}
        {/* Expanded explanation (300-600 words) */}
        {/* Real examples */}
        {/* How to detect/prevent */}
        {/* Related terms */}
        {/* CTA if relevant */}
      </div>
    </>
  );
}
```

### 2. Glossary Term Structure

- **Definition first** (answer query in 1 sentence)
- **Expanded explanation** (300-600 words)
- **Real examples** (from social media if available)
- **How to detect/handle** (actionable advice)
- **Related terms** (internal links to 3-5 other glossary entries)
- **`DefinedTerm` schema**

### 3. Update Glossary Hub

Add term to `src/pages/glossary/index.tsx` alphabetically.

## Schema Markup Reference

### Common Schema Types

**SoftwareApplication** (product/money pages):
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Social Kirin",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "AI comment moderation for Instagram, Facebook, YouTube",
  "offers": {
    "@type": "Offer",
    "price": "39",
    "priceCurrency": "USD"
  }
}
```

**FAQPage** (all pages with Q&A):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer text"
      }
    }
  ]
}
```

**HowTo** (step-by-step guides):
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to X",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Step title",
      "text": "Step instructions"
    }
  ]
}
```

**BreadcrumbList** (all pages except homepage):
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://socialkirin.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Guides",
      "item": "https://socialkirin.com/guides/"
    }
  ]
}
```

## SEO Checklist (Before Publishing)

Use this checklist for every new page:

- [ ] Matches one clear search intent (check KEYWORD_MAP.csv)
- [ ] No duplicate/overlapping content with another page
- [ ] Title tag (≤60 chars, primary keyword first)
- [ ] Meta description (≤155 chars, value prop)
- [ ] H1 matching search intent
- [ ] Logical H2/H3 hierarchy (no H3 without H2 parent)
- [ ] Canonical tag (self-referencing)
- [ ] Schema markup (at least FAQPage or relevant type)
- [ ] Open Graph + Twitter card tags
- [ ] 3-6 internal links out to related pages
- [ ] Descriptive anchor text on internal links
- [ ] All product/competitor facts verified (check PRODUCT_FACTS.md)
- [ ] Screenshots have descriptive alt text
- [ ] Images optimized (WebP/AVIF, width/height set)
- [ ] Mobile responsive
- [ ] "Last updated" date visible (guides/comparisons)
- [ ] No fabricated claims, reviews, stats, logos
- [ ] Breadcrumb present (except homepage)
- [ ] Added to sitemap.xml with lastmod date
- [ ] Better than current top 3 results in at least one way

## Content Updates

### When to Update Content

Update pages when:
- Competitor changes pricing/features (comparison pages)
- Platform UI changes (how-to guides)
- Product adds new features (money pages)
- Keyword rankings drop >10 positions
- Quarterly review shows content gaps

### Update Process

1. Open page file
2. Update content + "Last updated" date
3. Update `<lastmod>` in sitemap.xml
4. Re-verify all [CONFIRM] items still accurate
5. Run through SEO checklist above
6. If major rewrite: change slug, add 301 redirect from old URL

## Quality Gates

**Do NOT publish a page unless:**

1. It's better than the current top 3 Google results in some concrete way:
   - More accurate/current information
   - Better step-by-step instructions
   - Real data/screenshots competitors lack
   - Faster/simpler tool
   - More comprehensive FAQ

2. All facts are verified:
   - Check PRODUCT_FACTS.md
   - For competitor claims: cite source + date checked
   - For statistics: cite source or mark [VERIFY]

3. It passes mobile layout test:
   - Readable text size
   - Tappable buttons (44px+ target size)
   - No horizontal scroll
   - Images load properly

## Common Mistakes to Avoid

❌ **Don't:**
- Create thin pages just to target more keywords
- Fabricate testimonials, reviews, customer names, case studies
- Add fake `AggregateRating` schema
- Copy content from competitors
- Keyword stuff (use term naturally 3-5 times max)
- Create pages before verifying features exist
- Write "best tool" listicles ranking Social Kirin #1 without criteria
- Use vague CTAs ("Learn more", "Click here")

✅ **Do:**
- Answer the query in first 40 words
- Use specific, descriptive anchor text
- Link to official sources (Facebook Help, Meta docs)
- Mark [CONFIRM] for anything uncertain
- Update dates when content changes
- Write for humans first, search engines second

## Internal Linking Strategy

### Hub-and-Spoke Model

- **Hub pages** (e.g., /guides/, /guides/facebook/): link to all spokes
- **Spoke pages** (e.g., /guides/facebook/delete-comment): link back to hub + 3 related spokes
- **Money pages**: link to relevant guides, tools, comparisons
- **Comparison pages**: link to money pages + related comparisons

### Anchor Text Best Practices

Good anchor text (descriptive, natural):
- "Learn how to delete Facebook comments in bulk"
- "Compare Social Kirin vs CommentGuard features"
- "Use our free comment spam checker tool"

Bad anchor text (generic, vague):
- "Click here"
- "Learn more"
- "Read this guide"

## Updating KEYWORD_MAP.csv

When adding a new page, update KEYWORD_MAP.csv:

```csv
keyword,monthly_volume,cpc_usd,intent,target_url,status,competitor_position,notes
new keyword,100,5.00,commercial,/new-page,published,Competitor #5,Added 2026-10-29
```

Status values:
- `planned` — keyword mapped, page not built yet
- `in_progress` — page being written
- `published` — page live on site
- `ranking` — page published and tracking in Google

## Getting Help

Questions about:
- **Product facts:** Check PRODUCT_FACTS.md, then OPEN_QUESTIONS.md
- **Keyword strategy:** Review KEYWORD_MAP.csv
- **Technical SEO:** See section 4 of social-kirin-seo-build-brief.md
- **Off-site tasks:** See OFFSITE_TASKS.md
- **Competitor data:** Verify from live competitor sites, note date checked

---

Last updated: 2026-10-29