import { JsonValue } from "type-fest";

// http 请求的返回值
export interface IHttpResp<T> {
  status: number;
  data: T;
  info: string;
}

// 分页数据
export interface IPaginationData<T> {
  rows: T[];
  total: number;
}

// 类 JSON upload 的值
export interface IJsonUploadValue extends Record<string, JsonValue> {}
