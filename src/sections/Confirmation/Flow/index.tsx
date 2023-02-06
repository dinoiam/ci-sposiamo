import React from "react";
import { Login } from "@sections/Confirmation/Login";
import { Result } from "@sections/Confirmation/Result";
import { Select } from "@sections/Confirmation/Select";
import { type ViewModel, ViewType } from "@/models/ViewModel";

interface Props {
  viewState: ViewModel;
}
export const ConfirmationFlow = ({ viewState }: Props): JSX.Element => {
  // const [user] = useAuthState(auth);
  // const [partecipazione] = useObjectVal<{ confermato: boolean }>(
  //   ref(db, `partecipazioni/${user?.uid}`)
  // );
  // const [nome] = useObjectVal<{ nome: string }>(ref(db, `nomi/${user?.uid}`));

  return (
    <>
      {viewState.view === ViewType.LOGIN && <Login />}
      {viewState.view === ViewType.SELECT && (
        <Select displayName={viewState.displayName} />
      )}
      {viewState.view === ViewType.END && (
        <Result
          displayName={viewState.displayName}
          confermato={viewState.confermato}
        />
      )}
    </>
  );
};
