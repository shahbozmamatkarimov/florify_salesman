// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "florify",
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
        },
      ],
    },
  },
  imports: {
    autoImport: true,
  },
  modules: ["@ant-design-vue/nuxt", "@pinia/nuxt"],
  css: ["~/assets/main.css"],
  plugins: [
    {
      src: "~/plugins/aos",
      mode: "client",
      ssr: false,
    },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      isDemo: process.env.IS_DEMO,
    },
  },
});
