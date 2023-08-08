// https://nuxt.com/docs/api/configuration/nuxt-config

export default {
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
  modules: ["@ant-design-vue/nuxt", '@element-plus/nuxt',],  
  css: ["~/assets/main.css", 'element-plus/dist/index.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};
