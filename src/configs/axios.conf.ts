import NProgress from "nprogress";
import { ResultData } from "@/interfaces/http";
import { getItem } from "@/utils/localStorage";
import { useMessage } from "naive-ui";

const message = useMessage();

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
  timeout: 1000 * 10,
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
    message.error("request failed!" + err);
    return Promise.reject(err);
  }
);

export const request = {
  get: <T>(url: string, params?: object, config = {}): Promise<ResultData<T>> =>
    axiosInstance.get(url, { params, ...config }),
  post: <T>(
    url: string,
    params?: object,
    config = {}
  ): Promise<ResultData<T>> => axiosInstance.post(url, params, config),
  put: <T>(url: string, params?: object, config = {}): Promise<ResultData<T>> =>
    axiosInstance.put(url, params, config),
  delete: <T>(
    url: string,
    params?: object,
    config = {}
  ): Promise<ResultData<T>> => axiosInstance.delete(url, { params, ...config }),
};
