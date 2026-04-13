# nicovenegas.com — Rebuild Spec

## Context

Nico is Head of Data & AI Ops at LATAM Airlines, preparing to apply for Technical Deployment Lead and Manager of Solutions Architecture roles at Anthropic. His current site (nicovenegas.com) is an outdated HTML template with a generic leadership narrative and multiple "coming soon" sections. This rebuild repositions him as a technical architect who ships AI in production at scale in regulated industries.

This spec is the single source of truth for building the new site. All content, structure, and narrative decisions are final.

---

## Stack

- **Framework:** Astro (static site, content collections for blog)
- **Styling:** Tailwind CSS
- **Blog:** Markdown files via Astro content collections
- **Deploy:** Vercel (or Netlify)
- **Domain:** nicovenegas.com (already owned)
- **Design:** Minimal, clean, dark/light mode. No template look. Think technical personal site, not portfolio template.

---

## Site Structure (6 sections, single page + blog posts)

### 1. Hero

**Headline:**
> I take AI from prototype to production in regulated industries.

**Subtext:**
> At LATAM Airlines, my team and I built Cosmos — an internal AI platform where every capability had to earn its way into production through rigorous evaluation, safety guardrails, and human-in-the-loop design.

**Elements:**
- Name: Nicolás Venegas
- Photo (optional — can be added later)
- 3 links: GitHub, LinkedIn, Blog (anchor to writing section)
- No typed animation, no rotating titles, no "I'm a X / Y / Z"

---

### 2. About

**Narrative rules:**
- Use "we" / "my team and I" for the system/platform
- Use "I" only for specific technical decisions YOU made (architecture choices, eval design, model selection, trade-off decisions)
- Verbs to use: designed, architected, defined, drove, shaped, chose (X over Y because...), established
- Verbs to avoid: built (solo), implemented (solo), coded / led, managed, oversaw, coordinated, ensured

**Content structure:**
Problem → Architectural solution → Measurable result

**Draft text:**
> LATAM Airlines needed to go from zero AI capabilities to production-grade LLM applications serving millions of passengers. My team and I designed and built Cosmos — an internal AI platform with RAG pipelines, evaluation frameworks, model routing, and agentic architectures.
>
> I drove the key architecture decisions: choosing LightRAG for retrieval, designing the evaluation framework that gates every capability before production, and defining the model routing strategy for cost optimization. The platform now handles 779K+ RAG calls in production across 7+ AI capabilities shipped in under 2 years.

**Stats to display (metric cards):**
- 779K+ RAG calls in production
- 7+ AI capabilities shipped
- 2 years from zero to platform at scale
- 50K+ pages indexed (aviation manuals)

---

### 3. Projects

**This is the most important section of the site.**

Each project is a card that expands or links to a detail view. Structure per project:

1. **Title**
2. **One-line description**
3. **Problem** — what was broken or missing
4. **Architecture** — what you designed (with diagram if possible)
5. **Key decisions** — trade-offs you made and why
6. **Result** — metrics
7. **Link** — GitHub repo (when available)

**Projects to include (in order of priority):**

#### 3a. Cosmos Platform
- Internal AI platform for LATAM Airlines
- LightRAG, GenAI Gateway, Evaluator, model routing
- 779K+ RAG calls, 7+ capabilities, founding team

#### 3b. Cosmos Evaluator
- Eval framework for LLM applications in aviation
- Hallucination detection, faithfulness, safety, cost-per-conversation metrics
- Designed to gate capabilities before production deployment

#### 3c. LATAM Chat / Concierge Agent
- Agentic customer service chatbot
- Tool use, human-in-the-loop, multi-language
- Real failure modes and how they were handled

#### 3d. MCP Server (coming — Track A3 of study plan)
- Connecting legacy airline systems to Claude via Model Context Protocol
- Will have public GitHub repo

**Note:** Projects 3a-3c use the "architect + team" framing. Project 3d will be hands-on and can use more direct "I built" language since it's a personal project.

---

### 4. Writing (Blog)

**Technical blog integrated into the site using Astro content collections.**

Posts are written in Markdown, stored in the repo, and auto-published on build. Each post gets its own page with clean URL (nicovenegas.com/blog/post-slug).

**Planned posts (from study plan Track B):**

1. "Designing AI Evaluation Frameworks for Regulated Industries" — based on Cosmos Evaluator (target: week 6)
2. "What Breaks When You Deploy AI Agents in an Airline" — real failure modes from LATAM Chat (target: week 8)
3. "Scaling RAG to 779K Calls in Aviation: A Technical Post-Mortem" — architecture deep dive, anonymized (target: week 10)

**Blog index page:** List of posts with title, date, one-line description. Newest first. Simple.

**SEO per post:** meta title, description, OG image (can be auto-generated or static), clean URL.

---

### 5. Speaking

Nico is an experienced speaker. The section should show a track record, not just one event. Display as a timeline or card list, newest first.

**Each entry includes:**
- Event name, date, location
- Talk title and short description
- Event context (audience size, co-speakers, notable companies present)
- Link to slides / video (when available)
- Link to related blog post (when applicable)

**Confirmed upcoming talks (May 2026):**

#### 5a. AI Summit Colombia 2026
- **Date:** May 7-8, 2026
- **Location:** Chamorro City Hall, Bogotá, Colombia
- **Event:** First AI applied-to-business summit in LATAM. Co-created by Colombia Tech Week and Truora. ~2,000 attendees, 70% corporate. 50+ speakers from NVIDIA, Mercado Libre, LATAM Airlines, Walmart, LinkedIn, Coca-Cola FEMSA, TikTok.
- **Talk angle:** Cosmos case study — how LATAM Airlines went from zero to platform at scale. Audience is enterprise/corporate LATAM, so focus on business impact, metrics, and operational lessons.
- **Talk framing:** "architect + team" — "my team and I designed and built Cosmos..." with specific architecture decisions you drove.

#### 5b. Interrupt by LangChain 2026
- **Date:** May 2026 (exact date TBD)
- **Location:** San Francisco, CA
- **Event:** LangChain's flagship developer conference. Technical audience — engineers, ML practitioners, AI builders.
- **Talk angle:** Technical deep dive — evaluation frameworks, agentic architecture patterns, failure modes. Less about "what we did" and more about "how we designed it and what broke."
- **Relationship to AI Summit:** Bogotá is a rehearsal for the narrative; Interrupt is the technical version. Same Cosmos material, different depth and audience.

#### 5c. Previous speaking engagements
- Nico has spoken at multiple conferences before. Include previous talks that have a technical or AI/data angle.
- **Exclude:** generic leadership talks, MBA-style panels, motivational speaking.
- **Include:** anything related to AI deployment, data platforms, ML in production, regulated industries, or technical decision-making.
- Nico to provide list of previous talks to populate this section. Even 2-3 strong past entries show this isn't his first time on stage.

**Design note:** The section should feel like a curated list of a working practitioner who speaks regularly, not a speaker-for-hire page. No testimonials, no "book me" CTA. Just the talks, the context, and the links.

---

### 6. Contact

**Simple. No form.**

- GitHub (prominent — this is where artifacts live)
- LinkedIn (linkedin.com/in/nvenegas-oliva)
- Email (personal or professional, Nico's choice)

Optional: short line like "I'm always happy to talk about AI in production, evaluation frameworks, or agentic architectures."

---

## Design Direction

## Design Direction

### Visual References (Priority Order)
1. **antfu.me** — Primary reference. Dark mode default, content-dense but well-organized, blog + projects prominent, monospace accents, personality without excess. The overall structure and information density to follow.
2. **theodorusclarence.com** — Secondary reference. Dark background, glassmorphism cards with subtle borders, generous spacing, contrast between large bold hero text and lighter body text. The "feeling" and polish to aspire to.

### Aesthetic
- **Dark mode by default** (not light-with-dark-option — dark is the identity). Background: near-black (#111, #0a0a0a, or similar). Optional light mode toggle but dark is primary.
- Cards with subtle glassmorphism: semi-transparent backgrounds (rgba white at 3-5% opacity), thin border (1px rgba white at 8-10%), subtle backdrop-blur. This is achievable with pure CSS — no libraries needed.
- Generous whitespace between sections. Content breathes.
- Subtle hover effects on cards and links (opacity shifts, slight border glow). Nothing dramatic.
- No stock photos, no hero images, no 3D shapes, no heavy animations. The content IS the design.
- Personality comes from typography contrast and spacing, not from effects.

### Typography
- Sans-serif primary: Inter (clean, technical, widely available)
- Monospace secondary: JetBrains Mono or Fira Code (for metric labels, code snippets, technical details, nav items — gives the "technical" feel like antfu.me)
- Hero headline: large, bold (600-700 weight), high contrast against dark bg
- Body: regular weight (400), slightly muted color (#a0a0a0 range) for comfortable reading on dark
- Max 3 font weights: regular (400), medium (500), bold/semibold (600)

### Color
- Base: near-black background with gray scale for text hierarchy (#fff → #a0a0a0 → #666)
- One accent color: muted teal or blue-green for links, interactive elements, and highlights. Not bright/neon — desaturated and calm.
- Metric cards: accent color at low opacity for background, brighter for the number
- Borders: white at very low opacity (8-12%) — creates the glass effect without being flashy

### Layout
- **Multi-page** (not single-page scroll): Home, Blog index, individual Blog posts, and possibly a Projects detail page later
- Home page: hero + about summary + project cards grid + recent blog posts + speaking + contact. Dense but organized (like antfu.me home).
- Blog: separate index page (/blog) with list of posts. Each post on its own page (/blog/slug).
- Navigation: minimal top nav with links (Home, Projects, Blog, Speaking). Sticky but unobtrusive. Monospace font for nav items.
- Responsive: desktop-first (recruiters on laptops) but fully functional on mobile.
- Project cards: grid layout (2 or 3 columns on desktop, 1 on mobile). Each card has title, one-line description, tech tags, and link.

### What is achievable vs aspirational
- **Achievable now (Claude Code can build this):** dark theme, glassmorphism cards (pure CSS), Inter + monospace typography, grid layouts, blog with Markdown, responsive, SEO/AEO setup.
- **Aspirational (add later if desired):** animated transitions between pages (View Transitions API in Astro), custom OG image generation per blog post, interactive project detail pages with architecture diagrams.

---

## What This Site is NOT

- Not a portfolio template with fancy animations
- Not a leadership/coaching personal brand site
- Not a CV dump — the CV lives on LinkedIn, the site shows work
- Not a place for "Vision" or "Leadership Principles"
- Not a SaaS landing page

## What This Site IS

- A technical portfolio that shows what you've architected and shipped
- A blog that demonstrates you can think and write about hard technical problems
- A proof-of-work artifact that directly supports the Anthropic application
- A living document that grows as you complete the study plan

---

## SEO & AEO (Discoverability by Google AND by AIs)

The site needs to be findable both by search engines (Google) and by AI answer engines (Perplexity, ChatGPT with search, Claude with search, Google AI Overviews). These are two related but different optimization targets.

### SEO (Search Engine Optimization)

Astro generates static HTML which is inherently SEO-friendly. Add these explicitly:

1. **sitemap.xml** — auto-generated via `@astrojs/sitemap` integration
2. **robots.txt** — allow all crawlers, point to sitemap
3. **Meta tags per page** — title, description, canonical URL. Each blog post gets unique meta.
4. **Open Graph tags** — for LinkedIn/Slack/Twitter link previews. Per page: og:title, og:description, og:image, og:url, og:type
5. **OG images** — static or auto-generated per blog post. Minimum: a default OG image for the site + one per post.
6. **Clean URLs** — `/blog/eval-frameworks-regulated-industries` not `/blog/post-3`
7. **Semantic HTML** — proper heading hierarchy (h1 > h2 > h3), `<article>` for posts, `<nav>` for navigation, `<main>` for content
8. **Performance** — Astro is fast by default. Ensure images are optimized (`@astrojs/image`), no render-blocking JS.

### AEO (Answer Engine Optimization — AI discoverability)

This is what makes AI systems cite you when someone asks a relevant question. Key elements:

1. **JSON-LD structured data** — Schema.org markup on every page:
   - `Person` schema on the homepage (name, jobTitle, worksFor, url, sameAs for GitHub/LinkedIn)
   - `BlogPosting` schema on each blog post (headline, author, datePublished, description)
   - `WebSite` schema with search action
2. **llms.txt** — Place at site root (`nicovenegas.com/llms.txt`). This is an emerging standard that tells AI crawlers who you are and what content is available. Format:
   ```
   # Nicolás Venegas
   > I take AI from prototype to production in regulated industries. Head of Data & AI Ops at LATAM Airlines.

   ## About
   - [About](/about): Background, experience, and approach to AI in regulated industries

   ## Blog Posts
   - [Designing AI Evaluation Frameworks for Regulated Industries](/blog/eval-frameworks-regulated-industries): How to build eval frameworks for LLM applications in aviation
   - [What Breaks When You Deploy AI Agents in an Airline](/blog/ai-agents-airline-failure-modes): Real failure modes from deploying agentic AI in customer service
   ```
3. **Blog post titles as questions or clear answers** — AI engines prefer content that directly answers a query. "Designing AI Evaluation Frameworks for Regulated Industries" is good because someone will ask Perplexity exactly that. Avoid vague titles like "Thoughts on Evals" or "My Journey with AI".
4. **Author attribution** — every blog post clearly attributed to Nicolás Venegas with link to the About page. AI systems weight attributed content higher than anonymous content.
5. **RSS feed** — via `@astrojs/rss`. Some AI crawlers use RSS to discover new content.

### Astro integrations needed

```
@astrojs/sitemap
@astrojs/rss
```

Meta tags, JSON-LD, OG tags, and llms.txt are implemented as Astro components/layouts, not plugins.

---

## Implementation Notes for Claude Code

1. Start with Astro project scaffolding + Tailwind
2. Build the single-page layout first (all 6 sections)
3. Add content collections for blog (even if no posts yet — structure ready)
4. Deploy to Vercel
5. Content is placeholder-ready: Nico will refine text iteratively, but the structure and components should be final
6. The project cards in section 3 should be component-based so new projects can be added easily
7. Blog posts are .md files in src/content/blog/ — no CMS needed
8. Keep dependencies minimal — this site should be fast and easy to maintain
9. Include SEO/AEO setup from day one: sitemap, robots.txt, JSON-LD schemas, OG meta component, llms.txt, RSS feed
10. Create a reusable `<SEO>` Astro component that takes title, description, image, and type — used in every page layout