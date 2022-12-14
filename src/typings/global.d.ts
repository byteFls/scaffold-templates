// * Menu
declare namespace Menu {
  interface MenuOptions {
    path: string;
    title: string;
    icon?: string;
    isLink?: string;
    close?: boolean;
    children?: MenuOptions[];
  }
}

declare type TabsOptions = Menu.MenuOptions & {};

// * Vite
declare type Recordable<T = any> = Record<string, T>;

declare interface ViteEnv {
  VITE_API_URL: string;
  VITE_BASE_API_DEVELOPMENT: string;
  VITE_BASE_API_PRODUCTION: string;
  VITE_PORT: number;
  VITE_OPEN: boolean;
  VITE_GLOB_APP_TITLE: string;
  VITE_DROP_CONSOLE: boolean;
  VITE_PROXY_URL: string;
  VITE_BUILD_GZIP: boolean;
  VITE_REPORT: boolean;
  VITE_STORAGE_PREFIX: string;
  VITE_PROJECT_NAME: string;
}

declare interface IRouteMeta {
  keepAlive: boolean;
  requiresAuth: boolean;
  title: string;
  key: string;
}
