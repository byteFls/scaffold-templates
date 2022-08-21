import { ERouteName } from "../constList";
import { RouteRecordRaw } from "vue-router";

const CommonLayout = () => import("@/components/layouts/CommonLayout.vue");

const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: `/${ERouteName.Dashboard}`,
    component: CommonLayout,
    redirect: `/${ERouteName.Dashboard}/index`,
    meta: {
      title: "Dashboard",
    },
    children: [
      {
        path: "/dashboard/index",
        name: ERouteName.Dashboard,
        component: () => import("@/views/dashboard/index.vue"),
        meta: {
          keepAlive: true,
          requiresAuth: false,
          title: "管理面板",
          key: ERouteName.Dashboard,
        } as IRouteMeta,
      },
    ],
  },
];

export default dashboardRoutes;
