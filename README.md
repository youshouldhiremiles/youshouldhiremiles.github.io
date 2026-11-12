# Miles Storm — character sheet + recruiter portfolio

A buildless, dependency-free portfolio for GitHub Pages. HTML, CSS, and browser JavaScript only: no subscriptions, external fonts, analytics, form services, API keys, or paid hosting requirements.

## Publish to the existing GitHub Pages repository

1. Unzip `miles-storm-portfolio.zip` and open its folder.
2. In your `youshouldhiremiles.github.io` GitHub repository, save a backup or use the existing commit history before replacing files.
3. Choose **Add file → Upload files**. Upload the contents of the extracted folder to the repository root, replacing `index.html`, `style.css`, `script.js`, `resume.html`, and `README.md`. Do not upload the enclosing folder or ZIP. Include `.nojekyll` if visible; this plain static site also works without it.
4. Commit to `main`.
5. Open **Settings → Pages → Build and deployment**. Select **Deploy from a branch**, branch **main**, folder **/(root)**, then **Save**. If these are already selected, the new commit triggers deployment.
6. Wait for GitHub's Pages deployment to finish, then visit https://youshouldhiremiles.github.io/. Refresh if a cached version appears.
7. Check both view buttons on desktop and phone, open each work story, follow both contact links, and use **Résumé → Print / Save as PDF**.

Official publishing-source instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

For a project repository, relative links also work under `/repository-name/`. No build or package installation is needed. To undo a publication, revert the upload commit in GitHub.

## Content provenance and review

Career details, dates, credentials, education, projects, pronouns, location, and personal interests are retained from the supplied repository. They have not been independently verified against an authoritative résumé. The original README explicitly described them as drafted background requiring review. Before publishing, confirm credential names and dates, education, job history, project scope, and approximate figures. Earlier role dates and education institutions were absent and have not been invented.

The original résumé's team metrics remain labeled as team/environment metrics. No new performance statistics, testimonials, availability claims, ratings, or employers have been added. The profile photo is the headshot supplied by Miles after the concept revision. It is resized and JPEG-compressed for the web, with no retouching or generative changes. The page uses a responsive CSS crop and a gold RPG / blue recruiter frame. The sidebar retains the MS monogram. Contact information is supplied in the current request: youshouldhiremiles@gmail.com and Google Voice (970) 658-9523. References remain available on request; no reference contact details are exposed.

Updated using the two original concept images supplied after the first delivery. The layout now follows their sidebar, profile header, compact strengths grid, expertise, summary, achievements, and next-step panels. Dark RPG mode uses gold trim and parchment accents; recruiter mode uses blue dashboard panels. The images are design references, not factual sources: their portrait, numeric ability scores, 4,000+ user claim, 99%+ SLA claim, and unverified skills have not been copied. The original repository remains the source for career content. Decorative UI is CSS and text; the reference images are not embedded as page backgrounds.

## Features

- Character sheet: dark teal palette, gold trim, supplied headshot, character profile, six strengths, class features, parchment summary, work stories, personal background, and optional troubleshooting choices.
- Recruiter mode: blue dashboard panels, cleaner typography, same factual content, no side quest. Preference is saved locally where browser settings allow.
- Native expandable stories, semantic headings, skip link, visible keyboard focus, announced interaction feedback, responsive sidebar and mobile menu with Escape support, reduced-motion support.
- Content and full navigation remain accessible without JavaScript. JavaScript enables the view controls and mobile collapsed navigation.
- Printable HTML résumé with a browser Print / Save as PDF button; no invented downloadable PDF.

## Validation

Passed: JavaScript syntax; scripted interaction tests for both modes, button pressed states, blocked local storage, mobile menu open/close, Escape focus return, desktop resize, all three side-quest responses; HTML checks for duplicate IDs, internal anchors, local-file links, and missing linked assets.

Limit: automated interaction tests used a simulated DOM. The preview browser could not connect to the local server, so actual browser rendering, phone layouts, screen reader behavior, and printed page layout were not visually verified. Check these before launch. No claim of WCAG certification is made.

## Editing

Edit content in `index.html` and `resume.html`; styling in `style.css`; interactions in `script.js`. Save as plain text, not a rich-text HTML export (the original homepage had been converted by Cocoa HTML Writer). Open `index.html` locally for a quick review. If desired, run `python3 -m http.server 8000` in this folder and open http://localhost:8000.

Personal content belongs to Miles Storm. No third-party visual assets are bundled.

## Headshot

`assets/miles-storm-headshot.jpg` is the optimized 800 × 800 version of the supplied image. Keep the `assets` folder beside `index.html` when uploading to GitHub. The same photo appears in both modes. To replace it later, save a new image at that path (or update the image path and dimensions in `index.html`). Adjust `object-position` on `.identity-art.portrait img` in `style.css` to reposition the visible crop. The original full-resolution file is not bundled.
