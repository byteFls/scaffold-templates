export namespace Login {
  export interface IReqLoginForm {
    username: string;
    password: string;
  }
  export interface IRespLogin {
    token: string;
  }
  export interface ResAuthRouteList {
    [propName: string]: any;
  }
}
