import { defineConfig, loadEnv } from "vite";

import AutoImport from "unplugin-auto-import/vite";
import Unocss from "unocss/vite";
import { autoImportOption } from "./src/configs/autoImport.conf";
import path from "path";
import { processExpression } from "@vue/compiler-core";
import { unocssOption } from "./src/configs/unocss.conf";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_PORT } = loadEnv(mode, process.cwd());
  const isDev = mode === "development";

  return {
    plugins: [vue(), AutoImport(autoImportOption), Unocss(unocssOption)],
    server: {
      port: VITE_PORT,
      proxy: {
        
      }
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
