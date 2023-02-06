import { useEffect, useState } from "react";
import { ref } from "firebase/database";
import { useObjectVal } from "react-firebase-hooks/database";
import { auth, db } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { type ViewModel } from "@/models/ViewModel";

export const useGetView = (): ViewModel => {
  const [result, setResult] = useState<ViewModel>({
    view: "loading",
    displayName: undefined,
    confermato: undefined,
  });
  const [user, loading, _error] = useAuthState(auth);
  const [partecipazioni] = useObjectVal<{ confermato: boolean }>(
    ref(db, `partecipazioni/${user?.uid}`)
  );
  const [nome] = useObjectVal<{ nome: string }>(ref(db, `nomi/${user?.uid}`));

  useEffect(() => {
    if (loading || partecipazioni === undefined || nome === undefined)
      setResult({
        view: "loading",
        displayName: undefined,
        confermato: undefined,
      });
    else if (!user)
      setResult({
        view: "login",
        displayName: undefined,
        confermato: undefined,
      });
    else if (user && partecipazioni === null && nome)
      setResult({
        view: "select",
        displayName: nome.nome,
        confermato: null,
      });
    else if (user && partecipazioni && nome)
      setResult({
        view: "end",
        displayName: nome.nome,
        confermato: partecipazioni.confermato,
      });
  }, [loading, nome, partecipazioni, user]);

  return result;
};
