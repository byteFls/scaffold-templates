import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  devProxy: {
    "/api": {
      // target: process.env.B_API,
      target: "http://192.168.1.17:9080/amz123",
      changeOrigin: true,
      // @ts-ignore
      rewrite: (path: string) => path.replace("/api", ""),
      timeout: 1000 * 60,
      proxyTimeout: 1000 * 60,
    },
  },
});
