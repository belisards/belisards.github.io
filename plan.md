# Theme Switcher — Full Visual Identity

## Overview
Add a theme switcher to the site that lets you toggle between different full visual identities. Each theme changes colors, fonts, backgrounds, spacing feel, and section styling across the whole site. Theme choice persists via `localStorage`.

## Themes (to start)

1. **Signal** (current) — Light cream canvas, dark ink, data-viz accent colors, DM Sans + JetBrains Mono
2. **Midnight** — Full dark mode. Near-black backgrounds, light text, muted accent glows. Statement section stays dark (no jarring transition from hero). Moody, editorial feel.
3. **Warm Paper** — Warm sepia/tan tones, softer contrast, slightly rounded feel. Think old-world print/journal aesthetic.

## Implementation Plan

### 1. Define theme CSS variables in `global.css`
- Move all color/font variables under `[data-theme="signal"]` (default)
- Add `[data-theme="midnight"]` with dark palette overrides
- Add `[data-theme="warm"]` with warm palette overrides
- Each theme overrides: `--canvas`, `--canvas-raised`, `--ink`, `--ink-secondary`, `--ink-tertiary`, all `--signal-*`, `--border`, `--glow-*`, `--shadow-*`, and `--font-display`

### 2. Update hardcoded colors in `index.astro`
- Replace hardcoded hex values (`#06060a`, `#ffffff`, `#f0eeeb`, etc.) with CSS variables so themes can override them
- Add new variables: `--hero-bg`, `--statement-bg`, `--logo-strip-bg`, `--panel-bg`
- Update the gradient bleed to use `var(--hero-bg)` instead of `#06060a`

### 3. Update `nav.css` hardcoded colors
- Replace `rgba(248, 247, 244, 0.92)` with `var(--nav-bg)` variable
- Replace other hardcoded nav colors with variables

### 4. Add theme switcher UI
- Add a small toggle button in `Nav.astro` (a simple icon/label that cycles through themes)
- Position it in the nav bar, after the links
- Minimal styling — just a mono-font label showing current theme name, clickable to cycle

### 5. Add theme switching logic
- In `BaseLayout.astro`, add an inline script (runs before paint) that:
  - Reads `localStorage.getItem('theme')`
  - Sets `document.documentElement.dataset.theme` immediately (avoids flash)
  - Defaults to `"signal"` if nothing stored
- In the nav toggle button, cycle through themes and save to `localStorage`

### 6. Build and deploy

## Files to modify
- `src/styles/global.css` — Theme variable definitions
- `src/pages/index.astro` — Replace hardcoded colors with variables
- `src/styles/nav.css` — Replace hardcoded nav colors with variables
- `src/components/Nav.astro` — Add theme toggle button + script
- `src/layouts/BaseLayout.astro` — Add theme initialization script (before paint)
