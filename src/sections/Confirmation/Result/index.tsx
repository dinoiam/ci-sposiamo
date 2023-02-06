import { Button } from "@/uikit/Button";
import React, { useState } from "react";
import { Select } from "../Select";
import styles from "./style.module.scss";

interface Props {
  displayName: string;
  confermato: boolean;
  // goToSelect: () => void;
}
export const Result = ({
  // goToSelect,
  displayName,
  confermato,
}: Props): JSX.Element => {
  const [showChange, setShowChange] = useState(false);

  return (
    <div className={styles.result}>
      {showChange ? (
        <Select
          callback={() => {
            setShowChange(false);
          }}
          displayName={displayName}
        />
      ) : (
        <>
          <h2 className={styles.name}>Ciao {displayName}!</h2>
          {confermato ? (
            <div className={styles.confirmed}>
              <span>Avete correttamente confermato la vostra presenza</span>
              <span>Save the date 01.09.2023</span>
            </div>
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
        {showChange ? "Annulla modifica" : "Avete cambiato idea?"}
      </Button>
    </div>
  );
};
