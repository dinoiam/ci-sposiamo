import React from "react";
import { auth, db } from "@/firebase";
import { useGetView } from "@/hooks/useGetView";
import { ref } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { useObjectVal } from "react-firebase-hooks/database";
import { Login } from "@sections/Confirmation/Login";
import { Result } from "@sections/Confirmation/Result";
import { Select } from "@sections/Confirmation/Select";

export const ConfirmationFlow = (): JSX.Element => {
  const { view } = useGetView();
  const [user] = useAuthState(auth);
  const [partecipazione] = useObjectVal<{ confermato: boolean }>(
    ref(db, `partecipazioni/${user?.uid}`)
  );
  const [nome] = useObjectVal<{ nome: string }>(ref(db, `nomi/${user?.uid}`));

  return (
    <>
      {view === "login" && <Login />}
      {view === "select" && <Select displayName={nome?.nome} />}
      {view === "end" && (
        <Result nome={nome?.nome} confermato={partecipazione?.confermato} />
      )}
    </>
  );
};
