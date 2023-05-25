// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@amz123/amz123-default-layout"],
  build: {
    transpile:
      process.env.NODE_ENV === "production" ? ["vue-toastification"] : [],
  },
  css: [
    "~/assets/css/main.css",
    "vue-toastification/dist/index.css",
    "~/assets/css/common.scss",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
