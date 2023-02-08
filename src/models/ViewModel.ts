import { type UserInfoModel } from "./FirebaseModel";

export enum ViewType {
  LOADING = "loading",
  LOGIN = "login",
  END = "end",
  SELECT = "select",
}

export type ViewModel =
  | {
      view: "loading";
    }
  | {
      view: "login";
    }
  | {
      view: "end";
      userInfo: UserInfoModel;
    }
  | {
      view: "select";
      userInfo: UserInfoModel;
    };
