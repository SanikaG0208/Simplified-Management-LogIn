import { footerPageMetadata } from "./footerPages.js";
import { competitors } from "./comparisons.js";

export const navigation = [
  { href: "/services", label: "Product" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/integrations", label: "Integrations" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const pageMetadata = {
  ...footerPageMetadata,
  ...Object.fromEntries(competitors.map(competitor => [`/compare/${competitor.slug}`, [`Simplified Management vs ${competitor.name}`, competitor.description]])),
  "/": [
    "Every property, connected",
    "Connect properties, booking channels and partner accounts with Simplified Management.",
  ],
  "/services": [
    "Product",
    "Explore property management, channel connections, calendars, partner payouts and the AI Assistant.",
  ],
  "/solutions": [
    "Solutions",
    "Property management for vacation rentals, boutique hotels, serviced apartments and property managers.",
  ],
  "/pricing": [
    "Pricing",
    "Compare Owners and Hotels pricing, with GST-inclusive rates and monthly or yearly billing.",
  ],
  "/integrations": [
    "Integrations",
    "Explore the booking channels listed by Simplified Management and plan your connections.",
  ],
  "/blog": [
    "Blog",
    "Published guides on channel management, OTA distribution and property operations from Simplified Management.",
  ],
  "/contact": [
    "Contact",
    "Talk to Simplified Management in Pune about your property operations.",
  ],
  "/demo": [
    "Request Demo",
    "Request a personal Simplified Management walkthrough around your properties and priorities.",
  ],
};
