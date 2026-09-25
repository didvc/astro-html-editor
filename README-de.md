[English](README.md) · [日本語](README-ja.md) · [繁體中文](README-zh-TW.md) · [简体中文](README-zh.md) · Deutsch · [Español](README-es.md)

# astro-html-editor

[![npm](https://img.shields.io/npm/v/astro-html-editor)](https://www.npmjs.com/package/astro-html-editor) [![npm downloads](https://img.shields.io/npm/dm/astro-html-editor)](https://www.npmjs.com/package/astro-html-editor) [![Docs](https://img.shields.io/badge/docs-didvc.github.io%2Fastro--html--editor-blue)](https://didvc.github.io/astro-html-editor/) [![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](LICENSE)

[Vollständige Dokumentation →](https://didvc.github.io/astro-html-editor/)

Ein selbst gehosteter HTML-Editor mit Live-Vorschau. Links HTML einfügen oder schreiben, rechts das Ergebnis sehen. Dateien werden sofort im Dateisystem des Servers gespeichert – kein localStorage, kein manueller Download.

Gebaut mit Astro SSR und reinem JavaScript. Kein React, Vue oder Svelte.

![Screenshot](screenshot.png)

## Installation

```bash
# Ohne Installation ausführen
npx astro-html-editor

# Oder global installieren
npm install -g astro-html-editor
astro-html-editor
```

Öffnet sich unter `http://localhost:4321`. Dateien werden in `./data/` im aktuellen Verzeichnis gespeichert.

## Aus dem Quellcode

```bash
git clone https://github.com/yuis-ice/astro-html-editor
cd astro-html-editor
npm install
npm run build
npm start
```

Für die Entwicklung (Hot Reload):

```bash
npm run dev
```

## Funktionen

- Geteilter Editor (textarea) + Live-Vorschau (iframe srcdoc)
- Serverseitige Dateispeicherung über `node:fs` – übersteht Browserabstürze
- Sofortige Synchronisierung beim Einfügen, verzögerte Synchronisierung beim Tippen (800 ms)
- Atomare Schreibvorgänge (`tmp` → `fs.rename`) gegen halb gespeicherte Dateien
- Dateiverwaltung: Neu, Speichern unter, Umbenennen, Duplizieren, Laden, Kopieren, Herunterladen, Zurücksetzen, In neuem Fenster öffnen
- Dateien unter `data/YYYY-MM/` organisiert, mit URL-basiertem Routing (`/file/YYYY-MM/name`)
- Tab fügt 2 Leerzeichen ein; Strg+S speichert sofort
- Zeilennummern, synchron zur Scrollposition
- Dunkles Design (Tokyo-Night-Palette)

## Selbst hosten

Dateien werden relativ zum Arbeitsverzeichnis nach `./data/YYYY-MM/` geschrieben. Beim Betrieb in Docker ein persistentes Volume unter `./data/` einbinden.

Die `/api/*`-Endpunkte haben keine Authentifizierung. Den Server nicht ohne eigene Zugriffskontrolle (Reverse Proxy, Firewall-Regel usw.) öffentlich im Internet erreichbar machen.

Mit `PORT` lässt sich der Port ändern:

```bash
PORT=8080 astro-html-editor
```

## API-Endpunkte

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| `POST` | `/api/sync` | Datei auf die Festplatte schreiben |
| `GET` | `/api/files` | Gespeicherte Dateien mit Größe in Bytes auflisten |
| `POST` | `/api/new` | Datei mit Standardvorlage anlegen, Slug zurückgeben |
| `POST` | `/api/rename` | Datei auf dem Server umbenennen |
| `POST` | `/api/clone` | Datei duplizieren, neuen Slug zurückgeben |

## Mitwirken

Siehe [CONTRIBUTING.md](CONTRIBUTING.md).

## Lizenz

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