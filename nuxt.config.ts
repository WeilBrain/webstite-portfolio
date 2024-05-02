// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  // devServer: {
  //   port: 3000, // default: 3000
  //   host: '0.0.0.0' // меняем на 0.0.0.0 если нужно открыть с мобилы
  // },
  modules: [
    '@nuxtjs/color-mode',
    'nuxt-swiper',
    ['@nuxtjs/google-fonts', {
    families: {
      Ubuntu: {
        wght: [500, 700],
        ital: [300]
      }
    }
  }],
    "@nuxt/image",
  ],
  ssr: false
})