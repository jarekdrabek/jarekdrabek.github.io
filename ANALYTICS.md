# Analytics setup

The site uses a minimal, privacy-conscious analytics foundation that works directly on GitHub Pages:

- Cloudflare Web Analytics is configured with the site token supplied by the owner in every public HTML file.
- Google Search Console verification has already been completed; no verification meta tag is required.
- `assets/js/analytics-events.js` emits generic interaction events without collecting form values or visitor-entered text.

## Remaining setup

1. Deploy the changes to GitHub Pages.
2. Submit the sitemap in Search Console if a sitemap is added to the site. There is no sitemap in the repository at the time of this setup.
3. Check Cloudflare Web Analytics after the site has received some traffic.

The Cloudflare site token is already installed. If Cloudflare issues a replacement token, update the `data-cf-beacon` value in every public HTML file.

Keep each provider snippet once per HTML page. The repository has no shared layout or build step, so placeholder replacement must cover all public HTML files.

## Custom events

The browser script dispatches a `site-analytics-event` `CustomEvent` and also pushes the same payload to `window.dataLayer` when a compatible data layer already exists. It does not install Google Analytics or another product analytics provider.

| Event name | Meaning |
| --- | --- |
| `book_call_click` | A visitor clicked a scheduling or calendar link. |
| `contact_email_click` | A visitor clicked an email link. |
| `contact_phone_click` | A visitor clicked a telephone link. |
| `contact_form_submit_click` | A visitor clicked the contact form submit button. It does not confirm successful delivery. |
| `contact_cta_click` | A visitor clicked a prominent link to the contact page. |
| `linkedin_click` | A visitor clicked a LinkedIn profile link. |
| `article_cta_click` | A visitor clicked a marked article CTA on a blog listing. |
| `service_page_nav_click` | A visitor navigated to one of the three main audience pages. |
| `language_switch_click` | A visitor clicked the English or Polish language switch. |
| `external_link_click` | A visitor clicked another external link. |
| `download_click` | A visitor clicked a link with a download attribute or a common downloadable-file extension. |
| `copy_email_click` | Reserved for a future copy-email control marked with `data-analytics-event="copy_email_click"`. |

To inspect events locally without enabling production logging, run this in the browser console and reload the page:

```js
localStorage.setItem("analyticsDebug", "true");
```

Disable debug logging with:

```js
localStorage.removeItem("analyticsDebug");
```

## Event payload

Events use this provider-neutral shape:

```js
{
  event: "site_event",
  eventName: "book_call_click",
  category: "conversion",
  label: "calendar",
  href: "https://calendar.app.google/...",
  path: "/en/contact/"
}
```

URLs are stripped of query strings and fragments. Email addresses and telephone numbers are not included in event payloads.

## Privacy notes

- No form values are collected.
- No user-entered text is collected.
- Email addresses and telephone numbers are not included in event payloads.
- Event labels are intentionally generic.
- No production console logging is enabled by default.
- The setup is intended for aggregate browsing and conversion insight, not for identifying individual visitors.
