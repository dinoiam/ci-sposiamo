import React, { useState } from "react";
import { ConfirmationFlow } from "@sections/Confirmation/Flow";

import "./style.scss";

import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { PopUp } from "@/uikit/PopUp";

export const Confirmation = (): JSX.Element => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [_user, loading, _error] = useAuthState(auth);

  return (
    <>
      <button
        className="Confirmation"
        onClick={() => {
          setShowPopUp(!showPopUp);
        }}
      >
        {loading ? "CARICAMENTO" : "CONFERMA"}
      </button>
      {showPopUp && (
        <PopUp
          onClose={() => {
            setShowPopUp(false);
          }}
        >
          <ConfirmationFlow />
        </PopUp>
      )}
    </>
  );
};
