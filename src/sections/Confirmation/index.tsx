import React, { useMemo, useState } from "react";
import { ConfirmationFlow } from "@sections/Confirmation/Flow";
import { PopUp } from "@/uikit/PopUp";
import { useGetView } from "@/hooks/useGetView";
import { ViewType } from "@/models/ViewModel";
import { Button } from "@/uikit/Button";

import "./style.scss";

export const Confirmation = (): JSX.Element => {
  const [showPopUp, setShowPopUp] = useState(false);
  const viewState = useGetView();

  const buttonLabel = useMemo(() => {
    if (viewState.view === ViewType.END && viewState.confermato)
      return "PRESENTI";
    if (viewState.view === ViewType.END && !viewState.confermato)
      return "NON PRESENTI";
    if (viewState.view === ViewType.LOGIN) return "LOGIN PER CONFERMARE";
    if (viewState.view === ViewType.SELECT) return "NON ANCORA SCELTO";
    return "LOADING";
  }, [viewState]);

  return (
    <>
      <Button
        className="Confirmation"
        onClick={() => {
          setShowPopUp(!showPopUp);
        }}
        loading={viewState.view === ViewType.LOADING}
      >
        {buttonLabel}
      </Button>
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
