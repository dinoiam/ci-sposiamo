export enum ViewType {
  LOADING = "loading",
  LOGIN = "login",
  END = "end",
  SELECT = "select",
}

export type ViewModel =
  | {
      view: "loading";
      displayName: undefined;
      confermato: undefined;
    }
  | {
      view: "login";
      displayName: undefined | null;
      confermato: undefined | null;
    }
  | {
      view: "end";
      displayName: string;
      confermato: boolean;
    }
  | {
      view: "select";
      displayName: string;
      confermato: null;
    };
