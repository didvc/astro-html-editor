[English](README.md) · 日本語 · [繁體中文](README-zh-TW.md) · [简体中文](README-zh.md) · [Deutsch](README-de.md) · [Español](README-es.md)

# astro-html-editor

[![npm](https://img.shields.io/npm/v/astro-html-editor)](https://www.npmjs.com/package/astro-html-editor) [![npm downloads](https://img.shields.io/npm/dm/astro-html-editor)](https://www.npmjs.com/package/astro-html-editor) [![Docs](https://img.shields.io/badge/docs-didvc.github.io%2Fastro--html--editor-blue)](https://didvc.github.io/astro-html-editor/) [![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](LICENSE)

[ドキュメント全文 →](https://didvc.github.io/astro-html-editor/)

ライブプレビュー付きのセルフホスト型HTMLエディタです。左側にHTMLを貼り付けるか書くと、右側に結果が表示されます。ファイルはすぐにサーバーのファイルシステムへ保存されます。localStorageも、手動でダウンロードする手順もありません。

Astro SSRとプレーンなJavaScriptで作られています。React、Vue、Svelteは使っていません。

![スクリーンショット](screenshot.png)

## インストール

```bash
# インストールせずに実行
npx astro-html-editor

# またはグローバルにインストール
npm install -g astro-html-editor
astro-html-editor
```

`http://localhost:4321` で開きます。ファイルはカレントディレクトリの `./data/` に保存されます。

## ソースから

```bash
git clone https://github.com/didvc/astro-html-editor
cd astro-html-editor
npm install
npm run build
npm start
```

開発時（ホットリロード）:

```bash
npm run dev
```

## 機能

- 分割ペインのエディタ（textarea）とライブプレビュー（iframe srcdoc）
- `node:fs` によるサーバー側のファイル永続化。ブラウザがクラッシュしても失われません
- 貼り付け時は即時同期、キー入力時はデバウンスして同期（800ms）
- 途中までの保存を防ぐアトミックな書き込み（`tmp` → `fs.rename`）
- ファイル管理：新規作成、名前を付けて保存、名前の変更、複製、読み込み、コピー、ダウンロード、リセット、新しいウィンドウで開く
- ファイルは `data/YYYY-MM/` 以下に整理され、URLでルーティング（`/file/YYYY-MM/name`）
- Tabキーで半角スペース2つを挿入、Ctrl+Sで即時保存
- スクロール位置に同期する行番号
- ダークテーマ（Tokyo Nightパレット）

## セルフホスティング

ファイルは作業ディレクトリからの相対パス `./data/YYYY-MM/` に書き込まれます。Dockerで動かす場合は、`./data/` に永続ボリュームをマウントしてください。

`/api/*` エンドポイントには認証がありません。リバースプロキシやファイアウォールのルールなど、独自のアクセス制御を追加せずにサーバーをインターネットへ公開しないでください。

ポートを変更するには `PORT` を設定します:

```bash
PORT=8080 astro-html-editor
```

## APIエンドポイント

| メソッド | パス | 説明 |
|--------|------|-------------|
| `POST` | `/api/sync` | ファイルをディスクに書き込む |
| `GET` | `/api/files` | 保存済みファイルをバイト数付きで一覧表示 |
| `POST` | `/api/new` | デフォルトのテンプレートでファイルを作成し、slugを返す |
| `POST` | `/api/rename` | サーバー上のファイル名を変更 |
| `POST` | `/api/clone` | ファイルを複製し、新しいslugを返す |

## コントリビュート

[CONTRIBUTING.md](CONTRIBUTING.md) を参照してください。

## ライセンス

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