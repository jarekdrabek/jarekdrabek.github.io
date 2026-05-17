# Technology Notes

This landing page is a static website for `jarekdrabek.pl`. It is intentionally simple: there is no build step, no package manager, and no frontend framework. Future features should preserve that simplicity unless there is a clear reason to introduce more tooling.

## Current Stack

- HTML: `index.html` contains the page structure, sections, inline behavior, and small page-specific styles.
- CSS: styling is done with Tailwind CSS utility classes loaded from the Tailwind CDN in `index.html`.
- Fonts: Google Fonts loads `Inter` for general text and `Tektur` for the personal brand/logo style.
- JavaScript: plain browser JavaScript is used directly in `index.html`.
- Translations: Polish and English copy live in `js/translations/pl.js` and `js/translations/en.js`, with `js/translations/translations.js` selecting the active language.
- Images: local image assets live in the repository root and are referenced directly by relative path.
- Contact form: the form posts to Formspree.

## Hosting And Deployment

The site is deployed as static content through GitHub Pages.

- Deployment workflow: `.github/workflows/static.yml`
- Trigger: push to the `main` branch or manual `workflow_dispatch`
- Artifact path: `.` meaning the whole repository is uploaded as the GitHub Pages artifact
- Custom domain: `CNAME` points GitHub Pages to `jarekdrabek.pl`
- DNS/domain management: the domain is managed in OVH

There is no application server in this repository. Any OVH configuration should be treated as DNS/domain configuration around the GitHub Pages deployment unless future attached infrastructure files show otherwise.

## File Responsibilities

- `index.html`: main landing page, layout, embedded custom CSS, language switcher logic, smooth scrolling, current-year footer logic.
- `js/translations/pl.js`: Polish UI copy.
- `js/translations/en.js`: English UI copy.
- `js/translations/translations.js`: simple language lookup helper.
- `CNAME`: GitHub Pages custom domain declaration.
- `.github/workflows/static.yml`: GitHub Actions deployment to GitHub Pages.
- `AGENTS.md`: brand, tone, product direction, and working rules for future development.
- `README.md`: short project identity note.

## Development Rules For Future Features

Keep new work consistent with the current static architecture:

- Prefer plain HTML, Tailwind utility classes, and small vanilla JavaScript.
- Do not add React, Vue, Astro, Next.js, Vite, npm, or a build pipeline unless the feature clearly needs it.
- Keep copy translatable. If visible text is shown in the page, add keys to both `pl.js` and `en.js`.
- Keep Polish as the default language unless the product direction changes.
- Keep assets local when they are part of the personal brand or proof. Reference them with simple relative paths.
- Keep page behavior browser-native where possible: anchors, forms, semantic HTML, and progressive enhancement.
- Keep the brand direction from `AGENTS.md`: specific, useful, human, and credible instead of generic portfolio language.
- Avoid adding secrets or environment-specific configuration to the repository.

## Local Preview

Because the site is static, it can be previewed by opening `index.html` directly in a browser. For a closer production-like check, serve the folder with any simple static server, for example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment Checklist

Before pushing feature changes to `main`:

- Open the page locally and check the main viewport sizes.
- Test both `PL` and `EN` language buttons.
- Confirm new text exists in both translation files.
- Confirm image paths work with the repository root as the static site root.
- Confirm the contact form action still points to the intended Formspree endpoint.
- Confirm `CNAME` still contains `jarekdrabek.pl`.

After pushing to `main`, GitHub Actions should publish the updated static site to GitHub Pages automatically.
