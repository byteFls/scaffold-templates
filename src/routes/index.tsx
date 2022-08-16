import {
  RouteRecordRaw,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import { CommonLayout } from "@/components/layouts";
import { ERouteName } from "./constList";

export const routeForMenu: RouteRecordRaw[] = [
  {
    path: "/dashboard",
    component: () => import("@/views/dashboard/index.vue"),
    name: ERouteName.Dashboard,
    meta: {
      title: "仪表盘",
    },
  },
];

export const router = createRouter({
  history: __DEV__ ? createWebHistory() : createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: CommonLayout,
      name: ERouteName.Home,
      redirect: "/dashboard",
      children: [...routeForMenu],
    },
    {
      path: "/404",
      name: "not_found",
      component: () => import("@/views/404.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      meta: { isPublic: true },
      redirect: "/404",
    },
  ],
});

router.afterEach(async (to) => {
  console.log("change route:", to);
});
