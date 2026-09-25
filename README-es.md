[English](README.md) · [日本語](README-ja.md) · [繁體中文](README-zh-TW.md) · [简体中文](README-zh.md) · [Deutsch](README-de.md) · Español

# astro-html-editor

[![npm](https://img.shields.io/npm/v/astro-html-editor)](https://www.npmjs.com/package/astro-html-editor) [![npm downloads](https://img.shields.io/npm/dm/astro-html-editor)](https://www.npmjs.com/package/astro-html-editor) [![Docs](https://img.shields.io/badge/docs-didvc.github.io%2Fastro--html--editor-blue)](https://didvc.github.io/astro-html-editor/) [![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](LICENSE)

[Documentación completa →](https://didvc.github.io/astro-html-editor/)

Un editor HTML autoalojado con vista previa en vivo. Pega o escribe HTML a la izquierda y ve el resultado a la derecha. Los archivos se guardan de inmediato en el sistema de archivos del servidor: sin localStorage y sin pasos de descarga manual.

Hecho con Astro SSR y JavaScript puro. Sin React, Vue ni Svelte.

![captura de pantalla](screenshot.png)

## Instalación

```bash
# Ejecutar sin instalar
npx astro-html-editor

# O instalar globalmente
npm install -g astro-html-editor
astro-html-editor
```

Se abre en `http://localhost:4321`. Los archivos se guardan en `./data/` dentro del directorio actual.

## Desde el código fuente

```bash
git clone https://github.com/didvc/astro-html-editor
cd astro-html-editor
npm install
npm run build
npm start
```

Para desarrollo (recarga en caliente):

```bash
npm run dev
```

## Características

- Editor de paneles divididos (textarea) + vista previa en vivo (iframe srcdoc)
- Persistencia de archivos en el servidor mediante `node:fs`: sobrevive a los cierres inesperados del navegador
- Sincronización inmediata al pegar y con retardo al escribir (800 ms)
- Escrituras atómicas (`tmp` → `fs.rename`) para evitar guardados a medias
- Gestión de archivos: Nuevo, Guardar como, Renombrar, Duplicar, Cargar, Copiar, Descargar, Restablecer, Abrir en una ventana nueva
- Archivos organizados en `data/YYYY-MM/` con enrutamiento por URL (`/file/YYYY-MM/name`)
- La tecla Tab inserta 2 espacios; Ctrl+S guarda al instante
- Números de línea sincronizados con la posición de desplazamiento
- Tema oscuro (paleta Tokyo Night)

## Autoalojamiento

Los archivos se escriben en `./data/YYYY-MM/`, relativo al directorio de trabajo. Si lo ejecutas en Docker, monta un volumen persistente en `./data/`.

Los endpoints `/api/*` no tienen autenticación. No expongas el servidor a Internet sin añadir tu propio control de acceso (proxy inverso, regla de firewall, etc.).

Define `PORT` para cambiar el puerto:

```bash
PORT=8080 astro-html-editor
```

## Endpoints de la API

| Método | Ruta | Descripción |
|--------|------|-------------|
| `POST` | `/api/sync` | Escribe el archivo en disco |
| `GET` | `/api/files` | Lista los archivos guardados con su tamaño en bytes |
| `POST` | `/api/new` | Crea un archivo con la plantilla predeterminada y devuelve el slug |
| `POST` | `/api/rename` | Renombra el archivo en el servidor |
| `POST` | `/api/clone` | Duplica el archivo y devuelve el nuevo slug |

## Contribuir

Consulta [CONTRIBUTING.md](CONTRIBUTING.md).

## Licencia

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