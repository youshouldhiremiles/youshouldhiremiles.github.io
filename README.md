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

The original résumé's team metrics remain labeled as team/environment metrics. No new performance statistics, testimonials, availability claims, ratings, or employers have been added. The profile photo is the headshot supplied by Miles after the concept revision. It is resized and JPEG-compressed for the web, with no retouching or generative changes. The page uses a responsive CSS crop and a amber RPG / teal recruiter frame. The sidebar retains the MS monogram. Contact information is supplied in the current request: youshouldhiremiles@gmail.com and Google Voice (970) 658-9523. References remain available on request; no reference contact details are exposed.

Updated using the two original concept images supplied after the first delivery. The layout now follows their sidebar, profile header, compact strengths grid, expertise, summary, achievements, and next-step panels. Both modes now draw on the banner artwork: charcoal shadows, teal workspaces, warm amber light, and muted brass. RPG mode uses amber accents and parchment; recruiter mode uses teal accents and clean panels. The images are design references, not factual sources: their portrait, numeric ability scores, 4,000+ user claim, 99%+ SLA claim, and unverified skills have not been copied. The original repository remains the source for career content. Decorative UI is CSS and text; the reference images are not embedded as page backgrounds.

## Features

- Character sheet: charcoal and teal palette, amber trim, supplied headshot, character profile, six strengths, class features, parchment summary, work stories, personal background, and optional troubleshooting choices.
- Recruiter mode: teal dashboard panels, cleaner typography, same factual content, no side quest. Preference is saved locally where browser settings allow.
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

## Artwork-led redesign

Both views use a shared palette derived from the supplied artwork: charcoal (#10191B), dark teal (#1A3032), amber (#E8B777), soft teal (#83D1CC), and warm ivory (#F1EEE5). RPG mode emphasizes lamplight and brass; recruiter mode emphasizes teal. The print résumé retains a simple light layout.

The text-free artwork is now the main header image, above the headshot and profile information. Its full panoramic composition remains visible without cropping. The quote appears as HTML below it, so it remains readable on phones and by assistive technology. The credit distinguishes Miles's original composition from the AI-generated text-free recreation.

`assets/technology-and-magic-no-text.jpg` is the web version of the recreated banner. The original uploaded banner remains bundled as `assets/technology-and-magic-banner.jpeg` but is not displayed. Keep the full assets folder when uploading.

Latest checks passed: existing simulated interaction checks, local asset links, anchors, unique IDs, image alternative text and dimensions, banner placement, CSS brace balance, sampled body/accent/button text contrasts, and ZIP integrity. Contrast samples are not a complete accessibility audit. Visual browser verification remains incomplete because local preview was unavailable in this session.

## RPG character-record update

RPG mode now uses a 3.5-era tabletop character-sheet-inspired presentation: pale parchment, forest-green ink, dark section bars, ruled identity fields, square portrait framing, six boxed ability rows, skills and training, feats and special abilities, and a campaign experience record. STR, DEX, CON, INT, WIS, and CHA labels are used as playful headings for the existing professional strengths; numerical ability scores and proficiency ratings are not invented. The artwork appears beneath the identity fields as campaign art.

Recruiter mode retains the previous teal-and-charcoal artwork-led design. The new styling is scoped to RPG mode and screen display. All existing career content, contact links, artwork, résumé, mobile navigation, and toggle remain. This is an original web layout inspired by tabletop record sheets; no official sheet artwork or logos are bundled.

Validation: passed local-link/anchor checks, unique IDs, image attributes, CSS brace balance, sampled paper/ink contrast, existing simulated interaction checks, and ZIP integrity. Visual browser verification remains incomplete.

## Latest refinement

RPG mode keeps the character-record layout, ruled identity fields, boxed ability rows, and skills/feats sections. Its charcoal, teal, amber, and ivory artwork palette is restored. The shared banner is again above the profile header in both views, using the same full-width image and quote treatment. The previous light parchment / green ink treatment is superseded. Recruiter mode remains unchanged.

## Matching profile dimensions

Recruiter mode now uses the RPG profile's portrait dimensions, grid columns, gaps, spacing, and typography at the same desktop/tablet/phone breakpoints. The ruled profile fields appear in both views to keep the profile height consistent. Section title sizes and body text scales also match RPG mode. The mode-specific labels, palette accents, and lower dashboard/character-sheet treatments remain.

## Gold mode-switcher animation

The oval around the mode switcher now has a rotating metallic-gold highlight and a second layer of small counter-moving glints. Both modes use the same effect. Only the perimeter animates; the labels and controls remain stationary and clickable. It is CSS-only, with a static gold border fallback, a still highlight for reduced-motion preferences, and a system-color outline in forced-colors mode. No new dependencies or image downloads.

The selected Recruiter Mode button uses the page’s teal gradient and pale text; the animated gold perimeter remains in both modes.

## Sliding mode selection

The mode switcher now uses a single pill-shaped highlight that slides between two equal-width buttons. Its color crossfades from amber in RPG mode to teal in recruiter mode. Gold perimeter glitter remains separate from the moving selection. The animation takes about 0.4 seconds; reduced-motion preferences switch instantly. The selected state remains exposed through the original button pressed states. No new JavaScript or dependencies.

## Amber RPG accents

RPG mode now carries amber through section titles, stat labels and frames, ruled fields, panel borders, skills tags, links, and selected side-quest buttons. The teal/charcoal backgrounds and existing layout remain. Recruiter styling is unchanged. The first stat is now a single `STR` label, eliminating the overlapping mode-specific STR/TECH text.

## Navigation order

The sidebar follows the page’s scrolling order: Character sheet / Overview, Feats & achievements / Selected work, Proficiencies / Technical skills, Campaign history / Experience, About, Contact / Quest board, then Résumé as the final link. The same order applies to the mobile menu.

## Recruiter-first welcome and footer invitation

First-time visitors now start in Recruiter mode. Existing saved preferences continue to take precedence, and the mode is remembered using browser local storage. If storage is unavailable, the page starts in Recruiter mode. In Recruiter mode, the footer return link reads “Meet the adventurer — try RPG mode ↑”; activating it selects RPG mode, saves that preference, and follows the top-of-page anchor. In RPG mode it reads “Back to top ↑” and returns to the top without switching. Keyboard focus follows to the top section, and scrolling respects reduced-motion preferences. Without JavaScript the link remains a normal “Back to top” anchor.

The footer invitation now works in both directions: Recruiter mode offers “Meet the adventurer — try RPG mode ↑”; RPG mode offers “See the professional — try Recruiter mode ↑”. Both save the selected mode, return to the top, and move keyboard focus to the top section.

## Footer invitation visibility

The footer offers the opposite mode only until the visitor uses a button in the top mode switcher. Once they do, it reads “Back to top ↑” in either mode and no longer switches views. A separate browser-local flag remembers top-toggle use on return visits; a saved mode alone does not count as toggle use. If storage is blocked, this behavior still works for the current page visit. Clearing site storage resets it. This records no identity and sends no tracking data.

## RPG rune background

Original vector linework in `assets/arcane-runes.svg` adds amber glyphs and circular sigils behind the scrolling content in RPG mode. The layer stays fixed as content scrolls, with a lower opacity on phones. Cards retain their readable surfaces; the decoration shows in gaps and open sections. It is hidden from assistive technology, ignores pointer input, and is absent in Recruiter mode, print, and forced-colors mode. No new animation or scroll event handlers are required. Upload the SVG with the rest of the assets folder.

## Confirmed switcher and Recruiter font refinement

Recruiter mode is now on the left of the top switcher and RPG mode on the right. The sliding thumb moves left for Recruiter / teal and right for RPG / amber. The gold perimeter animation and saved-preference behavior remain. The static button pressed states match the Recruiter-first HTML default.

Only the Recruiter profile below the banner now uses clean system sans-serif typography for the name, role, introduction, profile fields, profile card title, and working-style line. Existing font sizes, portrait dimensions, grid, and spacing remain. RPG typography and the entire artwork/quote block are unchanged.

## Recruiter terminal logo

The upper-left Recruiter logo is now the approved lowercase `<ms/>` monogram, cropped to reduce empty padding and optimized as `assets/ms-recruiter-logo.jpg` (640 × 230). It scales to the sidebar width, with compact mobile-header sizes. RPG mode retains its existing MS seal. The nearby Miles Storm text labels the home link; the image is decorative to avoid duplicate screen reader announcements.

## Final transparent logo pair

Both sidebar logos now use the approved transparent PNGs: `assets/ms-recruiter-logo.png` for Recruiter mode and `assets/ms-rpg-d20-logo.png` for RPG mode. They are optimized to matching 512 × 512 canvases and displayed at the same responsive width, so switching modes keeps the brand block aligned. Their baked-in shadows remain; no extra rectangular background or box shadow is added. The D20 retains its opaque dark teal interior. The earlier JPEG terminal logo remains bundled but is no longer referenced. Upload both new PNG assets with the site.

## Recruiter terminal cursor

A teal caret beside the Recruiter monogram blinks every 1.2 seconds, like a terminal cursor. It scales with the logo, ignores pointer input, and is hidden from assistive technology. Reduced-motion settings show a steady caret. The logo image and RPG D20 remain unchanged.

## Quieter mode-switcher shimmer

The gold perimeter now completes a brief three-second shimmer once per 30-second cycle, remaining stationary for the other 27 seconds. This starts on page load and repeats every 30 seconds. The sliding selection animation is unchanged, and reduced-motion preferences still disable the perimeter animation.

## Slow continuous gold flow

The intermittent shimmer is replaced by continuous slow movement: the broad metallic highlight completes a rotation in 60 seconds, with a softer secondary highlight moving in the opposite direction over 90 seconds. Sharp glitter streaks are replaced by broad, muted gradients. There are no pause/restart points; reduced-motion preferences keep the border still. The sliding toggle and terminal cursor are unchanged.

## Two gold highlights

The mode switcher now has two short, opposite gold arcs, each covering 36 degrees of the perimeter, with transparent gaps over the dark outline. Both move continuously together on the existing 60-second rotation. The full gold border, surrounding gold glow, and secondary highlight layer are removed. Reduced-motion preferences keep the two highlights still.

The two gold arcs now rotate in approximately 44.44 seconds, increasing their speed by 35% from the previous 60-second rotation. Their appearance is unchanged.

The two gold highlights now complete one full rotation every 15 seconds. Their appearance and reduced-motion behavior are unchanged.

## Approved animation speed

The two gold highlights now complete a full rotation every 5 seconds, matching the approved standalone preview. Their shape, colors, and reduced-motion behavior remain unchanged.

## First-activation D20 animation

The first deliberate switch into RPG mode during a page visit triggers one 1.6-second coin-like rotation around the logo's vertical axis, followed by one 0.7-second gold glint. Further switches during that visit do not replay it. Restoring a saved RPG preference on page load does not animate the logo. Both the top switcher and the footer invitation can trigger the effect. A new page visit resets the one-time animation. Reduced-motion preferences skip both effects.

## Temporary terminal cursor animation

The terminal cursor is steady by default. On the first deliberate switch into Recruiter mode per page visit, it blinks three times over 3.6 seconds, then returns to steady. It does not blink on initial page load, saved-preference restoration, or subsequent mode switches during that visit. This mirrors the D20's one-time activation behavior; each logo has its own independent first-activation flag. Reduced-motion preferences keep it steady.

The terminal cursor is now hidden at rest and disappears after its three-blink greeting. Reduced-motion preferences leave it hidden. The logo itself remains visible throughout.

## Logo animation on every mode change

Each deliberate mode change now plays the destination logo's animation: RPG spins the D20 and gives one gold glint; Recruiter blinks the cursor three times, then hides it. These replay on every return to a mode, rather than only the first time per visit. Initial page load and saved-preference restoration still do not animate the logos. Clicking the already-selected mode does not restart an effect. Reduced-motion preferences remain respected.

## Approved etched-metal D20 animation

The subtle gold-glint overlay is replaced by the approved metallic-face sequence. On every deliberate switch into RPG mode, the D20 spins once, holds an etched-gold metal appearance briefly, and fades back to the normal teal-and-amber logo. The sequence follows the six-second preview timing, settling back to normal by four seconds. The gold face is `assets/ms-rpg-d20-metal.png`; include it when publishing. Reduced-motion settings show the normal logo without the effect. Recruiter cursor behavior is unchanged.

## Banner quote attribution

The caption beneath the quote now credits Arthur C. Clarke, replacing the visible artwork-production credit and full-size text link. The artwork image itself remains linked to the full-size file. Artwork provenance remains documented above in this README.

## Final approved banner

The page now uses `assets/technology-and-magic-final-banner.jpg`, the approved refined artwork with the MS D20 lapel pin, gold glasses, feather quill, inkwell, dice, teacups, mixed blurred background, corrected monitor interface, and three subtle watermarks. The same banner appears in both modes at its natural aspect ratio. The Arthur C. Clarke quote and attribution remain below it. Earlier unwatermarked banner assets are no longer included in this publishing package. If replacing files in an existing repository, also remove the unused old `assets/technology-and-magic-no-text.jpg` and `assets/technology-and-magic-banner.jpeg` files there; uploading a ZIP's contents does not delete existing repository files. Earlier commits may still contain them.

## Mode-specific profile labels

Recruiter mode now labels the four profile fields Previous role, IT experience, Professional focus, and Location. RPG mode retains Character class, Experience, Alignment, and Home region. Field values and layout are unchanged.

## Approved abilities and aptitudes

The strengths section now uses the six descriptions developed with Miles: Technical depth & investigation; Adaptability & professional judgment; Composure & teamwork; Research & synthesis; Balanced judgment & accountability; Empathy & de-escalation. Both modes share the approved wording in STR, DEX, CON, INT, WIS, CHA order. RPG mode shows each stat beside its heading and description; Recruiter mode uses professional cards without the stat abbreviations. Supporting descriptions sit beneath headings and describe how Miles works, rather than repeating listed project achievements.

## Illustrated RPG skills tiles

RPG Skills & Training now presents the existing six competencies as amber-framed tiles with original inline vector icons for a computer, device stack, gear, mentoring, collaboration, and an open book. The panel fits its content instead of stretching to fill its grid row. Existing skill labels and tools remain unchanged. Recruiter mode keeps its previous icons and presentation; the new icons are hidden there. The decorative vectors need no external assets and are hidden from assistive technology.

## Approved 12-icon RPG proficiency grid

The framed tiles are replaced by the approved open grid of twelve amber fantasy-inspired icons. The original six competencies are joined by Identity & access (Okta, Active Directory), Workplace platforms (Google Workspace, Microsoft 365), Virtual desktops (VMware VDI), Collaboration & docs (Jira, Confluence), Scripting (PowerShell), and Live production (OBS). RPG mode no longer repeats those tools in a separate tag row. Recruiter mode retains its original six-icon grid and tools row. The grid adapts to available width; all icons are decorative inline vectors.

## Matching Recruiter expertise grid

Recruiter Technical expertise now mirrors the RPG section's twelve entries, order, icon size, spacing, and responsive column counts. Its icons use familiar professional motifs (devices, people, access lock, application grid, documents, terminal and video) in teal, with business typography. The separate Recruiter tool tags are removed because those tools now appear beneath the appropriate entries. RPG mode retains its amber fantasy counterparts.

## Approved profile simplification

Applied the reviewed two-column header in both modes: larger portrait, wider introduction and four profile fields; the redundant right-hand profile card and repeated specialty line are removed. The introduction beneath the role is the sole tagline. Recruiter fields use Role / Systems Engineer and IT experience / 20 Years. RPG uses Character class / Systems engineer and Experience / Level 20 Engineer. “Sheet 001” and arrows beside the two profile action links are removed. The Explore my work button fits its text with balanced padding. The header stacks on smaller screens. Banner, quote, skills grids, navigation, and animations remain unchanged.

## Navigation and destination headings

Each sidebar anchor now leads to a section with a matching heading in the selected mode: Overview / Character sheet, Selected work / Feats & achievements, Technical skills / Proficiencies, Experience / Campaign history, About me / About the adventurer, and Contact / Quest board. Expressive previous headings are retained as subtitles where appropriate. Experience is now a separate section rather than an anchor inside Skills. The original anchor URLs and scrolling order remain valid.

## Sectors served strip

The horizontal strip beneath the profile now lists Higher Education, Civic Infrastructure, Skilled Trades, Big Tech, and Private Technology Services. It retains the existing responsive layout and mode-specific colors. Detailed skills sections are unchanged.

## Consistent Recruiter summary styling

The Recruiter Professional summary now uses the same dark panel surface, teal heading, border, and muted body text as its neighboring cards. RPG Character background styling remains unchanged.

## Recruiter action color and arrow removal

Explore my work now uses the Recruiter teal fill, border, and pale text; RPG retains amber. Decorative arrows are removed from links throughout the portfolio and printable résumé, including sidebar Résumé, shortcut cards, contact email, experience/résumé links, back-to-portfolio, and the dynamic footer invitations. Link destinations, labels, focus styles, and behavior remain intact. Non-link skill icons are unchanged.

## Plain résumé presentation

The résumé page now uses black text on a white background with Helvetica and Arial/sans-serif fallbacks. Links, headings, metadata, and print controls are monochrome. Screen and print share the same typography; print hides the controls. Résumé content is unchanged. No external fonts or paid services are required.

## Complete technical résumé

The résumé page now contains the full supplied Miles Storm Technical Engineering Resume: professional summary, core strengths, five detailed roles (GoDaddy, The Brandt Companies, City of Tyler, Tyler Junior College, and Livewire PC Repair), technologies, education, and certifications. All source responsibilities, metrics, and dates are retained, with team SLA metrics still identified as team performance. Contact details include the supplied LinkedIn URL. The uploaded document is the source for this page, including the June 2026 GoDaddy end date and ACMT credential. Helvetica, black-on-white presentation, and print controls remain. Other portfolio sections have not been rewritten from this résumé.

The Contact section includes a direct LinkedIn text link beneath the phone number, using the current mode’s accent color and the LinkedIn URL supplied in the technical résumé.

## Social link and pronoun placement

The line above the banner now links to LinkedIn. Pronouns (they/them) appear subtly beside Miles Storm in the profile name, wrapping naturally on narrow screens. Location remains in the profile fields. Both modes retain their own accent colors; the Contact section’s LinkedIn link remains available.

## LinkedIn icon and tooltip

The social link above the banner now uses a single-color LinkedIn icon in the current theme accent, with a thin border and 3.5px padding matching the approved preview. A LinkedIn tooltip appears on mouse hover or keyboard focus. The link has a screen-reader label and visible keyboard focus; it keeps the existing profile URL. The Contact LinkedIn link remains text.


## Hidden arcade: Glass Cannon
The π immediately to the left of the footer copyright opens `game/index.html`. It matches the footer background at rest and becomes white on hover or keyboard focus. It has an accessible link name and supports touch. The game stays on its own page, so music only starts after entering the dungeon. A Return to portfolio link is in the game's side panel.

Publish the entire contents of this folder to the GitHub Pages repository, including the `game` folder and all files inside its `assets` and `audio` folders. No server, account, paid hosting, or build step is required. Game music attribution is in its footer and `game/MUSIC-CREDITS.txt`.

The easter egg is hidden for discovery, not password-protected; visitors can share its URL or find it in the page source. The standalone game demo is retained separately for further edits.

The bundled game now uses release controls: demo/practice buttons removed; music and sound effects have independent toggles, with Pause and Restart retained.
