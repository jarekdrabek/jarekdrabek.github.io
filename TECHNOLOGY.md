# Technology Notes

This website is a static personal consulting site for `jarekdrabek.pl`. It is intentionally simple: there is no build step, no package manager, no CMS, no database, and no frontend framework.

## Current Stack

- HTML: each route is a plain static `index.html` file.
- CSS: shared styling lives in `assets/site.css`.
- Fonts: Google Fonts loads `Inter` for general text and `Tektur` for the personal brand/logo style.
- JavaScript: tiny inline redirect scripts handle `/` language routing and old blog compatibility redirects. `assets/js/analytics-events.js` provides dependency-free, provider-neutral interaction events.
- Images: local image assets live in the repository root and are referenced directly by absolute static paths when needed.
- Contact form: contact pages post to Formspree.

## URL Structure

English is the primary language. Polish is a full translated route set.

- `/`: lightweight language router. Polish browser languages go to `/pl/`; all others go to `/en/`.
- `/en/`: English homepage.
- `/pl/`: Polish homepage.
- `/en/saas-product-teams/` and `/pl/saas-i-zespoly-produktowe/`
- `/en/business-automation/` and `/pl/automatyzacja-biznesu/`
- `/en/technical-teams/` and `/pl/zespoly-techniczne/`
- `/en/blog/` and `/pl/blog/`
- `/en/contact/` and `/pl/kontakt/`
- `/blog/` and `/blog/why-ai-generated-software-still-needs-architecture/`: compatibility redirects to the English blog routes.

## Hosting And Deployment

The site is deployed as static content through GitHub Pages.

- Deployment workflow: `.github/workflows/static.yml`
- Trigger: push to the `main` branch or manual `workflow_dispatch`
- Artifact path: `.` meaning the whole repository is uploaded as the GitHub Pages artifact
- Custom domain: `CNAME` points GitHub Pages to `jarekdrabek.pl`
- DNS/domain management: the domain is managed in OVH

There is no application server in this repository. Any OVH configuration should be treated as DNS/domain configuration around the GitHub Pages deployment unless future infrastructure files show otherwise.

## File Responsibilities

- `index.html`: language router and manual language fallback links.
- `assets/site.css`: shared layout, typography, cards, navigation, footer, contact form, and responsive behavior.
- `assets/js/analytics-events.js`: privacy-conscious click classification and provider-neutral custom analytics events.
- `en/index.html` and `pl/index.html`: language-specific homepages.
- `en/saas-product-teams/index.html` and `pl/saas-i-zespoly-produktowe/index.html`: SaaS/product audience pages.
- `en/business-automation/index.html` and `pl/automatyzacja-biznesu/index.html`: business automation audience pages.
- `en/technical-teams/index.html` and `pl/zespoly-techniczne/index.html`: technical-team audience pages.
- `en/blog/index.html` and `pl/blog/index.html`: static blog listing pages.
- `en/blog/[article-slug]/index.html` and `pl/blog/[article-slug]/index.html`: paired static article pages.
- `en/contact/index.html` and `pl/kontakt/index.html`: dedicated contact pages.
- `blog/`: compatibility redirects for older English blog URLs.
- `sitemap.xml`: canonical public URLs submitted to search engines; excludes redirects, drafts, prototypes, and duplicate pages.
- `robots.txt`: allows crawlers and references the production sitemap URL.
- `CNAME`: GitHub Pages custom domain declaration.
- `.github/workflows/static.yml`: GitHub Actions deployment to GitHub Pages.
- `AGENTS.md`: brand, tone, product direction, and working rules for future development.
- `README.md`: short project identity note.

## Development Rules For Future Features

Keep new work consistent with the current static architecture:

- Prefer plain HTML and shared CSS.
- Do not add React, Vue, Astro, Next.js, Vite, npm, or a build pipeline unless the feature clearly needs it.
- Keep English and Polish pages paired when a translated route exists.
- Update canonical and `hreflang` links when adding paired pages.
- For blog articles, create paired English and Polish static pages when a translation exists.
- Put useful article metadata in the HTML comment block near the top of each article: title, slug, language, translation URL, description, date, audience, tags, SEO title, meta description, optional image prompt, and optional LinkedIn draft.
- Keep assets local when they are part of the personal brand or proof. Reference them with simple static paths.
- Keep page behavior browser-native where possible: anchors, forms, semantic HTML, and progressive enhancement.
- Keep the brand direction from `AGENTS.md`: specific, useful, human, and credible instead of generic portfolio language.
- Avoid adding secrets or environment-specific configuration to the repository.
- Keep analytics compatible with static GitHub Pages hosting and follow the privacy rules in `ANALYTICS.md`.
- Add every new public canonical page and blog post to `sitemap.xml`. Do not add redirect, draft, private, test, or duplicate routes.

## Local Preview

Because the site is static, it can be previewed by opening HTML files directly in a browser. For a closer production-like check, serve the folder with a simple static server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment Checklist

Before pushing feature changes to `main`:

- Serve the folder locally and check `/`, `/en/`, `/pl/`, the three category pages, blog pages, and contact pages.
- Check desktop and mobile viewport widths.
- Confirm cross-language links work on paired pages.
- Confirm canonical and `hreflang` URLs match the final route.
- Confirm every new public page or blog post is listed once in `sitemap.xml` and that redirects or drafts are excluded.
- Confirm `robots.txt` still references `https://jarekdrabek.pl/sitemap.xml`.
- Confirm the contact form action still points to the intended Formspree endpoint.
- Confirm `CNAME` still contains `jarekdrabek.pl`.

After pushing to `main`, GitHub Actions should publish the updated static site to GitHub Pages automatically.
