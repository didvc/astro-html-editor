# astro-html-editor

[![npm](https://img.shields.io/npm/v/astro-html-editor)](https://www.npmjs.com/package/astro-html-editor) [![npm downloads](https://img.shields.io/npm/dm/astro-html-editor)](https://www.npmjs.com/package/astro-html-editor) [![Docs](https://img.shields.io/badge/docs-yuis--ice.github.io%2Fastro--html--editor-blue)](https://yuis-ice.github.io/astro-html-editor/) [![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](LICENSE)

**[Full documentation →](https://yuis-ice.github.io/astro-html-editor/)**

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
git clone https://github.com/yuis-ice/astro-html-editor
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

- [**go-filemanager**](https://github.com/didvc/go-filemanager) — 🗂️ Modern web-based file manager built with Go. Features file preview, UTF-8 support, responsive design, and secure file operations.
- [**html-bio-generator**](https://github.com/didvc/html-bio-generator) — A modern, intuitive tool for creating beautiful HTML bio pages with ease. Built with Next.js, TypeScript, and Tailwind CSS. Perfect for developers, freelancers, and content creators.
- [**image-gallery-app**](https://github.com/didvc/image-gallery-app) — 🖼️ Modern minimalist image gallery built with Express.js and Vue.js - featuring drag & drop upload, responsive design, and clean aesthetics
<!-- END gh-mutual-linking -->