export default defineNuxtConfig({
  // dayjs-nuxt
  modules: ['nuxt-swiper','@pinia/nuxt','@unocss/nuxt',],
  swiper: {
    // prefix: 'Swiper',
    // styleLang: 'css',
    modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  devtools: { enabled: true },
  imports: {
    "dirs": ['stores']
  },
  css: [
    "/assets/style/style.scss", // you should add main.scss somewhere in your app
    'uno.css',
    '@unocss/reset/tailwind-compat.css',
  ],
  app: {
    "head": {
      "viewport": "width=500, initial-scale=1",
      "title": "WowCho 渦潮募資網站",
      "meta": [
        { "name": "description", "content": "WowCho 渦潮募資網站" },
        { "property": "og:title", "content": "WowCho 渦潮募資網站" },
        { "property": "og:url", "content": "https://wowcho.site/" },
        { "property": "og:description", "content": "WowCho 渦潮募資網站" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700;900&display=swap",
        },
      ],
    }
  },
  runtimeConfig: {
    public: {
      BASE_API_URL: process.env.BASE_API_URL
    }
  }
})
