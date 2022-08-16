import NProgress from "nprogress";
import { getItem } from "@/utils/localstorage";

NProgress.configure({
  showSpinner: false,
});

export const axiosInstance = axios.create({
  // 设置baseUr地址,如果通过proxy跨域可直接填写base地址
  baseURL: "/api",
  // 定义统一的请求头部
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
  // 配置请求超时时间
  timeout: 10000,
  // 如果用的JSONP，可以配置此参数带上cookie凭证，如果是代理和CORS不用设置
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // 自定义header，可添加项目token
    config.headers.token = `bear ${getItem("token")}`;
    NProgress.start();
    return config;
  },
  (err) => {
    // 全局告警
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    NProgress.done();
    return res;
  },
  (err) => {
    // 全局告警
    return Promise.reject(err);
  }
);

export const request = {
  get: (url: string, config = {}) => axiosInstance.get(url, config),
};
