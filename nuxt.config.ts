export default defineNuxtConfig({
  // dayjs-nuxt
  modules: ['nuxt-swiper', '@unocss/nuxt', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  devtools: { enabled: true },
  imports: {
    dirs: ['stores'],
  },
  css: [
    '/assets/style/style.scss', // you should add main.scss somewhere in your app
    'uno.css',
    '@unocss/reset/tailwind-compat.css',
  ],
  app: {
    head: {
      viewport: 'width=500, initial-scale=1',
      title: 'Nuxt3 模板',
      meta: [
        { name: 'description', content: 'Nuxt3 模板' },
        { property: 'og:title', content: 'Nuxt3 模板' },
        // { "property": "og:url", "content": "https://wowcho.site/" },
        { property: 'og:description', content: 'Nuxt3 模板' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700;900&display=swap',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      BASE_API_URL: process.env.BASE_API_URL,
    },
  },
})
