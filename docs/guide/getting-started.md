# Getting Started

## Requirements

- Node.js 18 or later
- npm

## Install

```bash
git clone https://github.com/didvc/astro-html-editor
cd astro-html-editor
npm install
```

## Build and run

```bash
npm run build
npm start
```

The server starts at `http://localhost:4321`.

## Development mode

```bash
npm run dev
```

This starts the Astro dev server with hot reload. Changes to `.astro` and `.ts` files apply without a full rebuild.

## First use

1. Open `http://localhost:4321` in a browser.
2. Click **New** to create a file. The editor opens with a starter template.
3. Edit the HTML on the left. The preview on the right updates as you type.
4. Files save automatically. You can close the tab and reopen the URL to continue.

## Port

Astro's standalone adapter picks up the `PORT` environment variable:

```bash
PORT=8080 npm start
```
