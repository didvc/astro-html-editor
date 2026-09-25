[English](README.md) · [日本語](README-ja.md) · 繁體中文 · [简体中文](README-zh.md) · [Deutsch](README-de.md) · [Español](README-es.md)

# astro-html-editor

[![npm](https://img.shields.io/npm/v/astro-html-editor)](https://www.npmjs.com/package/astro-html-editor) [![npm downloads](https://img.shields.io/npm/dm/astro-html-editor)](https://www.npmjs.com/package/astro-html-editor) [![Docs](https://img.shields.io/badge/docs-didvc.github.io%2Fastro--html--editor-blue)](https://didvc.github.io/astro-html-editor/) [![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](LICENSE)

[完整文件 →](https://didvc.github.io/astro-html-editor/)

具備即時預覽的自架 HTML 編輯器。在左側貼上或撰寫 HTML，右側即可看到結果。檔案會立即儲存到伺服器的檔案系統——不使用 localStorage，也不需要手動下載。

以 Astro SSR 與純 JavaScript 打造，不使用 React、Vue 或 Svelte。

![螢幕截圖](screenshot.png)

## 安裝

```bash
# 不安裝直接執行
npx astro-html-editor

# 或全域安裝
npm install -g astro-html-editor
astro-html-editor
```

會在 `http://localhost:4321` 開啟。檔案會儲存在目前目錄的 `./data/` 中。

## 從原始碼建置

```bash
git clone https://github.com/didvc/astro-html-editor
cd astro-html-editor
npm install
npm run build
npm start
```

開發模式（熱重載）：

```bash
npm run dev
```

## 功能

- 分割窗格編輯器（textarea）＋即時預覽（iframe srcdoc）
- 透過 `node:fs` 在伺服器端保存檔案——瀏覽器當機也不會遺失
- 貼上時立即同步，輸入時以防抖方式同步（800ms）
- 原子寫入（`tmp` → `fs.rename`），避免只儲存到一半
- 檔案管理：新增、另存新檔、重新命名、複製檔案、載入、複製內容、下載、重設、在新視窗開啟
- 檔案整理在 `data/YYYY-MM/` 之下，並以 URL 路由（`/file/YYYY-MM/name`）
- Tab 鍵插入 2 個空格；Ctrl+S 立即儲存
- 與捲動位置同步的行號欄
- 深色主題（Tokyo Night 配色）

## 自架

檔案會寫入相對於工作目錄的 `./data/YYYY-MM/`。若在 Docker 中執行，請在 `./data/` 掛載持久化磁碟區。

`/api/*` 端點沒有任何驗證。在未加上自己的存取控制（反向代理、防火牆規則等）之前，請勿將伺服器公開到網際網路。

設定 `PORT` 以變更連接埠：

```bash
PORT=8080 astro-html-editor
```

## API 端點

| 方法 | 路徑 | 說明 |
|--------|------|-------------|
| `POST` | `/api/sync` | 將檔案寫入磁碟 |
| `GET` | `/api/files` | 列出已儲存的檔案及其位元組大小 |
| `POST` | `/api/new` | 以預設範本建立檔案，並回傳 slug |
| `POST` | `/api/rename` | 在伺服器上重新命名檔案 |
| `POST` | `/api/clone` | 複製檔案，並回傳新的 slug |

## 貢獻

請參閱 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 授權

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