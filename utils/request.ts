import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { IHttpResp } from "~/services/common.interfaces";
/**
 * 后端错误码
 */
export enum EHttpStatusCode {
  SUCCESS = 200,
}

export enum EApiRespStatus {
  SUCCESS = 0,
}

// define axios request interceptor and set custom header
const requestInstance = axios.create({
  timeout: 1000 * 60,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * use axios define a request function to handle http request
 */
export const request = async <T>(
  url: string,
  data: any,
  options: AxiosRequestConfig = {}
): Promise<T> => {
  try {
    if (process.server) {
      // 再服务端则从环境变量读取网关地址
      options.baseURL = process.env.B_API;
      // 服务端代理会自动去掉/api前缀，前缀是用来给开发服务器代理用的
      url = url.replace("/api", "");
    }
    if (options.headers === undefined) {
      options.headers = {
        "Content-Type": "application/json",
      };
    }

    options.headers.Authorization = useCookie("bbs_token")?.value ?? "";
    const response = await requestInstance<any, AxiosResponse<IHttpResp<T>>>(
      url,
      {
        method: "POST",
        data,
        ...options,
      }
    );
    if (response.status === EHttpStatusCode.SUCCESS) {
      // 后端返回成功
      if (response.data.status === EApiRespStatus.SUCCESS) {
        return response.data.data;
      }
      // 非正常状态码
      showErrorMessage(response.data.info);
      throw new Error(response.data.info);
    } else {
      // 非正常状态码
      showErrorMessage("服务端异常");
      throw new Error("服务端异常");
    }
  } catch (error) {
    serverErrorLog("http error:", error);
    serverErrorLog("url:", url);
    serverErrorLog("options:", options);
    return Promise.reject(error);
  }
};
