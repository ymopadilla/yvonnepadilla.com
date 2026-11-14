# yvonnepadilla.com

Yvonne Padilla's consulting site: Leadership Consultant & Organizational Strategist.

## How it's built
- One static page: `index.html` holds the copy, styles (inline CSS), structured data (JSON-LD in the head), and scripts. No framework, no build step.
- Design: editorial layout (November 2026). White and lavender sections, ink rules, Fraunces headlines, handwritten Caveat "editor notes," polaroid photos, and the ROOTS framework plate.
- Other pages: `privacy.html` and `404.html`, styled to match.
- Images live in `images/`. Originals (full-size sources) live in `images/originals/`. Favicons and the share image (`og-image-v2.jpg`, 1200 × 630) sit in the root.
- `sitemap.xml`, `robots.txt`, and `CNAME` are edited by hand.

## Hosting and deploys
- Hosted on GitHub Pages from the `main` branch (custom domain set in `CNAME`). Pushing to `main` publishes the site.
- GitHub Pages can't send custom security headers; that would need a Cloudflare proxy.
- Work on a branch, preview, then merge to `main` and push from PowerShell. Batch changes into one push.

## Outside services
| Service | What it does | Where it's referenced |
|---|---|---|
| Formspree | Contact form, delivered to email | `#contact-form` action in `index.html` |
| Cloudflare Web Analytics | Anonymous, cookie-free visit counts | Script at the bottom of `index.html` |
| Google Fonts | Fraunces, Atkinson Hyperlegible Next, and Caveat | `<head>` of every page |

If you add or remove a service, update `privacy.html` in the same change.

## Where to update common things
- **ROOTS Assessment scope and price:** the `#roots` section (scope paragraph) *and* the JSON-LD `hasOfferCatalog` in the head. Keep them matching.
- **Other services:** the `#services` section ("working together") and the JSON-LD offer list.
- **FAQ:** the `#faq` section. Cost and timeline answers must match the ROOTS section.
- **Title and role:** `<title>`, the hero kicker line, and JSON-LD `jobTitle` and service `name`. Keep them matching LinkedIn and business cards.
- **Testimonials:** the `#results` section. Only publish metrics the client has confirmed.
- **Contact details:** header call button, hero, contact section, footer, JSON-LD, and `privacy.html`.
- **ROOTS image:** `images/roots-framework-1200.webp` and `-1672.webp`. If the image changes, update its alt text in `#roots`.

## Before every push
1. Preview at phone (390 px) and desktop width; check 320 px for sideways scrolling.
2. Click every button and link you changed.
3. Check the browser console for errors.
4. After the deploy, send one test message through the form to your own inbox.
