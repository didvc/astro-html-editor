English · [日本語](README-ja.md) · [繁體中文](README-zh-TW.md) · [简体中文](README-zh.md) · [Deutsch](README-de.md) · [Español](README-es.md)

# astro-html-editor

[![npm](https://img.shields.io/npm/v/astro-html-editor)](https://www.npmjs.com/package/astro-html-editor) [![npm downloads](https://img.shields.io/npm/dm/astro-html-editor)](https://www.npmjs.com/package/astro-html-editor) [![Docs](https://img.shields.io/badge/docs-didvc.github.io%2Fastro--html--editor-blue)](https://didvc.github.io/astro-html-editor/) [![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](LICENSE)

[Full documentation →](https://didvc.github.io/astro-html-editor/)

A self-hosted HTML editor with live preview. Paste or write HTML on the left, see the result on the right. Files are saved to the server filesystem immediately — no localStorage, no manual download step.

Built with Astro SSR and plain JavaScript. No React, Vue, or Svelte.

![screenshot](screenshot.png)

## Install

```bash
# Run without installing
npx astro-html-editor

# Or install globally
npm install -g astro-html-editor
astro-html-editor
```

Opens at `http://localhost:4321`. Files are saved to `./data/` in the current directory.

## From source

```bash
git clone https://github.com/didvc/astro-html-editor
cd astro-html-editor
npm install
npm run build
npm start
```

For development (hot reload):

```bash
npm run dev
```

## Features

- Split-pane editor (textarea) + live preview (iframe srcdoc)
- Server-side file persistence via `node:fs` — survives browser crashes
- Immediate sync on paste, debounced sync on keystroke (800ms)
- Atomic writes (`tmp` → `fs.rename`) to prevent partial saves
- File management: New, Save As, Rename, Clone, Load, Copy, Download, Reset, Open in new window
- Files organized under `data/YYYY-MM/` with URL-based routing (`/file/YYYY-MM/name`)
- Tab key inserts 2 spaces; Ctrl+S triggers immediate save
- Line-number gutter synced to scroll position
- Dark theme (Tokyo Night palette)

## Self-Hosting

Files are written to `./data/YYYY-MM/` relative to the working directory. Mount a persistent volume at `./data/` if running in Docker.

The `/api/*` endpoints have no authentication. Do not expose the server to the public internet without adding your own access control (reverse proxy, firewall rule, etc.).

Set `PORT` to change the port:

```bash
PORT=8080 astro-html-editor
```

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/api/sync` | Write file to disk |
| `GET` | `/api/files` | List saved files with byte sizes |
| `POST` | `/api/new` | Create file with default template, return slug |
| `POST` | `/api/rename` | Rename file on server |
| `POST` | `/api/clone` | Duplicate file, return new slug |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Apache 2.0

<!-- BEGIN gh-mutual-linking -->

---

### Related projects

- [chatnote](https://github.com/didvc/chatnote) — Self-hosted note-to-self chatrooms. Privacy-first by design, infinite rooms, Markdown, ephemeral/incognito room types, image uploads, tags, JSON…
- [react-image-editor](https://github.com/didvc/react-image-editor) — A powerful web-based image editor built with React, TypeScript, and Canvas API. Features real-time filters, transformations, crop tool, and…
- [wasm-boilerplate](https://github.com/didvc/wasm-boilerplate) — 🚀 A modern, production-ready boilerplate for Node.js TypeScript WebAssembly applications with performance optimization and graceful JavaScript…
- [html-bio-generator](https://github.com/didvc/html-bio-generator) — A modern, intuitive tool for creating beautiful HTML bio pages with ease. Built with Next.js, TypeScript, and Tailwind CSS. Perfect for…
- [text-to-speech](https://github.com/didvc/text-to-speech) — 🎤 VoiceFlow - Modern text-to-speech web application with real-time word highlighting, customizable voice settings, and content management. Built…
- [molecular](https://github.com/didvc/molecular) — 🧬 Interactive web application for visualizing and animating molecular structures. Built with React, TypeScript, and modern web technologies for…
- [hugo-kawaii](https://github.com/didvc/hugo-kawaii) — A modern and cool Hugo theme with beautiful kawaii aesthetics, dark mode support, and delightful animations
<!-- END gh-mutual-linking -->