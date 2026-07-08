# jarekdrabek.pl

Plain HTML consulting website deployed through GitHub Pages.

- Project architecture and local preview: [TECHNOLOGY.md](TECHNOLOGY.md)
- Analytics setup and manual provider configuration: [ANALYTICS.md](ANALYTICS.md)
- Brand, content, and implementation rules: [AGENTS.md](AGENTS.md)

Public canonical pages are listed in `sitemap.xml`, and `robots.txt` points crawlers to it. Add every new public page and blog post to `sitemap.xml`; do not add redirects, drafts, prototypes, or duplicate URLs.

Standalone demo pages can be added as isolated root folders, for example `/stronaroza/`, when they are used to present a website look or prototype. Keep them out of the main navigation, footer, language structure, and `sitemap.xml` unless they are intentionally promoted to canonical public content.
