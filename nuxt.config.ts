// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", '@pinia/nuxt',],
  runtimeConfig: {
    public: {
      GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
      SPREAD_SHEET_ID: process.env.SPREAD_SHEET_ID,
      GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.SPREAD_SHEET_ID,
      GOOGLE_PRIVATE_KEY: process.env.SPREAD_SHEET_ID,
    }
  }
})