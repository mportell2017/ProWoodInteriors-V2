---
version: alpha
name: Professional Wood Interiors
description: >-
  Warm, refined craftsman identity for a custom-cabinetry studio. Parchment and
  walnut grounds, brass and oxblood accents, and a serif-led type system that
  reads like an heirloom letterhead.
colors:
  parchment: "#FBF7F0"
  ink: "#23160F"
  umber: "#5B3A2A"
  walnut: "#2C1810"
  brass: "#B58B4B"
  oxblood: "#7A1D1D"
  cream: "#F1E7CF"
typography:
  h1:
    fontFamily: Fraunces
    fontSize: 3.75rem
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: -0.025em
  h2:
    fontFamily: Fraunces
    fontSize: 2.25rem
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.02em
  h3:
    fontFamily: Fraunces
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.015em
  body:
    fontFamily: Open Sans
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.65
  lead:
    fontFamily: Cormorant Garamond
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: 1.6
  nav:
    fontFamily: Cormorant Garamond
    fontSize: 1rem
    fontWeight: 600
    letterSpacing: 0.02em
  eyebrow:
    fontFamily: Open Sans
    fontSize: 0.6875rem
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.18em
  button:
    fontFamily: Open Sans
    fontSize: 0.75rem
    fontWeight: 500
    letterSpacing: 0.12em
rounded:
  sm: 0.125rem
  lg: 0.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-lg: 2rem
  section: 3rem
  section-lg: 4rem
  "18": 4.5rem
components:
  button-primary:
    backgroundColor: "{colors.oxblood}"
    textColor: "{colors.parchment}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 0.75rem 1.5rem
  button-outline:
    backgroundColor: "{colors.parchment}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 0.75rem 1.5rem
  button-ghost:
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 0.75rem 1.5rem
  card:
    backgroundColor: "{colors.parchment}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: 1.5rem
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav}"
  nav-link-hover:
    textColor: "{colors.oxblood}"
    typography: "{typography.nav}"
  eyebrow:
    textColor: "{colors.umber}"
    typography: "{typography.eyebrow}"
  section-parchment:
    backgroundColor: "{colors.parchment}"
    textColor: "{colors.ink}"
  section-walnut:
    backgroundColor: "{colors.walnut}"
    textColor: "{colors.parchment}"
  section-cream:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
---

## Overview

Professional Wood Interiors is a family-owned custom-cabinetry studio (founded
1985). The visual identity should feel like **handcrafted woodwork**: warm,
substantial, and quietly premium — never trendy, never generic. Think aged
parchment, walnut grain, and brass hardware.

The aesthetic direction is **refined, editorial, heirloom** — restraint over
intensity. Generous whitespace, a serif-led hierarchy, and a small disciplined
palette do the work. Avoid SaaS/AI-default looks (cool grays, electric blues,
purple gradients, geometric sans-serifs).

> **Runtime source of truth:** the live tokens live in `tailwind.config.js` and
> `app/globals.css`. This file is the *human- and agent-readable design
> contract* that explains intent. Keep the two in sync by hand; do not generate
> the Tailwind config from this file yet (the format is alpha).

## Colors

A six-color palette plus one secondary ground. Each color has one job — do not
repurpose them.

- **`parchment` `#FBF7F0`** — the default page ground and light surfaces. Also
  used as text on dark (`walnut`) sections.
- **`ink` `#23160F`** — primary body and heading text on light grounds.
- **`umber` `#5B3A2A`** — secondary text, eyebrows, hairlines, and dividers.
- **`walnut` `#2C1810`** — dark feature sections and the trust strip; pairs with
  `parchment` text and `brass` accents.
- **`brass` `#B58B4B`** — **accent only**: dividers, decorative flourishes,
  rating stars, hover hardware. Its contrast on light grounds is too low for
  body copy — never use it as text on `parchment`.
- **`oxblood` `#7A1D1D`** — **action only**: primary CTAs and active/hover link
  states. Reserve it so a CTA always reads as the most important thing on screen.
- **`cream` `#F1E7CF`** — an optional warmer secondary ground (`Section`
  `tone="cream"`) to vary rhythm between two parchment sections.

## Typography

Three families, each with a fixed role. Do not add a fourth.

- **Fraunces** (`--font-display`) — primary display/headings via the `Heading`
  component. Slightly calligraphic; carries craftsmanship without trendiness.
- **Open Sans** (`--font-sans`) — body copy, labels, eyebrows, button text.
  Quiet and readable; let the serifs carry personality.
- **Cormorant Garamond** (`--font-elegant`) — decorative accents: lead/intro
  paragraphs (often italic), nav links, and ornamental subheads.

Hierarchy: one `h1` per page (in the hero), then `h2` for major sections, `h3`
for subsections — no skipped levels (also an SEO rule). Eyebrows are 11px
uppercase with `0.18em` tracking in `umber`. Sizes above are the desktop
endpoints; headings scale down responsively (e.g. `h1` 2.25rem → 3.75rem).

## Layout & Spacing

- **Container:** centered, `max-width: 72rem`, horizontal padding `gutter`
  (1.25rem) on mobile and `gutter-lg` (2rem) from `sm` up.
- **Section rhythm:** vertical padding of `section` (3rem) by default,
  `section-lg` (4rem) for emphasis sections. Alternate `parchment` / `cream` /
  `walnut` grounds to pace a long page.
- **Grids:** mobile 1 column → tablet 2 → desktop 3–4. Favor generous negative
  space over density.
- Use the `Section` → `Container` → `Heading` composition rather than ad-hoc
  wrappers.

## Elevation & Depth

Shadows are warm and soft, tinted with the brown ink rather than neutral black,
so cards feel like they rest on wood rather than float on glass.

- Cards: `0 20px 50px rgba(44,24,16,0.10)`.
- Menus / overlays: deeper, e.g. `0 24px 60px rgba(44,24,16,0.18)`.
- The sticky header gains a subtle shadow only after scroll.
- Depth is subtle and purposeful — no hard drop shadows, no neon glows.

## Shapes

- **`rounded.sm` (0.125rem)** is the default radius for buttons, cards, inputs,
  and panels — crisp, almost square, like milled edges.
- **`rounded.lg` (0.5rem)** for soft interactive rows (e.g. mobile-menu items).
- **`rounded.full`** only for circular chrome (icon badges, avatars).
- Dividers use a hairline gradient rule (`.engraved-rule`) that fades at both
  ends, evoking an engraved line rather than a flat border.

## Components

Reuse the primitives in `components/ui/` — do not restyle from scratch.

- **Button** (`Button` / `ButtonLink`): variants `primary` (oxblood, the main
  CTA), `outline` (umber border on parchment), `ghost` (text only); sizes
  `sm` / `md` / `lg`. Label text is uppercase Open Sans with `0.12em` tracking.
- **Card:** translucent parchment surface, umber hairline border, warm soft
  shadow.
- **Section:** ground-tone wrapper — `parchment` (default), `cream`, `walnut`
  (dark), or `clear`.
- **Heading:** display heading with optional `eyebrow`, italic `accent`, and a
  decorative divider; `tone="dark"` for use on walnut.
- **Nav links:** Cormorant 600, `ink` at rest → `oxblood` on hover with an
  oxblood underline that scales in from center.

## Do's and Don'ts

**Do**
- Reserve `oxblood` for CTAs and active/hover link states.
- Keep `brass` to accents, dividers, and rating stars.
- Use the `Heading` / `Section` / `Container` / `Button` primitives.
- Keep one `h1` per page and a clean heading hierarchy.
- Pull NAP (name, address, phone) from `lib/business.ts` — never hardcode it.
- Tint shadows with brown ink, not neutral black.

**Don't**
- Don't use `brass` for body copy (insufficient contrast).
- Don't introduce a fourth typeface or default to system/geometric sans.
- Don't reach for cool grays, blue/purple gradients, or other SaaS-default looks.
- Don't add heavy/neon shadows or large border radii.
- Don't duplicate design values into components — reference the tokens above and
  the Tailwind config.
