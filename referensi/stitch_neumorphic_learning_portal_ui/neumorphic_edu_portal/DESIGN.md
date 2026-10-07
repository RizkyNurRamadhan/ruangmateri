---
name: Neumorphic Edu Portal
colors:
  surface: '#f6f9ff'
  surface-dim: '#d5dae1'
  surface-bright: '#f6f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4fb'
  surface-container: '#e9eef5'
  surface-container-high: '#e4e9f0'
  surface-container-highest: '#dee3ea'
  on-surface: '#171c21'
  on-surface-variant: '#444650'
  inverse-surface: '#2b3136'
  inverse-on-surface: '#ecf1f8'
  outline: '#757681'
  outline-variant: '#c5c6d2'
  surface-tint: '#465b9d'
  primary: '#374d8e'
  on-primary: '#ffffff'
  primary-container: '#5065a8'
  on-primary-container: '#e3e7ff'
  inverse-primary: '#b5c4ff'
  secondary: '#006a68'
  on-secondary: '#ffffff'
  secondary-container: '#9af2ef'
  on-secondary-container: '#00706f'
  tertiary: '#86381d'
  on-tertiary: '#ffffff'
  tertiary-container: '#a54f32'
  on-tertiary-container: '#ffe2d9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b5c4ff'
  on-primary-fixed: '#00174d'
  on-primary-fixed-variant: '#2d4384'
  secondary-fixed: '#9af2ef'
  secondary-fixed-dim: '#7ed5d2'
  on-secondary-fixed: '#00201f'
  on-secondary-fixed-variant: '#00504e'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59e'
  on-tertiary-fixed: '#390b00'
  on-tertiary-fixed-variant: '#7a2f15'
  background: '#f6f9ff'
  on-background: '#171c21'
  surface-variant: '#dee3ea'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1.25rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3rem
---

## Brand & Style

This design system establishes a tactile, calm, and distraction-free learning environment for senior high school students (SMA Kelas 10–12). Designed to mitigate digital fatigue, the aesthetic adopts an updated, high-usability interpretation of Soft Neumorphism. Surfaces feel physically molded from a continuous, matte canvas rather than stacked like flat cards or floating sheets of paper.

### Brand Personality & Emotional Tone
- **Focus & Serenity:** The soft gray ambient palette reduces ocular strain during intense study sessions and exam preparation.
- **Physical Tactility:** Extruded shapes provide intuitive affordance, making UI controls feel tangible, interactive, and responsive without relying on loud, distracting colors.
- **Approachable Maturity:** Balances teenage engagement with academic rigor, avoiding infantile gamification while maintaining delight through delicate pressed, extruded, and beveled states.

### Design Movement: Modern Soft Neumorphism
The UI treats the viewport as a single sculpted slate. Elements exist in two primary physical states:
1. **Extruded (Convex/Raised):** Resting cards, actionable buttons, module tiles, and floating toolbars cast soft directional dual shadows (a diffused white specular rim from top-left, a soft cool shadow cast to bottom-right).
2. **Debossed (Concave/Inset):** Search inputs, empty answer slots, activated filters, progress tracks, and selected tab surfaces appear indented into the background using inner shadows.

## Colors

The palette is engineered specifically for optical balance across dual-shadow neumorphic surfaces. The base surface tone is neither stark white nor muddy gray, allowing both white specular highlights and soft drop shadows to render clearly without muddy artifacts.

### Canvas & Surface Architecture
- **Canvas Base (`#EBF0F7`):** The primary background color. All neumorphic elements share this exact surface fill to maintain the illusion of continuous material.
- **Highlight Shadow (`#FFFFFF` at 85% opacity):** Cast top-left (`-6px -6px 12px`).
- **Lowlight Shadow (`#BAC6D6` at 70% opacity):** Cast bottom-right (`6px 6px 12px`).
- **Text & Foreground Primary (`#242D3D`):** Deep slate-navy offering WCAG AAA contrast against the `#EBF0F7` base canvas.
- **Text Secondary (`#5E6C84`):** Mid-tone slate for supporting copy, timestamps, and metadata.
- **Text Muted / Placeholder (`#8C9BAE`):** Low-contrast copy inside debossed input containers.

### Subject & State Pastels
Accents are applied deliberately to iconography, subject identification chips, progress rings, and focal tags to preserve UI cleanliness:
- **Primary Indigo (`#5065A8`):** Exact sciences, primary actions, active navigation items, Mathematics, and Physics.
- **Secondary Teal (`#3D9896`):** Natural sciences, Biology, verified completions, and streak counters.
- **Warm Amber (`#D4883B`):** Social sciences, History, pending submissions, and flashcard review queues.
- **Tertiary Coral (`#D97757`):** Literature, Language, urgent deadlines, and critical exam countdowns.

## Typography

Plus Jakarta Sans is utilized across all typographic scales. Its clean geometric underpinning combined with warm, humanist terminal curves ensures high legibility on extruded surfaces without competing against shadow gradients.

### Typographic Hierarchy Rules
- **Headlines:** Use tighter letter spacing (`-0.01em` to `-0.02em`) and strong weights (`600` or `700`) to guarantee contrast against soft-surface backgrounds.
- **Body Content:** Kept at standard tracking with generous line-heights (`1.5` to `1.6`) to provide effortless reading during long study modules and test questions.
- **Labels & Tags:** Rendered in `500` or `600` weight with subtle tracking expansion for micro-readability on small debossed chips and interactive badges.

## Layout & Spacing

Neumorphic visual design requires greater breathing room than flat interfaces because diffuse shadows need space to fall naturally without overlapping neighboring elements.

### Layout Rhythm & Fluid Grid
- **Desktop (1024px+):** 12-column layout with `2.5rem` outer canvas padding and `1.5rem` gutters. Course sidebars and schedule docks stay fixed; content panes flow fluidly.
- **Tablet (768px - 1023px):** 8-column layout with `2rem` outer margin and `1.25rem` gutters. Sub-navigation collapses into horizontal debossed selector rails.
- **Mobile (< 768px):** 4-column layout with `1.25rem` outer margin and `1rem` gutters. Cards stretch across the grid; extruded components reduce their elevation radius to preserve tap targets and prevent visual clutter.

### Element Spacing Philosophy
- Never crowd extruded surfaces edge-to-edge. Maintain a minimum separation of `space-md` (`1.25rem`) between adjacent raised surfaces to prevent shadow collisions.
- Internal component padding relies on `space-md` or `space-lg` to create a pillow-soft margin around icons, titles, and metrics.

## Elevation & Depth

Visual hierarchy is conveyed entirely through modeled surface lighting rather than border lines or contrasting card fills. Every surface inherits `#EBF0F7` as its background baseline.

### Light Direction Standard
All light sources originate virtually from the top-left corner (`-45deg` relative angle). Shadow specifications:

1. **Resting Convex Elevation (Raised Surfaces, Cards, Modules):**
   - High Shadow: `-8px -8px 16px rgba(255, 255, 255, 0.9)`
   - Low Shadow: `8px 8px 16px rgba(186, 198, 214, 0.65)`

2. **Interactive Subtle Elevation (Buttons, Chips, Pill Selectors):**
   - High Shadow: `-4px -4px 8px rgba(255, 255, 255, 0.95)`
   - Low Shadow: `4px 4px 8px rgba(186, 198, 214, 0.6)`

3. **Debossed Inset Elevation (Inputs, Search, Activated States, Progress Wells):**
   - Inset High: `inset 4px 4px 8px rgba(186, 198, 214, 0.7)`
   - Inset Low: `inset -4px -4px 8px rgba(255, 255, 255, 0.9)`

4. **Floating Floating Depth (Modals, Context Overlays):**
   - High Shadow: `-14px -14px 28px rgba(255, 255, 255, 0.8)`
   - Low Shadow: `14px 14px 28px rgba(168, 182, 202, 0.7)`

Borders are prohibited except for a microscopic `1px` semi-translucent highlight (`rgba(255, 255, 255, 0.6)`) applied along the top rim of cards to simulate a beveled edge.

## Shapes

Organic, continuous curves are mandatory for authentic neumorphic light distribution. Sharp corners break ambient shadows, producing unnatural visual creases.

### Roundedness Standard
- **Base Components (`rounded-md` - 0.5rem / 8px):** Checkboxes, compact action items, and micro-badges.
- **Core Cards & Panels (`rounded-lg` - 1rem / 16px):** Module cards, flashcard tiles, quiz answer panels, and dialog surfaces.
- **Pills & Circular Triggers (`rounded-full`):** Filter chips, tab selectors, icon containers, floating action buttons, and segmented controls.

## Components

### Buttons
- **Standard Action:** Rendered on `#EBF0F7` with subtle convex shadows. Text uses `label-lg` in Primary Navy.
- **Pressed/Active State:** Transitions immediately to inset debossed shadows, giving realistic physical depression under tap or click.
- **Primary Pastel Variant:** Subtle tint overlay (e.g., Indigo `#5065A8` at 12% opacity) over the base canvas, maintaining matching dual shadows. White or saturated text marks primary prominence.

### Search Fields & Text Inputs
- Styled with the debossed inset elevation. The container appears carved out of the desktop.
- On focus, the inset shadow deepens slightly and gains an inner glow using the primary brand tint (`rgba(80, 101, 168, 0.25)`).

### Subject Cards & Flashcards
- **Resting:** Smooth extruded cards (`rounded-lg`) elevated via resting convex shadows. Top header features a subtle pastel category tag (e.g., Teal for Biologi, Amber for Sosiologi).
- **Interactive Flashcards:** Tap to flip triggers an extruded-to-pressed transition. The backside retains the same physical elevation, displaying review responses indented into debossed selection wells.

### Checkboxes & Radio Buttons
- Unchecked states exist as debossed circular/rounded squares indented into the page.
- Checked states extrude a small inner pill or display an engraved pastel-filled indicator with an inset checkmark.

### Progress Tracks & Quiz Progress
- Background track is a debossed linear trench (`inset 2px 2px 4px rgba(186, 198, 214, 0.6)`).
- Progress fill is a convex pill featuring a soft pastel gradient (e.g., Teal to Indigo) that visibly rides above the indented trench.

### Filter Chips
- Unselected chips sit gently raised from the canvas.
- Selected chips switch to debossed inset geometry with colored label typography, indicating that the filter has been "pressed in."