import { defineConfig, loadEnv } from "vite";
import path from "path";

import AutoImport from "unplugin-auto-import/vite";
import Unocss from "unocss/vite";
import { autoImportOption } from "./src/configs/autoImport.conf";
import path from "path";
import { processExpression } from "@vue/compiler-core";
import { unocssOption } from "./src/configs/unocss.conf";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_PORT, VITE_API_URL } = loadEnv(mode, process.cwd());
  const isDev = mode === "development";

  return {
    plugins: [vue(), AutoImport(autoImportOption), Unocss(unocssOption)],
    server: {
      port: VITE_PORT,
      host: true, // host设置为true才可以使用network的形式，以ip访问项目
      open: true, // 自动打开浏览器
      cors: true, // 跨域设置允许
      strictPort: true, // 如果端口已占用直接退出
      // 接口代理
      proxy: {
        "/api": {
          // 本地前端代码的接口 代理到服务端口
          target: VITE_API_URL,
          changeOrigin: true, // 允许跨域
          rewrite: (path) => path.replace("/api/", "/"),
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      __DEV__: isDev,
    },
  };
});
