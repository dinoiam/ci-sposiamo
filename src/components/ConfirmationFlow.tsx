import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase";
import { PopUp } from "./PopUp";
import { Login } from "./Login";
import { Scelta } from "./Scelta";
import { Result } from "./Result";
import { useObjectVal } from "react-firebase-hooks/database";
import { ref } from "firebase/database";
import { Auth, User } from "firebase/auth";
import { useState } from "react";

type Props = {
  user?: User | null;
  confermato?: boolean;
  nome?: string;
};

export const ConfirmationFlow = ({ confermato, nome, user }: Props) => {
  const [cambioIdea, setCambioIdea] = useState(false);
  //   const [partecipazioni] = useObjectVal<{ confermato: boolean }>(
  //     ref(db, `partecipazioni/${user?.uid}`)
  //   );
  //   const [nome] = useObjectVal<{ nome: string }>(ref(db, `nomi/${user?.uid}`));

  //   let test;
  //   if (user) {
  //     test = Login;
  //   }

  let view = <></>;
  if (!user) view = <Login></Login>;
  if (user && (confermato === null || confermato === undefined))
    view = <Scelta userId={user.uid}></Scelta>;
  if (user && nome)
    view = (
      <Result
        scelta={!!confermato}
        nome={nome}
        cambioIdea={() => {
          setCambioIdea(true);
        }}
      ></Result>
    );
  if (user && cambioIdea)
    view = (
      <Scelta
        userId={user.uid}
        callback={() => {
          setCambioIdea(false);
        }}
      ></Scelta>
    );
  //   {user && !partecipazioni && <Scelta userId={user.uid}></Scelta>}
  //   {user && partecipazioni && nome && (
  //     <Result scelta={partecipazioni.confermato} nome={nome}></Result>
  //   )}

  return <PopUp>{view}</PopUp>;
};
