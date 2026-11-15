# yvonnepadilla.com

Yvonne Padilla's consulting site: Leadership Consultant & Organizational Strategist.

## How it's built
- Five static pages share one stylesheet, `css/site.css`. No framework, no build step.
  - `index.html`: home (hero, symptoms, ROOTS preview, short testimonials, call to action). Holds the JSON-LD structured data.
  - `roots-assessment.html`: the ROOTS framework image, what's included, price, method, assessment FAQ.
  - `working-together.html`: services after the assessment, plus FAQ.
  - `about.html`: bio, stats, full testimonials.
  - `contact.html`: the contact form and its script.
- The header, footer, and Cloudflare script are repeated on every page. If you change one, change all five.
- `js/site.js` runs the phone menu (the Menu button below 760 px). Every page loads it. Without JavaScript, the links simply show under the header.
- Design: editorial layout (November 2026). White and lavender sections, ink rules, Fraunces headlines, handwritten Caveat "editor notes," polaroid photos, and the ROOTS framework plate.
- Other pages: `privacy.html` and `404.html`, styled to match (they keep their own small inline styles).
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
- **ROOTS Assessment scope and price:** `roots-assessment.html` (scope paragraph, "what's included," facts row, FAQ), the ROOTS preview on `index.html`, *and* the JSON-LD `hasOfferCatalog` in `index.html`. Keep them matching.
- **Other services:** `working-together.html` and the JSON-LD offer list in `index.html`.
- **FAQ:** split by topic across `roots-assessment.html`, `working-together.html`, and `about.html`. Cost and timeline answers must match the ROOTS page.
- **Title and role:** `<title>`, the hero kicker line, and JSON-LD `jobTitle` and service `name`. Keep them matching LinkedIn and business cards.
- **Testimonials:** short versions on `index.html`, full stories on `about.html`. Only publish metrics the client has confirmed.
- **Contact details:** header call button and footer on every page, `contact.html`, JSON-LD, and `privacy.html`.
- **ROOTS image:** `images/roots-framework-*.webp` (640, 860, 1200, 1672). If the image changes, update its alt text and phone key on `roots-assessment.html`.
- **Share image:** `og-image-v4.jpg` (1200 × 630). If you replace it, use a new file name so phones fetch the new one, and update the `og:image` and `twitter:image` tags on every page.

## Before every push
1. Preview every page at phone (390 px) and desktop width; check 320 px for sideways scrolling.
2. Click every button and link you changed.
3. Tab through the page with the keyboard: every link, button, and field should show the violet focus ring.
4. Check the browser console for errors.
5. After the deploy, run PageSpeed Insights (pagespeed.web.dev) on mobile, and send one test message through the form to your own inbox.

## If something breaks
- **Site down or showing the wrong version:** check githubstatus.com, then the repo's Settings → Pages. To roll back, run `git revert HEAD` on `main` and push; every earlier version is saved in git history.
- **Form not arriving:** check the Formspree dashboard (submissions and spam folder), then your email spam folder. The page tells visitors to email hello@yvonnepadilla.com if sending fails.
- **Domain problems:** the domain's DNS points to GitHub Pages; `CNAME` must contain `yvonnepadilla.com`.
- **Backups:** the full site lives in this repo on GitHub and on the laptop. Restoring means pushing the last good commit.
