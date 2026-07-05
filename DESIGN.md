---
name: "非前端人的前端战术手册"
description: "A practical frontend handbook for non-frontend teammates, written as a calm, readable brand surface."
colors:
  paper-warm: "oklch(96.8% 0.007 84)"
  surface: "oklch(99.2% 0.003 85)"
  surface-raised: "oklch(97.6% 0.004 85)"
  ink: "oklch(22% 0.03 259)"
  muted-ink: "oklch(54% 0.016 255)"
  border: "oklch(76% 0.015 252)"
  accent: "oklch(66% 0.205 38)"
  accent-strong: "oklch(60% 0.22 35)"
  warning: "oklch(88% 0.18 96)"
  success: "oklch(74% 0.12 150)"
typography:
  display:
    fontFamily: '"Archivo Expanded", "Space Grotesk", "Helvetica Neue", sans-serif'
    fontSize: "clamp(56px, 8vw, 104px)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: '"Archivo Expanded", "Space Grotesk", "Helvetica Neue", sans-serif'
    fontSize: "clamp(32px, 4vw, 56px)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  title:
    fontFamily: '"Archivo Expanded", "Space Grotesk", "Helvetica Neue", sans-serif'
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: '"Instrument Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0"
  label:
    fontFamily: '"IBM Plex Mono", "JetBrains Mono", ui-monospace, monospace'
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: "0.08em"
rounded:
  sm: "10px"
  md: "16px"
  lg: "22px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  "3xl": "72px"
  "4xl": "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    rounded: "12px"
    padding: "13px 18px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "12px"
    padding: "13px 18px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "12px"
    padding: "13px 18px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "26px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "12px"
    padding: "13px 14px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "0px"
    padding: "0px"
---

# Design System: 非前端人的前端战术手册

## 1. Overview

**Creative North Star: "The Warm Workshop Manual"**

This system feels like a practical manual laid out on warm paper, with sharp ink, generous spacing, and just enough color to point the eye at what matters. It should read as calm, direct, and trustworthy, not as a flashy product launch or a dense technical reference.

The interface is meant for people with some internet-product literacy, including designers, product people, operations, and backend engineers. They should be able to scan a page, understand the hierarchy quickly, and leave with a usable mental model for describing HTML, CSS, JavaScript, React, and common UI components.

The system explicitly rejects crowded, compressed layouts, template-like AI card walls, and classroom-style “front-end for front-end engineers” presentation. It should feel like a clear working surface, not a document dump.

**Key Characteristics:**
- Quiet, useful, and structurally clear
- Warm neutrals with one ember accent
- Large typography, modest density, and visible breathing room
- Flat surfaces at rest, motion only when it earns attention
- Navigation that supports scanning without overpowering the content

## 2. Colors

The palette is restrained and paper-like, with one ember accent carrying the main signals.

### Primary
- **Ember Accent** (`oklch(66% 0.205 38)`): Primary actions, highlighted terms, active states, and the strongest attention cue on the page.
- **Ember Strong** (`oklch(60% 0.22 35)`): Slightly deeper emphasis for labels and markers that need to feel more deliberate than the main accent.

### Secondary
- **Signal Warmth** (`oklch(88% 0.18 96)`): A supportive warm state for pills, badges, and gentle emphasis that should feel noticeable but not loud.

### Neutral
- **Warm Paper** (`oklch(96.8% 0.007 84)`): Main page background.
- **Soft Surface** (`oklch(99.2% 0.003 85)`): Card and panel fill.
- **Raised Surface** (`oklch(97.6% 0.004 85)`): Slightly stronger surface for grouped areas and secondary panels.
- **Ink** (`oklch(22% 0.03 259)`): Primary text and strong outlines.
- **Muted Ink** (`oklch(54% 0.016 255)`): Supporting body copy and secondary labels.
- **Border** (`oklch(76% 0.015 252)`): Dividers, strokes, and quiet separations.

### Semantic
- **Success** (`oklch(74% 0.12 150)`): Positive states only, not decorative color.

**The One Ember Rule.** The accent is a signal, not wallpaper. Use it on actions, active states, and important words, not as a constant background wash.

## 3. Typography

**Display Font:** Archivo Expanded, with Space Grotesk and Helvetica Neue as fallback
**Body Font:** Instrument Sans, with Inter and system sans fallback
**Label/Mono Font:** IBM Plex Mono, with JetBrains Mono and ui-monospace fallback

**Character:** The display face feels broad, forceful, and editorial. The body face stays plainspoken and readable. The mono face is for labels, prompts, and code-like details, so the page can switch into “working notes” without changing its voice.

### Hierarchy
- **Display** (800, `clamp(56px, 8vw, 104px)`, `1.02`): Hero headlines and the strongest statements.
- **Headline** (800, `clamp(32px, 4vw, 56px)`, `1.08`): Section titles and major page headings.
- **Title** (700, `22px`, `1.15`): Component names, card headings, and lesson subsection titles.
- **Body** (400, `17px`, `1.55`): Explanation text and longer reading blocks, with a comfortable line length.
- **Label** (700, `11px`, `0.08em`, uppercase): Eyebrows, chips, tab labels, and structural metadata.

**The Contrast Rule.** The page should feel bold through size and weight contrast, not through decorative flourishes.

## 4. Elevation

The system is mostly flat. Depth is created with borders, spacing, and a small amount of hover shadow, not with layered glass or heavy elevation stacks. Most surfaces sit directly on the warm background and become tactile only when they need to be clickable.

### Shadow Vocabulary
- **Hover Lift** (`0 14px 30px color-mix(in oklab, var(--fg) 10%, transparent)`): Used on buttons and interactive controls on hover only.

**The Flat-By-Default Rule.** Resting surfaces stay calm and grounded. Shadows are a response to interaction, not a permanent decoration.

## 5. Components

### Buttons
Buttons are compact, confident, and easy to scan.
- **Shape:** 12px radius
- **Primary:** Ember background, light text, `13px 18px` padding
- **Hover / Focus:** Lift by 2px and pick up a soft shadow
- **Secondary / Ghost:** Neutral surface or transparent background, same radius and padding, used for lower-priority actions

### Cards / Containers
Cards are reserved for genuinely distinct chunks of content, not for every section.
- **Corner Style:** 16px radius
- **Background:** Soft Surface on Warm Paper
- **Border:** 1.5px ink border, no decorative side stripes
- **Internal Padding:** 26px for regular cards, a little more for dense content groups

### Inputs / Fields
Inputs feel like practical form controls, not ornamental objects.
- **Style:** 12px radius, 1.5px ink border, soft surface fill
- **Focus:** Keep the focus state visible and direct
- **Error / Disabled:** Use clear, high-contrast states and do not hide feedback in faint color changes

### Navigation
Navigation is thin, sticky, and useful.
- **Style:** Uppercase mono labels for structural clues, regular text for the main nav links
- **Default / Hover / Active:** Hover is a simple darkening; active state is a clear, readable change
- **Mobile Treatment:** Collapse cleanly, keep the order obvious, and avoid over-compressing the links

### Lesson Panels and Playgrounds
The lesson pages use a split, editorial structure: explanation first, then a demo surface, then the prompt or supporting note. The panels should feel roomy enough to read, but never so loose that the rhythm disappears.
- **Shape:** Rectangular, lightly rounded, flat at rest
- **Padding:** Larger than a generic app card, because the content is educational and needs air
- **Behavior:** Preview and prompt toggles should be obvious, not hidden

### Signature Component: Hero + Path List
The homepage uses a large hero followed by a vertically paced path list. That combination is the visual signature of the site, and it should stay legible even when content changes.

## 6. Do's and Don'ts

### Do:
- **Do** keep sections readable at a glance, with generous vertical rhythm between major blocks.
- **Do** use the accent color sparingly for actions, active states, and key terms.
- **Do** keep body copy around 65 to 75 characters per line when possible.
- **Do** let examples and interactive surfaces do the teaching, not just paragraphs of explanation.
- **Do** preserve the calm, practical tone from the product brief: clear, direct, and usable.

### Don't:
- **Don't** compress the layout into a dense, document-zip feel.
- **Don't** build identical card grids everywhere or nest cards inside cards.
- **Don't** center everything and turn the site into a generic landing-page template.
- **Don't** lean on border-left or border-right as a colored emphasis stripe.
- **Don't** make it feel like a classroom for front-end engineers instead of a handbook for non-front-end teammates.
- **Don't** use pure marketing gloss, glassmorphism, or over-decorated AI-looking surfaces.
