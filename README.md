# Miles Storm — portfolio

A dependency-free personal portfolio for GitHub Pages. No paid fonts, subscriptions, tracking, server, or build step. All interactions run in the browser. Works at a user site or a project subpath.

## Before publishing

1. In `script.js`, fill in `CONTACT.email` and/or `CONTACT.linkedin` with your public contact details. Leave either blank to omit it. The page honestly shows a launch note until one is set.
2. Review the career claims in `index.html` and `resume.html`. They are drafted from supplied background, not an uploaded authoritative résumé. Verify exact credential names and dates. Add earlier job dates and education institutions if desired.
3. References are on request. Add actual quotes or public names only after receiving permission. No quotes are invented.
4. The résumé opens as an accessible HTML page; its Print / Save as PDF button uses the browser print dialog. It is not a pre-existing PDF attachment.

## Publish for $0 using GitHub’s website

1. Sign in to GitHub or create a free account.
2. Create a **public** repository named `YOURUSERNAME.github.io`, substituting your exact GitHub username. If that repository already exists, preserve its files and integrate these deliberately rather than overwriting it.
3. Extract the ZIP. Use **Add file → Upload files**, then upload `index.html`, `style.css`, `script.js`, `resume.html`, and `.nojekyll` into the repository root (not inside another folder). Commit to `main`. The empty `.nojekyll` file is optional for this site if your file picker hides it.
4. Open **Settings → Pages**. Under Build and deployment, select **Deploy from a branch**, `main`, and `/(root)`, then Save.
5. GitHub shows the publishing URL when deployment finishes: `https://YOURUSERNAME.github.io/`.
6. Check the page on your phone, try every interaction, verify your contact link, and print the résumé.

For a project repository named `portfolio`, the URL is `https://YOURUSERNAME.github.io/portfolio/`; all asset links here are relative and support that configuration.

## Local preview

Open `index.html` directly, or run `python3 -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Contents

- `index.html`: introduction, four expandable project stories, capabilities, personal story, interactive troubleshooting, contact and references.
- `style.css`: responsive layout, keyboard focus, reduced-motion support.
- `script.js`: contact configuration, die-roll wisdom, troubleshooting choices.
- `resume.html`: printable résumé with PDF export through the browser.

## Hosting scope

This is a personal career/project portfolio, without checkout, prices, order collection, or a commercial application. GitHub Pages is not permitted for sites primarily facilitating commercial transactions or running an online business. Review GitHub’s rules if you later turn this into a storefront:
https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

Publishing makes these files public. Keep confidential material and reference contact details out of the repository.

## Ownership

Personal content belongs to Miles Storm. No third-party asset dependencies.
