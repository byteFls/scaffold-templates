import "uno.css";
import "nprogress/nprogress.css";
// 通用字体
import "vfonts/Lato.css";
// 等宽字体
import "vfonts/FiraCode.css";

import App from "./App.vue";
import { createApp } from "vue";
import { router } from "@/routes";

const app = createApp(App);

app.use(router).mount("#app");

// 便于调试
if (__DEV__) {
  window.app = app;
}
