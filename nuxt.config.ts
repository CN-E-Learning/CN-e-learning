// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2026-01-29',
  
  // SSG 模式
  ssr: true,

  modules: [
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap'
  ],

  // 颜色模式配置
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
    storage: 'sessionStorage',
    storageKey: 'nuxt-color-mode'
  },

  // 站点地图配置
  site: {
    url: 'https://cnel.smart-teach.cn/',
    name: 'CNEL'
  },

  // CSS 样式
  css: [
    '~/assets/css/main.css'
  ],

  // 应用配置
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0156db' }
      ],
      script: [
        {
          src: 'https://umami.peter267.dpdns.org/script.js',
          defer: true,
          'data-website-id': 'ac648300-d79f-46a2-bc8e-a818cf6e2af2'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
