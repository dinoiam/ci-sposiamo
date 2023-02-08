import { type UserInfoModel } from "@/models/FirebaseModel";
import { Button } from "@/uikit/Button";
import React, { useState } from "react";
import { Confirmed } from "../Confirmed";
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
            <div className={styles["not-confirmed"]}>
              Purtroppo non sarete dei nostri :(
            </div>
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
