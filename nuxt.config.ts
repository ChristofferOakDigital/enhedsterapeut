import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['@/assets/styles/style.scss'],
    ssr: false,
    // components: {
    //   global: true,
    //   dirs: ["~/components"],
    // },
});
