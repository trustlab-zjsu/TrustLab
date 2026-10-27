# Lab Life: photos and competition awards

The homepage keeps Welcome → News → Research. A separate **Lab Life** page combines **Honors & Awards** and **Gallery**. Its navigation item sits after News and before Contact. It is enabled automatically when at least one confirmed photo or award is added; empty collections produce no public route, navigation item, heading or placeholder. New awards may also be announced in News, while the permanent award record and associated photos live together here.

## Visual rules

- Main panels retain their 24px radius; internal cards use 16px and images 12px.
- Section heading backgrounds, supervisor/contact summaries and the welcome panel share one pale blue-to-white surface token. Text-heavy bodies remain white. Research/member/award cards share a lighter card surface token.
- Awards use two columns on desktop and one on mobile. Each entry leads with the prize and project, followed by the competition, year, team and optional certificate link. There are no invented rankings or award totals.
- The Gallery uses up to three equal columns, a consistent 3:2 preview and restrained captions. One or two photos expand to fill the row; mobile uses one column. Clicking a preview opens the full original photo, which is not cropped. `imagePosition` can adjust preview framing without altering the original.

## Materials needed

For Lab Life, provide original group/conference/activity photos with their event name, date and a short caption. Portraits and paper-method diagrams are not substituted for activity photos.

For Honors & Awards, provide the exact competition name, prize level, project title, award year and team members. A certificate or organizer's result announcement can supply the confirmation/link. Entering a competition alone is not an award.

Add confirmed English entries to `app/lab-life.ts`:

- `LabPhoto`: `id`, `title`, `image`, `imageAlt`; optional `date`, `caption`, `imagePosition`.
- `CompetitionAward`: `id`, `competition`, `prize`, `project`, `year`; optional `team`, `certificate`.

Store original website assets under `public/lab-life/` or `public/awards/` with short, stable filenames. Use `/lab-life/photo-name.jpg` or `/awards/certificate-name.pdf` in the data; the site's GitHub Pages base path is applied automatically.

For News, keep the date's actual known precision. Supply an exact acceptance/announcement date when available; an ISO timestamp must include `Z` or a numeric timezone offset. Do not use today's date merely to make an older item show the New badge.
