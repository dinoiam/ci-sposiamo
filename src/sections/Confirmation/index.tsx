import React, { useMemo, useState } from "react";
import { ConfirmationFlow } from "@sections/Confirmation/Flow";
// import { ReactComponent as Face } from "@svg/face.svg";
import face from "@images/face.png";

import { PopUp } from "@/uikit/PopUp";
import { useGetView } from "@/hooks/useGetView";
import { ViewType } from "@/models/ViewModel";

import "./style.scss";
import { ButtonVariant } from "@/uikit/ButtonVariant";

export const Confirmation = (): JSX.Element => {
  const [showPopUp, setShowPopUp] = useState(false);
  const viewState = useGetView();

  const _buttonLabel = useMemo(() => {
    if (viewState.view === ViewType.END && viewState.userInfo.confermato)
      return "PRESENTI";
    if (viewState.view === ViewType.END && !viewState.userInfo.confermato)
      return "NON PRESENTI";
    if (viewState.view === ViewType.LOGIN) return "LOGIN PER CONFERMARE";
    if (viewState.view === ViewType.SELECT) return "NON ANCORA SCELTO";
    return "LOADING";
  }, [viewState]);

  return (
    <>
      <ButtonVariant
        className="confirmation"
        onClick={() => {
          setShowPopUp(!showPopUp);
        }}
        loading={viewState.view === ViewType.LOADING}
      >
        <img src={face} />
      </ButtonVariant>
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
