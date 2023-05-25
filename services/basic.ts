import { IPaginationData } from "./common.interfaces";
import { defaultApiUrl } from "./url.list";

interface IGetDataRequest {
  page: number;
  fid: number;
}

interface IGetDataResp extends IPaginationData<{ title: string; id: string }> {}

export const defaultApi = {
  getData: (data: IGetDataRequest) =>
    request<IGetDataResp>(defaultApiUrl.示例数据, data),
};
