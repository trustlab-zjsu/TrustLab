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

Main panels retain their 24px radius; internal photo/research/member cards use 16px and images 12px. A pale ambient background, translucent white surfaces, fine bright edges and restrained shadows provide depth. Actual backdrop blur is limited to the header and sidebar; text-heavy content uses high-opacity white surfaces to retain contrast. There is no animated refraction or distortion of text/photos.

Browsers without backdrop-filter retain readable white surfaces. Increased-contrast and reduced-transparency preferences remove blur and use opaque panels. Reduced-motion preferences disable hover movement.

This is a restrained web interpretation, not a reproduction of Apple's native Liquid Glass material. Reference: https://developer.apple.com/design/human-interface-guidelines/materials .
