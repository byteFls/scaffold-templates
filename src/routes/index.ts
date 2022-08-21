import {
  RouteRecordRaw,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import { ERouteName } from "./constList";
import { HOME_URL } from "@/configs/routes.conf";
import { useAuthStore } from "@/stores/modules/authStore";
import { useGlobalStore } from "@/stores";

// 导入所有路由
const metaRoutes = import.meta.glob("./modules/*.ts", {
  eager: true,
});
console.log("meta routes is:", metaRoutes, Object.keys(metaRoutes));

export const routeList: RouteRecordRaw[] = [];
Object.keys(metaRoutes).forEach((item) => {
  Object.keys(metaRoutes[item]).forEach((key: any) => {
    routeList.push(...metaRoutes[item][key]);
  });
});
console.log("route list:", routeList);

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: { name: ERouteName.Login },
  },
  {
    path: `/${ERouteName.Login}`,
    name: ERouteName.Login,
    component: () => import("@/views/login/index.vue"),
    meta: {
      requiresAuth: false,
      title: "登录页",
      key: ERouteName.Login,
    },
  },
  {
    path: "/demo",
    name: "demo",
    component: () => import("@/views/dashboard/index.vue"),
    meta: {
      requiresAuth: false,
      title: "demo",
      key: "demo",
    },
  },
  ...routeList,
  {
    path: "/404",
    name: "not_found",
    component: () => import("@/views/404.vue"),
  },
  {
    // 找不到路由重定向到404页面
    path: "/:pathMatch(.*)",
    redirect: { name: "404" },
  },
];

// 默认导出的路由对象
const router = createRouter({
  history: __DEV__ ? createWebHistory() : createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // 判断当前路由是否有访问权
  if (!to.matched.some((record) => record.meta.requiresAuth)) return next();
  const { token } = useGlobalStore();
  // 无token则去登录
  if (!token) {
    next({
      path: "/login",
    });
    return;
  }
  // 认证的路由列表将会在登录之后初始化
  const { authRouteList } = useAuthStore();
  const staticRoutes = [HOME_URL, "/403", "/dashboard"];
  const routeList = authRouteList.value.concat(staticRoutes);
  // 如果访问的地址没有在路由表中，则重定向到403页面
  if (routeList.indexOf(to.path) === -1) {
    next({
      path: "/403",
    });
    return;
  }
  return next();
});

export default router;
