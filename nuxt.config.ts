// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  dev: process.env.NODE_ENV !== 'production',
  debug: process.env.NODE_ENV !== 'production',
  typescript: {
    typeCheck: true,
  },
  modules: ['@nuxtjs/tailwindcss'],
});
