import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "ROC Games",
      description: "rocgames official website portal",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "ROC Games",
      description: "rocgames official website portal",
    },
  },

  theme,
  
  shouldPrefetch: true,

  // alias: {
  //   "@theme-hope/components/HomePage": path.resolve(
  //     __dirname,
  //     "./components/HomePage.vue"
  //   ),
  // },
});
