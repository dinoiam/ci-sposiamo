import React, { useState } from "react";
import { ConfirmationFlow } from "@sections/Confirmation/Flow";
import { PopUp } from "@/uikit/PopUp";
import { useGetView } from "@/hooks/useGetView";
import { ViewType } from "@/models/ViewModel";
import { Account } from "./Account";

export const Confirmation = (): JSX.Element => {
  const [showPopUp, setShowPopUp] = useState(false);
  const viewState = useGetView();

  return (
    <>
      <Account
        onClick={() => {
          setShowPopUp(!showPopUp);
        }}
        loading={viewState.view === ViewType.LOADING}
      />
      {showPopUp && (
        <PopUp
          onClose={() => {
            setShowPopUp(false);
          }}
        >
          <ConfirmationFlow viewState={viewState} />
        </PopUp>
      )}
    </>
  );
};
