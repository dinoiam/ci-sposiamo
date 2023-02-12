import React, { useState } from "react";
import { type UserInfoModel } from "@/models/FirebaseModel";
import { Button } from "@/uikit/Button";
import { Confirmed } from "../Confirmed";
import { NotConfirmed } from "../NotConfirmed";
import { Select } from "../Select";
import styles from "./style.module.scss";

interface Props {
  userInfo: UserInfoModel;
}
export const Result = ({ userInfo }: Props): JSX.Element => {
  const [showChange, setShowChange] = useState(false);

  return (
    <div className={styles.result}>
      {showChange ? (
        <Select
          callback={() => {
            setShowChange(false);
          }}
          userInfo={userInfo}
        />
      ) : (
        <>
          <h2 className={styles.name}>Ciao {userInfo.name}!</h2>
          {userInfo.confermato ? (
            <Confirmed userInfo={userInfo} />
          ) : (
            <NotConfirmed userInfo={userInfo} />
          )}
        </>
      )}
      <Button
        onClick={() => {
          setShowChange(!showChange);
        }}
      >
        {showChange ? "Annulla modifica" : "Cambiato idea?"}
      </Button>
    </div>
  );
};
