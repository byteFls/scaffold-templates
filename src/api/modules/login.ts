import { GET_MENU_LIST_API, LOGIN_API } from "../url.conf";

import { Login } from "@/interfaces/login";
import { request } from "@/configs/axios.conf";

export const loginApi = {
  login: (params: Login.IReqLoginForm) =>
    request.post<Login.IRespLogin>(LOGIN_API, params),
  getMenuList: () => request.get<string[]>(GET_MENU_LIST_API),
  fakeMenuList: () => ["dashboard", "about"],
};
