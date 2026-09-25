[English](README.md) · [日本語](README-ja.md) · [繁體中文](README-zh-TW.md) · 简体中文 · [Deutsch](README-de.md) · [Español](README-es.md)

# astro-html-editor

[![npm](https://img.shields.io/npm/v/astro-html-editor)](https://www.npmjs.com/package/astro-html-editor) [![npm downloads](https://img.shields.io/npm/dm/astro-html-editor)](https://www.npmjs.com/package/astro-html-editor) [![Docs](https://img.shields.io/badge/docs-didvc.github.io%2Fastro--html--editor-blue)](https://didvc.github.io/astro-html-editor/) [![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](LICENSE)

[完整文档 →](https://didvc.github.io/astro-html-editor/)

带实时预览的自托管 HTML 编辑器。在左侧粘贴或编写 HTML，右侧即可看到结果。文件会立即保存到服务器的文件系统——不使用 localStorage，也无需手动下载。

基于 Astro SSR 和纯 JavaScript 构建，不使用 React、Vue 或 Svelte。

![截图](screenshot.png)

## 安装

```bash
# 无需安装直接运行
npx astro-html-editor

# 或全局安装
npm install -g astro-html-editor
astro-html-editor
```

会在 `http://localhost:4321` 打开。文件保存在当前目录的 `./data/` 中。

## 从源码构建

```bash
git clone https://github.com/didvc/astro-html-editor
cd astro-html-editor
npm install
npm run build
npm start
```

开发模式（热重载）：

```bash
npm run dev
```

## 功能

- 分栏编辑器（textarea）+ 实时预览（iframe srcdoc）
- 通过 `node:fs` 在服务器端持久化文件——浏览器崩溃也不会丢失
- 粘贴时立即同步，输入时防抖同步（800ms）
- 原子写入（`tmp` → `fs.rename`），避免只保存了一半
- 文件管理：新建、另存为、重命名、克隆、加载、复制、下载、重置、在新窗口中打开
- 文件按 `data/YYYY-MM/` 组织，并按 URL 路由（`/file/YYYY-MM/name`）
- Tab 键插入 2 个空格；Ctrl+S 立即保存
- 与滚动位置同步的行号栏
- 深色主题（Tokyo Night 配色）

## 自托管

文件会写入相对于工作目录的 `./data/YYYY-MM/`。如果在 Docker 中运行，请在 `./data/` 挂载持久化卷。

`/api/*` 端点没有任何身份验证。在没有添加自己的访问控制（反向代理、防火墙规则等）之前，请勿将服务器暴露到公网。

设置 `PORT` 以更改端口：

```bash
PORT=8080 astro-html-editor
```

## API 端点

| 方法 | 路径 | 说明 |
|--------|------|-------------|
| `POST` | `/api/sync` | 将文件写入磁盘 |
| `GET` | `/api/files` | 列出已保存的文件及其字节大小 |
| `POST` | `/api/new` | 用默认模板创建文件，并返回 slug |
| `POST` | `/api/rename` | 在服务器上重命名文件 |
| `POST` | `/api/clone` | 复制文件，并返回新的 slug |

## 贡献

请参阅 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 许可证

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