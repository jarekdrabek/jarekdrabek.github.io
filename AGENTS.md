# AGENTS.md

# Jarek Drabek Website Instructions

This file documents the current direction, protected decisions, content strategy, and implementation rules for future AI coding agents working on this project.

This website is the personal consulting website for Jarek Drabek.

## Current Baseline Rule

The current repository state is the baseline.

Future agents must inspect the current implementation and treat what is present in the codebase as the source of truth.

> The current repository state is the baseline. Do not assume earlier discussed changes are implemented unless they are present in the current codebase.

Do not rely on old prompts, old screenshots, earlier design discussions, or previously proposed changes unless those decisions are visible in the current codebase or explicitly requested again.

At the time of this document update, the project is a simple static website with root, English, Polish, blog, asset, and translation/script files. Future agents should re-check the structure before making changes instead of assuming it is unchanged.

## Working Mode

Treat future changes as careful refinements, not redesigns.

Agents should:

- inspect the current implementation before changing anything
- preserve existing working design decisions
- make small, reviewable changes
- avoid broad redesigns unless explicitly requested
- ask questions when business, content, UX, or architecture decisions are unclear
- summarize what changed after implementation

Do not modify application code when the request is documentation-only.

## Core Positioning

English:

> I help companies design, fix, and automate IT systems in the age of AI.

Polish:

> Pomagam firmom projektować, naprawiać i automatyzować systemy IT w czasach AI.

The website should feel calm, clear, technical, premium, and personal without becoming self-centered or overdesigned.

## Current Website Direction

The website has been intentionally redesigned to be simpler and more focused.

The previous problem was that the site exposed too much information too early. It tried to explain services, use cases, AI systems, RAG, copilots, backend architecture, automation, process, and consulting options all at once. That made it unclear who the page was for and what the visitor should do next.

The current direction is different:

The homepage is not a classic long landing page.

The homepage is a clean decision screen.

## Protected Homepage Concept

The homepage should only do these things:

1. Show a small personal trust signal.
2. State the positioning sentence.
3. Ask the visitor what problem they are trying to solve.
4. Route the visitor into one of three paths.

Do not turn the homepage back into a long sales page.

Do not add service lists, stats, long process sections, case-study-like claims, or detailed AI/RAG/copilot/backend explanations to the homepage unless explicitly requested.

Detailed content belongs on the relevant audience pages.

## Homepage Structure

The homepage should preserve this structure:

- subtle header
- small circular avatar or portrait
- positioning sentence
- main question
- three decision cards

Main question:

English:

> What kind of problem are you trying to solve?

Polish:

> Jaki problem próbujesz rozwiązać?

Decision paths:

1. Business Automation
2. SaaS & Product Teams
3. Technical Teams

## Homepage Visual Direction

The homepage should feel:

- minimal
- calm
- premium
- technical
- personal but not self-centered
- spacious, but not like a tiny widget floating on a huge screen
- clear within a few seconds

Avoid:

- generic AI hype
- large portrait hero layouts
- background hero images
- heavy sales copy
- decorative visual noise
- long explanations
- extra homepage sections unless explicitly requested

## Responsive Behavior

The homepage should look balanced on laptop screens and large desktop screens.

Important rule:

Do not globally enlarge the layout in a way that makes 15-inch laptop screens feel oversized.

Use responsive breakpoints.

General intent:

- normal laptop screens: compact premium layout
- large desktop screens: slightly larger and more spacious layout
- mobile: simple stacked layout with cards that are easy to tap

## Header And Navigation

The header should be visually quiet.

Navigation items:

English:

- Business Automation
- SaaS & Product Teams
- Technical Teams
- Contact

Polish:

- Automatyzacja biznesu
- SaaS i zespoły produktowe
- Zespoły techniczne
- Kontakt

Temporary blog visibility rule:

- The blog exists in the codebase, but the public `Blog` navigation/footer link is temporarily hidden until real articles are published.
- Do not re-add `Blog` to the header or footer unless explicitly requested.
- The blog pages may remain accessible by direct URL so content can be prepared privately.

Header rules:

- inactive links should be muted/light gray and not bold
- active/current page should be darker and slightly bolder
- hover state should be subtle
- do not use a separate prominent Contact button unless explicitly requested
- the header should be available, but it should not compete with the homepage decision cards

## Active Navigation State

The current section must be visually active in the navigation.

Examples:

- `/saas-product-teams/` activates `SaaS & Product Teams`
- `/business-automation/` activates `Business Automation`
- `/technical-teams/` activates `Technical Teams`
- `/contact/` activates `Contact`

Apply the equivalent behavior on Polish routes.

## Main Audience Paths

### 1. Business Automation

For small and medium businesses that are not necessarily software companies, but want to use IT and AI to improve operations.

Focus areas:

- workflow automation
- AI automations
- internal tools
- document processing
- reporting automation
- RAG / knowledge assistants
- replacing manual work with reliable systems

Visitor problems:

- "We do too much repetitive work manually."
- "Our company has data and documents, but people waste time searching for answers."
- "We want to introduce AI, but we do not know where it makes business sense."
- "We need practical automation, not AI hype."

### 2. SaaS & Product Teams

For SaaS founders, product teams, startup builders, and companies building software products.

Focus areas:

- AI features inside SaaS products
- product architecture
- backend architecture
- scalability
- prototype to production
- production-ready AI functionality
- technical debt
- AI-native product development

Visitor problems:

- "We want to add AI features to our SaaS product."
- "Our product grew and the backend architecture is becoming messy."
- "We have a prototype, but we need to make it production-ready."
- "We need technical guidance before building the wrong thing."

### 3. Technical Teams

For CTOs, tech leads, engineering managers, software houses, and technical teams.

Focus areas:

- backend architecture review
- AI system architecture
- RAG architecture
- maintainability
- clean architecture
- production readiness
- integration design
- implementation support
- technical advisory

Visitor problems:

- "We need an external architecture review."
- "We are building an AI/RAG system and want to avoid production mistakes."
- "Our system is becoming hard to change."
- "We need senior backend/architecture support."

## Audience Pages

Audience pages should be more detailed than the homepage.

They may include:

- clear headline
- who this page is for
- concrete problems solved
- services
- use cases
- how I work
- CTA
- relevant blog/articles section

Audience pages may be more explanatory and sales-oriented than the homepage, but should still remain calm, concrete, and not hype-driven.

Audience page refinements should prefer:

- calmer section labels
- fewer loud uppercase labels
- less aggressive letter-spacing
- smaller secondary headings compared to hero headings
- more conversational problem statements
- less mechanical repetition of "label + huge heading + cards"
- lighter CTA sections
- practical examples over vague marketing language

Audience pages should not feel heavy, aggressive, overly corporate, or overly "agency-like".

Do not add:

- fake case studies
- fake testimonials
- fake client logos
- invented metrics
- generic AI transformation claims

## Blog Strategy

The blog is temporarily hidden from public navigation and footer links until real articles are published.

When the blog is ready to go public, reintroduce one main `Blog` item in the navigation and restore useful footer/internal links.

Blog content should support audience categories:

- SaaS & Product Teams
- Business Automation
- Technical Teams
- General

Do not treat the blog as one undifferentiated bucket forever.

Expected behavior:

- `/blog/` can show all articles
- `/blog/` can provide filters or sections by audience
- audience pages can show only relevant articles for that audience
- do not show deeply technical software articles as primary content for non-technical business visitors unless they are clearly framed for them

Do not show empty public sections that make the site feel unfinished unless explicitly requested.

Avoid public labels like `draft`, `work in progress`, or `placeholder` unless the content is intentionally not public.

## Recommended Article Sections

Audience pages may include recommended article sections.

English:

- Recommended articles for SaaS & Product Teams
- Recommended articles for Business Automation
- Recommended articles for Technical Teams

Polish:

- Polecane artykuły dla SaaS i zespołów produktowych
- Polecane artykuły dla automatyzacji biznesu
- Polecane artykuły dla zespołów technicznych

If no relevant articles exist yet, either skip the section or show a very subtle empty state.

## Blog Implementation

For now, keep the blog simple and static.

Do not introduce a CMS, database, or unnecessary content pipeline unless explicitly requested.

Use the simplest static approach consistent with the current project.

Future blog content may cover:

- software design
- clean architecture
- AI-generated software
- LLM context windows
- backend architecture
- AI systems
- RAG
- copilots
- practical AI use in business

Blog style should be:

- practical
- concrete
- smart but not academic
- useful for founders, managers, SaaS builders, CTOs, tech leads, and engineers
- connected to why design and architecture matter in the AI era

## Language And Internationalization

The website is bilingual:

- Polish
- English

Expected behavior:

- If browser language is Polish, show Polish by default.
- If browser language is English or anything else, show English by default.
- Always allow manual language switching.
- Prefer clean language-specific URLs if already implemented.
- Do not make language switching confusing.

## SEO

Keep the site SEO-friendly without overengineering.

Use:

- proper page titles
- meta descriptions
- semantic HTML
- clear heading hierarchy
- clean URLs where possible
- Open Graph metadata where appropriate
- accessible links and buttons
- good internal linking between homepage, audience pages, blog, and contact

Do not add unnecessary dependencies or infrastructure only for SEO.

## Contact Page

The contact page should feel personal, calm, and practical.

Preferred headline:

English:

> Tell me what problem you want to solve.

Polish:

> Opowiedz, jaki problem chcesz rozwiązać.

Supporting text:

English:

> A short message is enough. Describe the system, process, product idea, or place where software or AI should start working better.

Polish:

> Krótka wiadomość wystarczy. Opisz system, proces, pomysł produktowy albo miejsce, w którym software lub AI powinny zacząć działać lepiej.

Contact form fields:

- name
- email
- message/problem

Message label:

English:

> What should software or AI improve?

Polish:

> Co software albo AI powinny usprawnić?

Button:

English:

> Start the conversation

Polish:

> Zacznij rozmowę

Helper text:

English:

> I'll reply personally and suggest the next practical step.

Polish:

> Odpowiem osobiście i zaproponuję następny praktyczny krok.

Contact page layout rules:

- avoid awkward headline wrapping
- avoid huge vertical gaps
- form should not stretch too wide on large screens
- keep the form clean and compact
- avoid a corporate-looking oversized form

## LinkedIn

Use this exact LinkedIn URL:

`https://www.linkedin.com/in/jaroslaw-drabek/`

Use it in:

- global footer
- contact page

Display label may simply be:

`LinkedIn`

Do not make LinkedIn a dominant header CTA.

## Footer

The footer should be global and may include:

- LinkedIn link
- contact information or contact CTA
- basic navigation
- language switcher if appropriate

Keep it calm and useful.

## Visual Style

Preserve the current direction:

- clean
- premium
- minimalist
- technical
- calm
- trustworthy
- personal but not self-centered
- not overloaded
- not generic AI hype

Avoid:

- buzzword-heavy AI marketing
- vague promises
- aggressive sales copy
- oversized section headings everywhere
- too much bold text
- too many uppercase labels
- too many services listed at once
- inflated startup language
- generic consultant copy
- walls of text
- distracting animations
- fake testimonials
- fake logos
- invented metrics
- invented case studies

Prefer:

- short sections
- concrete examples
- problem-first messaging
- audience-specific pages
- calm technical credibility
- simple CTAs
- useful explanations

## Copywriting Rules

Use direct, concrete language.

Do not over-explain on the homepage.

On audience pages, explain more, but keep content structured and practical.

Do not invent credentials, client names, testimonials, metrics, case studies, or claims not already present.

Avoid startup cliches, generic AI hype, and inflated self-praise.

## Implementation Rules For Future Agents

Before making significant changes:

1. Inspect the current project structure.
2. Understand the existing routing, language handling, styling, and content model.
3. Identify what files will likely change.
4. Ask questions if anything is unclear.
5. Do not assume business decisions.
6. Do not change protected concepts without explicit approval.

When unsure, ask before implementing.

Especially ask before:

- changing homepage structure
- adding homepage sections
- changing navigation strategy
- changing blog architecture
- adding dependencies
- adding a CMS
- changing language routing
- changing CTA strategy
- modifying contact form behavior
- introducing animations or visual effects
- removing existing content entirely

## Verification Rules

After changes:

- run available build/test/lint commands
- verify relevant routes
- verify language switching
- verify active nav state
- verify responsive layout on laptop and large desktop widths
- summarize what changed
- mention any limitations or follow-up work

For frontend changes, visually verify the affected pages whenever possible.

## Analytics And Privacy

- Keep analytics privacy-friendly and compatible with the plain HTML/GitHub Pages architecture.
- Do not add invasive tracking or collect form input values, user-entered text, email addresses, telephone numbers, or other personal data in analytics events.
- Keep custom event names and labels generic and useful for aggregate insight.
- Do not hardcode real analytics tokens or verification codes in examples unless the user explicitly provides them for deployment.
- Do not add Google Analytics, Microsoft Clarity, cookie banners, or other analytics infrastructure unless explicitly requested.
- Preserve the provider-neutral event behavior documented in `ANALYTICS.md` when changing links, calls to action, or the analytics script.

## Regression Protection

Future changes must not accidentally:

- turn the homepage back into a long landing page
- make the header visually dominant
- remove the three-path decision model
- remove bilingual support
- remove manual language switching
- break active navigation states
- make the blog a single unstructured bucket
- remove audience-specific blog categorization
- use the wrong LinkedIn URL
- make the contact page overly corporate
- add generic AI marketing copy
- invent case studies, clients, testimonials, or metrics

## North Star

Make the site feel like the natural professional home base for Jarek Drabek:

clear enough to trust, specific enough to remember, calm enough to read, and structured enough to grow.
