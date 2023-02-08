import React from "react";
import { Login } from "@sections/Confirmation/Login";
import { Result } from "@sections/Confirmation/Result";
import { Select } from "@sections/Confirmation/Select";
import { type ViewModel, ViewType } from "@/models/ViewModel";

interface Props {
  viewState: ViewModel;
}
export const ConfirmationFlow = ({ viewState }: Props): JSX.Element => {
  return (
    <>
      {viewState.view === ViewType.LOGIN && <Login />}
      {viewState.view === ViewType.SELECT && (
        <Select userInfo={viewState.userInfo} />
      )}
      {viewState.view === ViewType.END && (
        <Result userInfo={viewState.userInfo} />
      )}
    </>
  );
};
