// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  dev: process.env.NODE_ENV !== 'production',
  debug: process.env.NODE_ENV !== 'production',
  typescript: {
    typeCheck: true,
  },
  vite: {
    plugins: [svgLoader()],
  },
  modules: ['nuxt-headlessui'],
});
