---
version: alpha
name: Crav Burgers
description: A loud, playful burger brand system built around oversized display type, warm cream surfaces, and punchy tomato-red accents.
colors:
  primary: "#f91814"
  secondary: "#f5e3cd"
  tertiary: "#f1b100"
  neutral: "#ffffff"
  surface: "#f5e3cd"
  on-surface: "#1f1a17"
  error: "#f91814"
typography:
  headline-display:
    fontFamily: Mouse Memoirs
    fontSize: 246px
    fontWeight: 400
    lineHeight: 295px
    letterSpacing: 0px
  headline-lg:
    fontFamily: Mouse Memoirs
    fontSize: 170px
    fontWeight: 400
    lineHeight: 170.1px
    letterSpacing: 0px
  headline-md:
    fontFamily: Mouse Memoirs
    fontSize: 118px
    fontWeight: 400
    lineHeight: 142px
    letterSpacing: 0px
  headline-sm:
    fontFamily: Mouse Memoirs
    fontSize: 82px
    fontWeight: 400
    lineHeight: 98px
    letterSpacing: 0px
  body-lg:
    fontFamily: Modak
    fontSize: 56.7px
    fontWeight: 400
    lineHeight: 85px
    letterSpacing: 0px
  body-md:
    fontFamily: Modak
    fontSize: 32px
    fontWeight: 400
    lineHeight: 48px
    letterSpacing: 0px
  body-sm:
    fontFamily: Modak
    fontSize: 24px
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: 0px
  label-lg:
    fontFamily: Mouse Memoirs
    fontSize: 37.8px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0px
  label-md:
    fontFamily: Mouse Memoirs
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0px
  label-sm:
    fontFamily: Mouse Memoirs
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0px
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 16px
  xl: 32px
  full: 9999px
spacing:
  xs: 24px
  sm: 42px
  md: 94px
  lg: 132px
  xl: 162px
  gutter: 24px
  margin: 32px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 17px 47px
    height: 91px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 17px 47px
    height: 91px
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 12px 20px
    height: 56px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 16px
  input:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    padding: 16px
    height: 56px
  chip:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 10px 16px
---

# Crav Burgers

## Overview
Crav Burgers is a high-energy, playful food brand with an oversized personality and a retro-poster feel. The visual tone is loud, cheerful, and appetite-forward, aimed at grabbing attention quickly and making the menu feel fun rather than refined. Layouts should feel spacious enough to let the typography breathe, but bold enough to keep the page visually packed with character.

## Colors
- **Primary (#f91814):** The signature tomato-red used for hero type, key buttons, and strong brand moments. It is the loudest color in the system and should carry most of the visual energy.
- **Secondary (#f5e3cd):** A warm cream background that softens the intensity of the red and gives the site its toasted-paper, diner-poster atmosphere.
- **Tertiary (#f1b100):** A mustard-yellow accent used sparingly for sticker-like callouts and flavor tags. It adds contrast without competing with the primary red.
- **Neutral (#ffffff):** Used for outlines, highlights, and text contrast where a clean bright edge is needed.
- **On-surface (#1f1a17):** A dark near-black for supporting copy and utility text when red would be too intense or low-contrast.
- **Error (#f91814):** Error states should not introduce a new hue; they should reuse the brand red to stay visually consistent.

## Typography
The system relies on two expressive display fonts: Mouse Memoirs for headlines, buttons, and navigational labels, and Modak for smaller supporting copy. Mouse Memoirs carries the brand’s tall, condensed, hand-drawn energy, while Modak adds a bouncy, chunky feel that works well for short promotional text and flavor descriptions.

Headlines are intentionally enormous, with `headline-display` and `headline-lg` creating the signature billboard effect seen in the hero. These styles stay at 400 weight with tight, straightforward tracking and generous line heights to preserve legibility at extreme sizes. Body styles use Modak and should remain punchy, short, and highly expressive rather than dense editorial paragraphs.

Labels and buttons use Mouse Memoirs to keep interactive elements aligned with the brand’s playful identity. Text is generally set in sentence case or all caps depending on the component, but without extra letter-spacing or formal typographic restraint.

## Layout & Spacing
The layout is image-led and headline-dominant, with very large hero typography spanning nearly the full viewport width. A fixed-max-width feel is implied by the centered composition, but the hero wordmark intentionally breaks out visually to create a cinematic, poster-like scale.

Spacing follows a loose rhythm with large vertical breathing room between the hero, supporting imagery, and lower copy. Use the spacing scale as broad sectional intervals rather than a strict dense grid: `xs` for small separations, `sm` for modest cluster spacing, and `md` through `xl` for major page breaks. Cards and small UI surfaces should keep compact internal padding, while major sections should feel expansive and airy.

## Elevation & Depth
The system is mostly flat and relies on contrast, scale, and outlines rather than shadow. The strongest depth cue comes from white stroke-like edging around red typography and the layered sticker treatment on yellow callouts.

Use shadows sparingly; the screenshot favors crisp, poster-style layering over material elevation. Surfaces should typically remain flush to the background, with borders and color blocking doing the work of hierarchy.

## Shapes
The shape language is soft and rounded, especially for buttons and pill-shaped utilities. `rounded.full` defines the dominant interactive form, creating a friendly, snackable feel that matches the food category.

Smaller content containers can use subtle radii like `rounded.md`, but the brand’s most visible controls should remain fully pill-shaped. Overall, the geometry should feel approachable, bubbly, and a little exaggerated rather than sharp or architectural.

## Components
Buttons are highly stylized and should feel like candy-coated signage. `button-primary` uses the red fill with cream text for the main action, while `button-secondary` uses a transparent interior with a red outline and red text for a less dominant action. Both should stay tall, wide, and pill-shaped with generous horizontal padding and a minimum height that preserves the chunky look. `button-tertiary` is reserved for quieter utility actions and should remain simpler, smaller, and less attention-grabbing.

Cards should stay minimal and warm, using `card` with the cream surface, subtle border, and modest `rounded.md` corners. They are supporting containers, not prominent depth objects, so avoid heavy shadows or contrasting overlays.

Inputs should follow the same friendly rounded language as buttons, but with quieter contrast and clearer readability. Use pill-shaped fields for search, filter, or newsletter-style interactions so they feel consistent with the brand’s approachable tone.

Chips and small tags should act like sticker labels: bold, colorful, and compact. The `chip` token should be used for promotional callouts like flavor notes, limited-time badges, or descriptor stickers placed over imagery.

Navigation controls should remain simple and legible, with icon-plus-text treatments kept inside pill outlines or solid pills. The brand thrives when the interface feels like a series of bold edible stickers rather than a standard corporate UI.

## Do's and Don'ts
- Do keep typography oversized and expressive, especially in hero and section headers.
- Do use the cream background as the default surface to let the red color pop.
- Do favor pill-shaped buttons and rounded utility controls for the brand’s friendly tone.
- Do keep layouts spacious, with generous vertical separation between major story beats.
- Don't introduce cool-toned or muted palettes that dilute the warm fast-food energy.
- Don't rely on heavy shadows or glossy effects; use flat color blocks and outlines instead.
- Don't set long-form copy in the display fonts at small sizes where readability suffers.
- Don't use sharp corners for primary actions or signature brand elements.
