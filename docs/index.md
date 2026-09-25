---
layout: home

hero:
  name: "astro-html-editor"
  text: "Self-hosted HTML editor with live preview"
  tagline: Paste or write HTML, see the result instantly. Files land on the server filesystem — no localStorage, no manual download.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/didvc/astro-html-editor
    - theme: alt
      text: npm
      link: https://www.npmjs.com/package/astro-html-editor

features:
  - title: Server-side persistence
    details: Every keystroke (debounced) and every paste (immediate) writes to the server filesystem via node:fs. No browser storage involved.
  - title: Plain JavaScript
    details: No React, Vue, or Svelte. The editor is a textarea and the preview is an iframe. Fast, portable, easy to audit.
  - title: Atomic writes
    details: Files are written to a tmp path first, then renamed. A crash mid-write leaves the previous version intact.
  - title: URL-based routing
    details: Each file gets a permanent URL at /file/YYYY-MM/name. Paste the URL into another tab to reopen exactly where you left off.
  - title: File management
    details: New, Save As, Rename, Clone, Load, Copy, Download, Reset, and Open in new window — all from the toolbar.
  - title: Dark theme
    details: Tokyo Night color palette with WCAG AA contrast ratios verified across all text and status colors.
---
