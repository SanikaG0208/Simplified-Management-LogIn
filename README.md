# Simplified Management

Fresh React frontend, written from scratch. Source lives in `frontend`; generated website output lives in `dist`.

## Development

```sh
cd frontend
npm install
npm run dev
```

Run `npm run build` from the workspace root to create production output, or `npm run preview` to preview that output.

## Folder structure

```text
frontend/
  public/                 Static public assets
  src/
    components/
      layout/             Header and Footer
      ui/                 Brand and trusted UI icons
      home/               Homepage sections and ProductGallery
    data/                 Feature, FAQ and solution content
    pages/                Home, Product, Solutions, Pricing, Integrations,
                          Blog/article, Contact, Demo and not-found pages
    styles/               Global tokens, layout, homepage and page styles
    App.jsx               Application shell and client-side navigation
    main.jsx              React entry point
  index.html
  vite.config.js
  package.json
  scripts/
    generate-routes.mjs    Static page entries and per-page metadata
```

No backend is connected. The enquiry opens a draft in the visitor's email application. The product gallery uses three actual screenshots supplied by the business. Its first screenshot includes the app's demo-data notice. The mobile section uses the supplied dashboard and navigation-menu screenshots. No performance statistics, testimonials or customer affiliations are invented.

Photography by Roman Odintsov and Fernanda Neitzel, licensed through Pexels:
- https://www.pexels.com/photo/outdoor-swimming-pool-in-tropical-garden-4870581/
- https://www.pexels.com/photo/modern-cozy-apartment-living-room-interior-design-34166564/
- https://www.pexels.com/license/

Photos and Google Fonts use external URLs and require internet access. Contact details are taken from the business's public website.
The supplied full wordmark is used in the desktop header and footer. The supplied SM icon appears in the compact header, favicon and Apple touch icon. Product, channel and pricing copy is adapted from https://www.simplifiedmanagement.in/ , /integrations and /pricing. The requested header labels are preserved, with website destinations now pointing to the corresponding local routes. Login points directly to https://app.simplifiedmanagement.in/login; the built /login entry redirects to the same address.

The Blog includes four newly written operator playbooks with readable article pages, category filtering and links back to the original blog. No publication dates or authors beyond the business are invented. Contact and Request Demo each have dedicated pages; their forms prepare email drafts and do not send or store enquiries on a server.

Official channel logos are saved locally under frontend/public/images/channels. Their original verified URLs, sources and reuse notes are recorded in sources.json. SVGs are used where available; other marks keep official raster assets. The display identifies channels, not an endorsement or independently verified partnership.
The AI Assistant section highlights the assistant visible in the supplied screenshots without inventing specific capabilities. Its glass-architecture artwork is AI-generated and decorative; it is not a product screenshot. User-supplied screenshots remain original PNGs; the gallery supports original-pixel-size viewing and downloads. The mobile captures are 277 × 603 and 276 × 597 pixels, so sharper detail would require new, higher-resolution captures of the actual app.

The demo overview uses `demo-overview-clean.png`: the blue mascot and floating toolbar have been removed from the blank bottom-right area through a user-approved precise pixel edit. Its original 1917 × 1033 resolution and all pixels outside that area are preserved. The unedited source is backed up outside the public assets.

