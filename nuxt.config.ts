export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  modules: ["@pinia/nuxt", "@nuxt/image"],

  components: false,

  // импортируем все use-функции сторов глобально
  imports: {
    dirs: ["stores/*/index.ts"],
  },

  // TODO: унести в модуль
  css: ["~/styles/app.scss"],

  image: {
    quality: 80,
    densities: [1, 2],
  },

  app: {
    head: {
      title: "Gold Apple",
      titleTemplate: "%s",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Noto+Sans+Linear+B&display=swap",
        },
      ],
    },
  },

  routeRules: {
    "/_nuxt/**": { headers: { "cache-control": "max-age=31536000" } },
    "/advantages/**": { headers: { "cache-control": "max-age=31536000" } },
    "/hero/**": { headers: { "cache-control": "max-age=31536000" } },
    "/partnership/**": { headers: { "cache-control": "max-age=31536000" } },
    "/scheme/**": { headers: { "cache-control": "max-age=31536000" } },
  },

  build: {
    transpile: [
      ({ isDev }) => !isDev && "scroll-lock",
      ({ isDev }) => !isDev && "bem-cn-lite",
    ],
  },
});
