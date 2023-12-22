// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Poppins: [300, 400, 500],
          Montserrat: [700],
        },
      },
    ],
    "@pinia/nuxt"
  ]
});