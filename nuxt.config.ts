// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/supabase",
  ],
  colorMode: {
    classSuffix: "",
  },
  supabase: {
    redirect: false,
    key: process.env.SUPABASE_KEY,
  },
});
