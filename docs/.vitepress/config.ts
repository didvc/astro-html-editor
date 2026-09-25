import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'astro-html-editor',
  description: 'Self-hosted HTML editor with live preview. Astro SSR + plain JavaScript, server-side file persistence.',
  base: '/astro-html-editor/',

  head: [
    ['link', { rel: 'icon', href: '/astro-html-editor/favicon.ico' }],
  ],

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Architecture', link: '/architecture/overview' },
      { text: 'Recipes', link: '/recipes/use-cases' },
      { text: 'Reference', link: '/reference/comparison' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Usage', link: '/guide/usage' },
          { text: 'Self-Hosting', link: '/guide/self-hosting' },
        ],
      },
      {
        text: 'Architecture',
        items: [
          { text: 'Overview', link: '/architecture/overview' },
          { text: 'Persistence', link: '/architecture/persistence' },
          { text: 'API Endpoints', link: '/architecture/api-endpoints' },
        ],
      },
      {
        text: 'Recipes',
        items: [
          { text: 'Use Cases', link: '/recipes/use-cases' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'Comparison', link: '/reference/comparison' },
          { text: 'FAQ', link: '/reference/faq' },
        ],
      },
    ],

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/didvc/astro-html-editor/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/didvc/astro-html-editor' },
    ],

    footer: {
      message: 'Released under the Apache 2.0 License.',
      copyright: 'Copyright © 2026 didvc',
    },
  },
})
