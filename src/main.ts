import "uno.css";
// normalize.css https://necolas.github.io/normalize.css/
import "@unocss/reset/normalize.css";
import "nprogress/nprogress.css";
// 通用字体
import "vfonts/Lato.css";
// 等宽字体
import "vfonts/FiraCode.css";
import "@/styles/global.scss";

import App from "./App.vue";
// motion
import { MotionPlugin } from "@vueuse/motion";
import { createApp } from "vue";
// pinia store
import pinia from "@/stores";
import { router } from "@/router";

const app = createApp(App);

app.use(router).use(pinia).use(MotionPlugin).mount("#app");

// 便于调试
if (__DEV__) {
  window.app = app;
}
