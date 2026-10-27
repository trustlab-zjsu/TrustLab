# Gallery and shared visual style

The homepage keeps Welcome → News → Research. The navigation includes a separate **Gallery** page after News and before Contact. Gallery is a photo-only collection: laboratory images, award/certificate photos, competition/project photos, group photos and conference photos. It has no separate award-record cards. The page and category filters remain available while the collection is empty, with one restrained “Photos coming soon” state rather than invented photos or achievements.

## Gallery content

Add confirmed photos to `app/gallery.ts`:

- Required: `id`, `title`, `image`, `imageAlt`, `category`.
- Category: `lab`, `awards`, `competitions`, `projects`, `group`, or `conferences`.
- Optional: `date`, `caption`, `width`, `height`.

Use original activity photos/certificates, with short English captions when useful. Store assets under `public/gallery/`, with short stable filenames and `/gallery/photo-name.jpg` paths in the data. The GitHub Pages base path is applied automatically.

The photo wall uses three columns on desktop, two on narrower desktop/tablet screens and one on mobile. Original aspect ratios are preserved, including tall certificates. Selecting a category filters the photos; clicking a photo opens the full original image. No sample content is shipped in the public data collection.

## News

Display dates only, with no Published/Accepted/Posted prefix or clock time. Keep each date's confirmed precision; timestamps are converted to the Hangzhou calendar date. Source labels/timestamps remain available in the content data for provenance.

“Within a month” is implemented as a rolling **30 days / 720 hours**. Only full dates/timestamps qualify for New; year/month-only and future records do not. The badge refreshes once a minute and when the tab becomes visible. Do not change an older record's date merely to trigger New.

## Glass-inspired surfaces

Main panels use a 28px radius, internal photo/research/member cards 18px, and images 14px. The header floats above the page in a translucent shell with layered edge highlights, broad soft shadows and a sliding navigation lens. Section headings share the content surface rather than using separate tinted bands. White surfaces remain highly opaque behind long text. Actual backdrop blur is limited to the header, sidebar and image-dialog backdrop; text and photos are never refracted or distorted.

A one-pixel masked rim provides the specular edge. On fine pointers only, requestAnimationFrame throttles the rim highlight position; it does not tilt cards or move their content. Touch devices keep static highlights. Navigation lens placement updates on route/menu changes, resize and font loading; hover/focus can preview an item and leaving restores the current-page indicator.

Browsers without backdrop-filter retain readable white surfaces. Increased-contrast and reduced-transparency preferences remove blur and use opaque panels. Reduced-motion preferences disable lens transitions, pointer-driven highlights and hover movement. Keyboard focus outlines remain visible. With JavaScript disabled, the current-page navigation link retains its static selected appearance.

This is a restrained web interpretation, not a reproduction of Apple's native Liquid Glass material. Reference: https://developer.apple.com/design/human-interface-guidelines/materials .
