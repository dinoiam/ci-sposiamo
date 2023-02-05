import React from "react";
import { useState } from "react";
import { ConfirmationFlow } from "./ConfirmationFlow";
import { Login } from "./Login";
import { PopUp } from "./PopUp";
import { Auth, User } from "firebase/auth";

import "./style.scss";

type Props = {
  user?: User | null;
  confermato?: boolean;
  nome?: string;
};

export const Confirmation = ({ confermato, nome, user }: Props) => {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <div>
      <button className="Confirmation" onClick={() => setShowPopUp(!showPopUp)}>
        CONFERMA
      </button>
      {showPopUp && (
        <ConfirmationFlow
          confermato={confermato}
          nome={nome}
          user={user}
        ></ConfirmationFlow>
      )}
    </div>
  );
};
