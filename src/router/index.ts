import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/index.vue"),
      meta: {
        title: "标题",
      },
    },
  ],
});
