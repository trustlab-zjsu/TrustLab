# Gallery and shared visual style

The homepage keeps Welcome → News → Research. The navigation includes a separate **Gallery** page after News and before Contact. The photo-only Gallery has three categories: Laboratory, Awards and Conferences. Awards includes certificates and competition photos. An empty category shows “Photos coming soon”.

## Gallery content

Add confirmed photos or albums to `app/gallery.ts`:

- Each card needs `id`, `title`, `date`, `category`, and a nonempty `photos` list. Each photo needs `image` and `imageAlt`; `width`, `height`, and `thumbnail` are optional.
- Category: `lab`, `awards`, or `conferences`.
- Use `dateLabel` for an event date range when appropriate.

Use original activity photos or images rendered from the supplied certificates. Card captions display only a title and date; omit participant names from award captions. Store the full images in `public/gallery/` and smaller previews of the same proportions in `public/gallery/thumbs/`. Use `/gallery/photo-name.jpg` paths in the data; the GitHub Pages base path is applied automatically. For photographed certificates, correct perspective and lighting while preserving the original document contents.

The photo wall uses three columns on desktop, two on narrower desktop/tablet screens and one on mobile. Original aspect ratios are preserved. Put multiple photos from one conference in a single card; its first image is the cover, and clicking it opens all the photos on a dedicated album page. A single-image card opens the full-size image directly.

## News

Display dates only, with no Published/Accepted/Posted prefix or clock time. Keep each date's confirmed precision; timestamps are converted to the Hangzhou calendar date. Source labels/timestamps remain available in the content data for provenance.

“Within a month” is implemented as a rolling **30 days / 720 hours**. Only full dates/timestamps qualify for New; year/month-only and future records do not. The badge refreshes once a minute and when the tab becomes visible. Do not change an older record's date merely to trigger New.

## Glass-inspired surfaces

Main panels use a 28px radius, internal photo/research/member cards 18px, and images 14px. The header floats above the page in a translucent shell with layered edge highlights, broad soft shadows and a sliding navigation lens. Section headings share the content surface rather than using separate tinted bands. White surfaces remain highly opaque behind long text. Actual backdrop blur is limited to the header, sidebar and image-dialog backdrop; text and photos are never refracted or distorted.

A one-pixel masked rim provides the specular edge. On fine pointers only, requestAnimationFrame throttles the rim highlight position; it does not tilt cards or move their content. Touch devices keep static highlights. Navigation lens placement updates on route/menu changes, resize and font loading; hover/focus can preview an item and leaving restores the current-page indicator.

Browsers without backdrop-filter retain readable white surfaces. Increased-contrast and reduced-transparency preferences remove blur and use opaque panels. Reduced-motion preferences disable lens transitions, pointer-driven highlights and hover movement. Keyboard focus outlines remain visible. With JavaScript disabled, the current-page navigation link retains its static selected appearance.

This is a restrained web interpretation, not a reproduction of Apple's native Liquid Glass material. Reference: https://developer.apple.com/design/human-interface-guidelines/materials .
